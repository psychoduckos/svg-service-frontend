import React, {useEffect, useState} from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// Pages
import LoginPage from "./pages/Login.page";
import RegisterPage from "./pages/Register.page";
import PortfolioPage from "./pages/Portfolio.page";
import LandingPage from "./pages/Landing.page";


const rout = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/portfolio",
    element: <PortfolioPage/>
  },
  {
    path: "/landing",
    element: <LandingPage/>
  },
])
function App() {


return (
    <div className="App">
      <RouterProvider router={rout} />
    </div>
  );
}

export default App;
