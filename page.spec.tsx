import '@testing-library/jest-dom'
import {render, screen}  from '@testing-library/react'
import React from 'react'
import AboutMePage from './app/page'




describe ('About Me Page', () =>{

    // Can also be written as: 
    // test('', () => { }) 

    it ('should render w/o crashing', () =>{
        render(<AboutMePage />)
        const title = screen.getByText(/Hello! I'm Javier Aceves/)
        expect (title).toBeInTheDocument()
    })

})