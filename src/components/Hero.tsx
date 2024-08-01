'use client'
import React from 'react'

import { PresentationChartLineIcon } from '@heroicons/react/24/outline'
import { LinkComponent } from './LinkComponent'

export function Hero() {
  return (
    <div className='relative isolate px-6 pt-14 lg:px-8'>
      <div aria-hidden='true' className='absolute inset-x-0 transform-gpu overflow-hidden blur-3xl '>
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
        />
      </div>
      <div className='mx-auto max-w-2xl pb-16 sm:pb-24 lg:pb-28'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
            Early version.{' '}
            {/* <LinkComponent href='#' className='font-semibold text-indigo-600'>
              <span aria-hidden='true' className='absolute inset-0' />
              Read more <span aria-hidden='true'>&rarr;</span>
            </LinkComponent> */}
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Freelance jobs prepared by professionals
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Ara users develop projects online that split into smaller tasks that you see here. As completing the tasks,
            as a{' '}
            <span className='font-bold text-black-100'>
              reward you can choose early tokens of the next Unicorn{' '}
              <PresentationChartLineIcon style={{ width: '1rem', display: 'inline' }}></PresentationChartLineIcon>
            </span>
            <br />
            <span className='text-gray-500'>No Sign Up, only crypto wallet</span>
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <LinkComponent
              href='/tasks'
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Browse tasks
            </LinkComponent>
            <LinkComponent href='/about' className='text-sm font-semibold leading-6 text-gray-900'>
              Learn more <span aria-hidden='true'>→</span>
            </LinkComponent>
          </div>
        </div>
      </div>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
        />
      </div>
    </div>
  )
}

export function CTA() {
  return (
    <div className='relative bg-white px-6 pt-14 lg:px-8'>
      <div className='mx-auto max-w-2xl pb-16 sm:pb-24 lg:pb-28'>
        <div className='text-center'>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <p className='text-fl'>Start now</p>
          </div>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <LinkComponent
              href='/tasks'
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              Browse Tasks
            </LinkComponent>
          </div>
        </div>
      </div>
    </div>
  )
}
