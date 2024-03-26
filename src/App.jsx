import { useEffect, useState } from 'react'

import { Searcher } from './Components/Searcher'
import { MainContainer } from './Components/MainContainer'
import { useSelector } from 'react-redux'
import { RightContainer } from './Components/RightContainer'
import { LeftContainer } from './Components/LeftContainer'
function App() {
  const [onScreen, setOnScreen] = useState(false)
  const correctInput = useSelector(state => state.funcSlice.correctInput)
  const isSun = useSelector(state => state.uiSlice.sun)
  const clouds = useSelector(state => state.dataSlice.climateData.clouds)
  const cloudPorcentage = Math.round((clouds/10))/10
  useEffect(() => {
      if(correctInput){
          setOnScreen(correctInput)
      }
  },[correctInput])
  return (
    <>
    <div className={`absolute w-screen h-screen z-10 bg-gradient-to-b from-blue-900 to-black transition ease-in duration-300 opacity-0 ` + ((isSun)? "":"opacity-100")}/>
    <div className={`absolute z-0 bg-gradient-to-t from-blue-600 to-blue-300 w-screen h-screen flex justify-center`}/>
    <div style={{opacity: cloudPorcentage}} className={`absolute  w-screen h-screen z-20 bg-gradient-to-t from-gray-900 to-white transition ease-in duration-300`}/>
    <div className={`absolute z-50 w-screen h-screen flex justify-center`}>
      <Searcher/>
        <div className={`w-[95%] h-[85%] mt-28 flex justify-center opacity-0 transition ease-in duration-300 scale-y-0 gap-2 ` + ((onScreen)? 'opacity-100 scale-y-100':'')}>
          <div className=" w-full h-full flex flex-col items-center gap-2">
            <LeftContainer/>
          </div>
            <MainContainer/>
          <div className=" w-full h-full flex flex-col items-center gap-2">
            <RightContainer/>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
