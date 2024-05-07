import { Link } from "react-router-dom";
import React from 'react'

function Hoome() {
    return (
      <div>
         <div>
        <div className="hero-section">
  <div className="hero-msg border shadow">
    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.<a> Click here to go to amazon.in </a>
  </p>
</div>
</div>

<div className="shop-section">
  <div className="box1 box border shadow">
    <div className="box-content">
   <h5>New arrivals in Toys</h5>
   <div className="box-img" >
    <img src="images/box7_image.jpg" className="box-img" alt=""/>
   </div>
    <Link to="/toy">See More</Link>
  </div>
  </div>
  <div className="box2 box border shadow"><div className="box-content">
<h5>Cloths</h5>
    <div className="box-img" >
    <img src="images/box1_image.jpg" className="box-img" alt=""/>
    </div>
    <Link to="/cloth">See More</Link>
   </div></div>
  <div className="box3 box border shadow"><div className="box-content">
    <h5>Furniture</h5>
    <div className="box-img" >
    <img src="images/box3_image.jpg" className="box-img" alt=""/>
    </div>
    <Link to="/funriture">See More</Link>
   </div></div>
  <div className="box4 box border shadow"><div className="box-content">
<h5>Mobiles</h5>
    <div className="box-img">
    <img src="images/box4_image.jpg" className="box-img" alt=""/>
    </div>
    <Link to="/mobile">See More</Link>
   </div></div>



   <div className="box1 box border shadow">
    <div className="box-content">
   <h5>Beauty Picks</h5>
   <div className="box-img" >
   <img src="images/box5_image.jpg" className="box-img" alt=""/>
   </div>
   <Link to="/beauty">See More</Link>
  </div>
  </div>
  <div className="box2 box border shadow"><div className="box-content">
    <h5>Shop Pet supplies</h5>
    <div className="box-img" >
    <img src="images/box6_image.jpg" className="box-img" alt=""/>
    </div>
    <Link to="/dog">See More</Link>
   </div></div>
  <div className="box3 box border shadow"><div className="box-content">
    <h5>Health & Personal Care</h5>
    <div className="box-img" >
    <img src="images/box2_image.jpg" className="box-img" alt=""/>
    </div>
    <Link to="/health">See More</Link>
   </div></div>
  <div className="box4 box border shadow"><div className="box-content">
    <h5>Discover fashion trends</h5>
    <div className="box-img" >
    <img src="images/box8_image.jpg" className="box-img" alt=""/>
    </div>
    <Link to="/feshion">See More</Link>
   </div></div>

</div>
    </div>
      </div>
    );
  }
  export default Hoome;