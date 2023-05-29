export const COUNTER_INCREMENT = 'counter/increment'
export const COUNTER_DECREMENT = 'counter/decrement'


const incrementCounter = {
    type: COUNTER_INCREMENT,
    payload: 3
}

const decrementCounter = {
    type: COUNTER_DECREMENT,
    payload: 2
}

const counterAction = {
    incrementCounter,
    decrementCounter
}

export default counterAction;
