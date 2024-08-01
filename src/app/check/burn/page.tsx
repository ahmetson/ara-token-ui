'use client'
import { useState, useEffect, useRef } from 'react'
import ActProject from '@/components/ActProject'
import { Project, Projects } from '@/utils/projects'
import ActCheckBalance from '@/components/ActCheckBalance'

export default function SendEther() {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined)

  const handleProjectSelect = (projectName: string) => {
    let project = Projects.find((project) => {
      return project.name === projectName
    })
    setSelectedProject(project)
  }

  return (
    <div className='flex-column align-center '>
      <h1 className='text-xl'>Projects</h1>
      <h1 className='text'>Pick the project that you worked on. It will suggest the network where you are</h1>
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
      <div className='flex align-end gap-4 my-8'>
        <ActCheckBalance project={selectedProject} />
      </div>
    </div>
  )
}
