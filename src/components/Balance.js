import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const result = transactions.reduce((result,item) => {
      return result + parseInt(item.amount)
  },0).toFixed(2)
  
  return (
    <div className='mt-6'>
        <p className='font-semibold text-xs'>YOUR BALANCE</p>
        <p className='font-semibold text-lg'>₹ {result}</p>
    </div>
  )
}

export default Balance