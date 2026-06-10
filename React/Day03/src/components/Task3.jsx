import React, { useEffect, useState } from 'react'

const Task3 = () => {
    const [users,setUsers] = useState([])
    const [loading,SetLoading]= useState(true)
    const [errorMsg,setErrorMsg]= useState("")

    const fetchData= async()=>{
        try {
            const res= await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            
            setUsers(data)
            SetLoading(false)
            
            
        } catch (error) {
            setErrorMsg("Error fetching data")
            setLoading(false)
            
            
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <>
    <h1>Task 3</h1>
    <h2>User Data Fetch and Display API</h2>
    {loading&& <p>Loading...</p>}
    {errorMsg && <p>{errorMsg}</p>}
    {!loading && !errorMsg &&(
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    <p>Name:{user.name}</p>
                    <p>Email:{user.email}</p>
                    <p>Company:{user.company.name}</p>

                </li>
            ))}
        </ul>
    )}
    </>
  )
}

export default Task3