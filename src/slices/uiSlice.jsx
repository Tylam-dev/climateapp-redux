import { createSlice } from "@reduxjs/toolkit"
import dayjs from "dayjs"
import { sunShow } from "../func/Index"
const initialState = {
    blackBackground: false,
    sun: true,
}

export const uiSlice = createSlice({
    name: 'reducerUi',
    initialState,
    reducers: {
        setBlackBackground: (state, action) => {
            state.blackBackground = action.payload
        },
        setSun: (state, action) => {
            const date = dayjs(action.payload.localtime )
            const sunrise = dayjs(`${action.payload.date} ${action.payload.sunrise}`)
            const sunset = dayjs(`${action.payload.date} ${action.payload.sunset}`)
            state.sun = sunShow(date, sunrise, sunset)
        }
    }
})

export const {setBlackBackground, setSun} = uiSlice.actions

export default uiSlice.reducer