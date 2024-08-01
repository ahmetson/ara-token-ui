'use client'
import { useAccount, useBalance, useEstimateGas, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi'
import { useState, useEffect, useRef } from 'react'
import { parseEther, isAddress } from 'viem'
import { useNotifications } from '@/context/Notifications'
import Ethereum from '@/assets/icons/ethereum.png'
import { AddressInput } from '@/components/AddressInput'
import { TokenBalance } from '@/components/TokenBalance'
import { TokenQuantityInput } from '@/components/TokenQuantityInput'
import { formatBalance } from '@/utils/formatBalance'
import ActProject from '@/components/ActProject'
import { Project, Projects } from '@/utils/projects'
import ActCollaterals from '@/components/ActCollaterals'
import ActCheckProjects from '@/components/ActCheckProjects'

export default function SendEther() {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined)

  const handleProjectSelect = (projectName: string) => {
    let project = Projects.find((project) => {
      console.log(`Check project ${project.name}, is it matching? ${project.name == projectName}`)
      return project.name === projectName
    })
    console.log(`HandleProjectSelect to ${projectName}, found project? ${project}`)
    setSelectedProject(project)
  }

  return (
    <div className='flex-column align-center '>
      <h1 className='text-xl'>Projects</h1>
      <ul className='flex align-end grid md:grid-cols-2 lg:grid-cols-2 gap-2 '>
        {Projects.map(function (object, i) {
          return (
            <ActProject
              onProjectSelection={handleProjectSelect}
              project={object}
              checkProjectAmount={{ '': 1 }}
              selected={selectedProject == undefined ? '' : selectedProject.name}
              key={'act-mint-' + i}
            />
          )
        })}
      </ul>
      <div className='flex align-end grid md:grid-cols-1 lg:grid-cols-2 gap-4 my-8'>
        <ActCollaterals project={selectedProject} />
      </div>
      <div className='flex align-end grid md:grid-cols-1 lg:grid-cols-2 gap-4 my-8'>
        <ActCheckProjects project={selectedProject} />
      </div>
    </div>
  )
}
