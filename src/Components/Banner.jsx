import React from 'react'
import banner  from "../assets/banner1.png"


function Banner() {
  return (
    <>
    <div className="d-flex w-99 h-51 my-1 container">
        <img src={banner} alt="" className=' d-block w-100'/>
    </div>
    </>
  )
}

export default Banner