import React, { useContext } from "react";

import { Form } from "react-router-dom";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import useTitle from "../../../Hooks/TittleHooks/useTitle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {MdArrowForwardIos} from "react-icons/md"
import "./Addservice.css"

const Addservice = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const [data, setData] = useState()
    const [singleproduct, setProduct] = useState({})

    const { user } = useContext(AuthContext)

    const handleAddservice = (data) => {

        // event.preventDefault();

        console.log(data)
        const image = data.photo[0]
        console.log(data.photo[0])

        const formData = new FormData()
        formData.append("image", image)
        const url = "https://api.imgbb.com/1/upload?expiration=600&key=acbca0356cf868436c7c6a4a4783d467"
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(img => {
                if (img.success) {
                    console.log(img.data.url)

                    const postedPhoto = img.data.url

                    data["image"] = postedPhoto;

                    const newUpdatedata = data
                    console.log(newUpdatedata, "data update hoice")
                    setProduct(newUpdatedata)
                    // console.log(singleproduct)
                    const {details,name,price,image,email}=singleproduct
                    const service={details,name,price,email,image}
                    console.log(service)
                   
   

                     fetch('https://food-service-server-rust.vercel.app/addservices', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",

                        },
                        body:JSON.stringify(service)

                    })
                        .then(res => res.json())
                        .then(data =>{

                        console.log(data)
                        if(data.acknowledged===true){
                            toast.success("successfylly added your product")

                        }
                      
                })
                        


                }

            })




      

        // fetch('http://localhost:5000/addservices',{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json",

        //     },
        //     body:JSON.stringify(Service)

        // })
        // .then(res=>res.json())
        // .then(data=>console.log(data))

    }
    useTitle("Addservice")

    return (
        <div className="w-full h-auto  ">
            <div className="w-full lg:h-[65vh] h-[50vh] addserviceheader">
       <div className="flex flex-col items-center  justify-center h-full w-full    font-serif">
        <h2 className="lg:text-6xl text-3xl text-white font-bold">Add Services</h2>
        <h2 className=" flex flex-row  items-center lg:text-xl text-white my-3">Home
         <span className="mx-3" style={{color:"red"}}><MdArrowForwardIos/></span>Addservices</h2>
       </div>

    </div>
            {/* url("https://i.ibb.co/CQj09JB/addservice.jpg") */}

{/* s */}
<div className="w-full h-full  flex lg:flex-row flex-col-reverse justify-center bg-white p-10">
    <div className="leftsideservice h-[500px] lg:w-1/2 relative py-7 ">

    </div>
            <form className="frombox  lg:w-[40%] md:w-1/2 w-full  px-4 mx-auto border-2 border-black  py-3 rounded-lg" onSubmit={handleSubmit(handleAddservice)} >
                <h1 className="text-3xl text-black font-semibold  font-sans py-4">Add services</h1>
                <input type="text" {...register("name", { required: "subject is requred" })} placeholder="Product Name"
                    className="px-3 py-2 w-full border-2" />
                <input type="file" {...register("photo", { required: "file is requred" })}
                    className=" my-2 bg-white  text-black px-3 py-2 w-full border-2" />
{/* defaultValue={"mohhamdibrahim6454@gmail.com"} */}
                <input type="email" defaultValue={user?.email}   {...register("email", { required: "" })}  placeholder="Email"
                    className="px-3 py-2 w-full  my-4" />

                <input type="text" {...register("price", { required: "" })} placeholder="Product Price"
                    className="px-3 py-2 w-full  my-4" />

                <textarea type="text" {...register("details", { required: "" })} placeholder="About this product"
                    className="px-3 py-2 w-full  my-4" />

                <input type="submit" className=" rounded-lg px-5 py-2 bg-black text-white font-semibold " />
                <p>{data}</p>
                {errors.subject && <p className="text-red-600" role="alert">{errors.subject?.message}</p>}

            </form>
            </div>
{/* g */}
        </div>
    )
}
export default Addservice