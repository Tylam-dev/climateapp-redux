import { useSelector } from "react-redux"

const MainContainer = () => {
    const dataInfo = useSelector(state => state.dataSlice.climateData)
    return(
        <>
        <div className="bg-white/20 w-full h-full rounded-[30px] flex flex-col items-center gap-16">
            <img src={dataInfo.icon} alt="icono" className="w-48 pt-20"/>
            <p className="text-white text-3xl">{`${dataInfo.tempeture.cen} °C / ${dataInfo.tempeture.far} °F`}</p>
            <p className="text-white text-3xl">{`${dataInfo.place}`}</p>
            <p className="text-white text-3xl">{`${dataInfo.time}`}</p>
            <p className="text-white text-3xl">{`${dataInfo.condition}`}</p>
        </div>
        </>
    )
}

export {MainContainer}