'use client'
import React from 'react'
import { LinkComponent } from './LinkComponent'
import { SITE_EMOJI } from '@/utils/site'
import { Connect } from './Connect'
import { NotificationsDrawer } from './NotificationsDrawer'

import { useState } from 'react'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon, CreditCardIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-white'>
      <nav aria-label='Global' className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
        <div className='flex lg:flex-1'>
          <LinkComponent href='/'>
            <h1 className='text-xl font-bold text-sm h-12' style={{ lineHeight: '3rem' }}>
              {SITE_EMOJI} ARA {''} Tasks
            </h1>
          </LinkComponent>
          <PopoverGroup className='hidden lg:flex lg:gap-x-12 mx-4'>
            <div className='form-control text-sm font-semibold '>
              <input type='text' placeholder='Search' className='input input-bordered w-24 md:w-auto' />
            </div>
          </PopoverGroup>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='h-6 w-6' />
          </button>
        </div>

        <div className='hidden lg:flex lg:flex-1 justify-end'>
          <LinkComponent className='btn relative mx-4' href={'/check/burn'}>
            <CreditCardIcon color='green' width={'2rem'}></CreditCardIcon>
            <div className='px-1 bg-green-500 text-green-100 bg-teal-500 rounded-full text-center text-white text-sm absolute -top-3 -end-2'>
              3<div className='absolute top-0 start-0 rounded-full -z-10 animate-ping bg-teal-200 w-full h-full'></div>
            </div>
          </LinkComponent>
          <Connect />
          <NotificationsDrawer />
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <LinkComponent href='/'>
              <h1 className='text-xl font-bold'>{SITE_EMOJI}</h1>
            </LinkComponent>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <div className='form-control text-sm font-semibold leading-6 text-gray-900'>
                  <input type='text' placeholder='Search' className='input input-bordered w-24 md:w-auto' />
                </div>
              </div>
              <div className='py-6' style={{ display: 'grid' }}>
                <LinkComponent className='btn relative' href={'/check/burn'}>
                  <CreditCardIcon color='green' width={'2rem'}></CreditCardIcon>
                  Balance
                  <div className='px-1 bg-green-500 text-green-100 bg-teal-500 rounded-full text-center text-white text-sm absolute -top-3 -end-2'>
                    3
                    <div className='absolute top-0 start-0 rounded-full -z-10 animate-ping bg-teal-200 w-full h-full'></div>
                  </div>
                </LinkComponent>
                <Connect />
                <NotificationsDrawer />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

/*export function Header() {
  return (
    <header className='navbar flex justify-between p-4 pt-0'>
      <LinkComponent href='/'>
        <h1 className='text-xl font-bold'>{SITE_EMOJI}</h1>
      </LinkComponent>

      <div className='flex gap-2'>
        <Connect />
        <NotificationsDrawer />
      </div>
    </header>
  )
}*/
