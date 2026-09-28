import ReadArrayElements from "../Components/ReadArrayElements";
import MoveZeroToEnd from "../Components/MoveZeroToEnd";
import Home from "../Components/Home/Home";
import UseRefHook from "../Components/UseRefHook";
import SumOfNumbersBy3and5 from "../Components/SumOfNumbersBy3and5";
import Timer from "../Components/Timer";
const programRoutes = 
    [ 
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/ReadArrayElements",
            element: <ReadArrayElements />,
        },
        {
            path: "/MoveZeroToEnd",
            element: <MoveZeroToEnd />,
        },
        {
            path: "/UseRefHook",
            element: <UseRefHook />,
        },        
        {
            path: "/numbersummation",
            element: <SumOfNumbersBy3and5 />,
        },
        {
            path: "/timer",
            element: <Timer />,
        },
];

export default programRoutes;