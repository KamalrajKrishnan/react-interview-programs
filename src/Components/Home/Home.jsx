import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const menuItems = [
        {
            path: "/ReadArrayElements",
            title: "Find Common Elements in an Object"
        },
        {
            path: "/MoveZeroToEnd",
            title: "Move Zero To End"
        },
        {
            path: "/UseRefHook",
            title: "UseRef Hook"
        },
        {
            path: "/numbersummation",
            title: "Divide by 3 & 5 Sum"
        },
        {
            path: "/timer",
            title: "Timer"
        },
        {
            path: "/stringreverse",
            title: "Reverse String Sentence"
        }
    ];

    return (
        <div className="home-container">

            <p className="program-list">
                Select a topic to view the program
            </p>

            <div className="program-list">

                {menuItems.map((item, index) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className="program-link"
                    >
                        <span className="program-number">
                            {index + 1}
                        </span>

                        <span>
                            {item.title}
                        </span>

                        <span className="arrow">
                            →
                        </span>
                    </Link>
                ))}

            </div>

        </div>
    );
};

export default Home;