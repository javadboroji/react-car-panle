import React from 'react'
import Profile from './MenuItems/Profile'
import InfoUser from './MenuItems/InfoUser'
import { NavLink ,Outlet } from "react-router-dom";
function DashBordMenu() {
  return (
    <>
    <ul className='dashbord-list'>
      <li>

        <Profile />
      </li>
        <li>
        <NavLink to="/dashbord/user">
                اطلاعات کاربر
        </NavLink>
        </li>
        <li>
        <NavLink to="/">
                مشاهده سایت
        </NavLink>
        </li>
        <li>
        <NavLink to="/dashbord/status">
                وضعیت ثبت نام
        </NavLink>
        </li>
        <li>
            <a href='#'>
                خروج
            </a>
        </li>
    </ul>
    </>

  )
}

export default DashBordMenu