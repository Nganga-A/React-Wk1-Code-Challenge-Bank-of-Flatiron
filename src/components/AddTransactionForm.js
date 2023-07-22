import React, {useState} from 'react'

function AddTransactionForm({addTransaction}) {
  
  const [date,setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  //Handle Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    //Create a new transaction obj
    const newTransaction = {
        date,
        description,
        amount:parseFloat(amount),
    };

        //Add the newTransaction to state
        addTransaction(newTransaction);

        //Reset form fields
        setDate('');
        setDescription('');
        setAmount('');
    
  };

  return (

    <form onSubmit={handleSubmit} >
        <input
          type='text'
          placeholder='Date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
         type="text"
         placeholder="Description"
         value={description}
         onChange={(e) => setDescription(e.target.value)}
        />

        <input
         type="number"
         placeholder="Amount"
         value={amount}
         onChange={(e) => setAmount(e.target.value)}
        />

      <button type="submit">Add Transaction</button>
    </form>
  );
};

 

export default AddTransactionForm