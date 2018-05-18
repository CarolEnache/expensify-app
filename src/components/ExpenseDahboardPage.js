import React from 'react';
import ExpeneseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpeneseList />
    </div>
);

export default ExpenseDashboardPage;