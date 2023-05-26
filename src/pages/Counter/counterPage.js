import {useState} from 'react';
import store from '../../store/store';

const CounterPage = () => {
  const [counter, setCounter] = useState(0);

  const handleIncreaseCounter = () => {
    store.dispatch({
      type: 'counter/increment'
    });
  };

  const handleDecreaseCounter = () => {
    store.dispatch({
      type: 'counter/decrement'
    });
  };

  const updateData = () => {
    store.subscribe(() => setCounter(store.getState().counter))
  }

  updateData();

  return (
      <>
        <h2>Counter page</h2>
        <h2>{store.getState().counter}</h2>
        <button onClick={handleIncreaseCounter}>Increase</button>
        <button onClick={handleDecreaseCounter}>Decrease</button>
      </>
  );
};

export default CounterPage;
