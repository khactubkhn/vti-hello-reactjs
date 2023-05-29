import {useState} from 'react';
import {connect} from 'react-redux';

const CounterPage = ({counter, increment, decrement}) => {

  const handleIncreaseCounter = () => {
    increment();
  };

  const handleDecreaseCounter = () => {
   decrement();
  };

  return (
      <>
        <h2>Counter page</h2>
        <h2>{counter}</h2>
        <button onClick={handleIncreaseCounter}>Increase</button>
        <button onClick={handleDecreaseCounter}>Decrease</button>
      </>
  );
};

const mapGlobalStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch({
        type: 'counter/increment'
      });
    },
    decrement: () => {
      dispatch({
        type: 'counter/decrement'
      });
    }
  }
}

export default connect(mapGlobalStateToProps, mapDispatchToProps)(CounterPage);
