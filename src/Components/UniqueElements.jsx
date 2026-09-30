import React, { useState } from "react";
import BackButton from "./BackButton";

const UniqueElements = () => {
    const [elements, setElements] = useState([]);

    const array = [0, 1, 2, 2, 1, 3, 4, 4];

    const findUniqueElements = () => {
        let index = 0;
        const unique = [];

        while (index < array.length) {
            if (!unique.includes(array[index])) {
                unique.push(array[index]);
            }

            index++;
        }

        setElements(unique);
    };

    return (
        <div className="container-fluid mt-4">

            {/* Back Button */}
            <div className="mb-3 text-start">
                <BackButton />
            </div>

            <div className="row">

                {/* Program */}
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
                                    minHeight: "400px",
                                    overflowX: "auto",
                                    fontSize: "14px",
                                    lineHeight: "1.6",
                                    textAlign: "left"
                                }}
                            >
                                <code>
{`const array = [0, 1, 2, 2, 1, 3, 4, 4];

let index = 0;
const unique = [];

while (index < array.length) {

    if (!unique.includes(array[index])) {
        unique.push(array[index]);
    }

    index++;
}

console.log(unique);`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Output */}
                <div className="col-md-5">
                    <div className="card shadow-sm">

                        <div className="card-header">
                            <strong>Input / Output</strong>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">
                                <strong>Input:</strong>
                                <div className="alert alert-secondary mt-2">
                                    {array.join(", ")}
                                </div>
                            </div>

                            <div className="text-center my-4">
                                <button
                                    type="button"
                                    className="reverse-button"
                                    onClick={findUniqueElements}
                                >
                                    <span>Find Unique</span>
                                    <span className="reverse-arrow">→</span>
                                </button>
                            </div>

                            {elements.length > 0 && (
                                <div className="mt-4">
                                    <strong>Result:</strong>

                                    <div className="alert alert-success mt-2">
                                        {elements.join(", ")}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UniqueElements;