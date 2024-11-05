import React from 'react'

const MyButton = ({children}) => {  //children ise liye liye ji jo button ke andr likhenge vo aayega dusri file ke
  return (
    <button className='bg-black text-white p-3 rounded-md'>{children}</button>
  )
}

export default MyButton