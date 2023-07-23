import React from 'react'

function TransactionTable({transactions, onDelete}) { 
   //Convert the transactions object to an array 
   const transactionsArray = Object.values(transactions);

   //Condition to check for no results
   const noResults = transactionsArray.length === 0;

  return ( 
    <div>
    {noResults ? ( 

         <p>No results found.</p> 
    
    )  : (

        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {transactionsArray.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.amount}</td>
                        <td>
                            <button onClick={() => onDelete(transaction.id)} >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )}

    </div>
  );
};

export default TransactionTable