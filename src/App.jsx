import './App.css'
import { Routes, Route } from 'react-router-dom'
import Start from './Components/Start'
import Instruction from './Components/Instruction'
import Activity from './Components/Activity'
import Final from './Components/Final'

function App() {

  return (
    <>
    <div className='min-h-screen'>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/info" element={<Instruction/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/final" element={<Final/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
