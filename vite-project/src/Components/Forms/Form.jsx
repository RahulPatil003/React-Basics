import React, { useState } from 'react'

const Form = () => {
    const [name, setName]= useState({firstname:'', lastname:''})
    function handleSubmit(e){
        e.preventDefault()
        console.log(name);
    }
  return (
    <div>
        <h1>Name : {name.firstname} {name.lastname}</h1>
      <form action="get">
        <label >Firstname</label>
        <input type="text " onChange={(e)=>setName({...name,firstname: e.target.value})} value={name.firstname} />
        <label >lastname</label>
        <input type="text " onChange={(e)=>setName({...name,lastname:e.target.value})} value={name.lastname} />
        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Form
