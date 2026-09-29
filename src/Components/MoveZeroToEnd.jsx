import BackButton from "./BackButton";

const MoveZeroToEnd = () => {

    const arr = [0, 5, 0, 2, 8, 0, 3, 1, 0];

    const ZeroToEnd = () => {

        const newArr = [...arr];

        let index = 0;

        for (let i = 0; i < newArr.length; i++) {

            if (newArr[i] !== 0) {
                newArr[index] = newArr[i];
                index++;
            }
        }

        while (index < newArr.length) {
            newArr[index] = 0;
            index++;
        }

        return newArr;
    };

    const result = ZeroToEnd();

    return (
        <div className="container-fluid mt-4">

            {/* Back Button - Left Side */}
            <div className="mb-3 text-start">
                <BackButton />
            </div>

            <div className="row">

                {/* LEFT SIDE - CODE */}
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
{`function ZeroToEnd() {

    const newArr = [...arr];

    let index = 0;

    for (let i = 0; i < newArr.length; i++) {

        if (newArr[i] !== 0) {
            newArr[index] = newArr[i];
            index++;
        }
    }

    while (index < newArr.length) {
        newArr[index] = 0;
        index++;
    }

    return newArr;
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
                                {arr.join(", ")}
                            </div>

                            <p className="mt-4">
                                <strong>Result:</strong>
                            </p>

                            <div className="alert alert-success">
                                {result.join(", ")}
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default MoveZeroToEnd;