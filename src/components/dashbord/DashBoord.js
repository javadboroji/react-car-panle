import React from 'react'
import './dashBord.scss'
import DashBordMenu from './DashBordMenu'
import DashBordContent from './DashBordContent'
function DashBoord() {
  return (
    
    <div className='dashbord'>
    <div className=' nav-admin'>
      <DashBordMenu />
    </div>
    <div className='dashbord-contetn'>
      <DashBordContent />
    </div>
    </div>
  )
}

export default DashBoord