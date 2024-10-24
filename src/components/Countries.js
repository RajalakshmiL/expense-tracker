import React from 'react'
// import { countries } from '../utils/constants'

const Countries = () => {
    // const arr = ['Play cricket', 'Play Video Games', 'Read Book'];
    // const [checked, setChecked] = useState([]);
    // const [newArray, setNewArray] = useState(arr);
    // const handleDelete = (i) => {
    //     setNewArray(newArray.filter((item,index) => index !== i));
    // }
    // const handleChecked = (index) => {
    //     let itemIndex = checked.indexOf(index);
    //     if (itemIndex !== -1) {
    //         checked.splice(itemIndex, 1);
    //     } else {
    //         checked.push(index);
    //     }
    //     setChecked([...checked]);
    // }
   
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



// import React, { useState } from 'react'

// const Head = () => {
//   const [country, setCountry] = useState([
//     {key:0, name: 'India', checked:false},
//     {key:1, name: 'Pakistan', checked:false},
//     {key:2, name: 'Srilanka', checked:false},
//   ]);
//   const handleCheck = (key) => {
//     country[key].checked = !country[key].checked;
//     setCountry([...country]);
//   }

//   const handleDelete = (key) => {
//     country.splice(key,1);
//     setCountry([...country]);
//   }
//   return (
//     <div>
//         {country && country.map((count,key) => {
//           return (
//             <ul key={key}>
//               <input type='checkbox' checked={count.checked} onChange={() => handleCheck(key)}></input> {count.name}
//               {count.checked ?<span style={{marginLeft:'20px',cursor:'pointer'}} onClick={() => handleDelete(key)}>X</span> :''}
              
//             </ul>
//           );
//         })}  
      
//     </div>
    
//   )
// }

// export default Head