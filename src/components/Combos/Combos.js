import React from "react";
import "./Combos.css"
const  Combos=()=>{
    const combos=[
        // {
        //     id:1,
        //     img:"https://i.ibb.co/NsChxXb/combo-food.webp",
        //     title:"",
        //     price:""
        // },
        {
            id:2,
            img:"https://i.ibb.co/xMmjDjG/combo-4.jpg",
            title:"Discount up to 20% for first order this month.",
            price:""
        },
        {
            id:3,
            img:"https://i.ibb.co/yWjyVrB/combo-5.jpg",
            title:"Discount up to 35% for first order this month.",
            price:""
        }
    ]
    return(
        <div className="comboBack lg:h-[90vh] h-auto w-full p-2 pb-5 bg-zinc-50">
            <h2 className="text-2xl font-semibold text-center mt-3" style={{color:"red"}}>Combos</h2>
            <h1 className="text-center text-4xl font-bold text-black">Our Best Combos To Choose</h1>
            <div className="items flex lg:flex-row flex-col  items-center justify-around h-full w-[99%] mx-auto ">
            {
                combos.map(combo=>
                <div className="my-2 box relative rounded-xl lg:w-[550px] lg:h-[300px] w-full h-[300px] ">
                    <img src={combo.img} className="w-full h-full absolute top-0 left-0 rounded-xl comboimg"></img>
                    <div className="absolute  w-full h-full comboOverlay">
                       
                    </div>
                    <div  className="overlayText absolute top-[20%] left-[5%] flex flex-col items-start justify-self-end">
                    <h3 className=" font-semibold text-xl" style={{color:"white"}}>January 2023</h3>
                        <h2 className=" my-3 text-4xl text-white font-semibold" style={{color:"white"}}>{combo.title}</h2>
                        <button className=" py-2 px-4 rounded-full font-semibold" style={{color:"black",backgroundColor:"yellow"}}>Order now</button>
                       </div>
                </div>)
            }
            </div>

        </div>
    )

}
export default Combos