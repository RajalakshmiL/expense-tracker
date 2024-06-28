import React, { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext';

const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const onSubmit = () => {
    const newTransaction = {
      id : Math.floor(Math.random() * 100000000),
      text,
      amount
    }
    addTransaction(newTransaction)
  }
  return (
    <div className='mt-6'>
        <h4 className='font-semibold'>Add New Transaction</h4>
        <div className='border'></div>
        <form onSubmit={(e)=>e.preventDefault()}>
        <div className='my-3'>
          <label className=''>Text</label>
          <input className='border-2 p-1 w-full' type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Text'></input>
        </div>
        <div className='my-3'>
          <label className=''>Amount</label><br />
          <label className=''>(-ve Expenses, +ve Income)</label>
          <input className='border-2 p-1 m-1 w-full' type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..."></input>
        </div>
       
        <button className='bg-violet-500 p-1 w-full my-1 text-white' onClick={onSubmit}>Add Transaction</button>
        </form>
    </div>
 
  )
}

export default AddTransaction