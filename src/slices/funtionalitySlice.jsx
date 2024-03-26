import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    history:[],
    correctInput: null
}
export const functSlice = createSlice({
    name: 'reducerFunc',
    initialState,
    reducers:{
        setCorrectInput: (state, action) => {
            state.correctInput = action.payload
        },
        setHistory: (state, action) => {
            if(state.correctInput){
                if(!state.history.includes(action.payload)){
                    if(state.history.length >= 4){
                        state.history.splice(0,1)
                        state.history.push(action.payload)
                    }else{
                        state.history.push(action.payload) 
                    }
                }
                
            }
        }
    }
})

export const {setCorrectInput, setHistory} = functSlice.actions

export default functSlice.reducer