import React from 'react'

import './BubbleSort2.css'

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
import BigBottom from '../../../assets/Bigbottom.png'

import Board from '../../Board.jsx'
const BubbleSort2 = () => {
  return (
  <div className="BUBBLE-SORT">

     <div className="main-b">
    

    

      
  <img src={BlueFish} className='aquatic blue' alt="" />
  <img src={YellowFish} className='aquatic yellow2' alt="" />
 <img src={BlueCoral} className='aquatic bluecoral ' alt="" />
 <img src={BlueCoral} className='aquatic rightcoral ' alt="" />
 <img src={YellowCoral} className='aquatic yellowcoral' alt="" />
 
<img src={BubbleA} alt="" className='aquatic bubblea' />
<img src={BubbleA} alt="" className='aquatic  down' />
<img src={BubbleB} alt="" className='aquatic bubbleb' />

<Board/>


    </div>
  
  
    
   

   
   </div>
   
  )
}

export default BubbleSort2