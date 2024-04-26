import React from "react";

{/* <div className="relative">
                        <img src="your-image-url.jpg" alt="Your Image" className="flex relative bg-[#416392] w-[140px] h-[120px] md:w-[200px] md:h-[200px] rounded-lg z-0" />
                        <button className="absolute top-81 left-48 bg-red text-red px-4 py-2 rounded-md transition-opacity duration-300 opacity-0 hover:opacity-100 z-10">
                            Hover Me
                        </button>
                    </div> */}

export default function Section(){
    return(
        <>
            <div className= "w-full h-[230px] md:h-[300px] bg-white">
                <div className= "flex justify-center w-full h-[20px]">
                    <p className= "text-[#416392] mt-2 text-xl font-bold">Best Selled Products</p>
                </div>
                <div className= "flex flex-row mt-0 md:mt-4 justify-around items-center overflow-x-auto">
                    <div className= "flex flex-col justify-center items-center w-[400px] h-[250px] mx-2 md:mx-4">
                        <img src="public/images/products/canon-camera.jpg" alt="" className= "bg-[#416392] w-[140px] h-[120px] md:w-[200px] md:h-[200px] rounded-lg"/>
                        <p className= "text-[#416392] mt-2 font-bold">Canon</p>
                        
                    </div>
                    <div className= "flex flex-col justify-center items-center w-[400px] h-[250px] mx-2 md:mx-4">
                        <img src="public/images/products/ubuyt-tablet.jpg" alt="" className= "bg-[#416392] w-[140px] h-[120px] md:w-[200px] md:h-[200px] rounded-lg"/>
                        <p className= "text-[#416392] mt-2 font-bold">UBUY</p>
                    </div>
                    <div className= "flex flex-col justify-center items-center w-[400px] h-[250px] mx-2 md:mx-4">
                        <img src="public/images/products/mi-watch.jpg" alt="" className= "bg-[#416392] w-[140px] h-[120px] md:w-[200px] md:h-[200px] rounded-lg"/>
                        <p className= "text-[#416392] mt-2 font-bold">MI</p>
                    </div>
                    <div className= "flex flex-col justify-center items-center w-[400px] h-[250px] mx-2 md:mx-4">
                        <img src="public/images/products/stock-photo-laptop-with-blue-graphics.jpg" alt="" className= "bg-[#416392] w-[140px] h-[120px] md:w-[200px] md:h-[200px] rounded-lg"/>
                        <p className= "text-[#416392] mt-2 font-bold">Asus</p>
                    </div>
                    <div className= "flex flex-col justify-center items-center w-[400px] h-[250px] mx-2 md:mx-4">
                        <img src="public/images/products/vivo-y19-mobile-phones.jpg" alt="" className= "bg-[#416392] w-[140px] h-[120px] md:w-[200px] md:h-[200px] rounded-lg"/>
                        <p className= "text-[#416392] mt-2 font-bold">Vivo</p>
                    </div>
                </div>
            </div>
        </>
    )
}