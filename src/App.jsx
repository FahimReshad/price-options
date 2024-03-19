import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Navbar from './Components/Navbar/Navbar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-400'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
