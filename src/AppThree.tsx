import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './componentes/Home/Home'
import OfferViewer from './componentes/OfferViewer/OfferViewer'

function AppThree() {

  return (
    <>
      <BrowserRouter>
        <nav className="p-4 bg-indigo-600 text-white flex gap-4 shadow-lg rounded-lg">
          <Link to="/" className="hover:underline font-bold">Home</Link>
          <Link to="/Ofertas" className="hover:underline font-bold">Ofertas</Link>
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