import React, { useState } from "react";
import BackButton from "./BackButton";

const ReverseSentenceString = () => {

    const [reverse, setReverse] = useState("");

    const string = "laziness kills consistency";

    const ReverseString = () => {

        const strArr = string.split(" ");

        let str = "";

        for (let i = 0; i < strArr.length; i++) {

            const newStr = strArr[i];

            for (let j = newStr.length - 1; j >= 0; j--) {
                str += newStr[j];
            }

            // Add space between words
            str += " ";
        }

        setReverse(str.trim());
    };

    return (
        <div>
            <h3>Reverse Sentence String</h3>

            <p>
                <strong>Input:</strong> {string}
            </p>

            <button
                type="button"
                className="btn btn-primary"
                onClick={ReverseString}
            >
                Reverse
            </button>

            <p>
				{reverse && (
					<>
					
                	<strong>Result:</strong>{reverse}
					</> 
				)}	
				<BackButton />
            </p>
        </div>
    );
};

export default ReverseSentenceString;
