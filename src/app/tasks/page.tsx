'use client'

import { Categories, CategoriesNav } from '@/components/Categories'
import { CTA } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { Steps } from '@/components/Steps'
import { TaskList } from '@/components/TaskList'

export default function Tasks() {
  return (
    <>
      <CategoriesNav></CategoriesNav>
      <TaskList primaryCategory='Design'></TaskList>
    </>
  )
}
