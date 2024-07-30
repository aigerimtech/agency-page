import { useNavigate } from "react-router-dom"
import MyContext from "./MyContext"
import { useContext, useState } from "react"

const Login=()=>{
    const navigate=useNavigate()
    const {setIsLogin,setUserName} = useContext(MyContext)
    const [name, setName] = useState('')
    return (
        <div>
          <h5>Login Page</h5>
          <input type='text' placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type='password' placeholder="password"/>
          <button onClick={()=>{
            setUserName(name)
            setIsLogin(true)
            navigate('/')
          }}>login</button>
        </div>
        
    )
}

export default Login