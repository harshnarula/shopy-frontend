import React, { useState, useEffect, useRef } from "react";
import { MdAccountCircle } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar({ userDetails, setUserDetails }) {
  const [toggle, setToggle] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const navigate = useNavigate();
  const Reference = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserDetails(null);
    navigate("/");
  };

  useEffect(() => {
    const closeAllToggle = (e) => {
      if (!Reference.current.contains(e.target)) {
        setToggle(false);
        setProfileMenu(false);
      }
    };

    document.body.addEventListener("click", closeAllToggle);

    return () => document.body.removeEventListener("click", closeAllToggle);
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/api/user/details", {
          headers: {
            Authorization: token,
          },
        });
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <>
      <div className="w-full h-[50px] bg-[#416392] flex items-center justify-between">
        <div className="w-3/6 flex flex-row items-center">
          <div>
            <Link to="/">
              <p className="text-white font-bold text:xl md:text-2xl mx-4">ShopY</p>
            </Link>
          </div>
          <div>
            <ul className="hidden md:flex flex-row justify-center">
              <Link to="/products">
                <li className="text-white mx-2">Products</li>
              </Link>
              <Link to="/faq">
                <li className="text-white mx-2">FAQ</li>
              </Link>
              <Link to="/about">
                <li className="text-white mx-2">About Us</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-center" ref={Reference}>
          <p className="hidden md:block text-white">{userDetails ? userDetails.username : "Hello User"}</p>
          <MdAccountCircle
            className="text-3xl mx-4 text-white"
            onClick={() => setProfileMenu(!profileMenu)}
          />
          {toggle ? (
            <IoIosClose
              className="md:hidden text-3xl mr-2 text-white"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event propagation
                setToggle(false);
              }}
            />
          ) : (
            <FiMenu
              className="md:hidden text-3xl mr-2 text-white"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event propagation
                setToggle(true);
              }}
            />
          )}
        </div>
      </div>
      {toggle ? (
        <div className="flex flex-column w-full h-full bg-slate-400 z-10 relative">
          <ul className="justify-center mx-4 z-0">
            <Link to="/products" className="text-white mx-2">
              <li>Products</li>
            </Link>
            <Link to="/faq" className="text-white mx-2">
              <li>FAQ</li>
            </Link>
            <Link to="/about" className="text-white mx-2">
              <li>About Us</li>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="hidden"></div>
      )}

      {profileMenu ? (
        <div className="absolute top-0 right-0 mt-[50px]  w-48 h-auto bg-slate-400 shadow-md p-4 rounded-lg z-10">
          {userDetails ? (
            <ul className="justify-center">
              <Link to="/profiledetails">
                <li className="text-white my-2">Account Details</li>
              </Link>
              <Link to="/cart">
                <li className="text-white my-2">My Cart</li>
              </Link>
              <li className="text-white my-2 cursor-pointer" onClick={handleLogout}>
                Logout
              </li>
            </ul>
          ) : (
            <ul className="justify-center">
              <Link to="/login">
                <li className="text-white my-2">Login</li>
              </Link>
              <Link to="/signup">
                <li className="text-white my-2">Sign Up</li>
              </Link>
            </ul>
          )}
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </>
  );
}
