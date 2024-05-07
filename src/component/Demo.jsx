import React from 'react'
import { useNavigate } from 'react-router-dom'

function Demo() {
   var id=5;
   
  const navigate=useNavigate()
    function goToDemos(){
      navigate("/about",{state:{id:id}})
    }
  
  return (

    
    <>
  <div>Home</div>
        <button onClick={goToDemos}>About</button>
    </>
  )
}

export default Demo