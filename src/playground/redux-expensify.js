import { createStore, combineReducers} from 'redux';

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
