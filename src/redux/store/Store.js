import { configureStore } from '@reduxjs/toolkit'
import CarSliderSlice from '../features/CarSliderSlice'
import CardCompanySlice from '../features/CardCompanySlice'
import UsersSlice from '../features/UsersSlice'

export const store = configureStore({
    reducer: {
      slidercars:CarSliderSlice,
      cardCompany:CardCompanySlice,
      users:UsersSlice
    },
  })