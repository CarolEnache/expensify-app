import { createStore, combineReducers} from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SET_START_DATE
// SET_END_DATE

const demoState = {
    expenses: [{
        id: 'asdfghjk',
        description: 'May Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        cretaedAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// Expanses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
};


// Filter Reducers

const filterReducersDefaultState = { 
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined 
}

const filterReducers = (state = filterReducersDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// Store creation 

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducers
    })
);

console.log(store.getState())

