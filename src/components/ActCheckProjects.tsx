'use client'
import { getChain } from '@/utils/network'
import { Project, CheckProjectParams, ARA_CHECK_PROJECT_LIMIT } from '@/utils/projects'
import { GetAbi } from '@/utils/web3'
import { useEffect, useState } from 'react'
import { formatEther, isAddress, parseEther } from 'viem'
import {
  useAccount,
  useEstimateGas,
  useReadContract,
  useSendTransaction,
  useSimulateContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { AddressInput } from './AddressInput'
import { TokenQuantityInput } from './TokenQuantityInput'
import { formatBalance } from '@/utils/formatBalance'
import { useNotifications } from '@/context/Notifications'
import { useRouter } from 'next/navigation'

type Address = `0x${string}` | undefined

export default function ActProject({ project }: { project?: Project }) {
  const [to, setTo] = useState<Address>(undefined)
  const [isValidToAddress, setIsValidToAddress] = useState<boolean>(false)
  const [amount, setAmount] = useState('0.01')
  const { address, chainId, chain } = useAccount()
  const [selectedDevProjectId, setSelectedDevProjectId] = useState<number>(0)
  const [selectedDevProject, setSelectedDevProject] = useState<CheckProjectParams | undefined>(undefined)
  const router = useRouter()

  const { Add } = useNotifications()

  const { data: totalProjectAmount } = useReadContract({
    abi:
      chainId !== undefined && project?.smartcontracts.CheckToken[chainId] !== undefined
        ? GetAbi(project?.smartcontracts.CheckToken[chainId].abi!)
        : undefined,
    address:
      chainId !== undefined && project?.smartcontracts.CheckToken[chainId] !== undefined
        ? (project?.smartcontracts.CheckToken[chainId].address as `0x${string}`)
        : undefined,
    functionName: 'projectId',
  })

  const { data: projectParams } = useReadContract({
    query: {
      enabled: selectedDevProjectId > 0,
    },
    abi:
      chainId !== undefined && project?.smartcontracts.CheckToken[chainId] !== undefined
        ? GetAbi(project?.smartcontracts.CheckToken[chainId].abi!)
        : undefined,
    address:
      chainId !== undefined && project?.smartcontracts.CheckToken[chainId] !== undefined
        ? (project?.smartcontracts.CheckToken[chainId].address as `0x${string}`)
        : undefined,
    functionName: 'projects',
    args: [selectedDevProjectId],
  })

  useEffect(() => {
    const aBigint = totalProjectAmount as bigint
    if (aBigint === undefined) {
      return
    }
    const a = aBigint.toString()
    setSelectedDevProjectId(parseInt(a))
  }, [totalProjectAmount])

  useEffect(() => {
    if (projectParams === undefined) {
      return
    }

    const periodBigint = (projectParams as Array<any>)[2] as bigint
    const startTimeBigint = (projectParams as Array<any>)[3] as bigint

    const devProject: CheckProjectParams = project?.checkProjectParams[selectedDevProjectId]!
    devProject.maintainer = (projectParams as Array<any>)[0] as string
    devProject.amount = (projectParams as Array<any>)[1] as bigint
    devProject.period = parseInt(periodBigint.toString())
    devProject.startTime = parseInt(startTimeBigint.toString())
    devProject.minted = (projectParams as Array<any>)[4] as bigint
    if ((projectParams as Array<any>).length == 6) {
      devProject.limit = BigInt(ARA_CHECK_PROJECT_LIMIT)
      devProject.cancelled = (projectParams as Array<any>)[5] as boolean
    } else {
      devProject.limit = (projectParams as Array<any>)[5] as bigint
      devProject.cancelled = (projectParams as Array<any>)[6] as boolean
    }
    setSelectedDevProject(devProject)
  }, [projectParams])

  const handleToAdressInput = (to: string) => {
    if (to.startsWith('0x')) setTo(to as `0x${string}`)
    else setTo(`0x${to}`)
    setIsValidToAddress(isAddress(to))
  }

  const { error: estimateError } = useSimulateContract({
    query: {
      enabled: selectedDevProjectId > 0 && to !== undefined && chainId !== undefined && address !== undefined,
    },
    abi:
      chainId !== undefined && project?.smartcontracts.CheckToken[chainId] !== undefined
        ? GetAbi(project?.smartcontracts.CheckToken[chainId].abi!)
        : undefined,
    address:
      chainId !== undefined && project?.smartcontracts.CheckToken[chainId] !== undefined
        ? (project?.smartcontracts.CheckToken[chainId].address as `0x${string}`)
        : undefined,
    functionName: 'mint',
    args: [selectedDevProjectId, to!, parseEther(amount), '0x00'],
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
    console.log(`Minting a check token, estimate error?: `, estimateError)
    console.log(`Minting parameters:`)
    console.log(`\tSelected project id: ${selectedDevProjectId}`)
    console.log(`\tSelected to address: ${to}`)
    console.log(`\tSelected amount    : ${amount} CHECK or ${parseEther(amount)} WEI`)
    console.log(`\tAbi                :`, GetAbi(project?.smartcontracts.CheckToken[chainId!].abi!))
    console.log(`\Check Address       :`, project?.smartcontracts.CheckToken[chainId!].address)
    if (estimateError) {
      Add(`Transaction failed: ${estimateError.cause}`, {
        type: 'error',
      })
      return
    }
    writeContract({
      abi:
        chainId !== undefined && project?.smartcontracts.CheckToken[chainId] !== undefined
          ? GetAbi(project?.smartcontracts.CheckToken[chainId!].abi!)
          : undefined,
      address: project?.smartcontracts.CheckToken[chainId!].address as `0x${string}`,
      functionName: 'mint',
      args: [selectedDevProjectId, to!, parseEther(amount), '0x00'],
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
    <div className='flex-column align-center '>
      <h2 className='text-xl'>Developing Projects</h2>
      {chainId === undefined ||
      project === undefined ||
      project.smartcontracts.Collaterals == undefined ||
      project.smartcontracts.Collaterals[chainId] == undefined ? (
        <div className='flex items-center'>
          <div role='status'>
            <svg
              aria-hidden='true'
              className='w-4 h-4 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
            <span className='sr-only'>Loading...</span>
          </div>
          {chainId !== undefined &&
          project !== undefined &&
          project.smartcontracts.Collaterals !== undefined &&
          project.smartcontracts.Collaterals[chainId] == undefined
            ? `Switch network to ${getChain(parseInt(Object.keys(project.smartcontracts.Collaterals)[0])).name}`
            : 'Select project and connect your wallet'}
        </div>
      ) : (
        <>
          <form className='max-w-sm'>
            <select
              value={selectedDevProjectId}
              id='developingProjects'
              onChange={(event) => setSelectedDevProjectId(parseInt(event.target.value))}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              {totalProjectAmount !== undefined &&
                [...Array(parseInt(totalProjectAmount!.toString()))].map((_, i) => {
                  return <option value={i + 1}>{i + 1 + '. ' + project.checkProjectParams[i + 1].description}</option>
                })}
            </select>
          </form>
          {selectedDevProject !== undefined ? (
            <>
              <table className='table-auto my-4'>
                <tbody>
                  <tr>
                    <td>Start Time {'    '}</td>
                    <td>{new Date(selectedDevProject.startTime! * 1000).toString()}</td>
                  </tr>
                  <tr>
                    <td>End Time</td>
                    <td>{new Date((selectedDevProject.startTime! + selectedDevProject.period!) * 1000).toString()}</td>
                  </tr>
                  <tr>
                    <td>Sprints</td>
                    <td>
                      {1 +
                        Math.floor(
                          parseFloat((selectedDevProject.amount! / selectedDevProject.limit! / BigInt(1e18)).toString())
                        )}
                    </td>
                  </tr>
                  <tr>
                    <td>Budget</td>
                    <td>{formatEther(selectedDevProject.amount!)} CHECK</td>
                  </tr>
                  <tr>
                    <td>Spent</td>
                    <td>{formatEther(selectedDevProject.minted!)} CHECK</td>
                  </tr>
                </tbody>
              </table>
              <div className='flex align-end grid md:grid-cols-1 lg:grid-cols-2 gap-4 '>
                <div className='flex-col m-2 '>
                  <label className='form-control w-full max-w-xs'>
                    <div className='label py-2'>
                      <span className='label-text'>Contributor address</span>
                    </div>
                    <AddressInput
                      onRecipientChange={handleToAdressInput}
                      type='text'
                      placeholder='0x...'
                      className={`input input-bordered w-full max-w-xs ${
                        !isValidToAddress && to != undefined ? 'input-error' : ''
                      }`}
                      value={to ?? ''}
                    />
                  </label>
                  <label className='form-control w-full max-w-xs'>
                    <div className='label'>
                      <span className='label-text'>Number of CHECK tokens to give</span>
                    </div>
                    <TokenQuantityInput
                      onChange={setAmount}
                      quantity={amount}
                      maxValue={formatBalance(selectedDevProject.amount! ?? BigInt(0))}
                    />
                  </label>
                </div>
                <div className='flex-col justify-end m-2'>
                  <button
                    className='btn btn-wide w-[100%] '
                    onClick={handleSendTransation}
                    disabled={!isValidToAddress || !address || Boolean(estimateError) || amount === ''}>
                    {isLoading ? <span className='loading loading-dots loading-sm'></span> : 'Mint'}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  )
}
