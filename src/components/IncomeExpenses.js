import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);
  var transaction = transactions.reduce((result,item)=>{
    if(item.amount > 0){
      result['income'] += parseInt(item.amount);
    }else{
      result['expense'] -= parseInt(item.amount);
    }
    return result;
  },{ income: 0, expense: 0 })
  return (
    <div className='flex my-3 shadow-lg justify-evenly text-center p-3'>
        <div className='p-2 font-semibold '>
            <div className='text-xs '>INCOME</div> 
            <span className='text-green-500 text-sm'>+Rs.{transaction.income}</span>
        </div>
        <div className='border'></div>
        <div className='p-2 font-semibold '>
            <div className='text-xs'>EXPENSE</div> 
            <span className='text-red-600 text-sm'>-Rs.{transaction.expense}</span>
        </div>
    </div>
  )
}

export default IncomeExpenses