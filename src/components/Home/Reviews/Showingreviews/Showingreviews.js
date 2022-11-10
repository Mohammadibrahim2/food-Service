import React from "react";

const Showreview=({review})=>{

const {name,email,description,_id}=review;

const handleDelete =_id=>{
  const agree=window.confirm("Are you sure to delete ?",_id)
  if(agree){
    fetch(`http://localhost:5000/deletereview/${_id}`,{
      method:"DELETE"
     })
     .then(res=>res.json(res))
     .then(data=>{
      console.log(data)
     })
  } 
}
const handleUpdate=()=>{

}

    return(
        <div className="my-3 ">
 {/* <div className="card w-96 bg-primary text-white shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{email}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
   
    </div>
  </div> */}
</div>

        </div>
    )
}
export default Showreview