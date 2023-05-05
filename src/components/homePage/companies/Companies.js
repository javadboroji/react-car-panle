import React from 'react'
import CompaniesSlide from './CompaniesSlide';
import CategoryCompany from  "../../category/CategoryCompany"
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "../Home.scss"

function Companies() {
    const companiesData = useSelector(state => state.cardCompany)
    return (
        <>
            <CategoryCompany />

            <div className='hompage-swiper-spacing'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        companiesData.map(item => {
                            return (
                                <SwiperSlide>
                                    <CompaniesSlide data={item} />

                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>


    )
}

export default Companies