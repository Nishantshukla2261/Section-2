import Card from '@/components/Card';
import MyButton from '@/components/MyButton';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center my-5 font-bold text-3xl'>Home Page</h1>
      <p style={{ color: 'red', fontWeight: 'bold', fontSize: 50 }}>
        JSX is the combination of html and js</p>
      <input type="text" />
      <br />
      <hr />

      <button className='global-btn'>Home button</button>
      <button className='contactBtn'>Using local button</button>
      <img src="/next.svg" />
      <div className='w-1/2 m-10'>
      <Card
      title='Card 1 Title'
      description='CArd 1 Description'/>
      <Card 
      title='Card 2 Title'
      description='CArd 2 Description'/>
      <Card
       title='Card 3 Title'
      description='CArd 3 Description'/>
      <Card
       title='Card 4 Title'
      description='CArd 4 Description'/>
      <Card
       title='Card 5 Title'
      description='CArd 5 Description'/>

      <MyButton>Click Me</MyButton>
      <MyButton>Explore </MyButton>
      <MyButton>Yes</MyButton>
      <MyButton>No</MyButton>
      
      </div>
    </div>
  )
}

export default Home;