import React from 'react'
import { useState } from 'react'

const Task4 = () => {
    const [formData,setFormData] = useState({name:"",salary:""})
    const [total,setTotal] = useState(0)

    const handleChange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        let bonus= 0

        const salary = Number(formData.salary)

        if(salary>30000){
            bonus= 5000
        }else if(salary>20000){
            bonus = 3000
        }else{
            bonus=1000
        }

        const finalSalary = salary+bonus
        setTotal("Bonus:"+bonus+"Final Salary:"+finalSalary)
    }
  return (
    <>
    <h1>Task 4</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Enter you name' value={formData.name} onChange={handleChange} />
        <input type="number" name="salary" placeholder='Enter you salary' value={formData.salary} onChange={handleChange} /><br />
        <button>Calculate Bonus</button><br />
        {total}
    </form>
    </>
  )
}

export default Task4