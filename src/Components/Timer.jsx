import React, { useEffect, useState } from "react";
import BackButton from "./BackButton";

const Timer = () => {

    const [time, setTime] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    const handleReset = () => {
        setTime(0);
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
                                    minHeight: "350px",
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
{`const [time, setTime] = useState(0);

useEffect(() => {

    const interval = setInterval(() => {

        setTime((prevTime) => prevTime + 1);

    }, 1000);

    return () => {
        clearInterval(interval);
    };

}, []);

const handleReset = () => {
    setTime(0);
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

                        <div className="card-body text-center">

                            <p>
                                <strong>Timer</strong>
                            </p>

                            <div className="timer-display">
                                {time}
                            </div>

                            <p className="text-muted">
                                seconds
                            </p>

                            <button
                                type="button"
                                className="counter-button"
                                onClick={handleReset}
                            >
                                <span>Reset</span>
                                <span className="counter-arrow">
                                    ↻
                                </span>
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Timer;
