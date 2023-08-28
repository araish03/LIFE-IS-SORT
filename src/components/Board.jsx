import React,{useState} from 'react'
import Bubble from './Bubble'
import './Board.css' 

export default function Board() {

  const [bubbles,setBubbles]=useState([
    {number :42},{number: 30},{number :16},{number: 19},{number :23}
  ])
  const [prevClickedIndex, setPrevClickedIndex] = useState(null);
  const handleBubbleClick = (clickedIndex) => {
    if(prevClickedIndex!==clickedIndex &&
      clickedIndex<(bubbles.length)-1 && 
      bubbles[clickedIndex].number > bubbles[clickedIndex + 1].number)
    {
      setBubbles((prevBubbles) => {
      const newBubbles = [...prevBubbles];
      // Swap the positions of the bubbles
      [newBubbles[clickedIndex], newBubbles[clickedIndex+1]] = [newBubbles[clickedIndex+1], newBubbles[clickedIndex]];
      console.log(newBubbles);
      return newBubbles;
    });
    setPrevClickedIndex(clickedIndex);
    
  }
  
  };

  return (
    <div className='board-container'>
      <div className='board-row'>
        <div className="inboard">
      {bubbles.map((bubble,index)=>(
        <Bubble 
          key={index}
          number={bubble.number}
          onClick={()=>handleBubbleClick(index)}
        />
      ))}
      </div>
      </div>
    </div>
    
  )
}
