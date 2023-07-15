import React from 'react'
import { Envelope, Linkedin, Medium, Twitter } from "../icons";

type FooterProps ={
  data: string[]
}


const Footer = ({data}: FooterProps) => {
  return (
    <footer className='w-full bg-white shadow-footer mt-12 py-4 fixed bottom-0'>
      <div className='flex gap-1 justify-center items-center'>
        <a href={[data[0]]} aria-label='Email' ><Envelope className='icons_contactme'/> </a>
        <a href={[data[1]]} aria-label='Twitter' ><Twitter className='icons_contactme' /> </a>
        <a href={[data[2]]} aria-label='Linkedin' ><Linkedin className='icons_contactme' /> </a>
        <a href={[data[3]]} aria-label='Medium' ><Medium className='icons_contactme' /> </a>
      </div>
    </footer>
  )
}

export default Footer