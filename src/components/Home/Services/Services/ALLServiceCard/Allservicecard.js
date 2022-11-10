import React from "react";
import { Link } from "react-router-dom";



const Allservicecard=({allservices})=>{
 
    const{name,img,rating,price,description,_id}=allservices


    return(
    <div className=" grid grid-cols-3">
 <div className="card w-96 glass bg-blue-200">
  <figure><img src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h3>price :$ {price} </h3>
    <p>
        {description.slice(0,100)+'.....'}<Link to="">Read more</Link>
    </p>
    <h4>Ratings:{rating}</h4>
    <div className="card-actions justify-end">
    <Link to={`/services/${_id}`}><button className="btn btn-primary">View details</button></Link>
    </div>
  </div>
</div>


     
        </div>

    )
}
export default Allservicecard