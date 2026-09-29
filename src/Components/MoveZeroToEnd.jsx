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

    return (
        <div>

            <h3>Move Zero To End</h3>

            <p>
                <strong>Input:</strong>
            </p>

            <span>{arr.join(", ")}</span>

            <p className="mt-3">
                <strong>Result:</strong>
            </p>

            <span>{ZeroToEnd().join(", ")}</span>

            <BackButton />

        </div>
    );
};

export default MoveZeroToEnd;