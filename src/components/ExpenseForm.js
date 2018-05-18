import React from 'react';

class ExpenseForm extends React.Component {

    state = {
        description: '',
        note: ''
    }

    onDescriptionChnage = (e) => {
        const description= e.target.value;
        this.setState(() => ({description}));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    render(){
        return (
            <div>
                <form >
                    <input 
                        type='text'
                        placeholder='description'
                        autoFocus
                        value = {this.state.description}
                        onChange={this.onDescriptionChnage}
                        />
                    <input
                        type='number'
                        placeholder='Amount'
                        />
                    <textarea 
                        placeholder='Add a note for your expense (optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>

        )
    }
}

export default ExpenseForm;