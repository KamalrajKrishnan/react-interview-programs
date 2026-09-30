import React, { useState } from "react";
import BackButton from "./BackButton";

const StringReverse = () => {

    const [inputValue, setInputValue] = useState("");
    const [input, setInput] = useState("");

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {

        let reverseStr = "";

        let index = inputValue.length - 1;

        while (index >= 0) {
            reverseStr += inputValue[index];
            index--;
        }

        setInput(reverseStr);
    };

    return (
        <div className="container-fluid mt-4">

            {/* Back Button */}
            <div className="mb-3 text-start">
                <BackButton />
            </div>

            <div className="row">

                {/* LEFT SIDE - PROGRAM */}
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
                                <code
                                    style={{
                                        display: "block",
                                        textAlign: "left",
                                        whiteSpace: "pre",
                                        margin: 0,
                                        padding: 0
                                    }}
                                >
{`function handleSubmit() {

    let reverseStr = "";

    let index = inputValue.length - 1;

    while (index >= 0) {

        reverseStr += inputValue[index];

        index--;
    }

    return reverseStr;
};`}
                                </code>
                            </pre>

                        </div>

                    </div>

                </div>


                {/* RIGHT SIDE - INPUT / OUTPUT */}
                <div className="col-md-5">

                    <div className="card shadow-sm">

                        <div className="card-header">
                            <strong>Input / Output</strong>
                        </div>

                        <div className="card-body">

                            {/* Input */}
                            <div className="mb-3">

                                <label
                                    htmlFor="stringInput"
                                    className="form-label"
                                >
                                    Enter String
                                </label>

                                <input
                                    type="text"
                                    id="stringInput"
                                    className="form-control"
                                    value={inputValue}
                                    onChange={handleOnChange}
                                    placeholder="Enter a string"
                                />

                            </div>


                            {/* Submit Button */}
                            <div className="text-center my-4">

                                <button
                                    type="button"
                                    className="reverse-button"
                                    onClick={handleSubmit}
                                >
                                    <span>Reverse</span>

                                    <span className="reverse-arrow">
                                        →
                                    </span>
                                </button>

                            </div>


                            {/* Result */}
                            {input && (
                                <div className="mt-4">

                                    <p>
                                        <strong>Result:</strong>
                                    </p>

                                    <div className="alert alert-success">
                                        {input}
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

export default StringReverse;
