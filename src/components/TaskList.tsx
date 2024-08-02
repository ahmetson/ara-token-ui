'use client'
import React, { useEffect, useState } from 'react'
import { NestedLayout } from './NestedLayout'
import { TaskType, TaskCard } from '@/components/TaskCard'

export function TaskList({ primaryCategory }: { primaryCategory: string }) {
  const [stats, setStats] = useState<TaskType[]>([])

  useEffect(() => {
    let url = `${process.env.NEXT_PUBLIC_SERVER_URL!}/tasks`
    fetch(url, {
      method: 'GET',
    })
      .then((response) => {
        if (response.status !== 200) {
          throw `HTTP Code: ${response.status}: ${response.statusText}`
        }
        return response.json()
      })
      .then((data) => {
        if (data !== undefined) {
          let thisTask = data as TaskType[]

          setStats(thisTask)
        }
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <NestedLayout>
      <div className='py-6 sm:py-8 min-h-screen	'>
        <div className='mx-auto max-w-7xl px-3 lg:px-4'>
          <h2 className='text-xl mb-2'>Tasks in &apos;{primaryCategory}&apos; category</h2>
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
