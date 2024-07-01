import React, { useState } from 'react'
import { countries } from '../utils/constants'

const Countries = () => {
    const arr = ['Play cricket', 'Play Video Games', 'Read Book'];
    const [checked, setChecked] = useState([]);
    const [newArray, setNewArray] = useState(arr);
    const handleDelete = (i) => {
        setNewArray(newArray.filter((item,index) => index !== i));
    }
    const handleChecked = (index) => {
        let itemIndex = checked.indexOf(index);
        if (itemIndex !== -1) {
            checked.splice(itemIndex, 1);
        } else {
            checked.push(index);
        }
        setChecked([...checked]);
    }
   
    // const [country, setCountry] = useState('IN');
    return (
        <>
        </>
        //Checkbox Lists and delete
        // <div>
        //     {newArray.map((item,index) => (<div key={index} className='flex justify-between'>
        //         <input type="checkbox" value={index} checked={checked.includes(index)} onChange={() => handleChecked(index)} />
        //         {item}
        //         {checked.includes(index) && <span onClick={() => handleDelete(index)}>X</span>}
        //     </div>))}
        // </div>

         // Country and dependent cities
        // <div>
        //     <select onChange={(e)=>setCountry(e.target.value)}>
        //         {countries.map((item,index) => <option key={item.value} value={item.value}>{item.name}</option>)}
        //     </select>
            
        //     <select >
        //         {countries.filter((item,index) => item.value === country)[0].cities.map((item,index) => (<option key={index} >{item}</option>))}
        //     </select>
        // </div>

    )
}

export default Countries