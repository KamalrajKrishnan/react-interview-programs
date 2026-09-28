import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
        
            <h5>Click below links</h5>
        <div className="flex-column">

            <Link to="/ReadArrayElements">
                Find Common Elements in an object
            </Link>

            <br /><br />

            <Link to="/MoveZeroToEnd">
                Move Zero To End
            </Link>

            <br /><br />

            <Link to="/UseRefHook">
                Use Ref Hooks
            </Link>
            <br /><br />
            <Link to="/numbersummation">
                Divide by 3 & 5 sum
            </Link>
            <br /><br />
            <Link to="/timer">
                Time
            </Link>
        </div>
        
        </>
    );
};

export default Home;