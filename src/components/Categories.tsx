'use client'
import React from 'react'
import { NestedLayout } from './NestedLayout'
import ItImg from '@/assets/cats/it.jpg'
import ArtImg from '@/assets/cats/art.jpg'
import AdsImg from '@/assets/cats/ads.jpg'
import SeoImg from '@/assets/cats/seo.jpg'
import BizImg from '@/assets/cats/biz.jpg'
import TextImg from '@/assets/cats/text.jpg'
import FxImg from '@/assets/cats/fx.jpg'
import Image from 'next/image'
import { LinkComponent } from './LinkComponent'

// Todo: get from the server
const stats = [
  {
    id: 'it-category',
    name: 'IT & engineering',
    href: '/tasks?category=it-category',
    image: ItImg.src,
    width: ItImg.width,
    height: ItImg.height,
  },
  {
    id: 'art-category',
    name: 'Design',
    href: '/tasks?category=art-category',
    image: ArtImg.src,
    width: ItImg.width,
    height: ItImg.height,
  },
  {
    id: 'ads-category',
    href: '/tasks?category=ads-category',
    name: 'Socila Media & Marketing',
    image: AdsImg.src,
    width: ItImg.width,
    height: ItImg.height,
  },
  {
    id: 'seo-category',
    name: 'SEO & Traffic',
    href: '/tasks?category=seo-category',
    image: SeoImg.src,
    width: ItImg.width,
    height: ItImg.height,
  },
  {
    id: 'biz-category',
    name: 'Business & Life',
    href: '/tasks?category=biz-category',
    image: BizImg.src,
    width: ItImg.width,
    height: ItImg.height,
  },
  {
    id: 'text-category',
    name: 'Text & Translation',
    href: '/tasks?category=text-category',
    image: TextImg.src,
    width: ItImg.width,
    height: ItImg.height,
  },
  {
    id: 'fx-category',
    name: 'Audio, Visual & Effects',
    href: '/tasks?category=fx-category',
    image: FxImg.src,
    width: ItImg.width,
    height: ItImg.height,
  },
]

export function Categories() {
  return (
    <div className='bg-white py-6 sm:py-8 '>
      <NestedLayout>
        <div className='mx-auto max-w-7xl px-3 lg:px-4'>
          <h2 className='text-xl mb-2'>Browse by categories</h2>
          <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
            {stats.map((stat) => (
              <figure
                className='relative max-w-sm transition-all rounded-lg cursor-pointer filter hover:drop-shadow-2xl'
                key={stat.id}>
                <LinkComponent href={stat.href}>
                  <Image height={stat.height} width={stat.width} src={stat.image} alt={stat.id} />
                </LinkComponent>
              </figure>
            ))}
          </dl>
        </div>
      </NestedLayout>
    </div>
  )
}

export function CategoriesNav() {
  return (
    <div className='bg-white py-6 px-5 sm:py-8 shadow-md'>
      <dl className='flex flex-row  text-center justify-center px-4'>
        {stats.map((stat) => (
          <dt key={stat.id + '-nav'} className='text-base leading-4 mx-4'>
            <LinkComponent href={stat.href} className='text-blue-600 hover:text-blue-400'>
              {stat.name}
            </LinkComponent>
          </dt>
        ))}
      </dl>
    </div>
  )
}
