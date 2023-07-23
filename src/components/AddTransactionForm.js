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
    <div className='formContainer'>
    <h2>Add New Transaction Form</h2>
    <form onSubmit={handleSubmit} >

        <div className='formInputs'>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className='formInputs'>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className='formInputs'>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        

        <div className='formInputs'>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

      <button id='addBtn' type="submit">Add Transaction</button>
    </form>
    </div>
  );
};

 

export default AddTransactionForm