import React from 'react';
import classes from './contact.module.css';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <button className='global-btn'>Global Login Button</button>
      <button className={classes.contactBtn}>Local button</button>
      
    </div>
  )
}
// camel case contact.Btn likha to curly bracket lgaya nhi to classes['contact-btn'] aise likhte
//import classes ki jgh koi orr bhi naam add kr sakte h
//image ke liye public se use krenge phle public me dalenge
export default Contact ;