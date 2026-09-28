import { useState } from "react";
import BackButton from './BackButton';
function ReadArrayElements() {
    const [commonElements, setCommonElements] = useState([]);
    const findIntersection = () =>{
        const inputArray = 
            [
                [
                    { 'x': 1 }, 
                    { 'x': 2 }, 
                    { 'x': 3 }
                ],
                [
                    { 'x': 2 }, 
                    { 'x': 3 }, 
                    { 'x': 4 }
                ],
                [
                    { 'x': 2 }, 
                    { 'x': 3 }, 
                    { 'x': 5 }
                ]
            ];
        let finalArray = [];
        for(const subelements of inputArray){
            if(Array.isArray(subelements)){
                const values = subelements.map((ele)=> ele.x);
                if(finalArray.length === 0){
                    finalArray = values;
                }else{
                    finalArray = finalArray.filter((value) => values.includes(value));
                }
            }
        }
        console.log(finalArray);        
        setCommonElements(finalArray || []);
    };
        return(
            <div>
                <BackButton/>
                <button onClick={findIntersection}> Find Intersection </button> <h3>Common Elements:</h3> {commonElements.map((element, index) => ( <div key={index}> {element} </div> ))} </div>
        );
}

export default ReadArrayElements;