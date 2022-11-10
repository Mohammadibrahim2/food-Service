import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthProvider";


const Header=()=>{

const{user,logout}=useContext(AuthContext)
console.log(user)

const handleLogout=()=>{
  logout()
  .then(()=>{})
}
return(
    <div>
   <div className="navbar bg-primary mb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
      <li tabIndex={0}>
            <Link to="/blog">Blog</Link>
        
        </li>
        <li tabIndex={0}>
            <Link to="/addservices"className="text-white">Add services</Link>
        
        </li>
        <li tabIndex={0}>
            <Link to="/login" className="text-white">Log in</Link>
        
        </li>
      </ul>
    </div>
    <Link to="/" className="text-white normal-case text-xl">Protfolio</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><Link to="/blog"className="text-white">Blog</Link></li>
    <li><Link to="/addservices"className="text-white">Add services</Link></li>
     
      
      
    </ul>
  </div>
  <div className="navbar-end">
    {
       user?.uid ? 
       <>
       <li className="list-none mx-3"><Link to="/myreviews"className="text-white ">My reviews</Link></li>
        <li  className="list-none me-4"><Link to="/singleservice"className="text-white">Add services</Link></li>
        <button  onClick={handleLogout} className="list-none mx-3 text-white">Log out</button>
        
      </>
     :
    <li  className="list-none me-4"><Link to="/login"className="text-white">Log in</Link></li>
     
}
  </div>
</div>

    </div>
)

}
export default Header