import { combineReducers } from "redux";
import dataSlice from "../slices/dataSlice";
import uiSlice from "../slices/uiSlice";
import funcSlice from "../slices/funtionalitySlice";

const reducer = combineReducers({
    dataSlice: dataSlice,
    uiSlice: uiSlice,
    funcSlice: funcSlice
})
export default reducer