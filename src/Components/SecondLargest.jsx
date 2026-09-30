import React,{useState} from "react";
import BackButton from "./BackButton";

const SecondLargest = () => {
    const [secondLarge, setSecondLarge] = useState();
    const array = [10, 5, 20, 8, 15];

    const findSecondLargest = () => {
        let largest = -Infinity;
        let second = -Infinity;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > largest) {
                second = largest;
                largest = array[i];
            } else if (array[i] > second && array[i] !== largest) {
                console.log(array[i]);
                second = array[i];
            }
        }

        setSecondLarge(second);
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
{`const array = [10, 5, 20, 8, 15];

const findSecondLargest = () => {

    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < array.length; i++) {

        if (array[i] > largest) {

            second = largest;
            largest = array[i];

        } else if (
            array[i] > second &&
            array[i] !== largest
        ) {

            second = array[i];

        }
    }

    return second;
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
                                    onClick={() => findSecondLargest()}
                                >
                                    <span>Find Second Largest</span>
                                    <span className="reverse-arrow">→</span>
                                </button>
                            </div>
                            {secondLarge && 
                                <div className="mt-4">
                                    <strong>Result:</strong>

                                    <div className="alert alert-success mt-2">          
                                        {secondLarge}
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SecondLargest;