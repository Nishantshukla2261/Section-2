'use client'; //aise hi likna hai space bhi mhi dena hai extra
import React from 'react'

const EventHandling = () => {
  return (
    <div>
        <div className='container mx-auto my-5'>
            <h1 className='mt-4 font-bold text-3xl text-center'>
                Event Handling
            </h1>

            <button
                onClick={() => { alert('button was clicked');}}  //on likhenge to sare events aa jate hai
                className='p-3 border bg-gray-300 rounded-lg'> Click Event</button>

            <input
                onChange={(e) => {console.log(e.target.value);}}
                className='mt-5 border p-3 w-full' type="text" />

            <input
                onChange={(e) => {console.log(document.body.style.backgroundColor=e.target.value);}}
                className='mt-5' type="color" />



        </div>
    </div>
  )
}

export default EventHandling