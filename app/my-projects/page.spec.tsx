import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import MyProjects from './page'

describe('My Projects page', () => {
    // Can also be written as: 
    // test('', () => { }) 
    it('should render w/o crashing', () => {
        render(<MyProjects />)
        const title = screen.getByText('My Projects')
        expect(title).toBeInTheDocument()
    })
})