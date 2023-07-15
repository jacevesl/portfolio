import React from 'react'
import { aboutMeData } from './data/data'
import Image from 'next/image'
const AboutMePage = () => {
  return (
    <div className='flex flex-col items-center '>
      <section className='flex sm:flex-row sm:w-10/12 items-center  flex-col w-full'>
        <div className='sm:w-1/3 w-full flex justify-center mt-12'>
          <Image 
          priority={false}
          src={'/images/Yo_2.jpg'} 
          width={640} 
          height={960} 
          alt={'my photo'}
          aria-label={'my photo'}
            className='profileImage'
          />
        </div>
        <div className='  sm:ml-20 sm:w-2/3 sm:mt-0 w-full mt-6 ml-0 p-10'>
          <h2 >{aboutMeData.title}</h2>
          <p className='text-base'>{aboutMeData.body}</p>
        </div>
      </section>
      <section className='w-full bg-blue-light p-10 h-full'>
        <p>{aboutMeData.highlightedBody}</p>
      </section>
      <section className='flex sm:flex-row sm:w-10/12 p-10 items-center w-full flex-col'>
        <div className='flex flex-col sm:w-7/12 w-full mb-10'>
          <p>{aboutMeData.body2}</p>
        </div>
        <div className='sm:w-5/12 sm:ml-10 w-full ml-0 sm:mb-0'>
          <Image
            priority={false}
            src={'/images/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg'}
            width={500}
            height={250}
            alt={'kaitlyn-baker-vZJdYl5JVXY-unsplash'}
            aria-label={'kaitlyn-baker-vZJdYl5JVXY-unsplash'}
            className='h-250 object-cover w-500'
          />
        </div>
      </section>
    </div>
  )
}

export default AboutMePage