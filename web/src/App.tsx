import './index.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';
import Map from './pages/Map.tsx';
import Buildings from './pages/Buildings.tsx';
import GlossaryPage from './GlossaryPage.tsx';
import SB1 from './pages/SB1.tsx';
import SB2 from './pages/SB2.tsx';
import HB from './pages/HB.tsx';
import Mathay from './pages/Mathay.tsx';
import NB from './pages/NB.tsx';
import ErrorPage from './ErrorPage.tsx'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/map" element={<Map />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/map/sb1/floor/:floor" element={<SB1 />} />
        <Route path="/map/sb2/floor/:floor" element={<SB2 />} />
        <Route path="/map/hb" element={<HB />} />
        <Route path="/map/mathay/floor/:floor" element={<Mathay />} />
        <Route path="/map/nb/floor/:floor" element={<NB />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
