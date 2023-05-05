import { createSlice } from '@reduxjs/toolkit';
import {dataCompany} from '../../data'

const initialState=dataCompany.companyes

    export const CardCompany=createSlice({
        name:'cardCompany',
        initialState,
        reducers:{
           getCompany:(state,action)=>{
            console.log(state);
           }
        }
    })
    export const {getCompany} = CardCompany.actions
    
    export default CardCompany.reducer  