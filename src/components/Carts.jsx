import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import axios from "axios";

export default function Carts({ cartDetails, setCartDetails }) {
  if (!cartDetails) {
    return <div>Loading...</div>;
  }

  const [cartItems, setCartItems] = useState(
    cartDetails.carts.map((item) => ({ ...item, quantity: 1 }))
  );

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeItem = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete("http://localhost:3000/api/user/cart", {
        headers: {
          Authorization: token,
        },
        data: {
          id: id,
        },
      });
      window.location.reload();
      console.log(response.data);
      // Update cart details after successful removal
      // You might need to refetch or update the cart details here
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-6 md:mt-5">
      <p className="text-xl md:text-4xl text-[#416392] font-bold">My Cart</p>
      <hr className="w-screen border-[#416392] my-8" />
      {cartItems.length === 0 ? 
            <div className= "flex flex-col justify-center items-center">
              <p className="text-lg md:text-2xl text-[#416392] font-bold">No Items in Cart</p>
              <Link to = "/products" ><button className= " mt-4 mb-4 bg-[#416392] w-[120px] h-[40px] font-bold text-white rounded-lg">See Products</button></Link>
            </div>
          :
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cartItems.map((cart) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg" key={cart._id}>
                  <img className="w-full" src={"http://localhost:3000/"+cart.products_img} alt={cart.products_name} />
                  <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-xl mb-2">{cart.products_name}</div>
                      <p className="text-xl font-bold mb-2">{cart.products_price * cart.quantity} Rs</p>
                    </div>
                  </div>
                  <div className="px-6 pt-4 pb-2 flex justify-evenly items-center">
                    <div className="flex flex-row">
                      <button className="bg-[#416392] hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => decreaseQuantity(cart._id)}>&lt;</button>
                      <p className="text-[#416392] mt-1 mx-2">{cart.quantity}</p>
                      <button className="bg-[#416392] hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => increaseQuantity(cart._id)}>&gt;</button>
                    </div>
                    <button className="bg-[#416392] hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" >Buy Now</button>
                    <button className="bg-[#416392] hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => removeItem(cart._id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          }
      <hr className="w-screen border-[#416392] my-8" />
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl md:text-4xl text-[#416392] font-bold mb-3">Total</p>
        <p className="text-lg md:text-3xl text-[#416392] mb-3">
          {cartItems.reduce(
            (total, cart) => total + cart.products_price * cart.quantity,
            0
          )}{" "}
          Rs
        </p>
      </div>
    </div>
  );
}
