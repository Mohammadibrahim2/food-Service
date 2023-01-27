import React from "react";
import "./Blog.css"

import { FaCalendarAlt,FaUserAlt } from 'react-icons/fa';
const Blog=()=>{


    const blogs=[
        {
            id:1,
            img:"https://i.ibb.co/Bn32CWv/blog-food-1.jpg",
            title:"What Is More Convenient? Dine In Or Take Away?",
            subtitle:"This Mexican Style Burger is pumped out with flavor",
            date:"25 january,2023",
            owner:"Admin"
        },
        {
            id:2,
            img:"https://i.ibb.co/1fnbTB5/blog-food-2.jpg",
            title:"What Is More Convenient? Dine In Or Take Away?",
            subtitle:"This Mexican Style Burger is pumped out with flavor",
            date:"25 january,2023",
            owner:"Admin"
        },
        {
            id:3,
            img:"https://i.ibb.co/5hyNRqz/blog-food-3.jpg",
            title:"What Is More Convenient? Dine In Or Take Away?",
            subtitle:"This Mexican Style Burger is pumped out with flavor",
            date:"25 january,2023",
            owner:"Admin"
        },
    ]
return(
    <div className="w-full lg:h-[100vh] h-auto text-black bg-zinc-50 py-5">
        <h2 className="text-center text-3xl font-semibold" style={{color:"red"}}>Our Blog</h2>
        <h2 className="text-4xl text-center mt-3 mb-8 font-bold">Read Our Latest Food News</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 w-[90%] mx-auto h-full ">
            {
                blogs.map(blog=><div className="  lg:w-[350px] w-full h-full lg:my-0 my-4" >
                    <div className=" blogBox w-full h-full ">
                        <div className=" frame p-3 border-4 border-gray-600 h-[250px]">
                        <div  className=" imgBox w-full h-full ">
                        <img src={blog.img} className="w-full h-full " />

                        </div>
                        </div>
                       
                        <div className="my-2 p-2 leading-7">
                            <div className="flex flex-row justify-start">
                                <span className="flex flex-row items-center "><FaCalendarAlt className="mr-2" style={{color:"red"}}/>{blog.date}</span>
                                <span className="flex flex-row items-center ml-4"><FaUserAlt className="mr-2" style={{color:"red"}}/>{blog.owner}</span>
                            </div>
                            <h2 className="blogTitle text-2xl font-bold text-black">{blog.title}</h2>
                            <h2>{blog.subtitle}</h2>
                        </div>
                    </div>
                    </div>)
            }
        </div>


    </div>
)
}
export default Blog