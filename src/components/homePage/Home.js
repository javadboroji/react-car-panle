import React from 'react'
import Companies from './companies/Companies'
import Slider from './Slider'
import HeaderNav from '../header/HeaderNav'
import CategoryCompany from '../category/CategoryCompany'

function Home() {
  return (
    <>
    <HeaderNav />
      <Slider />
      <Companies />
      <CategoryCompany />
    </>
  )
}

export default Home