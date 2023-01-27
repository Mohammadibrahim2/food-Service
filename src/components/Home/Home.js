import React, { useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../Hooks/TittleHooks/useTitle";

import SomeServices from "./Services/SomeService";
import Services from "./Services/SomeService";
import "./Home.css" 


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Subheader from "./About";
import Combos from "../Combos/Combos";
import Blog from "../Blog/Blog";
import NewsLetter from "../Newletter/Newsletter";
import About from "./About";
import TotalReviews from "./Reviews/TotalReview/TotalReviews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home=()=>{
  useTitle("Home")

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 6,
 
    autoplay: true,
    autoplaySpeed: 1500,
    speed:1000,
  
     responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
 

 const foods=[
  {
    no:1,
    Img:"https://i.ibb.co/Wx86GZW/download-1-removebg-preview.png",
    tittle:"Pizza",
    price:200

  },
  {
    no:3,
    Img:"https://i.ibb.co/z85RGYx/download-2-removebg-preview.png",
    tittle:"Burger",
    price:200

  },
  {
    no:2,
    Img:"https://i.ibb.co/mv5G0zj/download-4-removebg-preview.png",
    tittle:"Coffee ",
    price:200

  },
  {
    no:3,
    Img:"https://i.ibb.co/x6yzrCt/download-3-removebg-preview.png",
    tittle:"Chicken Fry",
    price:200

  },
  {
    no:3,
    Img:"https://i.ibb.co/gvQjGsC/download-6-removebg-preview.png",
    tittle:"Sandwitch",
    price:200

  },
  {
    no:1,
    Img:"https://i.ibb.co/Wx86GZW/download-1-removebg-preview.png",
    tittle:"Pizza",
    price:200

  },
  {
    no:2,
    Img:"https://i.ibb.co/mv5G0zj/download-4-removebg-preview.png",
    tittle:"Coffee ",
    price:200

  },
  {
    no:3,
    Img:"https://i.ibb.co/z85RGYx/download-2-removebg-preview.png",
    tittle:"Burger",
    price:200

  },
  {
    no:3,
    Img:"https://i.ibb.co/Wx86GZW/download-1-removebg-preview.png",
    tittle:"Pizza",
    price:200

  },
  {
    no:3,
    Img:"https://i.ibb.co/gvQjGsC/download-6-removebg-preview.png",
    tittle:"Sandwitch",
    price:200

  },
  
  
 ]



    return(
       <div className="w-full h-auto">
  <div className="headerback w-full h-full" >
   
    <div className="flex flex-col justify-center items-center h-full px-5">
      <h1 className="text-[50px] font-semibold text-white">SURPRISE YOUR PLATE</h1>
      <h2 className="text-[30px] text-white">Fine Food + Drinks</h2>
    </div>
  

   </div>
   <div className=" w-full flex flex-row justify-between py-3 bg-slate-50">
   <Slider {...settings} className="lg:w-[95%] w-full mx-auto">
    {foods.map(food=>
    <div className="flex flex-col justify-center items-start w-full mx-3 h-[150px] rounded-lg">
      <img src={food.Img} className="h-[60%] drop-shadow-2xl"></img>
      <h2 className="text-black font-semibold text-[16px] my-3 pl-5 ">{food.tittle}</h2>
      </div>)}
      </Slider>
   </div>

   <About></About>
 
   <Services></Services>
   <Combos></Combos>
   <Blog></Blog>
   <TotalReviews></TotalReviews>
   <NewsLetter></NewsLetter>
   </div>

)
}
export default Home





