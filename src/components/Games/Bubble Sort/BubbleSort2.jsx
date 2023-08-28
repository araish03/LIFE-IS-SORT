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
import Num1 from '../../../assets/Num1.png'
import Num2 from '../../../assets/Num2.png'
import Num3 from '../../../assets/Num3.png'
import Num4 from '../../../assets/Num4.png'
import Num5 from '../../../assets/Num5.png'
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
 <img src={BigBottom} className=' aquatic bottom' alt="" />
<img src={BubbleA} alt="" className='aquatic bubblea' />
<img src={BubbleA} alt="" className='aquatic  down' />
<img src={BubbleB} alt="" className='aquatic bubbleb' />

<Board/>


    </div>
  
  
    
   

   
   </div>
   
  )
}

export default BubbleSort2