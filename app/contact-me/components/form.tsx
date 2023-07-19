'use client'
import React, { useState } from "react";

const Form = () => {
    const [isMessageSent, setMessageSent] = useState<boolean>(false);
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const target = event.currentTarget;

        const name = target.elements.namedItem("name") as HTMLInputElement;
        const company = target.elements.namedItem("company") as HTMLInputElement;
        const email = target.elements.namedItem("email") as HTMLInputElement;
        const message = target.elements.namedItem("message") as HTMLInputElement;

        const data = {
            name: name.value,
            company: company.value,
            email: email.value,
            message: message.value,
        };
        try {
            const response = await fetch('/api/contact', 
            {   method:'POST',
            body: JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok){throw new Error('HTTP error status:' + response.status)}
            setMessageSent(true);
        } catch (error:any) {
            console.log('There was a server error ' + error.message)
        }
    }
    return (
        <>
    
    

    <form onSubmit={handleSubmit} className='bg-white'>
        <div className='mb-4'>
            <label className='label-form' htmlFor='name'>Name</label>
            <input
            id='name'
            type='text'
            name='name'
            className='input-form'
            required
            minLength={3}
            maxLength={200}
            />
        </div>
          <div className='mb-4'>
              <label className='label-form' htmlFor='email'>Email</label>
              <input
                  id='email'
                  type='text'
                  name='email'
                  className='input-form'
                  required
                  minLength={5}
                  maxLength={200}
              />
          </div>
          <div className='mb-4'>
              <label className='label-form' htmlFor='company'>Company</label>
            {/* The htmlFor property sets or returns the value of the for attribute of a label.
                The for attribute specifies which form element a label is bound to. */}
 
              <input
                  id= 'company'
                  type='text'
                  name='company'
                  className='input-form'
                  minLength={2}
                  maxLength={200}
              />
          </div>
          <div className='mb-4'>
              <label className='label-form' htmlFor='message'>Message</label>
              <textarea
                  id='message'
                //   type='text'
                  name='message'
                  className='input-form'
                  required
                  minLength={10}
                  maxLength={1000}
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
            {isMessageSent && <p>Your message has been sent, thank you</p>}
        </>
  )
}

export default Form
