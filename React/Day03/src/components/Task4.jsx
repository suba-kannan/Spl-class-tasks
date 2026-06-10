import React, { useState } from 'react'

const Task4 = () => {
    const [darkMode,setDarkMode] = useState(false)

    const toggleMode = ()=>{
        setDarkMode((prev) => !prev)
    }

  return (
    <>
    <h1>Task 4</h1>

    <div className={`flex flex-col items-center justify-center transition duration-300 ${darkMode?"bg-black text-white":"bg-white text-black"}`}>
        <h1 className="text-3xl font-bold mb-6">Theme Toggle</h1>
        <h1 className="font-bold mb-6">Theme Change</h1>
        <button onClick={toggleMode} className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Switch to {darkMode ?"Light Mode":"Dark Mode"}</button>
    </div>

    </>
  )
}

export default Task4