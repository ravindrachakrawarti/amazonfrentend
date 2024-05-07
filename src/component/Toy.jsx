import React, { useState } from 'react';


function Toy() {

  const [currentValue, setCurrentValue] = useState()

  
  const handleButtonClick = async (anchorId) => {
    const anchorElement =document.getElementById(anchorId);

    
    
    const newValue = anchorElement.getAttribute('data-value');
    setCurrentValue(newValue);

    
  }

  
var amount=currentValue;

console.log(amount);
 
  


  const handleButtonClick1 = async (targetId) => {

    const amount = document.getElementById(targetId).innerHTML;



    const createOrder = async () => {

  
      console.log("payment started...");
    
      
     // let amount = document.getElementById('ab').innerHTML;
    
      console.log("abc"+amount);
      return await fetch('http://localhost:8080/payment/'+amount*100, {
      mode: 'no-cors',
      method: 'GET',
  });
  
  
  
    }



  const order = await createOrder();

  const options = {
    key: "rzp_test_4xOJiuPbQ8GlQA",
    amount: amount*100, 
    currency: "INR",
    name: 'userName',
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: order, 
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: 'userName',
      email: 'email',
      contact: 'contact',
    },
    notes: {
      address: "ABC, Delhi",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp1 = new window.Razorpay(options);

  rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });

  rzp1.open();
};

  return (
    <div> <div className="hero-section1">
    <div className="hero-msg">
      <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.<a> Click here to go to amazon.in </a>
    </p>
  </div>
  </div>
  
  <div className="shop-section">
      
      
    <div className="box1 box border shadow">
      <div className="box-content">
     <h6>New arrivals in Toys</h6>
     <div className="box-img">
     <img src="images/t1.jpg" className="box-img1" width={280} height={280} alt=""/>
     </div>
     <a href="#anchor2" id="anchor1">190</a>
    
     
    
     
     <button onClick={() => handleButtonClick1('anchor1')}>payment</button>           

    </div>
    </div>
    
    
    
    <div className="box2 box border shadow">
        <div className="box-content ">
      <h6>White and Brown Rabbit Figurine 
      </h6>
      <div className="box-img" >
      <img src="images/t2.jpg" className="box-img1" width={280} height={280} alt=""/>
      </div>
      
      <a href="#anchor2" id="anchor2"  >150</a>
    
     
    
      <button onClick={() => handleButtonClick1('anchor2')}>payment</button>           
      
     </div>
     </div>
     
     
     
     
    <div className="box3 box border shadow"><div className="box-content">
      <h6>Green and Orange Dinosaur Plush Toy
      </h6>
      <div className="box-img" >
      <img src="images/t3.jpg" className="box-img" width={280} height={280} alt=""/>
      </div>
      <a href="#anchor3" id="anchor3" >190</a>
    
     
      <button onClick={() => handleButtonClick1('anchor3')}>payment</button>           
     </div></div>


    <div className="box4 box border shadow"><div className="box-content">
      <h6>Three Animal Head Pencils
      </h6>
      <div className="box-img">
      <img src="images/t4.jpg" className="box-img" width={280} height={280} alt=""/>
      </div>
      <a href="#anchor4" id="anchor4" >198</a>
    
     
      <button onClick={() => handleButtonClick1('anchor4')}>payment</button>           
     </div></div>
  
  
  
     <div className="box1 box border shadow">
      <div className="box-content">
     <h6>Brown and Green Giraffe Figurine on Book
    </h6>
     <div className="box-img" >
     <img src="images/t5.jpg" className="box-img" width={280} height={280} alt=""/>
     </div>
     <a href="#anchor5" id="anchor5">199</a>
    
     
     <button onClick={() => handleButtonClick1('anchor5')}>payment</button>           
    </div>
    </div>
    <div className="box2 box border shadow"><div className="box-content">
      <h6>Two Brown and White Rabbit Figurines
      </h6>
      <div className="box-img" >
      <img src="images/t6.jpg" className="box-img" width={280} height={280} alt=""/>
      </div>
      <a href="#anchor6" id="anchor6" >193</a>
    
     
      <button onClick={() => handleButtonClick1('anchor6')}>payment</button>           
     </div></div>
    <div className="box3 box border shadow"><div className="box-content">
      <h6>reen Dinosaur Stuff Toy
      </h6>
      <div className="box-img border shadow" >
      <img src="images/t7.jpg" className="box-img" width={280} height={280} alt=""/>
      </div>
      <a href="#anchor7" id="anchor7">194</a>
    
     
    
      <button onClick={() => handleButtonClick1('anchor7')}>payment</button>           
     </div></div>
    <div className="box4 box"><div className="box-content">
      <h6>White Sheep Plush Toy
      </h6>
      <div className="box-img border shadow" >
      <img src="images/t8.jpg" className="box-img" width={280} height={280} alt=""/>
      </div>
      <a href="#anchor8" id="anchor8">191</a>
    
     
    
      <button onClick={() => handleButtonClick1('anchor8')}>payment</button>           
     </div></div>
  
  </div>
  
  
     </div>
     
  )
}

export default Toy