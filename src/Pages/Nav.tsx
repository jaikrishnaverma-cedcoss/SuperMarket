import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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
     }[]
 }
 type CartType={
     id:number  
     image:string   
     price:number 
     quantity:number
     rating:number
     title:string
     total:number
     type:string
 }
 type MyType = {
    setLoggedIn: React.Dispatch<React.SetStateAction<{ loggedIn: boolean; userDetails: {}; }>>
    loggedIn:{
        loggedIn:boolean
        userDetails:{
            username?: string
            password?: string
            mobile?: number
        }
    }
  }
const Nav = (props:MyType) => {
    const cart = useSelector((state: StateType) => state.Cart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light col-12 sticky-top ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="d-flex flex-column">
                    <Link to='/'><img className="navbar-brand" src="https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/logo.jpg" /></Link>
                    <button className='btn btn-sucess catlist rounded-0 fs-4 py-0'>SHOP BY CATEGORY <i className="bi bi-chevron-down"></i></button>
                </div>

                <div className="collapse navbar-collapse ms-5" id="navbarTogglerDemo03">

                    <div className="input-group col-2">
                        <input type="text" className="form-control rounded-0" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span className="input-group-text bg-light rounded-0" id="basic-addon2"><i className="bi bi-search"></i></span>
                    </div>

                    <div className="d-flex row col-3 ">
                        <div className="col-1 fs-3"><i className="bi bi-geo-alt text-success"></i></div>
                        <div className="col-9 navLoc ps-3">
                            <p className='m-0'>Collect from Store</p>
                            <p className='m-0'>Spectrum Mall Noida</p>
                        </div>
                        <div className="col-1 d-flex justify-content-center align-items-center ">
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>

                    <div className="d-flex row col-3 ">
                        <div className="col-1 fs-3"><i className="bi bi-person text-success"></i></div>
                        <div className="col-9 navLoc ps-3">
                            <p className='m-0'>Collect from Store</p>
                            <p className='m-0'>Spectrum Mall Noida</p>
                        </div>
                        <div className="col-1 d-flex justify-content-center align-items-center ">
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>

                    <Link to='/cart' className="d-flex row col-2 ms-2">
                        <div className="col-2 fs-3 text-success"><i className="bi bi-cart3"></i></div>

                        <div className="col-9 navLoc">
                            <p className='m-0 '>My Cart</p>
                            <p className='m-0 text-danger bolder'>
                                    {
                                        cart.reduce((total: number, currentValue: CartType) => {
                                            return total + currentValue.quantity
                                        }, 0).toFixed()
                                    }&nbsp;
                                    Items
                            </p>
                        </div>
                    </Link>

                    <div className="d-flex row col-1 pe-1 ">
<button className="btn btn-outline-danger" onClick={()=>props.setLoggedIn({loggedIn:false,userDetails:{}})}>LogOut</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav