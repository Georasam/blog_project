import React from 'react'
import { useState } from 'react'



const ChangePass = ({changePassElement}) => {

const[password,setPassword]= useState()
const[username, setUsername]= useState()

function handleChange(event){
    event.preventDefault()
    changePassElement({
    
    password: password
})
}
  return (
    <div>
        <h2>Change Password</h2>
    <form action='submit' id="reg-form" onSubmit={handleChange}>

<input type="password" placeholder="Password"autoComplete='off' id='password' onChange={({ target }) => setPassword(target.value)}/>
<button>Submit</button>
    </form>
    </div>
  )
}

export default ChangePass