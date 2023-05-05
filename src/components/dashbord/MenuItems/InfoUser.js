import React from 'react'
import '../dashBord.scss'
import { NavLink ,Outlet } from "react-router-dom";
function InfoUser() {
  return (
    <ul className='dashbord-list'>
        <li>
            <a href='#'>
                اطلاعات کاربر
            </a>
        </li>
        <li>
            <a href='#'>
                مشاهده سایت
            </a>
        </li>
        <li>
            <a href='#'>
                وضعیت ثبت نام
            </a>
        </li>
        <li>
            <a href='#'>
                خروج
            </a>
        </li>
    </ul>
  )
}

export default InfoUser