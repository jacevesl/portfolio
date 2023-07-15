'use client'
import React from 'react'

const Form = () => {
  return (
    <form 
    onSubmit={() => console.log(s)} 
    className='bg-white '
    >
        <div className='mb-4'>
            <label 
            className='label-form'
            htmlFor='name'
            >Name</label>
            <input
            id='name'
            type='text'
            name='name'
            className='input-form'
            />
        </div>
          <div className='mb-4'>
              <label
                  className='label-form'
                  htmlFor='email'
              >Email</label>
              <input
                  id='email'
                  type='text'
                  name='email'
                  className='input-form'
              />
          </div>
          <div className='mb-4'>
              <label
                  className='label-form'
                  htmlFor='company'
            //       The htmlFor property sets or returns the value of the for attribute of a label.
            //       The for attribute specifies which form element a label is bound to.
              >Company</label>
              <input
                  id=  'company'
                  type='text'
                  name='company'
                  className='input-form'
              />
          </div>
          <div className='mb-4'>
              <label
                  className='label-form'
                  htmlFor='message'
              >Message</label>
              <textarea
                  id='message'
                //   type='text'
                  name='message'
                  className='input-form'
              />
          </div>
          <button 
          className='
          
          bg-blue 
          rounded-md 
          p-2 
          text-white 
          min-w-100
          hover:text-blue hover:bg-white hover:border'
          type='submit'>Send Message</button>
    </form>
  )
}

export default Form
