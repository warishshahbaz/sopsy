import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import './App.css';
import LoginReg from "./components/pages/Authentics/LoginReg";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/pages/About'
import './App.css'
import Cart from "./components/pages/Cart";
import { CartProvider,useCart } from "react-use-cart";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Payment from "./components/pages/Payment";

function App() {
 


  const [backEndData,setbackendData] = useState([]);
  const [realdata,setRealData] = useState([]);
  const [logOut,setLogout] = useState(false);

  // fetching api form backend 
  // already set proxy package json as a http://localhost
  const fetchData = async() =>{
    const res1 = fetch('/api')
    .then(res => res.json())
    .then((data)=> {
      setRealData(data.arrayOfProducts)
      setbackendData(data.arrayOfProducts);
    })
    .then((err)=> console.log(err.message));
  }
  useEffect(()=>{
    fetchData()
  },[])

 const filterHandle = (e) =>{
  // let res = backEndData.sort((a,b)=> a.price > b.price); 
  // setbackendData(res);
  let item = e.target.value;
  if(item === 'increse'){
    console.log('koo');
    let res = backEndData.sort((a,b)=> a.price > b.price); 
    setbackendData(res);
  }else if(item === 'decrese'){
    let res = backEndData.sort((a,b)=> a.price < b.price);
    setbackendData(res);
    console.log('koo');
  }
  console.log(item);
 }
 
//  filterHandle();
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout filterHandle={filterHandle}  logOut={logOut} setLogout={setLogout} />}>
        <Route path="/" index element={<LoginReg  setLogout={<setLogout/>}/>}/>
            <Route path="home"  element={  <CartProvider><Home setLogout={setLogout} realdata={realdata} setbackendData={setbackendData} backEndData={backEndData}/></CartProvider>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="cart" element={<CartProvider> <Cart items={realdata}/></CartProvider> }/>
            <Route path="payment" element={<Payment/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Demo/> */}
     
    </>
  );
}

export default App;
