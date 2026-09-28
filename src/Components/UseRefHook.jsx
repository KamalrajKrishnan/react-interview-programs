import { useRef, useState } from "react";
import BackButton from './BackButton';
function Counter() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);

    renderCount.current++;

    return (
        <div>
            <BackButton/>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <p>
                Component rendered: {renderCount.current} times
            </p>
        </div>
    );
}

export default Counter;