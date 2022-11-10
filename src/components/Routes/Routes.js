import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import UserReviews from "../Home/Reviews/UserReviews/UserReviews";
import TotalReviews from "../Home/Reviews/UserReviews/UserReviews";
import Addservice from "../Home/Services/Addservice/Addservice";
import Services from "../Home/Services/Services/Services";
import Singleservice from "../Home/Services/SingleService/Singleservice";
import SomeServices from "../Home/Services/SomeService";

import Main from "../layout/Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes=createBrowserRouter([

{
    path:"/",
    element:<Main></Main>,
    children:[
        {
           path:"/",
           element:<Home></Home>

        },
        {
            path:"/fewservice",
            element:<SomeServices></SomeServices>
        },
        {
            path:"/services",
            element:<Services></Services>
        },
       
        {
            path:"/services/:id",
            element:<Singleservice></Singleservice>,
             loader:({params})=>fetch(`https://server-pearl-chi.vercel.app/services/${params.id}`)
            
        },
        {
            path:"/myreviews",
            element: <PrivateRoute><UserReviews></UserReviews></PrivateRoute> 
            
            
        },
       {
         path:"/addservices",
         element:<Addservice></Addservice>
       },
        {
            path:"/login",
            element:<Login></Login>  
        },
        {
            path:"/register",
            element:<Register></Register>  
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        }
    ]
}



])