import React from 'react'
import { useSelector } from 'react-redux';
function DashbordStatus() {
  const shopp = useSelector(state => state.users)
  return (
   <>
    <ul className='dashbord-status'>
      {shopp.map(item=>{
        return  item.centers.map(shoppItem=>{
            return <li > <h1> {shoppItem}</h1> </li>   
        
        })
      })}
        
    </ul>
   </>
  )
}

export default DashbordStatus