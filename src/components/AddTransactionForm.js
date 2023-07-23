import React, {useState} from 'react'

function AddTransactionForm({addTransaction}) {
  
  const [date,setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  //Handle Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    //Form Validation
    if (!date || !description || !category || !amount) {
        alert('Please fill in all required fields');
        return; //exit function when validation fails
    }

    //Create a new transaction obj
    const newTransaction = {
        date,
        description,
        category,
        amount:parseFloat(amount),
    };

        //Add the newTransaction to state
        addTransaction(newTransaction);

        //Reset form fields
        setDate('');
        setDescription('');
        setCategory('');
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
         type="text"
         placeholder="Category"
         value={category}
         onChange={(e) => setCategory(e.target.value)}
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