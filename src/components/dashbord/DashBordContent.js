import React from 'react'
import { Outlet ,useLocation} from "react-router-dom"
import "./dashBord.scss";
import Breadcrumb from './DashBordContent/Breadcrumb';

function DashBordContent() {
  const location = useLocation();
  return (
    <>
    <div className='breadcum-dashbord' >
      <Breadcrumb location={location.pathname}/>
    </div>
      <Outlet />
    </>
  )
}

export default DashBordContent