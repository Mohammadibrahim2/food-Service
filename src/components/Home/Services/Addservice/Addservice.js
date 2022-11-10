import React, { useContext } from "react";

import { Form } from "react-router-dom";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import useTitle from "../../../Hooks/TittleHooks/useTitle";

const Addservice=()=>{

const {user}=useContext(AuthContext)

const handleAddservice=event=>{


    event.preventDefault();
    const form=event.target;
    const email=user?.email;
    const price=form.price.value;
    const description=form.text.value;
    const name=form.namee.value;
    const rating=form.rating.value;
    const photoUrl=form.photoUrl.value

   const Service={
        email,
        price,
        description,
        name,
        rating,
        photoUrl
    }
   
    form.reset()


    fetch('http://localhost:5000/addservices',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify(Service)

    })
    .then(res=>res.json())
    .then(data=>console.log(data))

}
useTitle("Addservice")

    return(
        <div className="w-full">
            
            <Form onSubmit={handleAddservice} className="lg:w-1/2 w-full mx-auto bg-primary p-10 ">
            <h1 className="text-white font-semibold text-3xl text-center underline	">Add Service as you want.</h1>
            <div>
            <h1 className="text-white my-3">Enter Service name</h1>
        <input type="name" placeholder="Type here"name="namee" className="input input-bordered input-primary w-full max-w-xs" /><br/>
            </div>
       
        <div>
        <h1 className="text-white my-3">Enter Service email</h1>
       <input type="email"defaultValue={user?.email} placeholder="email"name="email"readOnly className="input input-bordered input-primary w-full max-w-xs" /><br/>
        </div>
        
         
       <div>
       <h1 className="text-white my-3">Enter Service name</h1>
        <input type="number" placeholder="give rating" name="rating"className="input input-bordered input-primary w-full max-w-xs" /><br/>
       </div>

       <div>
        <h1 className="text-white my-3">Enter Service photoUrl</h1>
        <input type="text-" placeholder="photoUrl" name="photoUrl"className="input input-bordered input-primary w-full max-w-xs" /><br/>
          
        </div>
      
        <div>
        <h1 className="text-white my-3">Enter Service price</h1>
        <input type="text" placeholder="price.." name="price"className="input input-bordered input-primary w-full max-w-xs" /><br/>
          
        </div>
        
        <div>
            
        <h1 className="text-white my-3 ">Enter Service details</h1>
       <textarea className="textarea textarea-primary col-20 row-50  w-full" placeholder="About the service..."name="text"></textarea><br/>

        </div>
        <button type="submit"className="btn btn-white">Add services</button>
        </Form>
        </div>
    )
}
export default Addservice