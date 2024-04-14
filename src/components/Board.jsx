import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Arrow from "./Arrow";
// ...
import "./Arrow.css";

const BubbleWithArrow = ({ circle, index, handleCircleClick, hideArrow }) => {
  return (
    <div className="bubble-container">
      <motion.div
        key={circle.id}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "blue",
          margin: "40px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "40px",
        }}
        onClick={() => handleCircleClick(circle)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        layout
      >
        {circle.number}
      </motion.div>

      {!hideArrow && <Arrow id={`arrow_${index}`} />}
    </div>
  );
};
const Board = () => {
  const [circles, setCircles] = useState([
    { id: 1, backgroundColor: "blue", number: 42 },
    { id: 2, backgroundColor: "blue", number: 30 },
    { id: 3, backgroundColor: "blue", number: 62 },
    { id: 4, backgroundColor: "blue", number: 19 },
    { id: 5, backgroundColor: "blue", number: 23 },
  ]);
  const [prevClickedIndex, setPrevClickedIndex] = useState(-1);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  // Track the highlighted circle
  const [poppedCircles, setPoppedCircles] = useState([]);
  const [uniquePoppedIds, setUniquePoppedIds] = useState(new Set());
  const [compareIndices, setCompareIndices] = useState({
    firstIndex: null,
    secondIndex: null,
  });
  const [showConfetti, setShowConfetti] = useState(false);
  //const [compareCount, setCompareCount] = useState(0);
  const numbers = [42, 30, 62, 19, 23];
  const [swaps, setSwaps] = useState([]);
  //const [arrowIndices, setArrowIndices] = useState([0, 1]);
  const [hideArrows, setHideArrows] = useState([
    false,
    false,
    true,
    true,
    true,
  ]);
  const [swapCount, setSwapCount] = useState(0);
  let [comparisonCount, setComparisonCount] = useState(0);
  const [message, setMessage] = useState("Arrange the bubbles in increasing order");
  const [delayElapsed, setDelayElapsed] = useState(false);
  useEffect(() => {
    if (
      compareIndices.firstIndex !== null &&
      compareIndices.secondIndex !== null
    ) {
      const delay = setTimeout(() => {
        setCompareIndices({ firstIndex: null, secondIndex: null });
      }, 2000);

      return () => clearTimeout(delay);
    }
  }, [compareIndices]);

  useEffect(() => {
    const { swaps: sortedSwaps } = bubbleSortWithSwaps(numbers);
    setSwaps(sortedSwaps);
    console.log("Swaps=", swaps);
  }, []); // Empty dependency array ensures the effect runs only once on mount
  useEffect(() => {
    if (message === "Arrange the bubbles in increasing order") {
      setTimeout(() => {
        setDelayElapsed(true);
        const visibleCircles = circles.filter((circle, index) => !hideArrows[index]);
        if (visibleCircles.length > 1) {
          setMessage(`Is ${visibleCircles[0].number} > ${visibleCircles[1].number}`);
        }
      }, 5000); // 5 seconds delay
    }
  }, [message, circles, hideArrows]);
  const bubbleSortWithSwaps = (arr) => {
    const sortedArr = [...arr];
    const swaps = [];

    let n = sortedArr.length;
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (sortedArr[i] > sortedArr[i + 1]) {
          swaps.push([sortedArr[i], sortedArr[i + 1]]); // Store the pair being swapped
          [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
          swapped = true;
        }
      }
      n--;
    } while (swapped);

    return { sortedArr, swaps };
  };

  const handleCircleClick = (clickedCircle) => {
    if (!delayElapsed) return;
    let clickedIndex = circles.findIndex(
      (circle) => circle.id === clickedCircle.id
    );
    console.log(
      "prev index and clicked index",
      prevClickedIndex + 1,
      clickedIndex
    );
    if (clickedIndex !== prevClickedIndex + 1) return;
    setCircles((prevCircles) => {
      //console.log("Clicked Index",clickedIndex);
      const newCircles = [...prevCircles];
      let largestNumber = Number.MIN_SAFE_INTEGER;
      let largestIndex = -1;
      let firstIndex = null;
      let secondIndex = null;
      let largestNum = 0;
      let pair = [];
      if (swaps.length !== 0) {
        pair = swaps[0];
        //console.log("Pair 0,1",pair[0],pair[1])
      }

      let indexOfLargestNumber = 0;

      const newHideArrows = hideArrows.map((value, index) => {
        //console.log("Index=",index)
        if (clickedIndex === 0 && (index === 0 || index === 3 || index === 4)) {
          return true; // Hide arrows for indexes 0, 3, 4 if clicked index is 0
        } else if (clickedIndex === 0 && index === 2) {
          return false; // Unhide arrow for index 2 if clicked index is 0
        } else if (clickedIndex === 1 && index === 3) {
          return false; // Unhide arrow for index 3 if clicked index is 1
        } else if (clickedIndex === 2 && index === 4) {
          return false; // Unhide arrow for index 4 if clicked index is 2
        } else if (
          (clickedIndex === 1 && (index === 0 || index === 1 || index === 4)) ||
          (clickedIndex === 2 && (index === 0 || index === 1 || index === 2)) ||
          (clickedIndex === 3 && (index === 0 || index === 1))
        ) {
          return true; // Hide arrows for specified indexes
        } else {
          return value; // Preserve hideArrows value for other indexes
        }
      });
      //console.log("Length of circles-",circles.length)

      setHideArrows(newHideArrows);
      if (clickedIndex + 2 === circles.length) {
        setHideArrows([false, false, true, true, true]);
      }
      let i = clickedIndex + 1;

      setPrevClickedIndex(clickedIndex);
      console.log("clicked index", clickedIndex);
      firstIndex = clickedIndex;
      secondIndex = i;
      //console.log("firstIndex=",firstIndex," Second Index=",secondIndex)
      //console.log("Pair[0]=",pair[0],"Pair[1]=",pair[1],"clicked circle=",clickedCircle.number,"Newcircle=",newCircles[i])
      if (
        swaps.length > 0 &&
        clickedCircle.number === pair[0] &&
        newCircles[i].number === pair[1]
      ) {
        [newCircles[clickedIndex], newCircles[i]] = [
          newCircles[i],
          clickedCircle,
        ];

        //console.log(newCircles)
        const [, ...remainingSwaps] = swaps;
        setSwaps(remainingSwaps);

        setHighlightedIndex(clickedIndex + 1); // Highlight the circle meeting the condition
        setSwapCount((prevCount) => prevCount + 1);
        //setArrowIndices([clickedIndex, i]);
        console.log("Swap Count=", swapCount);
        setComparisonCount((prevCount) => prevCount + 1);
        console.log("Comparision count=", comparisonCount);
      } else {
        setComparisonCount((prevCount) => prevCount + 1);
      }

      largestNum = Math.max(...prevCircles.map((circle) => circle.number));
      //indexOfLargestNumber = prevCircles.findIndex((circle) => circle.number === largestNum);

      newCircles.forEach((circle, index) => {
        if (circle.number > largestNumber) {
          largestNumber = circle.number;
          largestIndex = index;
        }
      });

      if (newCircles.length - 1 === largestIndex) {
        //console.log("Size of circles=",newCircles.length)

        setPrevClickedIndex(-1);

        
        if (newCircles.length > 2) {
          const [poppedCircle] = newCircles.splice(largestIndex, 1);
          if (!uniquePoppedIds.has(poppedCircle.id)) {
            setUniquePoppedIds(
              (prevSet) => new Set(prevSet.add(poppedCircle.id))
              );
              setPoppedCircles((prevPoppedCircles) => [
                poppedCircle,
              ...prevPoppedCircles,
            ]);
          }
        } else {
          console.log("li", largestIndex);
          const [poppedCircle,poppedCircle2] = newCircles.splice(0, 2)
          //const [poppedCircle2] = newCircles.splice(0, 1)
          console.log("Popped circles=",poppedCircle,poppedCircle2)
          if (
            !uniquePoppedIds.has(poppedCircle.id) &&
            !uniquePoppedIds.has(poppedCircle2.id) 
          ) {
            setUniquePoppedIds(
              (prevSet) =>
                new Set(prevSet.add(poppedCircle.id).add(poppedCircle2.id))
            );
            setPoppedCircles((prevPoppedCircles) => [
              poppedCircle,poppedCircle2,
              ...prevPoppedCircles,
            ]);

          }
        }

        //console.log("Size of circles=",newCircles.length)

        //console.log("end largest : ",largestNum);
        //console.log("end index: ",indexOfLargestNumber);
        //setHighlightedIndex(indexOfLargestNumber);
      }
      console.log("Newcricles",newCircles,i)
      if((i)===newCircles.length){
        i=0;
      }
      if(newCircles.length>0){

        setMessage(`Is ${newCircles[i].number} > ${newCircles[i+1].number}`);
      }
      return newCircles;
    });
    
  };

  useEffect(() => {
    const allGreen = circles.every(
      (circle) => circle.backgroundColor === "green"
    );
    if (allGreen) {
      setMessage("Bubbles Sorted!!");
      setShowConfetti(true);
    }
  }, [circles]);

  return (
    <div>
      
      <div
        className="board"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="comp">{message}</div>
        {circles.map((circle, index) => (
          <BubbleWithArrow
            key={circle.id}
            circle={circle}
            index={index}
            handleCircleClick={handleCircleClick}
            hideArrow={hideArrows[index]}
          />
        ))}

        {poppedCircles.map((poppedCircle) => (
          <div
            key={poppedCircle.id}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "green",
              margin: "40px",
              cursor: "not-allowed",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "40px",
            }}
            layout
          >
            {poppedCircle.number}
          </div>
        ))}
        <div>
          <div className="count"> Swap Count: {swapCount}</div>
          <div className="comp">Comparison Count: {comparisonCount}</div>

        </div>
        {showConfetti && <Confetti />}
      </div>
      
    </div>
  );
};

export default Board;
