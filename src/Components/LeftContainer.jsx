import { useSelector } from "react-redux"
import { MdSunny } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
const LeftContainer = () => {
    const dataInfo = useSelector(state => state.dataSlice.climateData)
    return(
        <>
        <div className="bg-white/20 w-full h-1/2 rounded-[30px] flex flex-col items-center gap-5">
            <MdSunny  className={`h-52 w-52 text-white opacity-85 animate-floating`} />
            <p className="text-white text-3xl">UV</p>
            <p className="text-white text-3xl">{`${dataInfo.uv}%`}</p>
        </div>
        <div className="bg-white/20 w-full h-1/2 rounded-[30px] flex flex-col items-center gap-5">
            <GiPositionMarker className="h-52 w-52 text-white opacity-65 animate-floating"/>
            <p className="text-white text-3xl">Position</p>
            <p className="text-white text-3xl">{`${dataInfo.position.lat}, ${dataInfo.position.long}`}</p>
        </div>
        </>
    )
}

export {LeftContainer}