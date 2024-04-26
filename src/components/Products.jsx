import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import axios from 'axios';

export default function Products({ filteredData, filterCategory, searchInput, error, setError, userDetails }) {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setCurrentPage(1); // Reset current page when filtered data changes
        filterSearchResults();
    }, [filteredData, filterCategory, searchInput]);

    const filterSearchResults = () => {
        if (!searchInput) {
            setSearchResults(filteredData); // If searchInput is empty, show all products
        } else {
            const results = filteredData.filter(product =>
                product.products_name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setSearchResults(results);
        }
    };

    const clearError = () => {
        setError('')
    }

    const handlePageChange = (value) => {
        setCurrentPage(value);
    };

    async function AddToCart(productId){
        if(!userDetails){
            setError("Can't add Products into Cart without Sign In")
            return
        }

        try {
            const token = localStorage.getItem("token"); 
            const response = await axios.post(
              "http://localhost:3000/api/user/cart",
              { id: productId },
              {
                headers: {
                  Authorization: token,
                },
              }
            );

            // Handle success
          } catch (error) {
            console.error("Error adding to cart:", error);
            // Handle error
          }
    }

    const pageCount = Math.ceil(searchResults.length / cardsPerPage);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(
            <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded mx-1 ${currentPage === i ? 'bg-blue-700' : ''}`}
            >
                {i}
            </button>
        );
    }

    const renderCards = () => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, searchResults.length);
        console.log(searchResults)
        return searchResults.slice(startIndex, endIndex).map((product) => (
            <div className="flex flex-row" key={product._id}>
                <div className={`w-full p-4`}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={"http://localhost:3000/"+product.products_img} alt={product.products_name} />
                        <div className="px-6 py-4">
                            <div className="flex justify-between items-center">
                                <div className="font-bold text-xl mb-2">{product.products_name}</div>
                                <StarRating rating={product.products_rating} />
                            </div>
                            <p className="text-gray-700 text-base">{product.products_desc}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                            <p className="text-xl font-bold">{product.products_price} Rs</p>
                            <button className="bg-[#416392] hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => AddToCart(product._id)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <>
        {error &&
            <div onClick = {clearError} className="fixed top-13 right-0 bg-[#b91c1cc7]  text-white w-screen md:w-[350px] h-[70px] rounded-lg flex justify-center items-center px-2">
            <p className="flex font-bold text-lg md:text-xl">{error} </p>
            </div>
        }
        <div  className="flex flex-col items-center mt-8">

            <div className="flex flex-wrap justify-center">
                {renderCards()}
            </div>
            <div className="flex mt-8">
                {pages}
            </div>
        </div>
        </>
    );
}

function StarRating({ rating }) {
    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <AiFillStar key={index} className={`fill-current ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`} />
            ))}
        </div>
    );
}
