'use client'
import React from 'react'
import { NestedLayout } from './NestedLayout'

// Todo: get from the server
const stats = [
  { id: 2, name: 'Issued tasks', value: '51' },
  { id: 3, name: 'Paid to freelancers', value: '2,000$' },
  { id: 4, name: 'Average earning (monthly)', value: '1,500$' },
]

export function Stats() {
  return (
    <div className='py-6 sm:py-8 shadow-md'>
      <NestedLayout>
        <div className='mx-auto max-w-7xl px-3 lg:px-4'>
          <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
            {stats.map((stat) => (
              <div key={stat.id} className='mx-auto flex max-w-xs flex-col gap-y-4 '>
                <dt className='text-base leading-4 text-gray-600'>{stat.name}</dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </NestedLayout>
    </div>
  )
}
