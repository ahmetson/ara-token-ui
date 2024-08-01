'use client'
import React from 'react'
import { LinkComponent } from './LinkComponent'

export type Link = {
  title: string
  link: string
}

export type Contract = {
  address: string
  abi: string
}

export type Token = Contract & {
  name: string
  symbol: string
}
export type TaskStatus = 'done' | 'pending' | 'created'

export type TaskType = {
  _id: string

  // Real parameters of task
  maintainer: string
  projectId: string
  checkProjectId: string
  title: string
  content: string
  categories: string[]
  tags: string[]
  created: number // Unix timestamp when this task was created
  estHours: number // Estimated hours to complete this task
  prize: number // Amount of check tokens to give
  prizeType: Token
  status: TaskStatus
  sourceId: string
  images?: Link[]

  projectName: string
  projectImage?: string
  projectVideo?: string
  projectUrl?: string
  maintainerFirstName: string
  maintainerLastName: string
  maintainerUserName: string
}

export function TaskCard({ task }: { task: TaskType }) {
  return (
    <LinkComponent className='card bg-base-100 hover:shadow-xl' href={'/task?id=' + task._id}>
      <div className='rounded-t-lg bg-gray-300 px-4 align-middle justify-between' style={{ height: '56px' }}>
        {task.projectVideo ? (
          <video
            width='84px'
            height='56px'
            preload='auto'
            autoPlay
            loop
            muted
            playsInline
            style={{ marginLeft: '10px', display: 'inline' }}>
            <source src={task.projectVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img width='84px' height='56px' loading='lazy' alt='' src={task.projectImage} />
        )}
        <p className='align-middle' style={{ display: 'inline' }}>
          {task.projectName}
        </p>
      </div>
      <div className='card-body'>
        <h2 className='card-title text-lg'>{task.title}</h2>
        <p className='justify-end text-sm text-right'>
          by{' '}
          <span
            className='text-blue-400 hover:text-blue-500'
            // href={'https://forum.ara.foundation/u/' + task.maintainerUserName}
          >
            {task.maintainerFirstName + ' ' + task.maintainerLastName}
          </span>
        </p>
        <div className='divider'></div>
        <div className='flex'>
          <div className='basis-1/2 text-sm text-left'>{task.prize + ' ' + task.prizeType.symbol} reward</div>
          <div className='basis-1/2 text-sm text-right'>Est. {task.estHours} hours work</div>
        </div>
        <div className='text-red-400 text-center text-sm'>
          Requires {task.prize * 0.5} {task.prizeType.symbol} worth ARA
        </div>
        <div className='divider'></div>
        <div className='card-actions justify-end'>
          {task.tags.map((tag) => (
            <p
              key={task._id + tag}
              // href={'/tasks?tag=' + tag}
              className='badge badge-outline text-blue-400 hover:text-blue-500'>
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </LinkComponent>
  )
}
