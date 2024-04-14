import React from 'react'
import './BubbleSort3.css'
import {Link} from "react-router-dom";

import Octo from '../../../assets/octo.png'
import BlueFish from '../../../assets/blue fish.png'
import YellowFish from '../../../assets/yellow fish.png'
import Bubblesort3 from '../../../assets/bubble sort (1).png'


const BubbleSort3 = () => {
  return (
  <div className="BUBBLE-SORT">

     <div className="main-b1">
    
<div className="center-content">
      <img className='title1 instructions'  src={Bubblesort3} alt="" />
      <Link style={{textDecoration: 'none' , color:'white' }} to="/bubble-sort-playarea" > <button>Play</button></Link>
      </div>
    

     
    </div>
  
  
    
   

   
   </div>
   
  )
}

export default BubbleSort3