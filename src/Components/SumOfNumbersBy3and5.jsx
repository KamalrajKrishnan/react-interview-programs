import React, { useState } from "react";
import BackButton from "./BackButton";

const SumOfNumbersBy3and5 = () => {

    const [summation, setSummation] = useState(0);
    const [startValue, setStartValue] = useState("");
    const [endValue, setEndValue] = useState("");

    const SumDivisible = (m, n) => {

        const start = Number(m);
        const end = Number(n);

        if (m === "" || n === "") {
            setSummation(0);
            return;
        }

        if (start > end) {
            setSummation(0);
            return;
        }

        let sum = 0;

        for (let index = start; index <= end; index++) {

            // Divisible by both 3 and 5
            if (index % 3 === 0 && index % 5 === 0) {
                sum += index;
            }
        }

        setSummation(sum);
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
{`const SumDivisible = (m, n) => {

    const start = Number(m);
    const end = Number(n);

    let sum = 0;

    for (let index = start; index <= end; index++) {

        if (index % 3 === 0 &&
            index % 5 === 0) {

            sum += index;
        }
    }

    return sum;
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

                            <div className="row">

                                {/* Start Value */}
                                <div className="col-md-6 mb-3">

                                    <label
                                        htmlFor="start_value"
                                        className="form-label"
                                    >
                                        Start Value
                                    </label>

                                    <input
                                        type="number"
                                        id="start_value"
                                        className="form-control"
                                        value={startValue}
                                        onChange={(e) =>
                                            setStartValue(e.target.value)
                                        }
                                    />

                                </div>


                                {/* End Value */}
                                <div className="col-md-6 mb-3">

                                    <label
                                        htmlFor="end_value"
                                        className="form-label"
                                    >
                                        End Value
                                    </label>

                                    <input
                                        type="number"
                                        id="end_value"
                                        className="form-control"
                                        value={endValue}
                                        onChange={(e) =>
                                            setEndValue(e.target.value)
                                        }
                                    />

                                </div>

                            </div>


                            {/* Calculate Button */}
                            <div className="text-center my-3">

                                <button
                                    type="button"
                                    className="intersection-button"
                                    onClick={() =>
                                        SumDivisible(
                                            startValue,
                                            endValue
                                        )
                                    }
                                >
                                    <span>Calculate</span>

                                    <span className="intersection-arrow">
                                        →
                                    </span>
                                </button>

                            </div>


                            {/* Result */}
                            <div className="text-center mt-4">

                                <p className="mb-2">
                                    <strong>Result</strong>
                                </p>

                                <div className="alert alert-success">
                                    <h3 className="mb-0">
                                        {summation}
                                    </h3>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SumOfNumbersBy3and5;
