import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import Home from "../../Home/Home";
import Subheader from "../../Home/About";
import logo from "../../image/photo.jfif"
import Navbar from "./Navbar/Navbar";
import Navbar1 from "./Navbar/Navbar1";

const Header=()=>{

// const{user,logOut}=useContext(AuthContext)
// console.log(user)

// const handleLogout=()=>{
//   logOut()
//   .then(()=>{})
// }
return(
    <div className="">
      <Navbar1></Navbar1>
      <Navbar></Navbar>
     
  

    </div>
)

}
export default Header







// need code



{/*    
    {
       user?.uid ? 
      //  <>
      //  <li className="list-none mx-3"><Link to="/myreviews"className="text-white ">My reviews</Link></li>
      //   <li  className="list-none me-4"><Link to="/addservices"className="text-white">Add services</Link></li>
      //   <button  onClick={handleLogout} className="list-none mx-3 text-white">Log out</button>
        
      // </>
     :
    <li  className="list-none me-4"><Link to="/login"className="text-white">Log in</Link></li>
     
}
      */}