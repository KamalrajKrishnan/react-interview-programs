import ReadArrayElements from "../Components/ReadArrayElements";
import MoveZeroToEnd from "../Components/MoveZeroToEnd";
import Home from "../Components/Home/Home";
import UseRefHook from "../Components/UseRefHook";
import SumOfNumbersBy3and5 from "../Components/SumOfNumbersBy3and5";
import Timer from "../Components/Timer";
import ReverseSentenceString from "../Components/ReverseSentenceString";
import StringReverse from "../Components/StringReverse";
import CharacterCount from "../Components/CharacterCount";
import UniqueElements from "../Components/UniqueElements";
import LargestNumber from "../Components/LargestNumber";
import SecondLargest from "../Components/SecondLargest";
import ArrayReverse from "../Components/ArrayReverse";
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
        {
            path: "/stringreverse",
            element: <ReverseSentenceString />,
        },
        {
            path: "/reversestring",
            element: <StringReverse />,
        },
        {
            path: "/charcount",
            element: <CharacterCount />,
        },
        {
            path: "/uniquearray",
            element: <UniqueElements />,
        },
        {
            path: "/largestnumber",
            element: <LargestNumber />,
        },
        {
            path: "/secondlargestnumber",
            element: <SecondLargest />,
        },
        {
            path: "/arrayreverse",
            element: <ArrayReverse />,
        },
];

export default programRoutes;