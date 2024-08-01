'use client'
import React from 'react'
import { NestedLayout } from './NestedLayout'
import { BanknotesIcon, BriefcaseIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import { TaskType, TaskCard } from '@/components/TaskCard'

// Todo: get from the server
const stats: TaskType[] = [
  {
    _id: '66abcfe9f7bea604485c70c3',
    sourceId: '59144_0x906db6814c810265e4a1123271210cbb96ad93aea0395fc65f42660f439d63bd',
    maintainer: '66a9fcec50cc06f0f697d282',
    projectId: '66a9fd0150cc06f0f697d284',
    checkProjectId: '3',
    title: 'Animate NFT 2126 for the pixel art game',
    content:
      'A user 0x80Cbc1f7fd60B7026C0088e5eD58Fc6Ce1180141 asked to animate his NFT.\n    You can check base on https://github.com/kidagine/Darklings-FightingGame as our game is based on that.',
    categories: ['art-category'],
    tags: ['2d', 'sprite', 'game'],
    created: 1721818505,
    estHours: 4,
    prize: 50,
    prizeType: {
      abi: '',
      address: '',
      name: 'USDC',
      symbol: 'USDC',
    },
    status: 'created',
    projectName: 'Frog Wars',
    projectVideo: 'https://maydone.ara.foundation/FrogWars.mp4',
    projectUrl: '',
    maintainerUserName: 'ahmetson',
    maintainerLastName: 'Ahmetson',
    maintainerFirstName: 'Medet',
  },
  {
    _id: '66abcff5f7bea604485c70c4',
    sourceId: '59144_0xtx_of_2127',
    maintainer: '66a9fcec50cc06f0f697d282',
    projectId: '66a9fd0150cc06f0f697d284',
    checkProjectId: '3',
    title: 'Animate NFT 2127 for the pixel art game',
    content:
      'A user 0xaddr_2127 asked to animate his NFT.\n    You can check base on https://github.com/kidagine/Darklings-FightingGame as our game is based on that.',
    categories: ['art-category'],
    tags: ['2d', 'sprite', 'game'],
    created: 1721818505,
    estHours: 4,
    prize: 50,
    prizeType: {
      abi: '',
      address: '',
      name: 'USDC',
      symbol: 'USDC',
    },
    status: 'created',
    projectName: 'Frog Wars',
    projectVideo: 'https://maydone.ara.foundation/FrogWars.mp4',
    projectUrl: '',
    maintainerUserName: 'ahmetson',
    maintainerLastName: 'Ahmetson',
    maintainerFirstName: 'Medet',
  },
  {
    _id: '66abcff5f7bea604485c70c5',
    sourceId: '59144_0xtx_of_2128',
    maintainer: '66a9fcec50cc06f0f697d282',
    projectId: '66a9fd0150cc06f0f697d284',
    checkProjectId: '3',
    title: 'Animate NFT 2128 for the pixel art game',
    content:
      'A user 0xaddr_2128 asked to animate his NFT.\n    You can check base on https://github.com/kidagine/Darklings-FightingGame as our game is based on that.',
    categories: ['art-category'],
    tags: ['2d', 'sprite', 'game'],
    created: 1721818505,
    estHours: 4,
    prize: 50,
    prizeType: {
      abi: '',
      address: '',
      name: 'USDC',
      symbol: 'USDC',
    },
    status: 'created',
    projectName: 'Frog Wars',
    projectVideo: 'https://maydone.ara.foundation/FrogWars.mp4',
    projectUrl: '',
    maintainerUserName: 'ahmetson',
    maintainerLastName: 'Ahmetson',
    maintainerFirstName: 'Medet',
  },
]

export function TaskList({ primaryCategory }: { primaryCategory: string }) {
  return (
    <NestedLayout>
      <div className='py-6 sm:py-8 min-h-screen	'>
        <div className='mx-auto max-w-7xl px-3 lg:px-4'>
          <h2 className='text-xl mb-2'>Tasks in '{primaryCategory}' category</h2>
          <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
            {stats.map((stat) => (
              <TaskCard key={stat._id + '-card'} task={stat}></TaskCard>
            ))}
          </dl>
        </div>
      </div>
    </NestedLayout>
  )
}
