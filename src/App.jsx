import React from 'react'
import './App.css'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from './component/navBar/navBar.jsx';
import LeftBar from './component/leftBar/leftBar.jsx';
import RightBar from './component/rightBar/rightBar.jsx';
import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile.jsx';


function App() {


  const Layout = ()=> {
    return (
      <div>
        <NavBar />
        <div style={{display: 'flex'}}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    )
  }
  
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* The Home page will now render inside the Layout's <Outlet /> at the "/" path */}
            <Route index element={<Home />} />
            {/* The Profile page will render inside the Layout at "/profile/:id" */}
            <Route path="profile/:id" element={<Profile />} />
          </Route>
          {/* Login and Register are separate pages without the main Layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );


}

export default App
