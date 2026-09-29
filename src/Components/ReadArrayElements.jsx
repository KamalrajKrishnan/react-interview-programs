import { useState } from "react";
import BackButton from "./BackButton";

function ReadArrayElements() {

    const [commonElements, setCommonElements] = useState([]);

    const inputArray = [
        [
            { x: 1 },
            { x: 2 },
            { x: 3 }
        ],
        [
            { x: 2 },
            { x: 3 },
            { x: 4 }
        ],
        [
            { x: 2 },
            { x: 3 },
            { x: 5 }
        ]
    ];

    const findIntersection = () => {

        let finalArray = [];

        for (const subelements of inputArray) {

            if (Array.isArray(subelements)) {

                const values = subelements.map(
                    (ele) => ele.x
                );

                if (finalArray.length === 0) {
                    finalArray = values;
                } else {
                    finalArray = finalArray.filter(
                        (value) => values.includes(value)
                    );
                }
            }
        }

        console.log(finalArray);

        setCommonElements(finalArray);
    };

    return (
        <div className="container-fluid mt-4">

            {/* Back Button */}
            <div className="mb-3 text-start">
                <BackButton />
            </div>

            <div className="row">

                {/* ================= LEFT SIDE - PROGRAM ================= */}

                <div className="col-md-7">

                    <div className="card shadow-sm">

                        <div className="card-header">
                            <strong>Program</strong>
                        </div>

                        <div className="card-body p-0">

                            <pre
                                style={{
                                    margin: 0,
                                    padding: "20px",
                                    backgroundColor: "#f8f9fa",
                                    minHeight: "450px",
                                    overflowX: "auto",
                                    fontSize: "14px",
                                    lineHeight: "1.6",
                                    textAlign: "left"
                                }}
                            >
                                <code
                                    style={{
                                        display: "block",
                                        textAlign: "left",
                                        whiteSpace: "pre",
                                        margin: 0,
                                        padding: 0
                                    }}
                                >
{`const findIntersection = () => {

    let finalArray = [];

    for (const subelements of inputArray) {

        if (Array.isArray(subelements)) {

            const values = subelements.map(
                (ele) => ele.x
            );

            if (finalArray.length === 0) {
                finalArray = values;
            } else {
                finalArray = finalArray.filter(
                    (value) => values.includes(value)
                );
            }
        }
    }

    setCommonElements(finalArray);
};`}
                                </code>
                            </pre>

                        </div>

                    </div>

                </div>


                {/* ================= RIGHT SIDE - OUTPUT ================= */}

                <div className="col-md-5">

                    <div className="card shadow-sm">

                        <div className="card-header">
                            <strong>Output</strong>
                        </div>

                        <div className="card-body">

                            {/* Input */}
                            <p>
                                <strong>Input:</strong>
                            </p>

                            <div className="alert alert-secondary text-start">
                                {inputArray.map((subArray, index) => (
                                    <div key={index}>
                                        [{subArray.map(
                                            (item) => item.x
                                        ).join(", ")}]
                                    </div>
                                ))}
                            </div>


                            {/* Button */}
                            <button
                                type="button"
                                className="intersection-button"
                                onClick={findIntersection}
                            >
                                <span>Find Intersection</span>
                                <span className="intersection-arrow">
                                    →
                                </span>
                            </button>


                            {/* Result */}
                            <p className="mt-4">
                                <strong>Common Elements:</strong>
                            </p>

                            <div className="alert alert-success">
                                {commonElements.length > 0
                                    ? commonElements.join(", ")
                                    : "Click the button to find common elements"
                                }
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ReadArrayElements;
