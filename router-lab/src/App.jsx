// import React from 'react'
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Content from "./components/Content";
import Login from "./components/Login";

export default function App() {
  return (

    <div>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/content" element={<Content/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/*" element={<PageNotFound/>} />
    </Routes>

    </div>

  )
}
