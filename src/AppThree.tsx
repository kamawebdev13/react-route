import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './componentes/EBM/Header/Header'
import Home from './componentes/EBM/Pages/Home/Home'
import Games from './componentes/EBM/Pages/Games/Games'
import Grammar from './componentes/EBM/Pages/Grammar/Grammar'
import AboutUs from './componentes/EBM/Pages/AboutUs/AboutUs'


function AppThree() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Games' element={<Games />} />
        <Route path='/Grammar' element={<Grammar />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppThree