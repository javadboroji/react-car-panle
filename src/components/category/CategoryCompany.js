import React from 'react'
import { CardCompany } from '../../redux/features/CardCompanySlice'
import CardCat from './CardCat'

function CategoryCompany() {
  return (
    <div className='cat-container'>
        <p className='title-cat'> 
            <span> نمایندگی ها:</span>
                {/* <span></span>
                <span>| بیشتر</span> */}
         </p>
    </div>
  )
}

export default CategoryCompany