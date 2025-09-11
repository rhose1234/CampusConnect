import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Events from './Pages/Events/Events'


export default function App() {
  return (
    <Routes>
      <Route index element={<Homepage/>} />
      <Route path="/events" element={<Events/>} />
     
    </Routes>
  )
}
