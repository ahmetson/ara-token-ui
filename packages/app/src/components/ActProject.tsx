'use client'
import { Project } from '@/utils/projects'

export default function ActProject({
  project,
  checkProjectAmount,
  selected,
  onProjectSelection,
}: {
  project: Project
  checkProjectAmount: { [key: string]: number }
  selected: string
  onProjectSelection: (to: string) => void
}) {
  return (
    <li
      className={
        'max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' +
        (selected === project.name ? 'bg-lime-200 hover:bg-lime-300' : '')
      }>
      <a href='#'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {project.name}
          {selected === project.name && (
            <span className='inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300'>
              <svg
                className='w-2.5 h-2.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 16 12'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 5.917 5.724 10.5 15 1.5'
                />
              </svg>
            </span>
          )}
        </h5>
      </a>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{project.description}</p>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        {' '}
        Developing Projects: {checkProjectAmount[project.name]}
      </p>
      <button
        onClick={() => onProjectSelection(project.name)}
        className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
        Select
      </button>
    </li>
  )
}
