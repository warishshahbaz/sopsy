import React from "react";
import { NavLink } from "react-router-dom";
import {BsCart4} from 'react-icons/bs'
import { useCart } from "react-use-cart";

function Navbar({logOut,setLogout,totalItems,filterHandle}) {
 
  // Toggle logout and Login text
  const logoutCall = () =>{
    setLogout(true);
   
  }
  const  loginCall = () =>{
    setLogout(true);
  }
  return (
    <>
      <nav>
        <div className="logo">Shopsy</div>
        <div className="filter">
              <select  id="#" onChange={filterHandle}>
                <option value="#">Filter</option>
                <option value="increse">Low-High</option>
                <option value="decrese">High-Low</option>
              </select>
        </div>
        <div className="list">
          <ul>
            <li>
              <NavLink to="about" 
              style={({isActive})=> {return {backgroundColor: isActive ? '#6d1b7b' : ''}}}
              >
              About</NavLink>
            </li>
            <li>
              <NavLink to="contact" style={({isActive})=> {return {backgroundColor: isActive ? '#6d1b7b' : ''}}} >
              Contact</NavLink>
            </li>
            <li>
            {
              !logOut ?  <NavLink to="/" onClick={logoutCall}  style={({isActive})=> {return {backgroundColor: isActive ? '#6d1b7b' : ''}}} >
              Logout</NavLink>
               : <NavLink to="/" onClick={loginCall}  style={({isActive})=> {return {backgroundColor: isActive ? '#6d1b7b' : ''}}} >
              Login</NavLink>
            }
             
            </li>
            <li>
              <NavLink to="cart" style={({isActive})=> {return {backgroundColor: isActive ? '#6d1b7b' : ''}}} > <span className="cart"> <BsCart4/>{totalItems}</span></NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
