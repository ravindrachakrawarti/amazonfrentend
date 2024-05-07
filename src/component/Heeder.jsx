import { Link } from "react-router-dom";
import React from 'react'

function Heeader() {
    return (
      <div>
       <div className="navbar">
             <div className="nav-logo border">
                 <div className="logo">
                 <img src="images/amazon_logo.png" className="logo" width={100} height={280} alt=""/>
                 </div>
  
             </div>
             <div className="nav-address border">
                <p className="add-first">Deliver to </p>      
          
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="add-sec"> India</p>
            </div>
          
          </div>
  
          
        <div className="nav-search">
          <select className="search-select">
              <option>all</option>
          </select>
          <input placeholder="Search Amazon" className="search-input"/>
          <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      
        <div className="nav-singin border">
                  <a href="login">Hello, sign in</a>
        <a href="signup"> sign up</a>
         <p className="nav-sec">Account & Lists</p>
        </div>
  
        <div className="nav-return border">
          <p><span>Return</span></p>
         <p className="nav-sec">& Orders</p>
        </div>
        <div className="nav-cart border">
          <i className="fa-solid fa-cart-shopping"></i>
            cart
        </div>
        </div>
  
        <div className="pannel">
          <div className="pannel-all">
            <i className="fa-solid fa-bars"></i>
            All
          </div>
          <div className="pannel-ops">
			  <a href="/">Home</a>
       
            <p>
              Amazon miniTV</p>
            <p> Sell</p>
              <p>Best Sellers</p>
              <p>Mobiles</p>
             
          </div>
  
          <div className="panel-deals">
            Shop deals in Electronics
          </div>
        </div>
   
      </div>
    );
  }
  export default Heeader;