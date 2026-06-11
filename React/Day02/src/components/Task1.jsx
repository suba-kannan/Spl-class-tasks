import React from 'react'
import { useState } from 'react'

const Task1 = () => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,serError] = useState({})
    const [success,setSuccess] = useState("")

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleLogin=(e)=>{

        e.preventDefault()

        const error = {}

        if(!email){
            error.email = "Email required"
        }
        if(!password){
            error.password = "password Required"
        }else if(password.length<6){

            error.password = "Password must be atleast 6 charactera"

        }

        serError(error)
        setSuccess(Object.keys(error).length === 0?"Login Successful":"")

    }
    

  return (
    <>
    <div>
        <h1>Task 1</h1>
        <h2>Login</h2>
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder='Enter the email' value={email} onChange={handleEmail} />
                <p>{error.email}</p>
                <input type="password" placeholder='Enter the password' value={password} onChange={handlePassword} />
                <p>{error.password}</p>
                <button type='submit'>Login</button>
                <p>{success}</p>
            </form>
        </div>
    </div>
    
    </>
  )
}

export default Task1

// import React, { useState } from 'react'

// const Task1 = () => {
//     const [email,setEmail]= useState("")
//     const [password,setPassword]= useState("")
//     const [error,setError]=useState({})
//     const [success,setSuccess]=useState("")

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         let errorMsg = {}
//         setSuccess("")
//         if(!email){
//             errorMsg.email="Email required"
//         }else if(!password){
//             errorMsg.password="password required"
//         }else if(password.length<6){
//             errorMsg.password='password must be atleast 6 character'
//         }else{
//             setSuccess('Login successfull')
//         }
//         setError(errorMsg)
//     }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//         <input type="text" name="email" placeholder='Enter email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//         {error && <p>{error.email}</p>}
//         <input type="text" name="password" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
//         {error && <p>{error.password}</p>}
//         <button type='submit'>Login</button>
//         {success && <p>{success}</p>}
//     </form>
//     </>
//   )
// }

// export default Task1