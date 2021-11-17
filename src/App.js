import React from 'react'
import Header from "./components/Header"
import HomeScreen from "./components/HomeScree"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import View from "./components/View"
import Home from "./components/Home"
import Fire from "./components/Fire"
import DailyHeader from './components1/DailyHeader'


const App = () => {
  const [counter, setCounter] = React.useState(0)
  return (
    <div>

 
  
   
      {/* <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<HomeScreen counter={counter} setCounter={setCounter}/>}/>
          <Route path="/view" element={<View counter={counter}/>}/>
        </Routes>
      </Router> */}
      {/* <Fire/> */}
      <DailyHeader/>
    </div>
  )
}

export default App
