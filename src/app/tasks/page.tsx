'use client'

import { CategoriesNav } from '@/components/Categories'
import { TaskList } from '@/components/TaskList'

export default function Tasks() {
  return (
    <>
      <CategoriesNav></CategoriesNav>
      <TaskList primaryCategory='Design'></TaskList>
    </>
  )
}
