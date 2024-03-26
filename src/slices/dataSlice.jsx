import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getData from "../api/Index"
import { setCorrectInput, setHistory } from "./funtionalitySlice"
import { setSun } from "./uiSlice"
import { setBlackBackground } from "./uiSlice"
const initialState = {
    climateData: {
        icon: '',
        position: {
            lat: "",
            long: ""
        },
        tempeture: '',
        humidity: '',
        clouds: "0",
        place: '',
        time: '',
        condition: '',
        uv: '',
    }
}

export const fetchData = createAsyncThunk(
    'reducerData/fetchData',
    async(place, {dispatch}) => {
        try {
            const data = await getData(place)
            const copyData = {...data}
            dispatch(setClimateData({
                icon: copyData.data.current.condition.icon,
                position: {
                    lat: copyData.data.location.lat,
                    long: copyData.data.location.lon
                },
                tempeture: {
                    cen: copyData.data.current.temp_c,
                    far: copyData.data.current.temp_f
                },
                humidity: copyData.data.current.humidity,
                clouds: copyData.data.current.cloud,
                place: `${copyData.data.location.name}, ${copyData.data.location.region}, ${copyData.data.location.country}`,
                time: copyData.data.location.localtime,
                condition: copyData.data.current.condition.text,
                uv: copyData.data.current.uv
            }))
            dispatch(setCorrectInput(true))
            dispatch(setHistory(place))
            dispatch(setSun({
                sunrise: copyData.data.forecast.forecastday[0].astro.sunrise,
                sunset: copyData.data.forecast.forecastday[0].astro.sunset,
                date: copyData.data.forecast.forecastday[0].date,
                localtime: copyData.data.location.localtime,
            }))
            dispatch(setBlackBackground(false))
        }
         catch (error) {
            dispatch(setCorrectInput(false))
        }
    }
)

export const dataSlice = createSlice({
    name: 'reducerData',
    initialState,
    reducers: {
        setClimateData: (state, action) => {
            state.climateData = action.payload
        }
    }
})

export const {setClimateData, setPosition, setTempeture, setHumidity} = dataSlice.actions

export default dataSlice.reducer