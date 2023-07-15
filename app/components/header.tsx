import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// This is for typescript:
type HeaderProps ={
  data: {
    name:string
  }
  pages: {
    id: number,
    label: string,
    link: string
  }[]

}

const Header = ({data, pages}: HeaderProps) => {
  return (
    <header className='flex flex-col relative bg-linear-557AFF w-full h-48 '>
      <div className='flex flex-col justify-around h-full sm:px-6 px:1 bg-header z-10'>
        <nav className='text-right flex flex-row sm:gap-6 self-end gap-1'>
          {pages.map((item) => {  
            return(
            <Link 
              aria-label={item.label}
              key={item.id}
              href={item.link}
              className='px-6 py-2 min-w-100 hover:bg-blue-light 
              hover:text-blue font-display uppercase tracking-wide
              sm:bg-transparent bg-white 
              '>
                {item.label}
            </Link>
            )
          })

          }
        </nav>
        <h1 className='text-white uppercase pl-2 sm:pl-0'>{data.name}</h1>
      </div>
      <Image 
      priority 
        src='/images/jeshoots-com-pUAM5hPaCRI-unsplash.jpg' 
      width={2000} 
      height={400} 
      alt={`Image of ${data.name}`}
      className='w-full h-48 object-cover object-top absolute mb-6'
      aria-label={`Image of ${data.name}`}
      />
    </header>
  )
}

export default Header