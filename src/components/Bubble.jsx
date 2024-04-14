import React from 'react'
import './Bubble.css'
import './Arrow.jsx'
import Arrow from './Arrow.jsx'
const Bubble=({number,onClick})=> {
  return (
    <div 
    className='bubble' 
    onClick={onClick}>
      {number}
      
    </div>
  )
}
export default Bubble;