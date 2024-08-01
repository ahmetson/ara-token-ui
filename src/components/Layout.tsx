import React, { PropsWithChildren } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout(props: PropsWithChildren) {
  return (
    <div className='bg-gray-100 flex flex-col min-h-screen'>
      <Header />

      <main className=''>{props.children}</main>
      <Footer />
    </div>
  )
}
