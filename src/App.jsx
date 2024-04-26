import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import FAQsection from './components/FAQsection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDetails from "./components/ProfileDetails"
import CartPage from "./pages/CartPage"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { useState } from 'react';

function App() {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  return (
    <Router>
      <div>
        <Navbar userDetails = {userDetails} setUserDetails = {setUserDetails} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage error = {error} setError = {setError} userDetails = {userDetails} />} />
          <Route path="/faq" element={<FAQsection />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path = "/profiledetails" element = {<ProfileDetails userDetails = {userDetails} setUserDetails = {setUserDetails} />}  />
          <Route path = "/cart" element = {<CartPage />}/>
          <Route path = "/login" element = {<Login error = {error} setError = {setError}/>}/>
          <Route path = "/signup" element = {<SignUp error = {error} setError = {setError}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
