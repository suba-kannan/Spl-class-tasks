import React, { useEffect, useRef, useState } from 'react'

const Task5 = () => {

    const [search,setSearch] = useState("")
    const prevSearch = useRef("")

    useEffect(()=>{
        prevSearch.current=search
    },[search]) 
    

  return (
    <>
        <h1>Task 5</h1>
        <h2>Previous Search Tracker</h2>
        <input type="text" placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <p>Current search: {search}</p>
        <p>Previous search: {prevSearch.current}</p>
    </>
  )
}

export default Task5