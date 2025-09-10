import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'


export default function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
     
    </Routes>
  )
}
