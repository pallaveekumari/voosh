import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Signup from './Signup/Signup'
import Login from "./Login/Login"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path={"/"} element={<Homepage/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/signup"} element={<Signup/>}/>
    </Routes>
  )
}

export default AllRoutes;