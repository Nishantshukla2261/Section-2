import React from 'react'

const Login = () => {  //L yha L capital hi hona chahiye
  return (
    <div className='flex justify-center items-center h-screen bg-pink-200 '>
      <div className='border border-gray-300 shadow-xl rounded-lg w-1/5 p-8 bg-white  '>
        <h1 className='text-2xl font-bold text-center my-5'>Login Page</h1>
        <form>
          <label>Email address</label>
          <input type="email" className='border border-violet-200 w-full rounded p-2 mb-5' />

          <label> Password</label>
          <input type="password" className='border border-violet-200 w-full rounded p-2 mb-5' />

          <a href="#" className='text-violet-500 font-bold hover:underline hover:text-yellow-500'>Forget Password</a>
          <button className='block bg-violet-500 text-white w-full p-2 rounded mt-4'>Submit</button>
        </form>

      </div>
      
    </div>
  )
}

export default Login ;