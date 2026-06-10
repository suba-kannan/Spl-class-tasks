import React, { useState } from 'react'

const Task1 = () => {
    const [formData,setFormData] = useState({name:"",dept:"",salary:""}) 
    const [employees,setEmployees] = useState([])

    const handleChange=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        setEmployees([...employees, formData])
        setFormData({name:"",dept:"",salary:""})

        
    }
  return (
    <>
    <h1>Task 1</h1>
    <h2>Employee Registration Form</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Enter your name' value={formData.name} onChange={handleChange} />
        <input type="text" name="dept" placeholder='Enter your department' value={formData.dept} onChange={handleChange}/>
        <input type="number" name="salary" placeholder='Enter your salary' value={formData.salary} onChange={handleChange} />
        <button type='submit'>Submit</button>
    </form>
    <p>Total employees: {employees.length}</p>
    <h3>Employee Details</h3>
    {employees.length===0?(<p>No employee</p>):(
        <ul>
            {employees.map((emp,i)=>(
                <li key={i}>
                    {emp.name} - {emp.dept} - {emp.salary}
                </li>
            ))}
        </ul>
    )}

    </>
  )
}

export default Task1