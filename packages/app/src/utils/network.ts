import { Chain } from 'viem/chains'
import * as all from 'viem/chains'
import * as Maydone from './projects'

const { ...chains } = all

export function getChain(id: number) {
  for (const chain of Object.values(chains)) {
    if (chain.id === id) {
      return chain as Chain
    }
  }

  throw new Error(`Chain with id ${id} not found`)
}

export const ETH_CHAINS = Maydone.Projects.map((project: Maydone.Project) =>
  getChain(parseInt(Object.keys(project.smartcontracts.DaoToken)[0]))
) as [Chain, ...Chain[]]

export const NETWORK_COLORS = {
  ethereum: {
    color: 'green',
    bgVariant: 'bg-green-600',
  },
  arbitrum: {
    color: 'sky',
    bgVariant: 'bg-sky-600',
  },
  base: {
    color: 'blue',
    bgVariant: 'bg-blue-600',
  },
  linea: {
    color: 'slate',
    bgVariant: 'bg-slate-600',
  },
  polygon: {
    color: 'purple',
    bgVariant: 'bg-purple-600',
  },
  optimism: {
    color: 'red',
    bgVariant: 'bg-red-600',
  },
  scroll: {
    color: 'amber',
    bgVariant: 'bg-amber-600',
  },
  other: {
    color: 'gray',
    bgVariant: 'bg-gray-600',
  },
}

export function GetNetworkColor(chain?: string, type: 'color' | 'bgVariant' = 'color') {
  chain = chain?.toLocaleLowerCase()
  if (chain === 'ethereum' || chain === 'mainnet' || chain === 'homestead') return NETWORK_COLORS.ethereum[type]
  if (chain?.includes('arbitrum')) return NETWORK_COLORS.arbitrum[type]
  if (chain?.includes('base')) return NETWORK_COLORS.base[type]
  if (chain?.includes('linea')) return NETWORK_COLORS.linea[type]
  if (chain?.includes('polygon') || chain?.includes('matic')) return NETWORK_COLORS.polygon[type]
  if (chain?.includes('optimism') || chain?.startsWith('op')) return NETWORK_COLORS.optimism[type]
  if (chain?.includes('scroll')) return NETWORK_COLORS.scroll[type]

  return NETWORK_COLORS.other[type]
}
