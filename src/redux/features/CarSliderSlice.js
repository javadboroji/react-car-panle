import { createSlice } from '@reduxjs/toolkit';
import {data} from '../../data'


const initialState=data.slider

    export const CarSliderSlice=createSlice({
        name:'sliderCar',
        initialState,
        reducers:{
           getCars:(state,action)=>{
            console.log(state)
           }
        }
    })
    export const {getCars} = CarSliderSlice.actions
    
    export default CarSliderSlice.reducer 