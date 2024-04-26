import React from "react";

export default function CartsList(){
    return(
        <div className = "flex flex-col w-[300px] md:w-[1280px] h-auto md:h-screen ">
            <h6 className= "flex justify-center items-center mt-8  text-xl md:text-4xl font-bold text-[#416392]">Cart</h6>
            <hr className=" w-full border-[#416392] my-8 " />
            <div className= "flex flex-row justify-around">
                <p className= "mt-2 text-md md:text-xl font-bold text-[#416392]">Name</p>
                <p className= "mt-2 text-md md:text-xl font-bold text-[#416392]">Quantity</p>
                <p className= "mt-2 text-md md:text-xl font-bold  text-[#416392]">Price</p>
            </div>
            <hr className=" w-full border-[#416392] my-8 " />
            <div className= "flex flex-row justify-around">
                <p className= "mt-2 text-md md:text-xl font-bold text-[#416392]">Name</p>
                <p className= "mt-2 text-md md:text-xl font-bold text-[#416392]">Quantity</p>
                <p className= "mt-2 text-md md:text-xl font-bold text-[#416392]">Price</p>
            </div>
            <hr className=" w-full border-[#416392] my-8 " />
            <h6 className= "flex justify-center items-center mb-8 md:mb-0 text:xl md:text-4xl font-bold text-[#416392]">Total: 12Rs</h6>
            
        </div>
        // <div className = "flex flex-col w-screen h-screen justify-center items-center">
        //     <h6 className= " *text-xl md:text-4xl font-bold text-[#416392]">No Items in Cart</h6>
        //     <button className= "mt-2 md:mt-6  w-[90px] h-[30px] md:w-[90px] md:h-[40px] rounded-lg bg-[#416392] text-white">Shop Now</button>
        // </div>
    )
}