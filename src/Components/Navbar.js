import React from "react";
import { NavLink,Outlet } from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="navbar">
            <div>
                <h1>ShoppingCart</h1>
            </div>
            <div >
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/mycart">MyCart</NavLink>
            <Outlet/>

            </div>
           


        </div>
    )
}
export default Navbar;
