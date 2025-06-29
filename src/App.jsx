import React from 'react'
import './App.css'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import { createBrowserRouter, Navigate, RouterProvider,  Routes, Route, Outlet } from "react-router-dom";
import NavBar from './component/navBar/navBar.jsx';
import LeftBar from './component/leftBar/leftBar.jsx';
import RightBar from './component/rightBar/rightBar.jsx';
import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile.jsx';


function App() {



  const currentUser = true;  // This is a simulated user state, replace with actual user state management
  const Layout = ()=> {
    return (
      <div>
        <NavBar />
        <div style={{display: 'flex'}}>
          <LeftBar />
          <div style={{flex: 6}}> 
            <Outlet />
            </div>
         
          <RightBar />
        </div>
      </div>
    )
  }
  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );


}

export default App
