'use client'
import { Project, Token } from '@/utils/projects'
import { GetAbi } from '@/utils/web3'
import { useEffect, useState } from 'react'
import { formatEther, formatUnits, parseEther, parseUnits } from 'viem'
import {
  useAccount,
  useBalance,
  useReadContract,
  useSimulateContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { TokenQuantityInput } from './TokenQuantityInput'
import { useNotifications } from '@/context/Notifications'
import { useRouter } from 'next/navigation'

// given token, it returns CHECK equivalent to the tokens.
// Some projects such as ARA uses USD as the check calculation.
function getCheckRatio(
  project: Project,
  chainId: number,
  usdBalance?: bigint,
  tokenBalance?: bigint,
  tokenDecimals?: number
): number {
  if (!chainId || !project || !project.smartcontracts.Minter || !project.smartcontracts.Minter[chainId]) {
    // Temporarily 1 Token == 1 CHECK.
    // Need to make it universal probalby through dexscreener.com/api or similar stuff.
    // See: https://trello.com/c/YJPG30z2
    return tokenBalance == undefined ? 0.0 : parseFloat(formatUnits(tokenBalance, tokenDecimals!))
  }

  // Hardcoding the ARA ratio: 1 CHECK = 0.24 USD
  return usdBalance === undefined ? 0.0 : parseFloat(formatEther(usdBalance)) / 0.24
}

export default function TreasuryCollateral({
  project,
  token,
  checkBalance: contributorCheckBalance,
}: {
  project?: Project
  token: Token
  checkBalance: bigint | undefined
}) {
  const [amount, setAmount] = useState('0.01')
  const { address, chainId, chain } = useAccount()
  const [checkBalance, setCheckBalance] = useState<number>(0.0)

  const { Add } = useNotifications()
  const router = useRouter()

  const { data: balanceData } = useBalance(
    token.address === '0x0000000000000000000000000000000000000000'
      ? {
          address: project?.smartcontracts.CheckToken[chainId!].address as `0x${string}`,
        }
      : {
          token: token.address as `0x${string}`,
          address: project?.smartcontracts.CheckToken[chainId!].address as `0x${string}`,
        }
  )

  const { data: usdBalance } = useReadContract({
    query: {
      enabled: chainId !== undefined && balanceData !== undefined && project?.smartcontracts.Minter !== undefined,
    },
    abi:
      project?.smartcontracts.Minter === undefined ? undefined : GetAbi(project?.smartcontracts.Minter![chainId!].abi!),
    address:
      chainId !== undefined &&
      project?.smartcontracts.Minter !== undefined &&
      project?.smartcontracts.Minter![chainId!] !== undefined
        ? (project?.smartcontracts.Minter![chainId!].address as `0x${string}`)
        : undefined,
    functionName: 'getUsdAmount',
    args: [balanceData?.value!, token.address],
  })

  useEffect(() => {
    if (!chainId || !project) {
      return
    }
    setCheckBalance(
      getCheckRatio(project, chainId, usdBalance as bigint | undefined, balanceData?.value, balanceData?.decimals)
    )
  }, [usdBalance, balanceData, chainId, project])

  const { error: estimateError } = useSimulateContract({
    abi:
      chainId !== undefined && project?.smartcontracts.CheckToken[chainId] !== undefined
        ? GetAbi(project?.smartcontracts.CheckToken[chainId].abi!)
        : undefined,
    address:
      chainId !== undefined && project?.smartcontracts.CheckToken[chainId] !== undefined
        ? (project?.smartcontracts.CheckToken[chainId].address as `0x${string}`)
        : undefined,
    functionName: 'redeemFromTreasury',
    args: [address!, parseEther(amount), token?.address as `0x${string}`],
  })

  const { data, writeContract } = useWriteContract()

  const {
    isLoading,
    error: txError,
    isSuccess: txSuccess,
  } = useWaitForTransactionReceipt({
    hash: data,
  })

  const handleSendTransation = () => {
    if (estimateError) {
      Add(`Transaction failed: ${estimateError.cause}`, {
        type: 'error',
      })
      return
    }
    writeContract({
      abi: GetAbi(project?.smartcontracts.CheckToken[chainId!].abi!),
      address: project?.smartcontracts.CheckToken[chainId!].address as `0x${string}`,
      functionName: 'redeemFromTreasury',
      args: [address!, parseEther(amount), token?.address as `0x${string}`],
    })
  }

  useEffect(() => {
    if (txSuccess) {
      Add(`Transaction successful`, {
        type: 'success',
        href: chain?.blockExplorers?.default.url ? `${chain.blockExplorers.default.url}/tx/${data}` : undefined,
      })
      router.refresh()
    } else if (txError) {
      Add(`Transaction failed: ${txError.cause}`, {
        type: 'error',
      })
    }
  }, [txSuccess, txError])

  return (
    <li
      className='my-10 flex flex-wrap w-full text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'
      key={'collateral-' + token.symbol}>
      <label className='form-control w-2/4'>
        <div className='label'>
          <span className='label-text'>{token.symbol} for CHECK tokens</span>
        </div>
        {checkBalance != undefined ? (
          <TokenQuantityInput onChange={setAmount} quantity={amount} maxValue={checkBalance.toFixed(18)} />
        ) : null}
      </label>
      <div className='w-full justify-end mx-2 my-1'>
        <p className='text-gray-500'>
          {token?.symbol} Treasury parameters:{' '}
          {balanceData === undefined ? '0.0' : formatUnits(balanceData?.value, balanceData?.decimals)} {token?.symbol} /
          {' ' + checkBalance.toFixed(4)} CHECK {!usdBalance ? null : '/ ' + formatEther(usdBalance as bigint) + ' USD'}{' '}
        </p>
        {amount && balanceData !== undefined && checkBalance !== undefined ? (
          <p className='text-gray-400'>
            You exchange {amount} CHECK for{' '}
            {parseFloat(formatUnits(balanceData?.value, balanceData?.decimals)) / (checkBalance / parseFloat(amount))}{' '}
            {token?.symbol}{' '}
            {!usdBalance
              ? null
              : '/ ' +
                parseFloat(formatEther(usdBalance as bigint)) / (checkBalance / parseFloat(amount)) +
                ' USD'}{' '}
          </p>
        ) : null}
        <button
          className='btn btn-wide w-[100%]  m-2 w-1/4'
          onClick={handleSendTransation}
          disabled={!address || Boolean(estimateError) || amount === ''}>
          {isLoading ? <span className='loading loading-dots loading-sm'></span> : 'Redeem ' + token?.symbol}
        </button>
      </div>
    </li>
  )
}
