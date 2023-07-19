
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {Envelope} from './envelope'
 
describe('Envelope icon', () => {

    it('should render w/o crashing', () => {
        const {container}= render(<Envelope className='class'/>)
        const svgElement = container.querySelector('svg')

        expect (svgElement).toBeInTheDocument()
        expect(svgElement).toHaveAttribute('width', '1em' )        
        expect(svgElement).toHaveAttribute('height', '1em' )
        expect(svgElement).toHaveClass('class')
    })
})
 