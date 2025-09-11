import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import About from './Pages/about/About'

export default function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/about" element={<About/>}/>
      
     
    </Routes>
  )
}
