import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from './componentes/EBM/NavBar/NavBar'
import Hero from './componentes/EBM/Hero/Hero'



function AppThree() {

  return (
    <>
      <BrowserRouter>
        <nav className="p-4 bg-indigo-600 text-white flex gap-4 shadow-lg rounded-lg">
          <Link to="/" className="hover:underline font-bold">Home</Link>
          <Link to="/Games" className="hover:underline font-bold">Games</Link>
          <Link to="/Grammar" className="hover:underline font-bold">Grammar</Link>
          <Link to="/Grammar" className="hover:underline font-bold">About Us</Link>
          <img src="" alt="" />
          
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Ofertas' element={<OfferViewer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppThree