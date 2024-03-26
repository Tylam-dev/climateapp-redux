import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {fetchData} from "../slices/dataSlice";
import { setBlackBackground } from "../slices/uiSlice";
const Searcher = () => {
    const [onTrasition, setOnTransition] = useState()
    const [place, setPlace] = useState('')
    const [searching, setSearching] = useState(false)
    const history = useSelector(state => state.funcSlice.history)
    const correctInput = useSelector(state => state.funcSlice.correctInput)
    const blackBackground = useSelector(state => state.uiSlice.blackBackground)
    const dispatch = useDispatch()
    const transitionComponent = (place) => {
        dispatch(fetchData(place))
    }
    useEffect(() => {
        if(correctInput){
            setOnTransition(correctInput)
        }
    },[correctInput])
    return(
        <>  
            <div className={"absolute z-20 w-screen h-screen bg-black opacity-70 " + ((blackBackground)? "":"hidden")} onClick={() => {dispatch(setBlackBackground(false)); setSearching(false)}}/> 
            <div className={`z-30 transition duration-150 ease-in flex absolute top-1/3 left-[30%] w-2/5 h-16` + ((onTrasition)? ' -translate-y-64 scale-75':'')}>
                <input value={place} className={`w-full h-full rounded-l-xl text-2xl pl-2 ` + ((correctInput === false)? "border-red-600 border-2":" ")} type="text" placeholder="Search..." onChange={(e) => setPlace(e.target.value)}
                onFocus={() => {
                    if(history.length > 0){
                        dispatch(setBlackBackground(true))
                        setSearching(true)
                    }}
                }/>
                <button className="bg-white rounded-r-xl border-l-2 w-1/6 flex items-center justify-center hover:border-sky-700 hover:border-1 text-sky-500 hover:text-sky-700" onClick={() => {transitionComponent(place), setSearching(false)}} >
                    <FaSearch className="w-1/2 h-1/2"/>
                </button>
            </div>
            <div className={`z-20 top-[6%] left-[35%] w-[30%] ` + ((searching)? "absolute":"hidden")}>
                <ul>
                    <li className="w-full text-xl pl-2 bg-white h-10"></li>
                    {history.map((place, id) => (
                        <li key={id} onClick={() => {setPlace(place), transitionComponent(place), dispatch(setBlackBackground(false), setSearching(false))}} className="w-full text-xl pl-2 bg-white h-10 hover:bg-gray-100">{place}</li>
                    ))}
                </ul>
            </div>
        </>

    )
}
export {Searcher}