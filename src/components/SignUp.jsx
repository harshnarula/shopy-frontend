import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp({error, setError}) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(!confirmPasswordVisibility);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
       // Clear existing error messages
    setError('');

    // Check for username and password validity
    if (!username || username.trim() === '') {
      setError('Username cannot be empty');
      return; // Exit early if there's an error
    }

    if (!/^[a-zA-Z\d]+$/.test(username) || /^\d+$/.test(username) || /^[a-zA-Z]+$/.test(username)) {
      setError('Username must contain only letters and numbers');
      return; // Exit early if there's an error
    }

    if(!email || email.trim() === ''){
      setError('Email cannot be empty');
      return;
    }
    if(!/^([a-z-A-Z-0-9_]+)@([a-zA-Z]+)[.]([a-z-A-Z]+)$/.test(email)){
      setError('Invalid Email Format')
      return;
    }

    if(!contactNo || contactNo.trim() === ''){
      setError('Contact No cannot be empty!')
      return;
    }
    if(!/^[0-9]*$/.test(contactNo)){
      setError('Contact No should only be in Numbers')
      return;
    }
    if(contactNo.length > 10){
      setError('Contact No should have only 10 Numbers')
      return;
    }

    if (!password || password.trim() === '') {
      setError('Password cannot be empty!');
      return; // Exit early if there's an error
    }

    if (password === username) {
      setError('Password cannot be the same as the username');
      return; // Exit early if there's an error
    }

    if (!/^([^\s])([\W\w])([^\s]){6,16}$/.test(password)) {
      setError('Password should have at least 8 characters');
      return; // Exit early if there's an error
    }

    if (!confirmPassword || confirmPassword.trim() === '') {
      setError('Confirm Password cannot be empty!');
      return; // Exit early if there's an error
    }

    if (!confirmPassword === password) {
      setError('Password and Confirm Password should have same value');
      return; // Exit early if there's an error
    }

    if (!/^([^\s])([\W\w])([^\s]){6,16}$/.test(confirmPassword)) {
      setError('Confirm Password should have at least 8 characters');
      return; // Exit early if there's an error
    }

    try {
      const response = await axios.post('http://localhost:3000/api/user/register', {
        username,
        email,
        password,
        contactNo
      });
      setSuccess(true);
      setError(null);
      navigate('/login');
    } catch (error) {
      setError('Failed to register user');
      console.error('Error registering user:', error);
    }
  };

  const handleInputChange = () => {
    setError('');
  };

  return (
    <>
    {error &&
        <div className="md:absolute top-13 right-0 bg-[#b91c1cc7]  text-white w-screen md:w-[350px] h-[70px] rounded-lg flex justify-center items-center px-2">
          <p className="flex font-bold text-lg md:text-xl">{error} </p>
        </div>
    }
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center w-[300px] md:w-[400px] p-2 md:p-8">
        <p className="text-2xl md:text-4xl font-bold text-[#416392] mt-6">Sign Up</p>
        <hr className="w-full border-[#416392] my-8" />
        <div className="flex flex-col">
          <label htmlFor="" className="text-xl font-bold text-[#416392] mb-2">
            Username
          </label>
          <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          onFocus={handleInputChange}
          className="w-[240px] mb-4 p-2 rounded-md border border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-500" />

          <label htmlFor="" className="text-xl font-bold text-[#416392] mb-2">
            Email
          </label>
          <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          onFocus={handleInputChange} 
          className="w-[240px] mb-4 p-2 rounded-md border border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-500" />

          <label htmlFor="" className="text-xl font-bold text-[#416392] mb-2">
            Contact No.
          </label>
          <input 
          type="phone" 
          placeholder="Contact No." 
          value={contactNo} 
          onChange={(e) => setContactNo(e.target.value)} 
          onFocus={handleInputChange}
          className="w-[240px] mb-4 p-2 rounded-md border border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-500" />

          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-2">
              <label htmlFor="" className="text-xl font-bold text-[#416392] mb-2">
                Password
              </label>
              <input
                type={passwordVisibility ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleInputChange}
                className="w-[240px] mb-4 p-2 rounded-md border border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="text-[#416392] cursor-pointer mt-5 text-xl" onClick={togglePasswordVisibility}>
              {passwordVisibility ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>

          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-2">
              <label htmlFor="" className="text-xl font-bold text-[#416392] mb-2">
                Re-type Password
              </label>
              <input
                type={confirmPasswordVisibility ? "text" : "password"}
                placeholder="Re-type Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={handleInputChange}
                className="w-[240px] mb-4 p-2 rounded-md border border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="text-[#416392] cursor-pointer mt-5 text-xl" onClick={toggleConfirmPasswordVisibility}>
              {confirmPasswordVisibility ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#416392] w-[90px] h-[30px] mt-3 text-white font-bold rounded-lg" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        </div>
        <hr className="w-full border-[#416392] my-8" />
        {/* <div className="flex flex-row justify-center items-center mb-2">
          <a href="" className="text-lg md:text-xl w-100px h-auto text-[#416392] ">
            Sign In with Google
          </a>
          <FcGoogle className="mt-1 ml-1" />
        </div> */}
        <Link to="/login" className="mr-2 text-lg md:text-xl w-auto h-auto text-[#416392] mb-7 ">
          Already have an account ?
        </Link>
      </div>
    </div>
    </>
  );
}
