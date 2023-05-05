import React from 'react'
import { Link } from "react-router-dom"


function NavButton() {

  return (
    <div  className=' btn-container'>
        
      <button className='btn-header'><Link to='/dashbord'> پنل </Link> </button>
      <button className='btn-header'> حساب کاربری</button>
    </div>
  )
}

export default NavButton