import React from "react";
import CartsList from "../components/CartsList"
import Carts from "../components/Carts";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CartPage(){
    const [cartDetails, setCartDetails] = useState(null);

    useEffect(() => {
        const fetchUserCarts = async () => {
          try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:3000/api/user/carts-list', {
              headers: {
                Authorization: token,
              },
            });
            setCartDetails(response.data);
          } catch (error) {
            console.error('Error fetching user details:', error);
          }
        };
    
        fetchUserCarts();
      }, []);

    return(
        <div className= "flex justify-center items-center">
        {/* <CartsList /> */}
        <Carts cartDetails = {cartDetails} setCartDetails = {setCartDetails} />
        </div>
    )
}