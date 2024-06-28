import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const TransactionList = () => {
  const {transactions,trasac,deleteTransaction} = useContext(GlobalContext);
  
  return (
    <div className='mt-6'>
        <h2 className='font-semibold'>{trasac}</h2>
        <div className='border'></div>
        {transactions.length==0 && <div className='text-center text-red-400 my-2'>No Transactions made!</div> }
        {transactions.map((transaction) => (<div key={transaction.id} className={`flex justify-between shadow-md p-1 my-4 border-r-4
          ${transaction.amount > 0 ? "border-green-500" : "border-red-600"} `}>
          <p>{transaction.text}</p>
          <p >{transaction.amount}</p><button className='border bg-gray-200 w-4' onClick={()=>deleteTransaction(transaction.id)}>X</button>
        </div>))}
    </div>
  )
}

export default TransactionList