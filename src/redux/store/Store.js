import { configureStore } from '@reduxjs/toolkit'
import CarSliderSlice from '../features/CarSliderSlice'
import CardCompanySlice from '../features/CardCompanySlice'
export const store = configureStore({
    reducer: {
      slidercars:CarSliderSlice,
      cardCompany:CardCompanySlice
    },
  })