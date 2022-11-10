import React, { useContext } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";


import { GoogleAuthProvider } from "firebase/auth";

import useTitle from "../Hooks/TittleHooks/useTitle";
import { AuthContext } from "../AuthContext/AuthProvider";




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
        <div className="flex justify-center">
   

    <Form onSubmit={handlesignin} className="h-auto p-10  bg-light rounded border border-primary  my-30  text-center w-full lg:w-auto ">
      <h1 className="font-bold text-4xl text-primary text-center my-4">Register </h1>
      <h1 className="my-4 text-start text-primary">Enter your fullname</h1>

      <input type="text" placeholder="enter your name"name="namee" className="input input-bordered input-primary w-full max-w-xs" /><br/>
      <h1 className="my-4 text-start text-primary">Enter your email</h1>

      <input type="email" placeholder="enter your email"name="email" required className="input input-bordered input-primary w-full max-w-xs" /><br/>
      <h1 className="my-4 text-start text-primary">Enter your password</h1>

      <input type="password" placeholder="enter your password"name="password" className="input input-bordered input-primary w-full max-w-xs" /><br/>
      <button type="submit"className="btn btn-primary my-3">Register</button>

      <h1 className="text-dark my-3 text-primary">Already have an account ? <Link className="text-primary" to="/login">Log in</Link></h1>
      <button onClick={handleGooglelogin} type="submit"className="btn btn-primary">Google Sign in</button>
    </Form>
        </div>
      

    )
}


    

export default Register