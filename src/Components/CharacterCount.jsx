import React, { useState } from 'react'
import BackButton from "./BackButton";
const CharacterCount = () => {
    const [input,setInput] = useState();
    const [result, setResult] = useState({});
    const handleSubmit = ()=>{
        let charCount = {};
        for(const char of input){
            if(charCount[char]){
                charCount[char]++;
            }else{
                charCount[char] = 1;
            }
        }
        setResult(charCount);
    };
  return (
    <>
        <BackButton/>
        <div>Character Count</div>
        <label>Enter String : </label><input type='text'
        onChange={(e)=>setInput(e.target.value)}/>
        <br/>
        <button onClick={()=>handleSubmit()}> Submit</button>
        <br/>
        {Object.keys(result).length > 0 && (
                <div>
                    <label>Result:</label>

                    {Object.entries(result).map(([char, count]) => (
                        <div key={char}>
                            {char} : {count}
                        </div>
                    ))}
                </div>
            )}
        
    </>
    
  )
}

export default CharacterCount;