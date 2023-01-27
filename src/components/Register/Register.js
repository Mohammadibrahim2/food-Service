import React, { useContext } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";


import { GoogleAuthProvider } from "firebase/auth";

import useTitle from "../Hooks/TittleHooks/useTitle";
import { AuthContext } from "../AuthContext/AuthProvider";
import {MdArrowForwardIos} from "react-icons/md";
import "./Register.css"




const Register=()=>{
  const location=useLocation();
  const from=location.state?.from?.pathname || "/"
   
  useTitle("Register")
  const navigate=useNavigate()

  const { Providerlogin,createUser}=useContext(AuthContext)
 

  
  const GoogelProvider=new GoogleAuthProvider()
  const handleGooglelogin=()=>{
    Providerlogin(GoogelProvider)
     .then(result=>{
      const user=result.user;
      console.log(user)
     
     
     })

  }
const handlesignin=event=>{
   event.preventDefault();
   const form=event.target;
   const email=form.email.value;
   const password=form.password.value;
   const name=form.namee.value;
   console.log({email,password})
  

   createUser(email,password)
   .then(result=>{
    const user=result.user
    console.log(user)
    navigate(from,{replace:true})
   
  

   })
   



}

    
   
    return(
        <div className="flex justify-center flex-col">
           <div className="w-full lg:h-[45vh] h-[80vh] loginheader">
       <div className="flex flex-col items-center  justify-center h-full w-full   font-serif">
        <h2 className="text-6xl text-black font-bold">Registration</h2>
        <h2 className="my-3 flex flex-row  items-center text-xl text-black">Home
         <span className="mx-3" style={{color:"red"}}><MdArrowForwardIos/></span>Registration</h2>
       </div>

    </div>
   
<div className="loginimg p-8">


    <Form onSubmit={handlesignin} className=" loginbox h-auto p-10  bg-light rounded border-white border   my-30  text-center w-full lg:w-1/3 mx-auto ">
      <h1 className="font-bold text-4xl text-white text-center my-4">Register </h1>
      <h1 className="my-4 text-start text-white">Enter your fullname</h1>

      <input type="text" placeholder="enter your name"name="namee" className="input input-bordered input-white w-full max-w-xs" /><br/>
      <h1 className="my-4 text-start text-white">Enter your email</h1>

      <input type="email" placeholder="enter your email"name="email" required className="input input-bordered input-white w-full max-w-xs" /><br/>
      <h1 className="my-4 text-start text-white">Enter your password</h1>

      <input type="password" placeholder="enter your password"name="password" className="input input-bordered input-white w-full max-w-xs" /><br/>
      <button type="submit"className="bg-black text-white py-2 px-5 rounded-lg my-3">Register</button>

      <h1 className="text-dark my-3 text-white font-semibold text-xl">Already have an account ? <Link className="text-black font-bold " to="/login">Log in</Link></h1>
      <button onClick={handleGooglelogin} type="submit"className="px-6 py-2 bg-black text-white rounded-lg">Google Sign in</button>
    </Form>
        </div>
        </div>
      

    )
}


    

export default Register