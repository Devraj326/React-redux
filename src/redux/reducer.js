import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
    count : 0
}

const ScliiceList = createSlice({
    name : 'count',
    initialState:initialSlice,
    reducers:{
        like : (state,action)=>{
            state.count  = state.count + 1
        },
        unlike:(state,action)=>{
            if(state.count <= 0){
                state.count = 0
            }
            else{
                state.count = state.count - 1
            }
        }
    }
})

export const listAction = ScliiceList.actions
export const listReducer = ScliiceList.reducer
export const listSelector = (state)=>state.listReducer.count