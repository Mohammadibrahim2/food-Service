import React, { useContext } from "react";
import { Form, Link,  useLocation,  useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

import useTitle from "../Hooks/TittleHooks/useTitle";
import "./login.css"
import { AuthContext } from "../AuthContext/AuthProvider";

import {MdArrowForwardIos} from "react-icons/md"


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
      
        <div className="w-full h-auto  bg-white">
          <div className="w-full lg:h-[45vh] h-[80vh] loginheader">
       <div className="flex flex-col items-center  justify-center h-full w-full   font-serif">
        <h2 className="text-6xl text-black font-bold">Log in</h2>
        <h2 className="my-3 flex flex-row  items-center text-xl text-black">Home
         <span className="mx-3" style={{color:"red"}}><MdArrowForwardIos/></span>Log in</h2>
       </div>

    </div>
         
          <div className="loginimg  flex flex-row items-center justify-center w-full h-[100vh] p-5">

{/*          
          <div className="h-full w-full">

          </div> */}

    <Form onSubmit={handlelogin} className="lg:px-20  w-full lg:w-auto h-auto p-10  rounded border   text-center loginbox ">
      <h1 className="font-bold text-4xl text-white text-center my-4">Log in </h1>
      <h1 className="my-4 text-start text-white">Enter your password</h1>
      <input type="email" placeholder="enter your email"name="email" className="input input-bordered input-white w-full max-w-xs" /><br/>
      <h1 className="my-4 text-start text-white">Enter your password</h1>
      <input type="password" placeholder="enter your password"name="password" className="input input-bordered input-white w-full max-w-xs" /><br/>
      <button type="submit"className="py-2 px-6 rounded-lg my-3" style={{backgroundColor:"black",color:"white"}}>log in</button>
      <h1 className="text-white my-3 text-xl">Create a new account? <Link className=" font-semibold" to="/register" style={{color:"black"}}>Register</Link></h1>
      <button onClick={handleGooglelogin} type="submit"className="py-3 px-4 rounded-lg " style={{backgroundColor:"black",color:"white"}}>Google Sign in</button>
    </Form>
  
        </div>
        </div>

    )
}
export default Login