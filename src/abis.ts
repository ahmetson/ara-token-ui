import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ARAToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const araTokenAbi = [
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'increasedSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20ExceededCap',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'cap', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC20InvalidCap',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINTER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const araTokenAddress = {
  8453: '0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c',
  59141: '0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f',
  59144: '0x889400fB9BDE04BFdf353cC718fED3d6dDcF735F',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const araTokenConfig = {
  address: araTokenAddress,
  abi: araTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControlUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlUpgradeableAbi = [
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AggregatorV3Interface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const aggregatorV3InterfaceAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'description',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint80', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { name: 'roundId', internalType: 'uint80', type: 'uint80' },
      { name: 'answer', internalType: 'int256', type: 'int256' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'updatedAt', internalType: 'uint256', type: 'uint256' },
      { name: 'answeredInRound', internalType: 'uint80', type: 'uint80' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHECKToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const checkTokenAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'projectId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'payload', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'projectId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'NewProjectAction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'maintainer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'projectId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'period',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'budget',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewProjectInit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'projectId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'votePower',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'NewProjectVote',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'HALF_SUPPLY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'LIMIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'REVOKE_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ara',
    outputs: [{ name: '', internalType: 'contract ERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'projectId_', internalType: 'uint256', type: 'uint256' }],
    name: 'cancelProject',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ara_', internalType: 'address', type: 'address' },
      { name: 'main_', internalType: 'address', type: 'address' },
      { name: 'minter_', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'main',
    outputs: [{ name: '', internalType: 'contract ERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projectId_', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'payload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minter',
    outputs: [{ name: '', internalType: 'contract IMinter', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'projectId_', internalType: 'uint256', type: 'uint256' }],
    name: 'newProjectAction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projectLeader', internalType: 'address', type: 'address' },
      { name: 'period', internalType: 'uint256', type: 'uint256' },
      { name: 'budget', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'newProjectInit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projectId_', internalType: 'uint256', type: 'uint256' },
      { name: 'agree', internalType: 'bool', type: 'bool' },
    ],
    name: 'newProjectVote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'newProjectVotings',
    outputs: [
      {
        name: 'params',
        internalType: 'struct CHECKToken.Project',
        type: 'tuple',
        components: [
          { name: 'maintainer', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'period', internalType: 'uint256', type: 'uint256' },
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'minted', internalType: 'uint256', type: 'uint256' },
          { name: 'cancelled', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'timeStart', internalType: 'uint256', type: 'uint256' },
      { name: 'actionTaken', internalType: 'bool', type: 'bool' },
      { name: 'countYes', internalType: 'uint256', type: 'uint256' },
      { name: 'countNo', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'projects',
    outputs: [
      { name: 'maintainer', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'period', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'minted', internalType: 'uint256', type: 'uint256' },
      { name: 'cancelled', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'collateral', internalType: 'address', type: 'address' },
    ],
    name: 'redeemFromTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'round', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'reedemAra',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const checkTokenAddress = {
  8453: '0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const checkTokenConfig = {
  address: checkTokenAddress,
  abi: checkTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ContextUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const contextUpgradeableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ContributorDeposit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const contributorDepositAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'projectId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'checkProjectId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'taskId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'succeed', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'CancelLock',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'projectId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'checkProjectId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      {
        name: 'taskId',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'LockTask',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ara',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'projectId', internalType: 'string', type: 'string' },
      { name: 'checkProjectId', internalType: 'string', type: 'string' },
      { name: 'taskId', internalType: 'string', type: 'string' },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'deposits',
    outputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'projectId', internalType: 'string', type: 'string' },
      { name: 'checkProjectId', internalType: 'string', type: 'string' },
      { name: 'taskId', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner_', internalType: 'address', type: 'address' },
      { name: 'main_', internalType: 'address', type: 'address' },
      { name: 'ara_', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'main',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'reverseDeposits',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'succeed', internalType: 'bool', type: 'bool' },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const contributorDepositAddress = {
  8453: '0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const contributorDepositConfig = {
  address: contributorDepositAddress,
  abi: contributorDepositAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165Upgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165UpgradeableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20CappedUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20CappedUpgradeableAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'increasedSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20ExceededCap',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'cap', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC20InvalidCap',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Upgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20UpgradeableAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IARAToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iaraTokenAbi = [
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlAbi = [
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAddon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAddonAbi = [
  {
    type: 'function',
    inputs: [{ name: 'projectId_', internalType: 'uint256', type: 'uint256' }],
    name: 'setProjectId',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IBridge
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iBridgeAbi = [
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'transferOut',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ICheck
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iCheckAbi = [
  {
    type: 'function',
    inputs: [{ name: 'projectId', internalType: 'uint256', type: 'uint256' }],
    name: 'addonPriceParams',
    outputs: [
      { name: 'collateral', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'collateral', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkAmountForCollateral',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'projectId', internalType: 'uint256', type: 'uint256' }],
    name: 'isCancelled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'projectId', internalType: 'uint256', type: 'uint256' }],
    name: 'maintainerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projectId_', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'payload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintByAddon',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMAINToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const imainTokenAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'leader',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMinter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMinterAbi = [
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'getUsdAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr_', internalType: 'address', type: 'address' }],
    name: 'isCollateral',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'round', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'redeem',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVesting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVestingAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'initVesting',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initializable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const initializableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAINToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const mainTokenAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sessionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'RevokeAction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'initializer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sessionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'RevokeInit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sessionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'votePower',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'RevokeVote',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'HALF_SUPPLY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'REVOKE_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ara',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ara_', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'leader',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'receivershipId_', internalType: 'uint256', type: 'uint256' }],
    name: 'receivershipAction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'receivershipId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'receivershipInit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receivershipId_', internalType: 'uint256', type: 'uint256' },
      { name: 'agree', internalType: 'bool', type: 'bool' },
    ],
    name: 'receivershipVote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'sessionId_', internalType: 'uint256', type: 'uint256' }],
    name: 'revokeAction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'revokeInit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sessionId_', internalType: 'uint256', type: 'uint256' },
      { name: 'agree', internalType: 'bool', type: 'bool' },
    ],
    name: 'revokeVote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'revokes',
    outputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'timeStart', internalType: 'uint256', type: 'uint256' },
      { name: 'actionTaken', internalType: 'bool', type: 'bool' },
      { name: 'countYes', internalType: 'uint256', type: 'uint256' },
      { name: 'countNo', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sessionId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferInit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const mainTokenAddress = {
  8453: '0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const mainTokenConfig = {
  address: mainTokenAddress,
  abi: mainTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Minter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const minterAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'votePower',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'BridgeVote',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'bridge',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'BridgeVotingAction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'initializer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bridge',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BridgeVotingInit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'votePower',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'CollateralVote',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'CollateralVotingAction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'initializer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'decimals',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'feed',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'feedDecimals',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'CollateralVotingInit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'collateral',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'araAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'usdAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'round', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'vestingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'VOTING_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'araToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'bridge',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'bridgeIn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'bridgeOut',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'bridgeVoting',
    outputs: [
      { name: 'bridge', internalType: 'address', type: 'address' },
      { name: 'timeStart', internalType: 'uint256', type: 'uint256' },
      { name: 'actionTaken', internalType: 'bool', type: 'bool' },
      { name: 'countYes', internalType: 'uint256', type: 'uint256' },
      { name: 'countNo', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'checkToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'collateralVotings',
    outputs: [
      {
        name: 'params',
        internalType: 'struct Minter.Collateral',
        type: 'tuple',
        components: [
          { name: 'feedDecimals', internalType: 'uint8', type: 'uint8' },
          { name: 'tokenDecimals', internalType: 'uint8', type: 'uint8' },
          { name: 'feedAddr', internalType: 'address', type: 'address' },
        ],
      },
      { name: 'timeStart', internalType: 'uint256', type: 'uint256' },
      { name: 'actionTaken', internalType: 'bool', type: 'bool' },
      { name: 'countYes', internalType: 'uint256', type: 'uint256' },
      { name: 'countNo', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'collaterals',
    outputs: [
      { name: 'feedDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'tokenDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'feedAddr', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'round', internalType: 'uint8', type: 'uint8' },
      { name: 'usdAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAraAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'collateralAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'collateral', internalType: 'address', type: 'address' },
    ],
    name: 'getUsdAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr_', internalType: 'address', type: 'address' }],
    name: 'isCollateral',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mainToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'collateralAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'round', internalType: 'uint8', type: 'uint8' },
      { name: 'collateral', internalType: 'address', type: 'address' },
    ],
    name: 'mint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'noBridgeEndTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'round', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'redeem',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    name: 'rounds',
    outputs: [
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
      { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
      { name: 'minted', internalType: 'uint256', type: 'uint256' },
      { name: 'minUsd', internalType: 'uint256', type: 'uint256' },
      { name: 'maxUsd', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr_', internalType: 'address', type: 'address' }],
    name: 'setAra',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setBridgeAction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'bridge_', internalType: 'address', type: 'address' }],
    name: 'setBridgeInit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'agree', internalType: 'bool', type: 'bool' }],
    name: 'setBridgeVote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr_', internalType: 'address', type: 'address' }],
    name: 'setCheck',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'setCollateralAction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'decimals', internalType: 'uint8', type: 'uint8' },
      { name: 'feed', internalType: 'address', type: 'address' },
      { name: 'feedDecimals', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'setCollateralInit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'agree', internalType: 'bool', type: 'bool' },
    ],
    name: 'setCollateralVote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr_', internalType: 'address', type: 'address' }],
    name: 'setMaintainer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'round', internalType: 'uint8', type: 'uint8' },
      { name: 'addr_', internalType: 'address', type: 'address' },
    ],
    name: 'setVesting',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'treasury',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'vestingContracts',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    name: 'vestings',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const minterAddress = {
  8453: '0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const minterConfig = { address: minterAddress, abi: minterAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NftAddon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nftAddonAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'nftId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'payload', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'NewOrder',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nftId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'OrderComplete',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'projectId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProjectIdSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nftId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'contributor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'checkAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'payload', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'TaskComplete',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'activeOrders',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'check',
    outputs: [{ name: '', internalType: 'contract ICheck', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner_', internalType: 'address', type: 'address' },
      { name: 'check_', internalType: 'address', type: 'address' },
      { name: 'nft_', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'nftId', internalType: 'uint256', type: 'uint256' },
      { name: 'payload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'newOrder',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nft',
    outputs: [{ name: '', internalType: 'contract IERC721', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'orders',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'params',
    outputs: [
      { name: 'minted', internalType: 'uint256', type: 'uint256' },
      { name: 'payload', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'projectId_', internalType: 'uint256', type: 'uint256' }],
    name: 'setProjectId',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'nftId', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'collateralAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'payload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'taskComplete',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OwnableUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableUpgradeableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProjectCheckToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const projectCheckTokenAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'votePower',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'CollateralVote',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'CollateralVotingAction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'initializer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'votingPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CollateralVotingInit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'projectId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'payload', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'maintainer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'projectId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'addon',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'collateral',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewAddonInit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'projectId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'NewProjectAction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'maintainer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'projectId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'period',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'budget',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewProjectInit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'projectId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'votePower',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'NewProjectVote',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [{ name: 'projectId_', internalType: 'uint256', type: 'uint256' }],
    name: 'addonPriceParams',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'addons',
    outputs: [
      { name: 'maintainer', internalType: 'address', type: 'address' },
      { name: 'collateral', internalType: 'address', type: 'address' },
      { name: 'addon', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'minted', internalType: 'uint256', type: 'uint256' },
      { name: 'cancelled', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'projectId_', internalType: 'uint256', type: 'uint256' }],
    name: 'cancelProject',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'collateral', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkAmountForCollateral',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'checkPerCollateral',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'collateralVotings',
    outputs: [
      { name: 'votingPeriod', internalType: 'uint256', type: 'uint256' },
      { name: 'timeStart', internalType: 'uint256', type: 'uint256' },
      { name: 'actionTaken', internalType: 'bool', type: 'bool' },
      { name: 'countYes', internalType: 'uint256', type: 'uint256' },
      { name: 'countNo', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'collaterals',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dao',
    outputs: [{ name: '', internalType: 'contract ERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ara_', internalType: 'address', type: 'address' },
      { name: 'main_', internalType: 'address', type: 'address' },
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'projectId_', internalType: 'uint256', type: 'uint256' }],
    name: 'isCancelled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr_', internalType: 'address', type: 'address' }],
    name: 'isCollateral',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'main',
    outputs: [{ name: '', internalType: 'contract ERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'projectId_', internalType: 'uint256', type: 'uint256' }],
    name: 'maintainerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projectId_', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'payload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projectId_', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'payload', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mintByAddon',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projectLeader', internalType: 'address', type: 'address' },
      { name: 'addon', internalType: 'address', type: 'address' },
      { name: 'votingPeriod', internalType: 'uint256', type: 'uint256' },
      { name: 'collateral', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'newAddonInit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'projectId_', internalType: 'uint256', type: 'uint256' }],
    name: 'newProjectAction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projectLeader', internalType: 'address', type: 'address' },
      { name: 'period', internalType: 'uint256', type: 'uint256' },
      { name: 'budget', internalType: 'uint256', type: 'uint256' },
      { name: 'votingPeriod', internalType: 'uint256', type: 'uint256' },
      { name: 'limit', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'newProjectInit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'projectId_', internalType: 'uint256', type: 'uint256' },
      { name: 'agree', internalType: 'bool', type: 'bool' },
    ],
    name: 'newProjectVote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'newProjectVotings',
    outputs: [
      {
        name: 'params',
        internalType: 'struct ProjectCheckToken.Project',
        type: 'tuple',
        components: [
          { name: 'maintainer', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'period', internalType: 'uint256', type: 'uint256' },
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'minted', internalType: 'uint256', type: 'uint256' },
          { name: 'limit', internalType: 'uint256', type: 'uint256' },
          { name: 'cancelled', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: 'timeStart', internalType: 'uint256', type: 'uint256' },
      { name: 'actionTaken', internalType: 'bool', type: 'bool' },
      { name: 'countYes', internalType: 'uint256', type: 'uint256' },
      { name: 'countNo', internalType: 'uint256', type: 'uint256' },
      { name: 'votingPeriod', internalType: 'uint256', type: 'uint256' },
      {
        name: 'addonParams',
        internalType: 'struct ProjectCheckToken.Addon',
        type: 'tuple',
        components: [
          { name: 'maintainer', internalType: 'address', type: 'address' },
          { name: 'collateral', internalType: 'address', type: 'address' },
          { name: 'addon', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'minted', internalType: 'uint256', type: 'uint256' },
          { name: 'cancelled', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'priceSetter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'projects',
    outputs: [
      { name: 'maintainer', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'period', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'minted', internalType: 'uint256', type: 'uint256' },
      { name: 'limit', internalType: 'uint256', type: 'uint256' },
      { name: 'cancelled', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'checkAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'collateral', internalType: 'address', type: 'address' },
    ],
    name: 'redeemFromTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'collateral', internalType: 'address', type: 'address' },
      { name: 'perCheck', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setCheckPerCollateral',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'setCollateralAction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'votingPeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setCollateralInit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'agree', internalType: 'bool', type: 'bool' },
    ],
    name: 'setCollateralVote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_priceSetter', internalType: 'address', type: 'address' }],
    name: 'setPriceSetter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const projectCheckTokenAddress = {
  59141: '0x0011764BfeeB78859dD044023AF6b6b6e17715f7',
  59144: '0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996',
} as const

/**
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const projectCheckTokenConfig = {
  address: projectCheckTokenAddress,
  abi: projectCheckTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProjectMainToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const projectMainTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'initialLeader_', internalType: 'address', type: 'address' },
      { name: 'dao_', internalType: 'address', type: 'address' },
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sessionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'RevokeAction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'initializer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sessionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'RevokeInit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sessionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'votePower',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'agree', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'RevokeVote',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'REVOKE_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dao',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'leader',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'receivershipId_', internalType: 'uint256', type: 'uint256' }],
    name: 'receivershipAction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'receivershipId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'receivershipInit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'receivershipId_', internalType: 'uint256', type: 'uint256' },
      { name: 'agree', internalType: 'bool', type: 'bool' },
    ],
    name: 'receivershipVote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'sessionId_', internalType: 'uint256', type: 'uint256' }],
    name: 'revokeAction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'revokeInit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sessionId_', internalType: 'uint256', type: 'uint256' },
      { name: 'agree', internalType: 'bool', type: 'bool' },
    ],
    name: 'revokeVote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'revokes',
    outputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'timeStart', internalType: 'uint256', type: 'uint256' },
      { name: 'actionTaken', internalType: 'bool', type: 'bool' },
      { name: 'countYes', internalType: 'uint256', type: 'uint256' },
      { name: 'countNo', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sessionId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferInit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const projectMainTokenAddress = {
  59141: '0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a',
  59144: '0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0',
} as const

/**
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const projectMainTokenConfig = {
  address: projectMainTokenAddress,
  abi: projectMainTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReentrancyGuardUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const reentrancyGuardUpgradeableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraToken = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraTokenDefaultAdminRole = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'DEFAULT_ADMIN_ROLE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"MINTER_ROLE"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraTokenMinterRole = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'MINTER_ROLE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraTokenAllowance = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"cap"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraTokenCap = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'cap',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraTokenGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"hasRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraTokenHasRole = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraTokenName = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraTokenSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const readAraTokenTotalSupply = /*#__PURE__*/ createReadContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link araTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const writeAraToken = /*#__PURE__*/ createWriteContract({
  abi: araTokenAbi,
  address: araTokenAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const writeAraTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const writeAraTokenBurn = /*#__PURE__*/ createWriteContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"grantRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const writeAraTokenGrantRole = /*#__PURE__*/ createWriteContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const writeAraTokenInitialize = /*#__PURE__*/ createWriteContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const writeAraTokenMint = /*#__PURE__*/ createWriteContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"renounceRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const writeAraTokenRenounceRole = /*#__PURE__*/ createWriteContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"revokeRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const writeAraTokenRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const writeAraTokenTransfer = /*#__PURE__*/ createWriteContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const writeAraTokenTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link araTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const simulateAraToken = /*#__PURE__*/ createSimulateContract({
  abi: araTokenAbi,
  address: araTokenAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const simulateAraTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const simulateAraTokenBurn = /*#__PURE__*/ createSimulateContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"grantRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const simulateAraTokenGrantRole = /*#__PURE__*/ createSimulateContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const simulateAraTokenInitialize = /*#__PURE__*/ createSimulateContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const simulateAraTokenMint = /*#__PURE__*/ createSimulateContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"renounceRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const simulateAraTokenRenounceRole = /*#__PURE__*/ createSimulateContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"revokeRole"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const simulateAraTokenRevokeRole = /*#__PURE__*/ createSimulateContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const simulateAraTokenTransfer = /*#__PURE__*/ createSimulateContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link araTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const simulateAraTokenTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: araTokenAbi,
  address: araTokenAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link araTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const watchAraTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: araTokenAbi,
  address: araTokenAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link araTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const watchAraTokenApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: araTokenAbi,
  address: araTokenAddress,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link araTokenAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const watchAraTokenInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: araTokenAbi,
  address: araTokenAddress,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link araTokenAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const watchAraTokenRoleAdminChangedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: araTokenAbi,
  address: araTokenAddress,
  eventName: 'RoleAdminChanged',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link araTokenAbi}__ and `eventName` set to `"RoleGranted"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const watchAraTokenRoleGrantedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: araTokenAbi,
  address: araTokenAddress,
  eventName: 'RoleGranted',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link araTokenAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const watchAraTokenRoleRevokedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: araTokenAbi,
  address: araTokenAddress,
  eventName: 'RoleRevoked',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link araTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c)
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x889400fb9bde04bfdf353cc718fed3d6ddcf735f)
 */
export const watchAraTokenTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: araTokenAbi,
  address: araTokenAddress,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__
 */
export const readAccessControlUpgradeable = /*#__PURE__*/ createReadContract({
  abi: accessControlUpgradeableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const readAccessControlUpgradeableDefaultAdminRole = /*#__PURE__*/ createReadContract({
  abi: accessControlUpgradeableAbi,
  functionName: 'DEFAULT_ADMIN_ROLE',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readAccessControlUpgradeableGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: accessControlUpgradeableAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"hasRole"`
 */
export const readAccessControlUpgradeableHasRole = /*#__PURE__*/ createReadContract({
  abi: accessControlUpgradeableAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readAccessControlUpgradeableSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: accessControlUpgradeableAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__
 */
export const writeAccessControlUpgradeable = /*#__PURE__*/ createWriteContract({
  abi: accessControlUpgradeableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeAccessControlUpgradeableGrantRole = /*#__PURE__*/ createWriteContract({
  abi: accessControlUpgradeableAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeAccessControlUpgradeableRenounceRole = /*#__PURE__*/ createWriteContract({
  abi: accessControlUpgradeableAbi,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeAccessControlUpgradeableRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: accessControlUpgradeableAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__
 */
export const simulateAccessControlUpgradeable = /*#__PURE__*/ createSimulateContract({
  abi: accessControlUpgradeableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateAccessControlUpgradeableGrantRole = /*#__PURE__*/ createSimulateContract({
  abi: accessControlUpgradeableAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateAccessControlUpgradeableRenounceRole = /*#__PURE__*/ createSimulateContract({
  abi: accessControlUpgradeableAbi,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateAccessControlUpgradeableRevokeRole = /*#__PURE__*/ createSimulateContract({
  abi: accessControlUpgradeableAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__
 */
export const watchAccessControlUpgradeableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: accessControlUpgradeableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchAccessControlUpgradeableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: accessControlUpgradeableAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchAccessControlUpgradeableRoleAdminChangedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: accessControlUpgradeableAbi,
  eventName: 'RoleAdminChanged',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchAccessControlUpgradeableRoleGrantedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: accessControlUpgradeableAbi,
  eventName: 'RoleGranted',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlUpgradeableAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchAccessControlUpgradeableRoleRevokedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: accessControlUpgradeableAbi,
  eventName: 'RoleRevoked',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__
 */
export const readAggregatorV3Interface = /*#__PURE__*/ createReadContract({
  abi: aggregatorV3InterfaceAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"decimals"`
 */
export const readAggregatorV3InterfaceDecimals = /*#__PURE__*/ createReadContract({
  abi: aggregatorV3InterfaceAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"description"`
 */
export const readAggregatorV3InterfaceDescription = /*#__PURE__*/ createReadContract({
  abi: aggregatorV3InterfaceAbi,
  functionName: 'description',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"getRoundData"`
 */
export const readAggregatorV3InterfaceGetRoundData = /*#__PURE__*/ createReadContract({
  abi: aggregatorV3InterfaceAbi,
  functionName: 'getRoundData',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"latestRoundData"`
 */
export const readAggregatorV3InterfaceLatestRoundData = /*#__PURE__*/ createReadContract({
  abi: aggregatorV3InterfaceAbi,
  functionName: 'latestRoundData',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link aggregatorV3InterfaceAbi}__ and `functionName` set to `"version"`
 */
export const readAggregatorV3InterfaceVersion = /*#__PURE__*/ createReadContract({
  abi: aggregatorV3InterfaceAbi,
  functionName: 'version',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckToken = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"HALF_SUPPLY"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenHalfSupply = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'HALF_SUPPLY',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"LIMIT"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenLimit = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'LIMIT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"REVOKE_PERIOD"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenRevokePeriod = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'REVOKE_PERIOD',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenAllowance = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"ara"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenAra = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'ara',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"main"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenMain = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'main',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"minter"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenMinter = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'minter',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenName = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"newProjectVotings"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenNewProjectVotings = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'newProjectVotings',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"projectId"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenProjectId = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'projectId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"projects"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenProjects = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'projects',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const readCheckTokenTotalSupply = /*#__PURE__*/ createReadContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link checkTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const writeCheckToken = /*#__PURE__*/ createWriteContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const writeCheckTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"cancelProject"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const writeCheckTokenCancelProject = /*#__PURE__*/ createWriteContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'cancelProject',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const writeCheckTokenInitialize = /*#__PURE__*/ createWriteContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const writeCheckTokenMint = /*#__PURE__*/ createWriteContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"newProjectAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const writeCheckTokenNewProjectAction = /*#__PURE__*/ createWriteContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'newProjectAction',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"newProjectInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const writeCheckTokenNewProjectInit = /*#__PURE__*/ createWriteContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'newProjectInit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"newProjectVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const writeCheckTokenNewProjectVote = /*#__PURE__*/ createWriteContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'newProjectVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"redeemFromTreasury"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const writeCheckTokenRedeemFromTreasury = /*#__PURE__*/ createWriteContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'redeemFromTreasury',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"reedemAra"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const writeCheckTokenReedemAra = /*#__PURE__*/ createWriteContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'reedemAra',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const writeCheckTokenTransfer = /*#__PURE__*/ createWriteContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const writeCheckTokenTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link checkTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const simulateCheckToken = /*#__PURE__*/ createSimulateContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const simulateCheckTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"cancelProject"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const simulateCheckTokenCancelProject = /*#__PURE__*/ createSimulateContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'cancelProject',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const simulateCheckTokenInitialize = /*#__PURE__*/ createSimulateContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const simulateCheckTokenMint = /*#__PURE__*/ createSimulateContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"newProjectAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const simulateCheckTokenNewProjectAction = /*#__PURE__*/ createSimulateContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'newProjectAction',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"newProjectInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const simulateCheckTokenNewProjectInit = /*#__PURE__*/ createSimulateContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'newProjectInit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"newProjectVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const simulateCheckTokenNewProjectVote = /*#__PURE__*/ createSimulateContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'newProjectVote',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"redeemFromTreasury"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const simulateCheckTokenRedeemFromTreasury = /*#__PURE__*/ createSimulateContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'redeemFromTreasury',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"reedemAra"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const simulateCheckTokenReedemAra = /*#__PURE__*/ createSimulateContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'reedemAra',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const simulateCheckTokenTransfer = /*#__PURE__*/ createSimulateContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link checkTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const simulateCheckTokenTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link checkTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const watchCheckTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: checkTokenAbi,
  address: checkTokenAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link checkTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const watchCheckTokenApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link checkTokenAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const watchCheckTokenInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link checkTokenAbi}__ and `eventName` set to `"Mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const watchCheckTokenMintEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  eventName: 'Mint',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link checkTokenAbi}__ and `eventName` set to `"NewProjectAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const watchCheckTokenNewProjectActionEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  eventName: 'NewProjectAction',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link checkTokenAbi}__ and `eventName` set to `"NewProjectInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const watchCheckTokenNewProjectInitEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  eventName: 'NewProjectInit',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link checkTokenAbi}__ and `eventName` set to `"NewProjectVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const watchCheckTokenNewProjectVoteEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  eventName: 'NewProjectVote',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link checkTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa)
 */
export const watchCheckTokenTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: checkTokenAbi,
  address: checkTokenAddress,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link contextUpgradeableAbi}__
 */
export const watchContextUpgradeableEvent = /*#__PURE__*/ createWatchContractEvent({ abi: contextUpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link contextUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchContextUpgradeableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: contextUpgradeableAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link contributorDepositAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const readContributorDeposit = /*#__PURE__*/ createReadContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"ara"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const readContributorDepositAra = /*#__PURE__*/ createReadContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'ara',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"deposits"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const readContributorDepositDeposits = /*#__PURE__*/ createReadContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'deposits',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"main"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const readContributorDepositMain = /*#__PURE__*/ createReadContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'main',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const readContributorDepositOwner = /*#__PURE__*/ createReadContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"reverseDeposits"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const readContributorDepositReverseDeposits = /*#__PURE__*/ createReadContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'reverseDeposits',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link contributorDepositAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const writeContributorDeposit = /*#__PURE__*/ createWriteContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const writeContributorDepositDeposit = /*#__PURE__*/ createWriteContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const writeContributorDepositInitialize = /*#__PURE__*/ createWriteContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const writeContributorDepositRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const writeContributorDepositTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const writeContributorDepositWithdraw = /*#__PURE__*/ createWriteContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link contributorDepositAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const simulateContributorDeposit = /*#__PURE__*/ createSimulateContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const simulateContributorDepositDeposit = /*#__PURE__*/ createSimulateContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const simulateContributorDepositInitialize = /*#__PURE__*/ createSimulateContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const simulateContributorDepositRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const simulateContributorDepositTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link contributorDepositAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const simulateContributorDepositWithdraw = /*#__PURE__*/ createSimulateContract({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link contributorDepositAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const watchContributorDepositEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link contributorDepositAbi}__ and `eventName` set to `"CancelLock"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const watchContributorDepositCancelLockEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  eventName: 'CancelLock',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link contributorDepositAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const watchContributorDepositInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link contributorDepositAbi}__ and `eventName` set to `"LockTask"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const watchContributorDepositLockTaskEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  eventName: 'LockTask',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link contributorDepositAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x82CB92b8492FA45b2AaF30d362B6E3feaC9c8E71)
 */
export const watchContributorDepositOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: contributorDepositAbi,
  address: contributorDepositAddress,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165UpgradeableAbi}__
 */
export const readErc165Upgradeable = /*#__PURE__*/ createReadContract({
  abi: erc165UpgradeableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165UpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc165UpgradeableSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc165UpgradeableAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc165UpgradeableAbi}__
 */
export const watchErc165UpgradeableEvent = /*#__PURE__*/ createWatchContractEvent({ abi: erc165UpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc165UpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchErc165UpgradeableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc165UpgradeableAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const readErc20 = /*#__PURE__*/ createReadContract({ abi: erc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readErc20Allowance = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const readErc20Decimals = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const readErc20Name = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc20Symbol = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const writeErc20 = /*#__PURE__*/ createWriteContract({ abi: erc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc20Approve = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const simulateErc20 = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const watchErc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__
 */
export const readErc20CappedUpgradeable = /*#__PURE__*/ createReadContract({
  abi: erc20CappedUpgradeableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"allowance"`
 */
export const readErc20CappedUpgradeableAllowance = /*#__PURE__*/ createReadContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20CappedUpgradeableBalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"cap"`
 */
export const readErc20CappedUpgradeableCap = /*#__PURE__*/ createReadContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'cap',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"decimals"`
 */
export const readErc20CappedUpgradeableDecimals = /*#__PURE__*/ createReadContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"name"`
 */
export const readErc20CappedUpgradeableName = /*#__PURE__*/ createReadContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"symbol"`
 */
export const readErc20CappedUpgradeableSymbol = /*#__PURE__*/ createReadContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20CappedUpgradeableTotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__
 */
export const writeErc20CappedUpgradeable = /*#__PURE__*/ createWriteContract({
  abi: erc20CappedUpgradeableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"approve"`
 */
export const writeErc20CappedUpgradeableApprove = /*#__PURE__*/ createWriteContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20CappedUpgradeableTransfer = /*#__PURE__*/ createWriteContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20CappedUpgradeableTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__
 */
export const simulateErc20CappedUpgradeable = /*#__PURE__*/ createSimulateContract({ abi: erc20CappedUpgradeableAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20CappedUpgradeableApprove = /*#__PURE__*/ createSimulateContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20CappedUpgradeableTransfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20CappedUpgradeableTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc20CappedUpgradeableAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__
 */
export const watchErc20CappedUpgradeableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20CappedUpgradeableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20CappedUpgradeableApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20CappedUpgradeableAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchErc20CappedUpgradeableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20CappedUpgradeableAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20CappedUpgradeableAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20CappedUpgradeableTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20CappedUpgradeableAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__
 */
export const readErc20Upgradeable = /*#__PURE__*/ createReadContract({
  abi: erc20UpgradeableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `functionName` set to `"allowance"`
 */
export const readErc20UpgradeableAllowance = /*#__PURE__*/ createReadContract({
  abi: erc20UpgradeableAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20UpgradeableBalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20UpgradeableAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `functionName` set to `"decimals"`
 */
export const readErc20UpgradeableDecimals = /*#__PURE__*/ createReadContract({
  abi: erc20UpgradeableAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `functionName` set to `"name"`
 */
export const readErc20UpgradeableName = /*#__PURE__*/ createReadContract({
  abi: erc20UpgradeableAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `functionName` set to `"symbol"`
 */
export const readErc20UpgradeableSymbol = /*#__PURE__*/ createReadContract({
  abi: erc20UpgradeableAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20UpgradeableTotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20UpgradeableAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__
 */
export const writeErc20Upgradeable = /*#__PURE__*/ createWriteContract({
  abi: erc20UpgradeableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `functionName` set to `"approve"`
 */
export const writeErc20UpgradeableApprove = /*#__PURE__*/ createWriteContract({
  abi: erc20UpgradeableAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20UpgradeableTransfer = /*#__PURE__*/ createWriteContract({
  abi: erc20UpgradeableAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20UpgradeableTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20UpgradeableAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__
 */
export const simulateErc20Upgradeable = /*#__PURE__*/ createSimulateContract({
  abi: erc20UpgradeableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20UpgradeableApprove = /*#__PURE__*/ createSimulateContract({
  abi: erc20UpgradeableAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20UpgradeableTransfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20UpgradeableAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20UpgradeableTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc20UpgradeableAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20UpgradeableAbi}__
 */
export const watchErc20UpgradeableEvent = /*#__PURE__*/ createWatchContractEvent({ abi: erc20UpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20UpgradeableApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20UpgradeableAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchErc20UpgradeableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20UpgradeableAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20UpgradeableAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20UpgradeableTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20UpgradeableAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iaraTokenAbi}__
 */
export const writeIaraToken = /*#__PURE__*/ createWriteContract({
  abi: iaraTokenAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iaraTokenAbi}__ and `functionName` set to `"burn"`
 */
export const writeIaraTokenBurn = /*#__PURE__*/ createWriteContract({
  abi: iaraTokenAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iaraTokenAbi}__ and `functionName` set to `"mint"`
 */
export const writeIaraTokenMint = /*#__PURE__*/ createWriteContract({
  abi: iaraTokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iaraTokenAbi}__
 */
export const simulateIaraToken = /*#__PURE__*/ createSimulateContract({
  abi: iaraTokenAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iaraTokenAbi}__ and `functionName` set to `"burn"`
 */
export const simulateIaraTokenBurn = /*#__PURE__*/ createSimulateContract({
  abi: iaraTokenAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iaraTokenAbi}__ and `functionName` set to `"mint"`
 */
export const simulateIaraTokenMint = /*#__PURE__*/ createSimulateContract({
  abi: iaraTokenAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const readIAccessControl = /*#__PURE__*/ createReadContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const readIAccessControlGetRoleAdmin = /*#__PURE__*/ createReadContract({
  abi: iAccessControlAbi,
  functionName: 'getRoleAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const readIAccessControlHasRole = /*#__PURE__*/ createReadContract({
  abi: iAccessControlAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const writeIAccessControl = /*#__PURE__*/ createWriteContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const writeIAccessControlGrantRole = /*#__PURE__*/ createWriteContract({
  abi: iAccessControlAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const writeIAccessControlRenounceRole = /*#__PURE__*/ createWriteContract({
  abi: iAccessControlAbi,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const writeIAccessControlRevokeRole = /*#__PURE__*/ createWriteContract({
  abi: iAccessControlAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const simulateIAccessControl = /*#__PURE__*/ createSimulateContract({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const simulateIAccessControlGrantRole = /*#__PURE__*/ createSimulateContract({
  abi: iAccessControlAbi,
  functionName: 'grantRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const simulateIAccessControlRenounceRole = /*#__PURE__*/ createSimulateContract({
  abi: iAccessControlAbi,
  functionName: 'renounceRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const simulateIAccessControlRevokeRole = /*#__PURE__*/ createSimulateContract({
  abi: iAccessControlAbi,
  functionName: 'revokeRole',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const watchIAccessControlEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iAccessControlAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const watchIAccessControlRoleAdminChangedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iAccessControlAbi,
  eventName: 'RoleAdminChanged',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const watchIAccessControlRoleGrantedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iAccessControlAbi,
  eventName: 'RoleGranted',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const watchIAccessControlRoleRevokedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iAccessControlAbi,
  eventName: 'RoleRevoked',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAddonAbi}__
 */
export const writeIAddon = /*#__PURE__*/ createWriteContract({ abi: iAddonAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iAddonAbi}__ and `functionName` set to `"setProjectId"`
 */
export const writeIAddonSetProjectId = /*#__PURE__*/ createWriteContract({
  abi: iAddonAbi,
  functionName: 'setProjectId',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAddonAbi}__
 */
export const simulateIAddon = /*#__PURE__*/ createSimulateContract({
  abi: iAddonAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iAddonAbi}__ and `functionName` set to `"setProjectId"`
 */
export const simulateIAddonSetProjectId = /*#__PURE__*/ createSimulateContract({
  abi: iAddonAbi,
  functionName: 'setProjectId',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iBridgeAbi}__
 */
export const writeIBridge = /*#__PURE__*/ createWriteContract({
  abi: iBridgeAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iBridgeAbi}__ and `functionName` set to `"transferOut"`
 */
export const writeIBridgeTransferOut = /*#__PURE__*/ createWriteContract({
  abi: iBridgeAbi,
  functionName: 'transferOut',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iBridgeAbi}__
 */
export const simulateIBridge = /*#__PURE__*/ createSimulateContract({
  abi: iBridgeAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iBridgeAbi}__ and `functionName` set to `"transferOut"`
 */
export const simulateIBridgeTransferOut = /*#__PURE__*/ createSimulateContract({
  abi: iBridgeAbi,
  functionName: 'transferOut',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCheckAbi}__
 */
export const readICheck = /*#__PURE__*/ createReadContract({ abi: iCheckAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCheckAbi}__ and `functionName` set to `"addonPriceParams"`
 */
export const readICheckAddonPriceParams = /*#__PURE__*/ createReadContract({
  abi: iCheckAbi,
  functionName: 'addonPriceParams',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCheckAbi}__ and `functionName` set to `"checkAmountForCollateral"`
 */
export const readICheckCheckAmountForCollateral = /*#__PURE__*/ createReadContract({
  abi: iCheckAbi,
  functionName: 'checkAmountForCollateral',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCheckAbi}__ and `functionName` set to `"isCancelled"`
 */
export const readICheckIsCancelled = /*#__PURE__*/ createReadContract({
  abi: iCheckAbi,
  functionName: 'isCancelled',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iCheckAbi}__ and `functionName` set to `"maintainerOf"`
 */
export const readICheckMaintainerOf = /*#__PURE__*/ createReadContract({
  abi: iCheckAbi,
  functionName: 'maintainerOf',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCheckAbi}__
 */
export const writeICheck = /*#__PURE__*/ createWriteContract({ abi: iCheckAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iCheckAbi}__ and `functionName` set to `"mintByAddon"`
 */
export const writeICheckMintByAddon = /*#__PURE__*/ createWriteContract({
  abi: iCheckAbi,
  functionName: 'mintByAddon',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCheckAbi}__
 */
export const simulateICheck = /*#__PURE__*/ createSimulateContract({
  abi: iCheckAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iCheckAbi}__ and `functionName` set to `"mintByAddon"`
 */
export const simulateICheckMintByAddon = /*#__PURE__*/ createSimulateContract({
  abi: iCheckAbi,
  functionName: 'mintByAddon',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const readIerc165 = /*#__PURE__*/ createReadContract({ abi: ierc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const readIerc20 = /*#__PURE__*/ createReadContract({ abi: ierc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readIerc20Allowance = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readIerc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const writeIerc20 = /*#__PURE__*/ createWriteContract({ abi: ierc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeIerc20Approve = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeIerc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const simulateIerc20 = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateIerc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const watchIerc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const readIerc20Metadata = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const readIerc20MetadataAllowance = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc20MetadataBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const readIerc20MetadataDecimals = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const readIerc20MetadataName = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const readIerc20MetadataSymbol = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readIerc20MetadataTotalSupply = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const writeIerc20Metadata = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc20MetadataApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const writeIerc20MetadataTransfer = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc20MetadataTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const simulateIerc20Metadata = /*#__PURE__*/ createSimulateContract({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc20MetadataApprove = /*#__PURE__*/ createSimulateContract({
  abi: ierc20MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateIerc20MetadataTransfer = /*#__PURE__*/ createSimulateContract({
  abi: ierc20MetadataAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc20MetadataTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc20MetadataAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const watchIerc20MetadataEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20MetadataAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc20MetadataApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20MetadataAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc20MetadataTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20MetadataAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const readIerc721 = /*#__PURE__*/ createReadContract({ abi: ierc721Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721BalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721GetApproved = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721OwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const writeIerc721 = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721Approve = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721SetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const simulateIerc721 = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721Approve = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721SafeTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721SetApprovalForAll = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const watchIerc721Event = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721ApprovalForAllEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721Abi,
  eventName: 'ApprovalForAll',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link imainTokenAbi}__
 */
export const readImainToken = /*#__PURE__*/ createReadContract({
  abi: imainTokenAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link imainTokenAbi}__ and `functionName` set to `"leader"`
 */
export const readImainTokenLeader = /*#__PURE__*/ createReadContract({
  abi: imainTokenAbi,
  functionName: 'leader',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMinterAbi}__
 */
export const readIMinter = /*#__PURE__*/ createReadContract({ abi: iMinterAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMinterAbi}__ and `functionName` set to `"getUsdAmount"`
 */
export const readIMinterGetUsdAmount = /*#__PURE__*/ createReadContract({
  abi: iMinterAbi,
  functionName: 'getUsdAmount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMinterAbi}__ and `functionName` set to `"isCollateral"`
 */
export const readIMinterIsCollateral = /*#__PURE__*/ createReadContract({
  abi: iMinterAbi,
  functionName: 'isCollateral',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMinterAbi}__
 */
export const writeIMinter = /*#__PURE__*/ createWriteContract({
  abi: iMinterAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMinterAbi}__ and `functionName` set to `"redeem"`
 */
export const writeIMinterRedeem = /*#__PURE__*/ createWriteContract({
  abi: iMinterAbi,
  functionName: 'redeem',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMinterAbi}__
 */
export const simulateIMinter = /*#__PURE__*/ createSimulateContract({
  abi: iMinterAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMinterAbi}__ and `functionName` set to `"redeem"`
 */
export const simulateIMinterRedeem = /*#__PURE__*/ createSimulateContract({
  abi: iMinterAbi,
  functionName: 'redeem',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iVestingAbi}__
 */
export const writeIVesting = /*#__PURE__*/ createWriteContract({
  abi: iVestingAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"initVesting"`
 */
export const writeIVestingInitVesting = /*#__PURE__*/ createWriteContract({
  abi: iVestingAbi,
  functionName: 'initVesting',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iVestingAbi}__
 */
export const simulateIVesting = /*#__PURE__*/ createSimulateContract({
  abi: iVestingAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iVestingAbi}__ and `functionName` set to `"initVesting"`
 */
export const simulateIVestingInitVesting = /*#__PURE__*/ createSimulateContract({
  abi: iVestingAbi,
  functionName: 'initVesting',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link initializableAbi}__
 */
export const watchInitializableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: initializableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link initializableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchInitializableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: initializableAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainToken = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"HALF_SUPPLY"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenHalfSupply = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'HALF_SUPPLY',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"REVOKE_PERIOD"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenRevokePeriod = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'REVOKE_PERIOD',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenAllowance = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"ara"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenAra = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'ara',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"leader"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenLeader = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'leader',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenName = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"receivershipId"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenReceivershipId = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'receivershipId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"revokes"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenRevokes = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'revokes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"sessionId"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenSessionId = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'sessionId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenTotalSupply = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenTransfer = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const readMainTokenTransferFrom = /*#__PURE__*/ createReadContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mainTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const writeMainToken = /*#__PURE__*/ createWriteContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const writeMainTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const writeMainTokenInitialize = /*#__PURE__*/ createWriteContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"receivershipAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const writeMainTokenReceivershipAction = /*#__PURE__*/ createWriteContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'receivershipAction',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"receivershipInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const writeMainTokenReceivershipInit = /*#__PURE__*/ createWriteContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'receivershipInit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"receivershipVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const writeMainTokenReceivershipVote = /*#__PURE__*/ createWriteContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'receivershipVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"revokeAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const writeMainTokenRevokeAction = /*#__PURE__*/ createWriteContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'revokeAction',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"revokeInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const writeMainTokenRevokeInit = /*#__PURE__*/ createWriteContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'revokeInit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"revokeVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const writeMainTokenRevokeVote = /*#__PURE__*/ createWriteContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'revokeVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"transferInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const writeMainTokenTransferInit = /*#__PURE__*/ createWriteContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'transferInit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mainTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const simulateMainToken = /*#__PURE__*/ createSimulateContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const simulateMainTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const simulateMainTokenInitialize = /*#__PURE__*/ createSimulateContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"receivershipAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const simulateMainTokenReceivershipAction = /*#__PURE__*/ createSimulateContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'receivershipAction',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"receivershipInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const simulateMainTokenReceivershipInit = /*#__PURE__*/ createSimulateContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'receivershipInit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"receivershipVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const simulateMainTokenReceivershipVote = /*#__PURE__*/ createSimulateContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'receivershipVote',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"revokeAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const simulateMainTokenRevokeAction = /*#__PURE__*/ createSimulateContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'revokeAction',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"revokeInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const simulateMainTokenRevokeInit = /*#__PURE__*/ createSimulateContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'revokeInit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"revokeVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const simulateMainTokenRevokeVote = /*#__PURE__*/ createSimulateContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'revokeVote',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mainTokenAbi}__ and `functionName` set to `"transferInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const simulateMainTokenTransferInit = /*#__PURE__*/ createSimulateContract({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  functionName: 'transferInit',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link mainTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const watchMainTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: mainTokenAbi,
  address: mainTokenAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link mainTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const watchMainTokenApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link mainTokenAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const watchMainTokenInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link mainTokenAbi}__ and `eventName` set to `"RevokeAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const watchMainTokenRevokeActionEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  eventName: 'RevokeAction',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link mainTokenAbi}__ and `eventName` set to `"RevokeInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const watchMainTokenRevokeInitEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  eventName: 'RevokeInit',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link mainTokenAbi}__ and `eventName` set to `"RevokeVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const watchMainTokenRevokeVoteEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  eventName: 'RevokeVote',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link mainTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd)
 */
export const watchMainTokenTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: mainTokenAbi,
  address: mainTokenAddress,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinter = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"VOTING_PERIOD"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterVotingPeriod = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'VOTING_PERIOD',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"araToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterAraToken = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'araToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"bridge"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterBridge = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'bridge',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"bridgeVoting"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterBridgeVoting = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'bridgeVoting',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"checkToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterCheckToken = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'checkToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"collateralVotings"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterCollateralVotings = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'collateralVotings',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"collaterals"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterCollaterals = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'collaterals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"getAraAmount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterGetAraAmount = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'getAraAmount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"getUsdAmount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterGetUsdAmount = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'getUsdAmount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"isCollateral"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterIsCollateral = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'isCollateral',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"mainToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterMainToken = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'mainToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"noBridgeEndTime"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterNoBridgeEndTime = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'noBridgeEndTime',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterOwner = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"rounds"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterRounds = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'rounds',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"treasury"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterTreasury = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'treasury',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"vestingContracts"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterVestingContracts = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'vestingContracts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"vestings"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const readMinterVestings = /*#__PURE__*/ createReadContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'vestings',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinter = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"bridgeIn"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterBridgeIn = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'bridgeIn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"bridgeOut"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterBridgeOut = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'bridgeOut',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterInitialize = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterMint = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterRedeem = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setAra"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterSetAra = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setAra',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setBridgeAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterSetBridgeAction = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setBridgeAction',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setBridgeInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterSetBridgeInit = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setBridgeInit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setBridgeVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterSetBridgeVote = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setBridgeVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setCheck"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterSetCheck = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setCheck',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setCollateralAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterSetCollateralAction = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setCollateralAction',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setCollateralInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterSetCollateralInit = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setCollateralInit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setCollateralVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterSetCollateralVote = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setCollateralVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setMaintainer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterSetMaintainer = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setMaintainer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setVesting"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterSetVesting = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setVesting',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const writeMinterTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinter = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"bridgeIn"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterBridgeIn = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'bridgeIn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"bridgeOut"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterBridgeOut = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'bridgeOut',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterInitialize = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterMint = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterRedeem = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setAra"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterSetAra = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setAra',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setBridgeAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterSetBridgeAction = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setBridgeAction',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setBridgeInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterSetBridgeInit = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setBridgeInit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setBridgeVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterSetBridgeVote = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setBridgeVote',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setCheck"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterSetCheck = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setCheck',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setCollateralAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterSetCollateralAction = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setCollateralAction',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setCollateralInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterSetCollateralInit = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setCollateralInit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setCollateralVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterSetCollateralVote = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setCollateralVote',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setMaintainer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterSetMaintainer = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setMaintainer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"setVesting"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterSetVesting = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'setVesting',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link minterAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const simulateMinterTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: minterAbi,
  address: minterAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link minterAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const watchMinterEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: minterAbi,
  address: minterAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link minterAbi}__ and `eventName` set to `"BridgeVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const watchMinterBridgeVoteEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: minterAbi,
  address: minterAddress,
  eventName: 'BridgeVote',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link minterAbi}__ and `eventName` set to `"BridgeVotingAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const watchMinterBridgeVotingActionEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: minterAbi,
  address: minterAddress,
  eventName: 'BridgeVotingAction',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link minterAbi}__ and `eventName` set to `"BridgeVotingInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const watchMinterBridgeVotingInitEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: minterAbi,
  address: minterAddress,
  eventName: 'BridgeVotingInit',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link minterAbi}__ and `eventName` set to `"CollateralVote"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const watchMinterCollateralVoteEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: minterAbi,
  address: minterAddress,
  eventName: 'CollateralVote',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link minterAbi}__ and `eventName` set to `"CollateralVotingAction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const watchMinterCollateralVotingActionEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: minterAbi,
  address: minterAddress,
  eventName: 'CollateralVotingAction',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link minterAbi}__ and `eventName` set to `"CollateralVotingInit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const watchMinterCollateralVotingInitEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: minterAbi,
  address: minterAddress,
  eventName: 'CollateralVotingInit',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link minterAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const watchMinterInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: minterAbi,
  address: minterAddress,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link minterAbi}__ and `eventName` set to `"Mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const watchMinterMintEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: minterAbi,
  address: minterAddress,
  eventName: 'Mint',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link minterAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C)
 */
export const watchMinterOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: minterAbi,
  address: minterAddress,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nftAddonAbi}__
 */
export const readNftAddon = /*#__PURE__*/ createReadContract({
  abi: nftAddonAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"activeOrders"`
 */
export const readNftAddonActiveOrders = /*#__PURE__*/ createReadContract({
  abi: nftAddonAbi,
  functionName: 'activeOrders',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"check"`
 */
export const readNftAddonCheck = /*#__PURE__*/ createReadContract({
  abi: nftAddonAbi,
  functionName: 'check',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"nft"`
 */
export const readNftAddonNft = /*#__PURE__*/ createReadContract({
  abi: nftAddonAbi,
  functionName: 'nft',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"orders"`
 */
export const readNftAddonOrders = /*#__PURE__*/ createReadContract({
  abi: nftAddonAbi,
  functionName: 'orders',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"owner"`
 */
export const readNftAddonOwner = /*#__PURE__*/ createReadContract({
  abi: nftAddonAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"params"`
 */
export const readNftAddonParams = /*#__PURE__*/ createReadContract({
  abi: nftAddonAbi,
  functionName: 'params',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"projectId"`
 */
export const readNftAddonProjectId = /*#__PURE__*/ createReadContract({
  abi: nftAddonAbi,
  functionName: 'projectId',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nftAddonAbi}__
 */
export const writeNftAddon = /*#__PURE__*/ createWriteContract({
  abi: nftAddonAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"initialize"`
 */
export const writeNftAddonInitialize = /*#__PURE__*/ createWriteContract({
  abi: nftAddonAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"newOrder"`
 */
export const writeNftAddonNewOrder = /*#__PURE__*/ createWriteContract({
  abi: nftAddonAbi,
  functionName: 'newOrder',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeNftAddonRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: nftAddonAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"setProjectId"`
 */
export const writeNftAddonSetProjectId = /*#__PURE__*/ createWriteContract({
  abi: nftAddonAbi,
  functionName: 'setProjectId',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"taskComplete"`
 */
export const writeNftAddonTaskComplete = /*#__PURE__*/ createWriteContract({
  abi: nftAddonAbi,
  functionName: 'taskComplete',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeNftAddonTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: nftAddonAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nftAddonAbi}__
 */
export const simulateNftAddon = /*#__PURE__*/ createSimulateContract({
  abi: nftAddonAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateNftAddonInitialize = /*#__PURE__*/ createSimulateContract({
  abi: nftAddonAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"newOrder"`
 */
export const simulateNftAddonNewOrder = /*#__PURE__*/ createSimulateContract({
  abi: nftAddonAbi,
  functionName: 'newOrder',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateNftAddonRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: nftAddonAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"setProjectId"`
 */
export const simulateNftAddonSetProjectId = /*#__PURE__*/ createSimulateContract({
  abi: nftAddonAbi,
  functionName: 'setProjectId',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"taskComplete"`
 */
export const simulateNftAddonTaskComplete = /*#__PURE__*/ createSimulateContract({
  abi: nftAddonAbi,
  functionName: 'taskComplete',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nftAddonAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateNftAddonTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: nftAddonAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nftAddonAbi}__
 */
export const watchNftAddonEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nftAddonAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nftAddonAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchNftAddonInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nftAddonAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nftAddonAbi}__ and `eventName` set to `"NewOrder"`
 */
export const watchNftAddonNewOrderEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nftAddonAbi,
  eventName: 'NewOrder',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nftAddonAbi}__ and `eventName` set to `"OrderComplete"`
 */
export const watchNftAddonOrderCompleteEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nftAddonAbi,
  eventName: 'OrderComplete',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nftAddonAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchNftAddonOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nftAddonAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nftAddonAbi}__ and `eventName` set to `"ProjectIdSet"`
 */
export const watchNftAddonProjectIdSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nftAddonAbi,
  eventName: 'ProjectIdSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nftAddonAbi}__ and `eventName` set to `"TaskComplete"`
 */
export const watchNftAddonTaskCompleteEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nftAddonAbi,
  eventName: 'TaskComplete',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__
 */
export const readOwnableUpgradeable = /*#__PURE__*/ createReadContract({
  abi: ownableUpgradeableAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `functionName` set to `"owner"`
 */
export const readOwnableUpgradeableOwner = /*#__PURE__*/ createReadContract({
  abi: ownableUpgradeableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__
 */
export const writeOwnableUpgradeable = /*#__PURE__*/ createWriteContract({
  abi: ownableUpgradeableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOwnableUpgradeableRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableUpgradeableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOwnableUpgradeableTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableUpgradeableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__
 */
export const simulateOwnableUpgradeable = /*#__PURE__*/ createSimulateContract({
  abi: ownableUpgradeableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOwnableUpgradeableRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: ownableUpgradeableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOwnableUpgradeableTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: ownableUpgradeableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableUpgradeableAbi}__
 */
export const watchOwnableUpgradeableEvent = /*#__PURE__*/ createWatchContractEvent({ abi: ownableUpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchOwnableUpgradeableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownableUpgradeableAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOwnableUpgradeableOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownableUpgradeableAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckToken = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"addonPriceParams"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenAddonPriceParams = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'addonPriceParams',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"addons"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenAddons = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'addons',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenAllowance = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"checkAmountForCollateral"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenCheckAmountForCollateral = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'checkAmountForCollateral',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"checkPerCollateral"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenCheckPerCollateral = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'checkPerCollateral',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"collateralVotings"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenCollateralVotings = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'collateralVotings',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"collaterals"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenCollaterals = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'collaterals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"dao"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenDao = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'dao',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"isCancelled"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenIsCancelled = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'isCancelled',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"isCollateral"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenIsCollateral = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'isCollateral',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"main"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenMain = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'main',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"maintainerOf"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenMaintainerOf = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'maintainerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenName = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"newProjectVotings"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenNewProjectVotings = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'newProjectVotings',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"priceSetter"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenPriceSetter = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'priceSetter',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"projectId"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenProjectId = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'projectId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"projects"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenProjects = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'projects',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const readProjectCheckTokenTotalSupply = /*#__PURE__*/ createReadContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckToken = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"cancelProject"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenCancelProject = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'cancelProject',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenInitialize = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenMint = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"mintByAddon"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenMintByAddon = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'mintByAddon',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"newAddonInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenNewAddonInit = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'newAddonInit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"newProjectAction"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenNewProjectAction = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'newProjectAction',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"newProjectInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenNewProjectInit = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'newProjectInit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"newProjectVote"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenNewProjectVote = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'newProjectVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"redeemFromTreasury"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenRedeemFromTreasury = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'redeemFromTreasury',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"setCheckPerCollateral"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenSetCheckPerCollateral = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'setCheckPerCollateral',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"setCollateralAction"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenSetCollateralAction = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'setCollateralAction',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"setCollateralInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenSetCollateralInit = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'setCollateralInit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"setCollateralVote"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenSetCollateralVote = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'setCollateralVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"setPriceSetter"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenSetPriceSetter = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'setPriceSetter',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenTransfer = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const writeProjectCheckTokenTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckToken = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"cancelProject"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenCancelProject = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'cancelProject',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenInitialize = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenMint = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"mintByAddon"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenMintByAddon = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'mintByAddon',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"newAddonInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenNewAddonInit = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'newAddonInit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"newProjectAction"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenNewProjectAction = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'newProjectAction',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"newProjectInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenNewProjectInit = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'newProjectInit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"newProjectVote"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenNewProjectVote = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'newProjectVote',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"redeemFromTreasury"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenRedeemFromTreasury = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'redeemFromTreasury',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"setCheckPerCollateral"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenSetCheckPerCollateral = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'setCheckPerCollateral',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"setCollateralAction"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenSetCollateralAction = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'setCollateralAction',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"setCollateralInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenSetCollateralInit = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'setCollateralInit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"setCollateralVote"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenSetCollateralVote = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'setCollateralVote',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"setPriceSetter"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenSetPriceSetter = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'setPriceSetter',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenTransfer = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const simulateProjectCheckTokenTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectCheckTokenAbi}__
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const watchProjectCheckTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const watchProjectCheckTokenApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `eventName` set to `"CollateralVote"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const watchProjectCheckTokenCollateralVoteEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  eventName: 'CollateralVote',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `eventName` set to `"CollateralVotingAction"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const watchProjectCheckTokenCollateralVotingActionEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  eventName: 'CollateralVotingAction',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `eventName` set to `"CollateralVotingInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const watchProjectCheckTokenCollateralVotingInitEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  eventName: 'CollateralVotingInit',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const watchProjectCheckTokenInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `eventName` set to `"Mint"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const watchProjectCheckTokenMintEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  eventName: 'Mint',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `eventName` set to `"NewAddonInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const watchProjectCheckTokenNewAddonInitEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  eventName: 'NewAddonInit',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `eventName` set to `"NewProjectAction"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const watchProjectCheckTokenNewProjectActionEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  eventName: 'NewProjectAction',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `eventName` set to `"NewProjectInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const watchProjectCheckTokenNewProjectInitEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  eventName: 'NewProjectInit',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `eventName` set to `"NewProjectVote"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const watchProjectCheckTokenNewProjectVoteEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  eventName: 'NewProjectVote',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectCheckTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x0011764BfeeB78859dD044023AF6b6b6e17715f7)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996)
 */
export const watchProjectCheckTokenTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectCheckTokenAbi,
  address: projectCheckTokenAddress,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainToken = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"REVOKE_PERIOD"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenRevokePeriod = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'REVOKE_PERIOD',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenAllowance = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"dao"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenDao = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'dao',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"leader"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenLeader = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'leader',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenName = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"receivershipId"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenReceivershipId = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'receivershipId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"revokes"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenRevokes = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'revokes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"sessionId"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenSessionId = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'sessionId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenTotalSupply = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenTransfer = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const readProjectMainTokenTransferFrom = /*#__PURE__*/ createReadContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectMainTokenAbi}__
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const writeProjectMainToken = /*#__PURE__*/ createWriteContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const writeProjectMainTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"receivershipAction"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const writeProjectMainTokenReceivershipAction = /*#__PURE__*/ createWriteContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'receivershipAction',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"receivershipInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const writeProjectMainTokenReceivershipInit = /*#__PURE__*/ createWriteContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'receivershipInit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"receivershipVote"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const writeProjectMainTokenReceivershipVote = /*#__PURE__*/ createWriteContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'receivershipVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"revokeAction"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const writeProjectMainTokenRevokeAction = /*#__PURE__*/ createWriteContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'revokeAction',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"revokeInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const writeProjectMainTokenRevokeInit = /*#__PURE__*/ createWriteContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'revokeInit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"revokeVote"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const writeProjectMainTokenRevokeVote = /*#__PURE__*/ createWriteContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'revokeVote',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"transferInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const writeProjectMainTokenTransferInit = /*#__PURE__*/ createWriteContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'transferInit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectMainTokenAbi}__
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const simulateProjectMainToken = /*#__PURE__*/ createSimulateContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const simulateProjectMainTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"receivershipAction"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const simulateProjectMainTokenReceivershipAction = /*#__PURE__*/ createSimulateContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'receivershipAction',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"receivershipInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const simulateProjectMainTokenReceivershipInit = /*#__PURE__*/ createSimulateContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'receivershipInit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"receivershipVote"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const simulateProjectMainTokenReceivershipVote = /*#__PURE__*/ createSimulateContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'receivershipVote',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"revokeAction"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const simulateProjectMainTokenRevokeAction = /*#__PURE__*/ createSimulateContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'revokeAction',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"revokeInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const simulateProjectMainTokenRevokeInit = /*#__PURE__*/ createSimulateContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'revokeInit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"revokeVote"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const simulateProjectMainTokenRevokeVote = /*#__PURE__*/ createSimulateContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'revokeVote',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link projectMainTokenAbi}__ and `functionName` set to `"transferInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const simulateProjectMainTokenTransferInit = /*#__PURE__*/ createSimulateContract({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  functionName: 'transferInit',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectMainTokenAbi}__
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const watchProjectMainTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectMainTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const watchProjectMainTokenApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectMainTokenAbi}__ and `eventName` set to `"RevokeAction"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const watchProjectMainTokenRevokeActionEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  eventName: 'RevokeAction',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectMainTokenAbi}__ and `eventName` set to `"RevokeInit"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const watchProjectMainTokenRevokeInitEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  eventName: 'RevokeInit',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectMainTokenAbi}__ and `eventName` set to `"RevokeVote"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const watchProjectMainTokenRevokeVoteEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  eventName: 'RevokeVote',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link projectMainTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Linea Sepolia Testnet Etherscan__](https://sepolia.lineascan.build/address/0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a)
 * - [__View Contract on Linea Mainnet Etherscan__](https://lineascan.build/address/0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0)
 */
export const watchProjectMainTokenTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: projectMainTokenAbi,
  address: projectMainTokenAddress,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link reentrancyGuardUpgradeableAbi}__
 */
export const watchReentrancyGuardUpgradeableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: reentrancyGuardUpgradeableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link reentrancyGuardUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchReentrancyGuardUpgradeableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: reentrancyGuardUpgradeableAbi,
  eventName: 'Initialized',
})
