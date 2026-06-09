import React from "react"
import { useState } from "react";

const Task3 = () => {
  const [formData,setFormData] = useState({name:"",mark:""})
  const [result,setResult] =useState("")

  const handleChange =(e)=>{

    setFormData({...formData,[e.target.name]: e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault()

    let grade =""
    const score = Number(formData.mark)


    if(score>=90){
      grade = "Grade A"
    }else if(score>=75){
      grade = "Grade B"
    }else if(score >=50){
      grade = "Grade C"
    }else{
      grade= "Fail"
    }

    setResult(grade)
  }

  return (
    <>
    <h1>Task 3</h1>
      <h2>Student Grade System</h2>
      <form onSubmit={handleSubmit}>

          <input type="text" name="name" placeholder="Enter Student Name" value={formData.name} onChange={handleChange}/>
          <input type="number" name="mark" placeholder="Enter Mark" value={formData.mark} onChange={handleChange}/>
          <button type="submit">Check Grade</button>
      </form>
      {result}
    </>
  )
}

export default Task3