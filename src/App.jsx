import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import About from './Pages/about/About'
import Events from './Pages/Events/Events'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'




export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route index element={<Homepage/>} />
      <Route path="/about" element={<About/>}/>
      
      <Route path="/events" element={<Events/>} />
    </Routes>
    <Footer />
    </>
  )
}
