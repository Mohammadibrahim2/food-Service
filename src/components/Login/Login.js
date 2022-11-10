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
  const { Providerlogin,signIn}=useContext(AuthContext)

  //Google log in 
  const GoogelProvider=new GoogleAuthProvider()

  const handleGooglelogin=()=>{
    Providerlogin(GoogelProvider)
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
 

  signIn(email,password)
  .then(result=>{
   const user=result.user
   navigate(from,{replace:true})
   form.reset()
   
  
   
  })
}

    return(
        <div className="flex justify-center w-full">
    <Form onSubmit={handlelogin} className="lg:px-20  w-full lg:w-auto h-auto p-10  rounded border  my-30  text-center bg-primary ">
      <h1 className="font-bold text-4xl text-white text-center my-4">Log in </h1>
      <h1 className="my-4 text-start text-white">Enter your password</h1>
      <input type="email" placeholder="enter your email"name="email" className="input input-bordered input-primsry w-full max-w-xs" /><br/>
      <h1 className="my-4 text-start text-white">Enter your password</h1>
      <input type="password" placeholder="enter your password"name="password" className="input input-bordered input-white w-full max-w-xs" /><br/>
      <button type="submit"className="btn btn-white my-3">log in</button>
      <h1 className="text-white my-3">Create a new account? <Link className="text-black" to="/register">Register</Link></h1>
      <button onClick={handleGooglelogin} type="submit"className="btn btn-white">Google Sign in</button>
    </Form>
        </div>

    )
}
export default Login