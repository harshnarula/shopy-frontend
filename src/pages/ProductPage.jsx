import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import axios from 'axios';

export default function ProductPage({ error, setError, userDetails }) {
    const [filteredData, setFilteredData] = useState([]);
    const [activeFilter, setActiveFilter] = useState(null);
    const [filterCategory, setFilterCategory] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState([]);
    const Reference = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/products-list');
                setProducts(response.data);
                setFilteredData(response.data); // Set filteredData initially with all products
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);


    const handleFilterChange = (filterType) => {
        let sortedData;
        if (activeFilter === filterType) {
            // If the same filter is selected again, reset filter
            setFilteredData(products);
            setActiveFilter(null);
            return;
        }

        if (filterType === "price") {
            sortedData = sortByPriceDescending();
        } else if (filterType === "rating") {
            sortedData = sortByRatingDescending();
        } else {
            // Filter by category
            sortedData = products.filter(product => product.products_category === filterType);
        }

        setFilteredData(sortedData);
        setActiveFilter(filterType);
        if (filterType === "price" || filterType === "rating") {
            setFilterCategory(null);
        } else {
            setFilterCategory(filterType);
        }
    };

    const sortByPriceDescending = () => {
        return [...filteredData].sort((a, b) => b.products_price - a.products_price);
    };

    const sortByRatingDescending = () => {
        return [...filteredData].sort((a, b) => b.products_rating - a.products_rating);
    };

    useEffect(() => {
        const closeAllToggle = (e) => {
            if (!Reference.current.contains(e.target)) {
                setActiveFilter(null);
                setFilterCategory(null);
                setFilteredData(products);
            }
        };

        document.body.addEventListener("click", closeAllToggle);

        return () => document.body.removeEventListener("click", closeAllToggle);
    }, [products]);


    return (
        <div className="flex">
            <Sidebar
                handleFilterChange={handleFilterChange}
                activeFilter={activeFilter}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                products={products}
                setProducts={setProducts}
            />
            {filteredData ? (
                <Products
                    filteredData={filteredData}
                    filterCategory={filterCategory}
                    searchInput={searchInput}
                    error={error}
                    setError={setError}
                    userDetails={userDetails}
                    ref={Reference}
                />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
