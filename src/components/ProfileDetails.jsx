import React, { useState, useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from 'axios';

export default function ProfileDetails({userDetails, setUserDetails}) {


    useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/user/details', {
          headers: {
            Authorization: token,
          },
        });
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

    return (
        <div className= "flex flex-col w-[300px] md:w-[1280px] h-full m-10">
            {userDetails ? (
                <>
                    <div className= "flex flex-row justify-start items-center ml-4 md:ml-10">
                        <MdAccountCircle className="text-xl md:text-4xl mx-2 " />
                        <h6 className= "text-xl md:text-4xl font-bold text-[#416392]">{userDetails.username}</h6>
                    </div>
                    <hr className=" w-full border-[#416392] my-8 " />
                    <div className= "flex flex-col">
                        <div className= "flex flex-row justify-start items-center mb-10">
                            <p className= "text-lg md:text-3xl font-bold text-[#416392] mr-1 md:mr-5 ">Email</p>
                            <AiOutlineArrowRight className= "text-lg md:text-2xl text-[#416392] mr-1 md:mr-5 mt-0 md:mt-1"/>
                            <p className= "text-lg md:text-2xl font-bold text-[#416392]">{userDetails.email}</p>
                        </div>
                        <div className= "flex flex-row justify-start items-center">
                            <p className= "text-lg md:text-3xl font-bold text-[#416392] mr-1 md:mr-5 ">Contact No.</p>
                            <AiOutlineArrowRight className= "text-lg md:text-2xl text-[#416392] mr-1 md:mr-5 mt-0 md:mt-1"/>
                            <p className= "text-lg md:text-2xl font-bold text-[#416392]">{userDetails.contactNo}</p>
                        </div>
                    </div>
                    <hr className=" w-full border-[#416392] my-8 " />
                </>
            ) : (
                <div className= "hidden">Loading...</div>
            )}
        </div>
    );
}
