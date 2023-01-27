import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Form } from "react-router-dom";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import useTitle from "../../../Hooks/TittleHooks/useTitle";

const AddReviews=({singleService})=>{
    const{name,price,title, img}=singleService
   
   
    const {user}=useContext(AuthContext)
    

const handleAddReviews=event=>{


    event.preventDefault();
    const form=event.target;
    const email=user?.email;
    const photoUrl=form.photoUrl.value;
    const description=form.text.value;
    const Uname=form.namee.value
    console.log({email,photoUrl,description})
   const Reviews={
        email,photoUrl,description,Uname,name,price,img,title
    }
    console.log(Reviews)
   
    // form.reset()


    fetch('https://food-service-server-rust.vercel.app/singlereviews',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify(Reviews)

    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged===true){
            toast.success("successfull added your  valueable review")

        }
      
    })

}




return(
    <div className="mt-0 w-full">
        <Form onSubmit={handleAddReviews} className="w-full h-auto" >
            <h1 className="mb-2">Enter your name</h1>
         <input type="name" placeholder="Type here"name="namee" className="input input-bordered input-primary w-full max-w-xs" /><br/>
         <h1 className="my-2">Enter your email</h1>
       <input type="email" placeholder="Type email"name="email" className="input input-bordered input-primary w-full max-w-xs" /><br/>
       <h1 className="my-2">Enter your image</h1>
        <input type="text" placeholder="Give an url of Photo" name="photoUrl"className="input input-bordered input-primary w-full max-w-xs" /><br/>
        <h1 className="my-2">Enter your review</h1>
       <textarea className="w-full textarea textarea-primary col-20 row-20" placeholder="message writting...."name="text"></textarea><br/>
        <button type="submit"className="py-3 px-5  mt-2 text-white rounded-lg" style={{backgroundColor:"red"}}>Add reviews</button>
        </Form>
    </div>

)

}
export default AddReviews