import React, { PropsWithChildren } from 'react'

export function NestedLayout(props: PropsWithChildren) {
  return <div className='container px-4 flex-grow max-w-4xl mx-auto'>{props.children}</div>
}
