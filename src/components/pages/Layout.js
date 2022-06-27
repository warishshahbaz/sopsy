import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";


function Layout({logOut,setLogout,filterHandle}) {
  return (
    <>
      <Navbar filterHandle={filterHandle} logOut={logOut} setLogout={setLogout}/>
     <Outlet/>
    </>
  );
}

export default Layout;
