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

            str += " ";
        }

        setReverse(str.trim());
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
{`const ReverseString = () => {

    const strArr = string.split(" ");

    let str = "";

    for (let i = 0; i < strArr.length; i++) {

        const newStr = strArr[i];

        for (let j = newStr.length - 1; j >= 0; j--) {
            str += newStr[j];
        }

        str += " ";
    }

    setReverse(str.trim());
};`}
                                </code>
                            </pre>

                        </div>

                    </div>

                </div>


                {/* RIGHT SIDE - OUTPUT */}
                <div className="col-md-5">

                    <div className="card shadow-sm">

                        <div className="card-header">
                            <strong>Output</strong>
                        </div>

                        <div className="card-body">

                            <p>
                                <strong>Input:</strong>
                            </p>

                            <div className="alert alert-secondary">
                                {string}
                            </div>

                            {/* Outline Button */}
                            <div className="text-center my-4">

                                <button
                                    type="button"
                                    className="reverse-button"
                                    onClick={ReverseString}
                                >
                                    <span>Reverse</span>

                                    <span className="reverse-arrow">
                                        →
                                    </span>
                                </button>

                            </div>

                            {/* Result */}
                            {reverse && (
                                <div className="mt-4">

                                    <p>
                                        <strong>Result:</strong>
                                    </p>

                                    <div className="alert alert-success">
                                        {reverse}
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

export default ReverseSentenceString;
