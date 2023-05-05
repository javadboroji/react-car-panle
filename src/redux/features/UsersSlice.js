import { createSlice } from '@reduxjs/toolkit';
import {users} from '../../data'

const initialState=users.user

    export const Users=createSlice({
        name:'users',
        initialState,
        reducers:{
           getUser:(state,action)=>{
            console.log(state);
           }
        }
    })
    export const {getUser} = Users.actions
    
    export default Users.reducer  