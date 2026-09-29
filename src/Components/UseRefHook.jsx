import { useRef, useState } from "react";
import BackButton from "./BackButton";

function Counter() {

    const [count, setCount] = useState(0);

    const renderCount = useRef(0);

    renderCount.current++;

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
{`const [count, setCount] = useState(0);

const renderCount = useRef(0);

renderCount.current++;

return (
    <div>

        <h2>Count: {count}</h2>

        <button
            onClick={() => setCount(count + 1)}
        >
            Increment
        </button>

        <p>
            Component rendered:
            {renderCount.current} times
        </p>

    </div>
);`}
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

                            <h2 className="mb-4">
                                Count: {count}
                            </h2>

                            <button
                                type="button"
                                className="counter-button"
                                onClick={() => setCount(count + 1)}
                            >
                                <span>Increment</span>
                                <span className="counter-arrow">
                                    →
                                </span>
                            </button>

                            <div className="alert alert-info mt-4">
                                Component rendered:{" "}
                                <strong>
                                    {renderCount.current}
                                </strong>{" "}
                                times
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Counter;
