import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blogs from './Blogs';
import Blog from './Blog';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Nav from './Nav';
import User from './User';


import "./index.css";

const IndexApp = () => {
  return (
    <BrowserRouter>

    <Nav />

   <Routes>

   <Route path="/home" element={<Home />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/blog" element={<Blogs />} />
   <Route path="/blog/:title" element={<Blog />} />
   <Route path="*" element={<Error />} />
   <Route path="/user" element={<User />} />

   </Routes>


   </BrowserRouter>
  )
}

export default IndexApp;