import React from "react";

const Showreview=({review})=>{

const {name,email,description,_id,img}=review;

const handleDelete =_id=>{
  const agree=window.confirm(`Are you sure to delete ${name} s review ?`)
  if(agree){
    fetch(`https://server-pearl-chi.vercel.app/deletereview/${_id}`,{
      method:"DELETE"
     })
     .then(res=>res.json(res))
     .then(data=>{
      console.log(data)
      
     })
  } 
}
    return(
        <div className="my-3 ">
 <div className="card w-96 bg-primary text-white shadow-xl">
  <img src={img}/>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{email}</p>
    <p>{description}</p>
   
    <button className="btn btn-white" onClick={()=>handleDelete(_id)}>Delete</button>
    <div className="card-actions justify-end">

   
    </div>
  </div>
</div>

        </div>
    )
}
export default Showreview