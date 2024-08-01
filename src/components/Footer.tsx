import React from 'react'
import {
  SITE_EMOJI,
  SOCIAL_GITHUB,
  SOCIAL_TWITTER,
  SOCIAL_DISCORD,
  SOCIAL_TELEGRAM,
  SOCIAL_YOUTUBE,
} from '@/utils/site'
import { FaGithub, FaXTwitter, FaTelegram, FaYoutube, FaDiscord } from 'react-icons/fa6'
import { NetworkStatus } from './NetworkStatus'
import { LinkComponent } from './LinkComponent'
import { CiChat1 as ForumIcon } from 'react-icons/ci'

export function Footer() {
  return (
    <>
      <div className='place-self-end'>
        <NetworkStatus />
      </div>

      <footer className='sticky top-[100vh] footer flex flex-row justify-between items-center bg-neutral-content p-4'>
        <div className='basis-1/4 flex flex-col'>
          <LinkComponent href='/'>
            <h1 className='text-xl font-bold text-sm h-12 m-auto' style={{ lineHeight: '3rem' }}>
              {SITE_EMOJI} ARA {''} Tasks
            </h1>
          </LinkComponent>
          <div className='flex justify-between bg-neutral-content p-10'>
            <LinkComponent href={`https://github.com/${SOCIAL_GITHUB}`} className='mx-1'>
              <FaGithub width={'1rem'} height={'1rem'} />
            </LinkComponent>
            <LinkComponent href={`https://twitter.com/${SOCIAL_TWITTER}`} className='mx-1'>
              <FaXTwitter />
            </LinkComponent>
            <LinkComponent href={`https://github.com/${SOCIAL_DISCORD}`} className='mx-1'>
              <FaDiscord />
            </LinkComponent>
            <LinkComponent href={`https://github.com/${SOCIAL_TELEGRAM}`} className='mx-1'>
              <FaTelegram />
            </LinkComponent>
            <LinkComponent href={`https://github.com/${SOCIAL_YOUTUBE}`} className='mx-1'>
              <FaYoutube />
            </LinkComponent>
            <LinkComponent href={`https://ara.foundation/`} className='mx-1'>
              <ForumIcon />
            </LinkComponent>
          </div>
        </div>
        <div className='basis-1/2 flex flex-col text-white-100 text-center'>
          <p>
            This page is dedicated to the projects that goes online. By completing the tasks, you are helping to the
          </p>
          <p>
            people to achieve their dreams. You can also start your own ideas, gather people around it on our platform:
          </p>
          <LinkComponent href='https://forum.ara.foundation/' className='m-auto text-blue-400 hover:text-blue-500'>
            Ara Forum
          </LinkComponent>
        </div>
        <div className='basis-1/4 flex flex-col justify-end text-right'>
          <p>Links</p>
          <LinkComponent href='#' className='text-blue-400 hover:text-blue-500'>
            Support
          </LinkComponent>
          <LinkComponent href='#' className='text-blue-400 hover:text-blue-500'>
            About & FAQ
          </LinkComponent>
          <LinkComponent href='#' className='text-blue-400 hover:text-blue-500'>
            Community
          </LinkComponent>
          <LinkComponent href='#' className='text-blue-400 hover:text-blue-500'>
            Maintainer
          </LinkComponent>
          <LinkComponent href='#' className='text-blue-400 hover:text-blue-500'>
            Maydone (Launchpad)
          </LinkComponent>
        </div>
      </footer>
    </>
  )
}
