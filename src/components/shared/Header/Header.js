import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";
import logo from "../../image/photo.jfif"

const Header=()=>{

const{user,logOut}=useContext(AuthContext)
console.log(user)

const handleLogout=()=>{
  logOut()
  .then(()=>{})
}
return(
    <div>
   <div className="navbar bg-primary mb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
      <li tabIndex={0}>
            <Link to="/blog"className="lg:text-white text-primary">Blog</Link>
        
        </li>
        <li tabIndex={0}>
            <Link to="/addservices"className="lg:text-white text-primary">Add services</Link>
        
        </li>
        <li tabIndex={0}>
            <Link to="/login"className="lg:text-white text-primary">Log in</Link>
        
        </li>
        <li tabIndex={0}><Link to="/addservices"className="lg:text-white text-primary">Add services</Link></li>

        <li tabIndex={0}><Link to="/myreviews"className="lg:text-white text-primary">My reviews</Link></li>
      </ul>
    </div>
    <img src={logo} style={{width:"30px",height:"30px"}}/>
    <Link to="/" className="text-white normal-case mx-2 text-3xl">PhotoBuzz</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li className="lg:text-white text-primary"><Link to="/blog">Blog</Link></li>
   
    {
       user?.uid ? 
       <>
       <li className="list-none mx-3"><Link to="/myreviews"className="text-white ">My reviews</Link></li>
        <li  className="list-none me-4"><Link to="/addservices"className="text-white">Add services</Link></li>
        <button  onClick={handleLogout} className="list-none mx-3 text-white">Log out</button>
        
      </>
     :
    <li  className="list-none me-4"><Link to="/login"className="text-white">Log in</Link></li>
     
}
     
      
      
    </ul>
  </div>
  <div className="">
   
  </div>
</div>

    </div>
)

}
export default Header