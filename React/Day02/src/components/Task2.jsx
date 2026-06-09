import React from 'react'
import { useState } from 'react'

const Task2 = () => {
    const [name,setName] = useState("")
    const [price,setPrice] = useState(0)
    const [quantity,setQuantity] = useState(0)
    const [total,setTotal] = useState(0)
    const [message,setMessage] = useState("")

    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handlePrice=(e)=>{
        setPrice(e.target.value)
    }
    const handleQuantity=(e)=>{
        setQuantity(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const calculate = price * quantity
        setTotal(calculate)

        if(calculate>5000){
            setMessage("Discount Eligible")
        }else{
            setMessage("")
        }
    }
  return (
    <>
    <h1>Task 2</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the name' value={name} onChange={handleName} /><br />
        <input type="number" placeholder='Enter the price' value={price} onChange={handlePrice} /><br />
        <input type="number" placeholder='Enter the quantity' value={quantity} onChange={handleQuantity} /><br />
        <button type='submit'>Calculate</button>
    </form>
    <p>Total: ₹{total} </p>
    <p>{message}</p>
    </>
  )
}

export default Task2