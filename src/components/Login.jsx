import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MdCancel } from "react-icons/md";

export default function Login({ error, setError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const handleLogin = async () => {

    setError('');

    if (!username || username.trim() === '') {
      setError('Username cannot be empty');
      return; 
    }

    if (!/^[a-zA-Z\d]+$/.test(username) || /^\d+$/.test(username) || /^[a-zA-Z]+$/.test(username)) {
      setError('Username must contain only letters and numbers');
      return; 
    }

    if (!password || password.trim() === '') {
      setError('Password cannot be empty!');
      return; 
    }

    if (password === username) {
      setError('Password cannot be the same as the username');
      return; 
    }

    if (!/^([^\s])([\W\w])([^\s]){6,16}$/.test(password)) {
      setError('Password should have at least 8 characters');
      return; 
    }

    try {
      const response = await axios.post('http://localhost:3000/api/user/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      // Redirect or navigate to the desired page after successful login
      window.location.reload();
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  // Clear error message when user starts typing
  const handleInputChange = () => {
    setError('');
  };

  // Clear error message on MdCancel click
  // const clearError = () => {
  //   setError('');
  // };

  return (
    <>
      {error &&
        <div className="md:absolute top-13 right-0 bg-[#b91c1cc7]  text-white w-screen md:w-[350px] h-[70px] rounded-lg flex justify-center items-center px-2">
          <p className="flex font-bold text-lg md:text-xl">{error} </p>
        </div>
      }
      <div className="flex justify-center items-center h-full relative">
        <div className="flex flex-col justify-center items-center w-[300px] md:w-[400px] p-2 md:p-8">
          <p className="text-2xl md:text-4xl font-bold text-[#416392] mt-6">Sign In</p>
          <hr className="w-full border-[#416392] my-8" />
          <div className="flex flex-col">
            <label htmlFor="username" className="text-xl font-bold text-[#416392] mb-2">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-[240px] mb-4 p-2 rounded-md border border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-500"
              onChange={(e) => setUsername(e.target.value)}
              onFocus={handleInputChange}
            />
            <div className="flex flex-row items-center">
              <div className="flex flex-col mr-2">
                <label htmlFor="password" className="text-xl font-bold text-[#416392] mb-2">Password</label>
                <input
                  id="password"
                  type={visibility ? "text" : "password"}
                  placeholder="Password"
                  className="w-[240px] mb-4 p-2 rounded-md border border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={handleInputChange}
                />
              </div>
              <div className="text-[#416392] cursor-pointer mt-5 text-xl" onClick={toggleVisibility}>
                {visibility ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-[#416392] w-[90px] h-[30px] text-white font-bold rounded-lg" onClick={handleLogin}>Sign In</button>
            </div>
          </div>
          <hr className="w-full border-[#416392] my-8" />
          <Link to="/signup" className="mr-2 text-lg md:text-xl w-auto h-auto text-[#416392] mb-7">Create a new Account ?</Link>
        </div>
      </div>
    </>
  );
}
