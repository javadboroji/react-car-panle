import React from 'react'
import { NavLink ,Outlet } from "react-router-dom";
function DashBordMenu() {
  return (
    <>
    <ul className='dashbord-list'>
      <li>
      </li>
        <li>
        <NavLink to="/dashbord/user">
                اطلاعات کاربر
        </NavLink>
        </li>
        <li>
        <NavLink to="/dashbord/panel">
               پیشخوان
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