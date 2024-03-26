import { useSelector } from "react-redux"
import { WiHumidity } from "react-icons/wi";
import { FaCloud } from "react-icons/fa";
const RightContainer = () => {
    const dataInfo = useSelector(state => state.dataSlice.climateData)
    return(
        <>
        <div className="bg-white/20 w-full h-1/2 rounded-[30px] flex flex-col items-center gap-5">
            <WiHumidity  className={`h-52 w-52 text-white opacity-85 animate-floating`} />
            <p className="text-white text-3xl">Humidity</p>
            <p className="text-white text-3xl">{`${dataInfo.humidity}%`}</p>
        </div>
        <div className="bg-white/20 w-full h-1/2 rounded-[30px] flex flex-col items-center gap-5">
            <FaCloud className="h-52 w-52 text-white opacity-65 animate-floating"/>
            <p className="text-white text-3xl">Clouds</p>
            <p className="text-white text-3xl">{`${dataInfo.clouds}%`}</p>
        </div>
        </>
    )
}

export {RightContainer}