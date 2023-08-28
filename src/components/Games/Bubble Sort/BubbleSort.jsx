import React from 'react'
import './BubbleSort.css'
import {Link} from "react-router-dom";

import Octo from '../../../assets/octo.png'
import BlueFish from '../../../assets/blue fish.png'
import YellowFish from '../../../assets/yellow fish.png'
import Bubblesort from '../../../assets/Bubblesort.png'
import Shark from '../../../assets/shark.png'
import Bottom from '../../../assets/bottom.png'
import BlueCoral from '../../../assets/blue coral.png'
import YellowCoral from '../../../assets/yellow coral.png'
import BubbleA from '../../../assets/bubbleA.png'
import BubbleB from '../../../assets/bubbleB.png'

const BubbleSort = () => {
  return (
  <div className="BUBBLE-SORT">

     <div className="main-b">
    
<div className="center-content">
      <img className='title' src={Bubblesort} alt="" />
      <Link style={{textDecoration: 'none' , color:'white' }} to="/bubble-sort-playarea" > <button>Learn and Play</button></Link>
      </div>
    

      <img src={Octo} className='aquatic octo' alt="" />
  <img src={BlueFish} className='aquatic blue' alt="" />
  <img src={YellowFish} className='aquatic yellow' alt="" />
  <img src={Shark} className='aquatic shark' alt="" />
 <img src={BlueCoral} className='aquatic bluecoral ' alt="" />
 <img src={BlueCoral} className='aquatic rightcoral ' alt="" />
 <img src={YellowCoral} className='aquatic yellowcoral' alt="" />
 <img src={Bottom} className=' aquatic bottom' alt="" />
<img src={BubbleA} alt="" className='aquatic bubblea' />
<img src={BubbleA} alt="" className='aquatic  down' />
<img src={BubbleB} alt="" className='aquatic bubbleb' />

    </div>
  
  
    
   

   
   </div>
   
  )
}

export default BubbleSort