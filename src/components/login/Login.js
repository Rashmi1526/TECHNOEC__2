import React,{useState} from 'react'
import "./login.css"
const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = e =>{
    const {name,value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }

  return (
    <div className='login'>
      {console.log(user)}
      <h1>Login</h1>
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email"></input>
      <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder='Enter your Password'></input>
      <div className='button'>Login</div>
      <div>OR</div>
      <div className='button'>Register</div>
      
      </div>
  )
}

export default Login