import React from 'react'

function Footer() {
 

  return (
    <div>
    <div className="foot-pannel">
      Back to Top
    </div>
    
          <div className="foot-pannel2">
            <ul>
              <p>Get to Know Us</p>
              <a>Careers</a>
              <a>Blog</a>
              <a>About Amazon</a>
              <a>Investor Relations</a>
              <a>Amazon Devices</a>
            </ul>
    
            <ul>
              <p>Make Money with Us</p>
              <a>Sell products on Amazon</a>
              <a>Sell apps on Amazon</a>
              <a>Become an Affiliate</a>
              <a>Advertise Your Products</a>
              <a>Self-Publish with Us</a>
            </ul>
            <ul>
              <p>Let Us Help You</p>
              <a>Amazon and COVID-19</a>
              <a>Your Account</a>
              <a>Your Orders</a>
              <a>Shipping Rates & Policies</a>
              <a>Returns & Replacements</a>
            </ul>
    
            <ul>
              <p>	
                Amazon Payment Products</p>
              <a>Amazon Business Card</a>
              <a>Shop with Points</a>
              <a>Reload Your Balance</a>
              <a>Amazon Currency Converter</a>
            </ul>
          </div>
    
    <div className="foot-pannel3">
    <div className="logo">
    <img src="images/amazon_logo.png" className="logo" width={160} height={280} alt=""/>
      </div>
    </div>
    
       <div className="foot-pannel4">
        <div className="pages">
         <a>Conditions of Use</a>
         <a>Privacy Notice</a>
         <a>Your Ads Privacy Choices</a>
        </div>
        <div className="copyright">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
       </div>
    
    </div>
  )
}

export default Footer