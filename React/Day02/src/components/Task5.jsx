import React from 'react'
import { useState } from 'react'

const Task5 = () => {
    const [formData,setFormData]= useState({task:""})
    const [taskList,setTaskList] = useState([])

    const handleChange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleAdd=(e)=>{
        e.preventDefault()

        if(formData.task.trim==="") return

        setTaskList([...taskList,formData.task])
        setFormData({...formData,task:""})

    }

    const handleDelete=(e)=>{
        const index =Number(e.target.value)

        const update = taskList.filter((_, i)=>i !==index)
        setTaskList(update)
        
    }
  return (
    <>
    <h1>Task 5</h1>
    <h2>Todo List</h2>
    <form onSubmit={handleAdd}>
        <input type="text" name="task" placeholder='Enter task' value={formData.task} onChange={handleChange} />
        <button type='submit'>Add Task</button>
        <h3>Total Tasks: {taskList.length}</h3>
        {taskList.length ===0 ?(
        <p>No Tasks Available</p>
        ):(
            <ul>
            {taskList.map((item,i) => (
                <li key={i}>
                {item}
                <button value={i} onClick={handleDelete}>Delete</button>
                </li>
            ))}
            </ul>
        )}
    </form>

    </>
  )
}

export default Task5