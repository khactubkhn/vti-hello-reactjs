import {useState} from "react";

const CounterPage = () => {
    const [counter, setCounter] = useState(0);

    const handleIncreaseCounter = () => {
        setCounter(counter +1);
    }

    return (
        <>
            <h2>Counter page</h2>
            <h2>{counter}</h2>
            <button onClick={handleIncreaseCounter}>Increase</button>
        </>
    );
};

export default CounterPage;
