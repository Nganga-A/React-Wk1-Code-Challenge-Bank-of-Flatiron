import React from 'react'

function TransactionTable(transactions) {
  
   const transactionsArray = Object.values(transactions);

  return (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {transactionsArray.map((transaction) => (
                <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default TransactionTable