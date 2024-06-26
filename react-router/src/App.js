import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import { useState } from "react";
import { Navbar } from "./componenets/Navbar";
import PrivateRoute from "./componenets/PrivateRoute";

function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen  bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn= { isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute  isLoggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
