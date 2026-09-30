import React, { useState } from 'react'

const ArrayReverse = () => {
    //const [arrayReverse,setArrayReverse] = useState([]);
    const array=[0,1,2,2,1,0,0,3,4,4];
    const reverseArray = ()=>{
        let reverse = [];
        let index = array.length-1;
        for(const e of array){
            reverse[index] = e; 
            index--;
        }
        return JSON.stringify(reverse);
    }
  return (
    <>
        <div>ArrayReverse</div>
        <p>Reversed Array : {reverseArray()}</p>
    </>
    
  )
}
export default ArrayReverse;