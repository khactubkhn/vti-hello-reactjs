import counterAction from "./redux/actions";
import {connect, useDispatch, useSelector} from "react-redux";

const CounterPage = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    const handleIncreaseCounter = () => {
        // increase();
        dispatch(counterAction.incrementCounter)
    }

    const handleDecreaseCounter = () => {
        // decrease();
        dispatch(counterAction.incrementCounter)
    }

    return (
        <>
            <h2>Counter page</h2>
            <h2>{counter}</h2>
            <button onClick={handleIncreaseCounter}>Increase</button>
            <button onClick={handleDecreaseCounter}>Decrease</button>
        </>
    );
};


export default CounterPage;
