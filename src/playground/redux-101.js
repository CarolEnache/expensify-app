import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
    });

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ countSetted = 101 } = {}) => ({
    type: 'SET',
    countSetted
})

const resetCount = ({ reset } = {}) => ({
    type: 'RESET',
})

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET': 
            return {
                count: action.countSetted
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
})


// store.dispatch({
    //         type: 'INCREMENT',
    //         incrementBy: 5
    //     });
    
store.dispatch(incrementCount({ incrementBy: 5 }))    
store.dispatch(incrementCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ countSetted: 101 }));
store.dispatch(resetCount({ reset: 0 }));