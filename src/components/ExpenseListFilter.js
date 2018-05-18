import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByAmount } from '../actions/filters';
import { sortByDate } from '../actions/filters';

const ExpenseListFilter = (props) => (
    <div>
        <input type='text' 
               value={props.filters.text} 
               onChange={(e) => {
               props.dispatch(setTextFilter(e.target.value))
        }} />
        <select id='select'
            value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === "date") {
                    props.dispatch(sortByDate(e.target.value))
                } else if (e.target.value === "amount") {
                    props.dispatch(sortByAmount(e.target.value)) 
                }
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

// const select = () => {
//     const ceva = document.getElementById('select').value
//     console.log(ceva)
// }

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter);