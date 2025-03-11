import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Questions from "./components/Questions.jsx";
import Home from "./components/Home.jsx";
import Math from "./components/Math.jsx";
import Physics from "./components/Physics.jsx";
import Chemistry from "./components/Chemistry.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <div>
          <Navbar />
          <Home />
          <Footer />
        </div>
      
    },

    {
      path: "/questions",
      element: 
        <div>
          <Navbar />
          <Questions />
          <Footer />
        </div>,
      
      children: [
        {
          path: "math",
          element: <Math/>
            
        },
        {
          path: "physics",
          element: <Physics/> 
            
        },
        {
          path: "chemistry",
          element:  <Chemistry/>
            
        }
      ]
    },
    {
      path: "/about",
      element: 
        <div>
          <Navbar />
          <About />
          <Footer />
        </div>
      
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
