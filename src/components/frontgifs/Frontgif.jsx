import React from 'react'
import giva from "./cat.gif"
import './Frontgif.css'
function Frontgif() {
  return (
    <div>
        <img src={giva} alt="loading..." className='catgiv' />
    </div>
  )
}

export default Frontgif