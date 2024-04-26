import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { data } from "../static/data";

export default function Sidebar({ handleFilterChange, setSearchInput, searchInput, products }) {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [filter, setFilter] = useState(false);
    const Reference = useRef(null);
     // Step 1: Add state for search input

    const handleFilterToggle = () => {
        setFilter(!filter);
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value); // Step 4: Update search input value
    };

    useEffect(() => {
        const closeAllToggle = (e) => {
          if (!Reference.current.contains(e.target)) {
            setSidebarToggle(false);
            setFilter(false);
          }
        };
    
        document.body.addEventListener("click", closeAllToggle);
    
        return () => document.body.removeEventListener("click", closeAllToggle);
      }, []);



    
    return (
        <div className="absolute md:sticky w-48  h-screen top-0 mt-12 md:mt-0" ref={Reference}>
            <div className="hidden md:flex">
                <div className="hidden md:flex flex-col w-48 h-screen bg-[#416392] p-0">
                    <div className="relative" >
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <AiOutlineSearch className="text-gray-500" />
                        </div>
                        <input
                            type="text"
                            value={searchInput} // Step 1: Bind search input value
                            onChange={handleSearchInputChange} // Step 4: Add onChange event handler
                            className="block w-full py-2 pl-12 pr-4 border border-transparent rounded-b-md focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 bg-[#fffffff0]"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center ">
                            <BsFilter className="text-gray-500" onClick={handleFilterToggle} />
                        </div>
                    </div>
                    {filter ? (
                        <div className="absolute top-0 right-0 mt-[50px]  w-48 h-auto bg-slate-400 shadow-md p-4 rounded-lg z-10">
                            <ul className="justify-center">
                                <li className="text-white my-2 cursor-pointer" onClick={() => handleFilterChange("price")}>Price</li>
                                <li className="text-white my-2 cursor-pointer" onClick={() => handleFilterChange("rating")}>Rating</li>
                            </ul>
                        </div>
                    ) : (
                        <div className="hidden"></div>
                    )}
                    <div className="py-4">
                        <h6 className="text-xl ml-2 font-bold text-white">Categories</h6>
                        {products.map(product => (
                            <p key={product._id} className="text-base ml-4 mt-2 text-white cursor-pointer" onClick={() => handleFilterChange(product.products_category)}>{product.products_category}</p>
                        ))}
                    </div>
                </div>

            </div>
            <div className="fixed flex flex-row md:hidden w-48 h-screen " ref={Reference}>
                {sidebarToggle &&
                <div className=" flex md:hidden flex-col w-48 h-lvh bg-[#416392] p-0 ">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <AiOutlineSearch className="text-gray-500" />
                        </div>
                        <input
                            type="text"
                            value={searchInput} // Step 1: Bind search input value
                            onChange={handleSearchInputChange} // Step 4: Add onChange event handler
                            className="block w-full py-2 pl-12 pr-4 border border-transparent rounded-b-md focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 bg-[#fffffff0]"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center ">
                            <BsFilter className="text-gray-500" onClick={handleFilterToggle}/>
                        </div>
                    </div>
                    {filter ? (
                        <div className="absolute top-0 right-0 mt-[50px]  w-48 h-auto bg-slate-400 shadow-md p-4 rounded-lg z-10">
                            <ul className="justify-center">
                                <li className="text-white my-2 cursor-pointer" onClick={() => handleFilterChange("price")}>Price</li>
                                <li className="text-white my-2 cursor-pointer" onClick={() => handleFilterChange("rating")}>Rating</li>
                            </ul>
                        </div>
                    ) : (
                        <div className="hidden"></div>
                    )}
                    <div className="py-4">
                        <h6 className="text-xl ml-2 font-bold text-white">Categories</h6>
                        {products.map(product => (
                            <p key={product._id} className="text-base ml-4 mt-2 text-white cursor-pointer" onClick={() => handleFilterChange(product.products_category)}>{product.products_category}</p>
                        ))}
                    </div>
                </div>
                }
                <div className="block md:hidden w-4 h-8 ">
                    <button className="bg-[#416392] text-white font-bold px-1 py-3 rounded-r-lg" onClick={(e) => { e.stopPropagation(); setSidebarToggle(!sidebarToggle); }}>&lt;</button>
                </div>
            </div>
        </div>
    );
}
