import React from 'react'
import '../dashBord.scss'
import { useSelector } from 'react-redux';
function DashbordInfoUser() {
  const users = useSelector(state => state.users)
  return (
    <>
     <>

{users.map(item => {
  return (
    <ul key={item.id} className='status-box'>
      <li>
        <span className='title'> نام کاربر:</span>
        <span className='value'> {item.name}</span>
      </li>
      <li>
        <span className='title'> پروفایل :</span>
        <span className='value'> 
          <img src={item.image} alt={item.name}/>
        </span>
      </li>
      <li>
        <span className='title'> تعداد خریدها :</span>
        <span className='value'> {item.shopp}</span>
      </li>
      <li>
        <span className='title'>پسورد:</span>
        <span className='value'> {item.pass}</span>
      </li>
    </ul>
  )
})}

</>
    </>


  )
}

export default DashbordInfoUser