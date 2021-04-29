import React, { useState, useEffect } from "react";
import "./sorting.css";
import * as mergeSorting from "./mergeSorting";
export default function Sorting() {
  const [arr, setarr] = useState([]);
  useEffect(() => {
    resetArray();
  }, []);
  function resetArray() {
    const arr = [];
    for (let i = 0; i < 300; i++) {
      arr.push(randomint(5, 500));
    }
    setarr(arr);
  }

  const mergeSort = () => {
    const sortedArray = mergeSorting.mergeSort(arr);
    const jsSortedarray = arr.slice().sort((a, b) => a - b);
    console.log(equalArray(jsSortedarray, sortedArray));
    console.log(sortedArray);
    console.log(jsSortedarray);
    const arra=[];
    for(let i=0;i<300;i++)
    {
      arra.push(sortedArray[i]);
    }
    setarr(arra);
    console.log("aaaaaa\n",arra);
  };

  return (
    <>
      <div className="array">
        {arr.map((value, id) => (
          <div
            className="array-bar"
            key={id}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <button className="resetButton" onClick={() => resetArray()}>
        Reset Array
      </button>
      <button onClick={() => mergeSort()}>merge sort</button>
    </>
  );
}

function randomint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function equalArray(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
}
