import React from 'react'
import { useLocation } from 'react-router-dom'

function Demos() {
    const location=useLocation();
    console.log(location.state);
  return (
    <div>this is about page{location.state.id}
    
    <select>
      <option >{location.state.id}</option>
     
    </select>
    
    </div>
    
  )
}

export default Demos