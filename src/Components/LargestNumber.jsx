import React, { useState } from "react";
import BackButton from "./BackButton";

const LargestNumber = () => {
    const [largeNumber, setLargeNumber] = useState();

    const array = [0, 1, 2, 2, 1, 0, 0, 3, 4, 4];

    const findLargestNumber = () => {
        let large = array[0];

        for (const element of array) {
            if (large < element) {
                large = element;
            }
        }

        setLargeNumber(large);
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
{`const array = [0, 1, 2, 2, 1, 0, 0, 3, 4, 4];

const findLargestNumber = () => {

    let large = array[0];

    for (const element of array) {

        if (large < element) {
            large = element;
        }

    }

    setLargeNumber(large);
};`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Input / Output */}
                <div className="col-md-5">
                    <div className="card shadow-sm">

                        <div className="card-header">
                            <strong>Input / Output</strong>
                        </div>

                        <div className="card-body">

                            <div className="mb-3">
                                <label className="form-label">
                                    <strong>Array:</strong>
                                </label>

                                <div className="alert alert-secondary">
                                    {array.join(", ")}
                                </div>
                            </div>

                            <div className="text-center my-4">
                                <button
                                    type="button"
                                    className="reverse-button"
                                    onClick={() => findLargestNumber()}
                                >
                                    <span>Find Largest</span>
                                    <span className="reverse-arrow">→</span>
                                </button>
                            </div>

                            {largeNumber !== undefined && (
                                <div className="mt-4">
                                    <strong>Largest Number:</strong>

                                    <div className="alert alert-success mt-2">
                                        {largeNumber}
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

export default LargestNumber;