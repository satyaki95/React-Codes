import React, { useState } from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from '../About';
import AddBlog from '../AddBlog';
import Error from '../Error';
import Home from '../Home';
import Navbar from '../Layout/Navbar';
import Protected from './Protected';

const Index = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <BrowserRouter>
    <Navbar />
    {isLoggedIn ? <button onClick={()=>{
      setIsLoggedIn(!isLoggedIn)}}>Log out </button> : <button onClick={()=>{
        setIsLoggedIn(!isLoggedIn)}}>Log in</button>}
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/add-blog" element={<Protected isLoggedIn={isLoggedIn}>
        <AddBlog />
    </Protected>} />
    <Route path="/*" element={<Error />} />

    </Routes>

    </BrowserRouter>
  )
}

export default Index;