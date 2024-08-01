'use client'
import React from 'react'
import { NestedLayout } from './NestedLayout'
import { BanknotesIcon, BriefcaseIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'

// Todo: get from the server
const stats = [
  {
    id: 'step-1',
    name: '1. Pick a task',
    desc: 'Browse tasks for projects you like. Pick one by depositing tokens. No sign up, only lock tokens to lock the task.',
  },
  {
    id: 'step-2',
    name: '2. Complete the task',
    desc: 'Complete a task on a time. Get Paycheck tokens. Automatically return back your deposited tokens.',
  },
  {
    id: 'step-3',
    name: '3. Get treasury assets',
    desc: 'Convert your paychecks into any asset you like. Potentially get tokens for the project by discount.',
  },
]

export function Steps() {
  return (
    <div className='py-6 sm:py-8 '>
      <NestedLayout>
        <div className='mx-auto max-w-7xl px-3 lg:px-4'>
          <h2 className='text-xl mb-2'>How to solve tasks in Ara?</h2>
          <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
            <div key={stats[0].id} className='max-w-sm p-6 '>
              <BriefcaseIcon className='w-16 h-16 text-blue-500 dark:text-yellow-400 mb-3 m-auto'></BriefcaseIcon>
              <h5 className='mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                {stats[0].name}
              </h5>
              <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>{stats[0].desc}</p>
            </div>
            <div key={stats[1].id} className='max-w-sm p-6 '>
              <CheckBadgeIcon className='w-16 h-16 text-blue-500 dark:text-yellow-400 mb-3 m-auto'></CheckBadgeIcon>
              <h5 className='mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                {stats[1].name}
              </h5>
              <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>{stats[1].desc}</p>
            </div>
            <div key={stats[2].id} className='max-w-sm p-6 '>
              <BanknotesIcon className='w-16 h-16 text-blue-500 dark:text-yellow-400 mb-3 m-auto'></BanknotesIcon>
              <h5 className='mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                {stats[2].name}
              </h5>
              <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>{stats[2].desc}</p>
            </div>
          </dl>
        </div>
      </NestedLayout>
    </div>
  )
}
