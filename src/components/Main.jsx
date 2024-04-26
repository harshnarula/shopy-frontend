import React from "react";
import { Link } from "react-router-dom";

export default function Main(){
    return(
        <>
            <div className= "bg-[#416392]  md:flex flex-row w-full md:h-full jmd:ustify-between md:items-top">
                <img src="../public/images/top-view-male-self-care-items.jpg" alt="" 
                   className= "hidden md:flex w-full h-[90%] z-0 relative object-cover" />
                <div className = "ml-2  flex justify-center items-center  md:flex flex-col md:top-0 md:right-0 md:mt-40 md:mr-20 md:z-10 md:absolute h-auto">
                    <p className= "mt-[60px] text-[20px]  md:text-[50px] w-[200px]  md:w-[400px] font-bold text-white ">Shop with Exclusive Offers on ShopY</p>
                    <Link to = "/products" ><button className= " mt-4 mb-4 bg-white w-[120px] h-[40px] font-bold text-[#416392] rounded-lg">See Products</button></Link>
                </div>
            </div>
        </>
    )
}