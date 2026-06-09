import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Task6 = () => {
    const [users,setUsers] = useState([])
    const [search,setSearch] = useState("")
    const [filter,setFilter] = useState([])

    const fetchUsers = async()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        setUsers(data)
        setFilter(data)
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    const handleChange =(e)=>{
        const value=e.target.value
        setSearch(value)

    const filteredUser =users.filter((user)=>
      user.name.toLowerCase().includes(value.toLowerCase())
    )

    setFilter(filteredUser)
  };
  return (
    <>
    <h1>Task 6</h1>
      <input type="text" placeholder="Search user" value={search} onChange={handleChange} />

      <ul>
        {filter.map((user)=>(
          <li key={user.id}>{user.name}</li>
        ))}
        
      </ul>

    </>
  )
}

export default Task6