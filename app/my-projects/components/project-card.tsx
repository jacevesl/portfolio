import Image from 'next/image'
import React from 'react'
import {Github, Window} from '../../icons'
type  ProjectCardProps ={
    data: {
        title: string,
        body1: string,
        body2: string,
        image: string,
        links: {
            text:string,
            url:string
        }[]

    }
}

const ProjectCard = ({data}: ProjectCardProps) => {
    const {title, body1, body2, image, links}= data
    // console.log(links)
  return (
            <div className='rounded-lg w-full shadow-lg bg-grey-light sm:w-1/3-g 
            '>
            <Image aria-label ={image } 
            priority={false}
            height={250} 
            width ={500}
            src ={`/images/${image}`}
            alt ='image'
            className='object-cover w-full h-48'
            />
             {/* body  */}
            <div className='p-4'>
                  <h3 className='text-lg font-medium '>{title}</h3>
                  <p className='text-sm mt-2 min-h-50'>{body1}</p>
                  <p className='text-sm mt-2 min-h-50'>{body2}</p>
            </div>
       {/* footer  */}
            <div className='p-4 flex flex-row mt-4 justify-between'>
                {/* Github icon  */}
                <Github className='icons-contactMe'/>
                <a href={links[0].url} className='flex items-center'>Icon <span className='text-black'>{links[0].text}</span></a>
                {/* Site icon  */}
                <Window className='icons-contactMe'/>
                  <a href={links[1].url} className='flex items-center'>Icon <span className='text-black'>{links[1].text}</span></a>
            </div>

        </div>
  )
}

export default ProjectCard