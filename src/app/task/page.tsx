'use client'

import { CategoriesNav, categoryById } from '@/components/Categories'
import { LinkComponent } from '@/components/LinkComponent'
import { NestedLayout } from '@/components/NestedLayout'
import { TaskCard, TaskType } from '@/components/TaskCard'
import { TaskList } from '@/components/TaskList'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Task() {
  const searchParams = useSearchParams()
  const [task, setTask] = useState<TaskType | undefined>(undefined)

  const id = searchParams.get('id')
  const checkIcon = (
    <svg
      className='w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 20 20'>
      <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
    </svg>
  )

  useEffect(() => {
    let url = `${process.env.NEXT_PUBLIC_SERVER_URL!}/task/${id}`
    fetch(url, {
      method: 'GET',
    })
      .then((response) => {
        if (response.status !== 200) {
          throw `HTTP Code: ${response.status}: ${response.statusText}`
        }
        return response.json()
      })
      .then((data) => {
        if (data !== undefined) {
          let thisTask = data as TaskType

          if (thisTask!.images !== undefined) {
            thisTask.content = thisTask.content.replace('{image_placeholder_0}', thisTask.images![0].link)
          }
          setTask(thisTask)
        }
      })
      .catch((error) => console.log(error))
  }, [id])

  return (
    <>
      <CategoriesNav></CategoriesNav>
      <NestedLayout>
        {task === undefined ? (
          <div className='text-center'>
            <div role='status'>
              <svg
                aria-hidden='true'
                className='inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className='flex'>
              <div
                className='basis-full flex flex-row px-4 rounded-t-lg bg-gray-300 px-4 align-middle justify-center '
                style={{ height: '100px' }}>
                {task!.projectVideo ? (
                  <video
                    width='84px'
                    height='56px'
                    preload='auto'
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='mx-4'
                    style={{ marginLeft: '10px', display: 'inline-block' }}>
                    <source src={task!.projectVideo} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img width='84px' height='56px' loading='lazy' alt='' src={task!.projectImage} />
                )}
                <p className='align-middle my-auto mx-4 font-sm' style={{ display: 'inline-block', height: 'auto' }}>
                  <span className='text-lg font-weight-200'>{task!.projectName}</span>
                  <br />
                  {task!.projectDescription}
                </p>
              </div>
            </div>
            <div className='flex'>
              <div
                className='basis-full flex flex-row px-4 rounded-b-lg bg-gray-200 px-4 align-middle justify-center mb-6 drop-shadow'
                style={{ height: '2rem' }}>
                <p className='align-middle my-auto mx-4 font-sm' style={{ display: 'inline-block', height: 'auto' }}>
                  This is a {task.projectName} task ID <span className='text-semibold'>{task._id}</span>, related to the{' '}
                  <LinkComponent
                    className='text-blue-300 hover:text-blue-400'
                    href={categoryById(task.categories[0])!.href}>
                    {categoryById(task.categories[0])!.name}
                  </LinkComponent>{' '}
                  work.
                </p>
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='basis-3/4 px-4'>
                <div className='card bg-base-100 shadow-xl'>
                  <div className='card-body'>
                    <p className='justify-begin text-sm text-left'>
                      Maintainer:{' '}
                      <LinkComponent
                        className='text-blue-400 hover:text-blue-500'
                        href={'https://forum.ara.foundation/u/' + task.maintainerUserName}>
                        {task.maintainerFirstName + ' ' + task.maintainerLastName}
                      </LinkComponent>
                    </p>
                    <h2 className='card-title text-lg'>{task.title}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: task.content,
                      }}></div>

                    <div className='divider'></div>
                    <div className='flex'>
                      <div className='basis-1/2 text-sm text-left text-xl text-green-900'>
                        {task.prize + ' ' + task.prizeType.symbol} reward
                      </div>
                      <div className='basis-1/2 text-sm text-right'>Est. {task.estHours} hours work</div>
                    </div>
                    <div className='text-red-400 text-center text-sm'>
                      Requires {task.prize * 0.5} {task.prizeType.symbol} worth ARA
                    </div>
                    <div className='mx-auto'>
                      <button className='btn btn-primary'>Book</button>
                    </div>
                    <div className='divider'></div>
                    <div className='card-actions justify-end'>
                      {task.tags.map((tag) => (
                        <LinkComponent
                          key={task._id + tag}
                          href={'/tasks?tag=' + tag}
                          className='badge badge-outline text-blue-400 hover:text-blue-500'>
                          #{tag}
                        </LinkComponent>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className='basis-1/4 px-4'>
                <div className='card bg-base-200 shadow-xl'>
                  <div className='card-body'>
                    <h2 className='card-title text-lg'>0. Requirements</h2>
                    <ul className='max-w-md space-y-1 text-gray-500 dark:text-gray-400 divide-y divide-dashed'>
                      <li className='flex items-center divide-y divide-dashed'>
                        {checkIcon}
                        <div>
                          {task.prize * 0.5} {task.prizeType.symbol} worth ARA to deposit
                        </div>
                      </li>
                      <li className='flex items-center'>
                        {checkIcon}
                        <div>
                          Knowledge of <LinkComponent href='https://gitlab.com'>Gitlab</LinkComponent>
                        </div>
                      </li>
                      <li className='flex items-center'>
                        {checkIcon}
                        <div>
                          Knowledge of{' '}
                          <LinkComponent href='https://git-scm.com'>
                            Git or similar Version Control Systems
                          </LinkComponent>
                        </div>
                      </li>
                      <li className='flex items-center'>
                        {checkIcon}
                        <div>
                          Basic experience with Unity (No coding, just as Tech Designer){' '}
                          <LinkComponent href='https://unity.com'>Unity3d</LinkComponent>
                        </div>
                      </li>

                      <li className='flex items-center'>
                        {checkIcon}
                        <div>Basic experience with Crypto and Crypto wallets </div>
                      </li>
                      <li className='flex items-center'>
                        {checkIcon}
                        <div>More importantly, drawing skill and experience</div>
                      </li>
                    </ul>
                    {/* <div
                      dangerouslySetInnerHTML={{
                        __html: task.content,
                      }}></div> */}
                  </div>
                </div>

                <div className='card bg-base-100 shadow-xl mt-4'>
                  <div className='card-body'>
                    <h2 className='card-title text-lg'>1. Workflow rule as a guide</h2>
                    <ul className='max-w-md space-y-1 text-gray-500 dark:text-gray-400 divide-y divide-dashed'>
                      <li className='flex items-center divide-y divide-dashed'>
                        {checkIcon}
                        <div>Book this task</div>
                      </li>
                      <li className='flex items-center'>
                        {checkIcon}
                        <div>Optionally play the game to see</div>
                      </li>
                      <li className='flex items-center'>
                        {checkIcon}
                        <div>
                          Fork the game{' '}
                          <LinkComponent
                            className='text-blue-300 hover:text-blue-400'
                            href='https://gitlab.com/milayter/frogwars.git'>
                            Gitlab/milayter/frogwars
                          </LinkComponent>
                        </div>
                      </li>
                      <li className='flex items-center'>
                        {checkIcon}
                        <div>
                          Create sprites and put them in <strong>Assets/_Project/Sprites /PlayerSprites/</strong>
                          the sprites must follow the same style and resolution as other PNGs. The sprites must be named
                          by nft id.
                        </div>
                      </li>
                      <li className='flex items-center'>
                        {checkIcon}
                        <div>Create a new pull request by attaching the task id in the title</div>
                      </li>
                      <li className='flex items-center'>
                        {checkIcon}
                        <div>All information about resolution goes in the comments for the pull request</div>
                      </li>
                      <li className='flex items-center'>
                        {checkIcon}
                        <div>Merging of the pull request will return back your tokens and a reward</div>
                      </li>
                      <li className='flex items-center'>
                        {checkIcon}
                        <div>
                          On Top Right, next to you the wallet button you see the balance icon. Through that icon visit
                          the balance management. Redeem any token from the treasury you prefer.
                        </div>
                      </li>
                    </ul>
                    {/* <div
                      dangerouslySetInnerHTML={{
                        __html: task.content,
                      }}></div> */}
                  </div>
                </div>
                <div className='card bg-base-500 shadow-xl mt-4'>
                  <div className='card-body'>
                    <h2 className='card-title text-lg'>2. Support & Problem resolution</h2>
                    <ul className='max-w-md space-y-1 text-gray-500 dark:text-gray-400 divide-y divide-dashed'>
                      <li className='flex items-center divide-y divide-dashed'>
                        {checkIcon}
                        <div>
                          If price or time is not write, contact to Maintainer:{' '}
                          <LinkComponent
                            className='text-blue-400 hover:text-blue-500'
                            href={'https://forum.ara.foundation/u/' + task.maintainerUserName}>
                            {task.maintainerFirstName + ' ' + task.maintainerLastName}
                          </LinkComponent>
                        </div>
                      </li>
                      <li className='flex items-center divide-y divide-dashed'>
                        {checkIcon}
                        <div>
                          For any additional questions you can also contact to Maintainer:{' '}
                          <LinkComponent
                            className='text-blue-400 hover:text-blue-500'
                            href={'https://forum.ara.foundation/u/' + task.maintainerUserName}>
                            {task.maintainerFirstName + ' ' + task.maintainerLastName}
                          </LinkComponent>
                        </div>
                      </li>
                      <li className='flex items-center'>
                        {checkIcon}
                        <div>
                          If you got a conflict with Maintainer, post a forum on Ara with the `sangha`, `$
                          {task.projectName}` tag and explain your issue.{' '}
                          <LinkComponent
                            className='text-blue-300 hover:text-blue-400'
                            href='https://forum.ara.foundation'>
                            Ara Forum
                          </LinkComponent>
                        </div>
                      </li>
                    </ul>
                    {/* <div
                      dangerouslySetInnerHTML={{
                        __html: task.content,
                      }}></div> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </NestedLayout>
    </>
  )
}
