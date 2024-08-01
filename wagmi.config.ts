import { defineConfig } from '@wagmi/cli'
import { actions, hardhat } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/abis.ts',
  contracts: [],
  plugins: [
    actions(),
    hardhat({
      project: '../smartcontracts',
      deployments: {
        ARAToken: {
          59141: '0xe40c7856B6D0e1B01dECBF9976BB706B9Cd1229f', // WEF Linea (DAO of FrogWars)
          59144: '0x889400fb9bde04bfdf353cc718fed3d6ddcf735f',
          8453: '0x8fAd4d86b6cc14798882B607cD62fbdc3b5a258c', // Base Network (ARA Token for Ara project)
        },
        ProjectCheckToken: {
          59141: '0x0011764BfeeB78859dD044023AF6b6b6e17715f7', // FrogWars check token
          59144: '0x1cEB3c60e2E74D6FDDAcDFEE23b8f2C91BBB6996',
        },
        ProjectMainToken: {
          59141: '0x9e90f6ad0E1916995b8fd6A0AEE36732f7A2A20a', // FrogWars main token
          59144: '0x6921482cEf17ecd8382A96B4e6E3749a9B6fcFd0',
        },
        CHECKToken: {
          8453: '0xD38359e85a064EDF54D4Bc017c92Af2AcDa194Fa', // Base Network (Ara project CHECK Token)
        },
        MAINToken: {
          8453: '0xE20A78EFA6A6f14CE1229f2CF34082ABb78e92Fd', // Base Network (Ara project Maintainer Token)
        },
        Minter: {
          8453: '0x72Ed11B14C69D6C9faE5544dE44e2f9E27D1f81C', // Base Network (Ara Project Minter)
        },
      },
    }),
  ],
})
