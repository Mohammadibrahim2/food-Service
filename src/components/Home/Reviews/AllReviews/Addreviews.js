import React, { useContext } from "react";
import { Form } from "react-router-dom";
import { AuthContext } from "../../../AuthContext/AuthProvider";

const AddReviews=()=>{
    const {user}=useContext(AuthContext)
    

const handleAddReviews=event=>{


    event.preventDefault();
    const form=event.target;
    const email=user?.email;
    const photoUrl=form.photoUrl.value;
    const description=form.text.value;
    const name=form.namee.value
    console.log({email,photoUrl,description})
   const Reviews={
        email,photoUrl,description,name
    }
   
    form.reset()


    fetch('http://localhost:5000/singlereviews',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify(Reviews)

    })
    .then(res=>res.json())
    .then(data=>console.log(data))

}




return(
    <div>
        <Form onSubmit={handleAddReviews} className="w-full" >
            <h1 className="mb-2">Enter your name</h1>
         <input type="name" placeholder="Type here"name="namee" className="input input-bordered input-primary w-full max-w-xs" /><br/>
         <h1 className="my-2">Enter your email</h1>
       <input type="email"defaultValue={user?.email} placeholder="Type email"name="email"readOnly className="input input-bordered input-primary w-full max-w-xs" /><br/>
       <h1 className="my-2">Enter your image</h1>
        <input type="text" placeholder="Give an url of Photo" name="photoUrl"className="input input-bordered input-primary w-full max-w-xs" /><br/>
        <h1 className="my-2">Enter your review</h1>
       <textarea className="w-full textarea textarea-primary col-20 row-30" placeholder="message writting...."name="text"></textarea><br/>
        <button type="submit"className="btn btn-primary mt-2">Add reviews</button>
        </Form>
    </div>

)

}
export default AddReviews