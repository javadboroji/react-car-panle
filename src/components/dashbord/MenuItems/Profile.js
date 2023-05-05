import React from 'react'
import '../dashBord.scss'
import profilleImage from '../../../asset/image/images.jpg'
function Profile() {
  return (
    <div className='profile'>
        <img src ={profilleImage} alt='profile'/>
        <span> جواد</span>
    </div>
  )
}

export default Profile