import React, { useState } from 'react'
import Home from './Home'
import Nav from './Nav'
import { Route, Routes } from "react-router-dom";
import About from './About';
import CartPage from './CartPage';
import { useSelector } from 'react-redux';
import Auth from './Auth';
type StateType={
  Cart:{
     id:number  
     image:string   
     price:number 
     quantity:number
     rating:number
     title:string
     total:number
     type:string
   }[],
 User:{
      username:string
      password:string
      mobile:number
   }[]
}
const Index = () => {
  const state=useSelector((state:StateType)=>state.User)
  const [loggedIn,setLoggedIn]=useState({loggedIn:false,userDetails:{}})
  if(!loggedIn.loggedIn)
  return <Auth setLoggedIn={setLoggedIn}/>


  return (
    <>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  )
}

export default Index