import React from 'react'
import { projects } from '../data/data'
import ProjectCard from './components/project-card'
const MyProjects = () => {
  return (
    <div className='flex flex-col w-11/12 content-center m-auto mt-10'>
        <h2 className='font-bold mb-4'> My Projects </h2>
        <div className='flex flex-row flex-wrap gap-10 mt-6'>
            {projects.map((item, index) =>{
                return <ProjectCard data={item} key={index}/>
                })
            }
        </div>
    </div>
  )
}

export default MyProjects
