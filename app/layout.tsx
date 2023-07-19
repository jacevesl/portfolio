import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import './globals.css'
import type { Metadata } from 'next'
import { aboutMeData, pages, contactMeLinks } from './data/data'


export const metadata: Metadata = {
  title: 'Portfolio App',
  description: 'Course by Alicia Rodriguez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body >
        <Header  data={aboutMeData} pages={pages}/>
        <main className='sm:mb-32 mb-16'>
        {children}
        </main>
        <Footer data={contactMeLinks} />
      </body>
    </html>
  )
}
