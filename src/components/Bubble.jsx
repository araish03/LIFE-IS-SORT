import React from 'react'
import './Bubble.css'
import Num1 from '../assets/Num1.png'
const Bubble=({number,onClick})=> {
  return (
    <div 
    className='bubbleg' 
    onClick={onClick}>
      {number}
    </div>
  )
}
export default Bubble;

// style={{backgroundImage: `url(${Num1})` , width: '5rem', height:'5rem' }}