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
  { id: 'it-category', href: '/tasks?category=it', image: ItImg.src, width: ItImg.width, height: ItImg.height },
  { id: 'art-category', href: '/tasks?category=art', image: ArtImg.src, width: ItImg.width, height: ItImg.height },
  {
    id: 'ads-category',
    href: '/tasks?category=ads',
    image: AdsImg.src,
    width: ItImg.width,
    height: ItImg.height,
  },
  { id: 'seo-category', href: '/tasks?category=seo', image: SeoImg.src, width: ItImg.width, height: ItImg.height },
  { id: 'biz-category', href: '/tasks?category=biz', image: BizImg.src, width: ItImg.width, height: ItImg.height },
  {
    id: 'text-category',
    href: '/tasks?category=text',
    image: TextImg.src,
    width: ItImg.width,
    height: ItImg.height,
  },
  { id: 'fx-category', href: '/tasks?category=fx', image: FxImg.src, width: ItImg.width, height: ItImg.height },
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
