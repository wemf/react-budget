import React from 'react';
import Expense from './Expense'

const List = ({expenses}) => {
    return ( 
        <div className="expenses">
            <h2>List</h2>
            {
                expenses.map(expense => (
                    <Expense
                        key={expense.id}
                        expense={expense}
                    />
                ))
            }
        </div>
     );
}
 
export default List;