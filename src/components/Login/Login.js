import React, { useContext } from "react";
import { Form, Link,  useLocation,  useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

import useTitle from "../Hooks/TittleHooks/useTitle";
import "./login.css"
import { AuthContext } from "../AuthContext/AuthProvider";



const Login=()=>{
  const location=useLocation()
  const from=location.state?.from?.pathname || "/"
  useTitle("Login")
  const navigate=useNavigate()
  const {Googleproviderlogin,login}=useContext(AuthContext)

  //Google log in 
  const GoogelProvider=new GoogleAuthProvider()

  const handleGooglelogin=()=>{
     Googleproviderlogin(GoogelProvider)
     .then(result=>{
      const user=result.user;
      console.log(user)
      Form.reset()
     
     
     })

  }
const handlelogin=event=>{

  event.preventDefault();
  const form=event.target;
  const email=form.email.value;
  const password=form.password.value;
 

  login(email,password)
  .then(result=>{
   const user=result.user
   navigate(from,{replace:true})
   form.reset()
  
   
  })
}

    return(
        <div className="flex justify-center">
    {/* <Form onSubmit={handlelogin} className="h-auto p-10  rounded border  my-30  text-center loginback ">
      <h1 className="font-bold text-4xl text-primary text-center my-4">Log in </h1>
      <h1 className="my-4 text-start">Enter your password</h1>
      <input type="email" placeholder="enter your email"name="email" className="input input-bordered input-primsry w-full max-w-xs" /><br/>
      <h1 className="my-4 text-start">Enter your password</h1>
      <input type="password" placeholder="enter your password"name="password" className="input input-bordered input-primary w-full max-w-xs" /><br/>
      <button type="submit"className="btn btn-primary my-3">log in</button>
      <h1 className="text-dark my-3">Create a new account? <Link className="text-primary" to="/register">Register</Link></h1>
      <button onClick={handleGooglelogin} type="submit"className="btn btn-primary">Google Sign in</button>
    </Form> */}
        </div>

    )
}
export default Login