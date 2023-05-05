import React from 'react'
import { useSelector } from 'react-redux';
import './Cat.scss'
function CardCat() {
  const cards=useSelector(state=>state.cardCompany)
  return (
    <div className='card-box'>

    { console.log("card"+ cards)}
        {/* <div className='card-image-box'>
            <img src='' alt=''/>
        </div>
        <p className='card-title'></p>
        <ul className='card-desc'></ul>
        <p className='card-price'></p> */}
    </div>
  )
}

export default CardCat