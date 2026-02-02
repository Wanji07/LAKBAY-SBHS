import './index.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';
import Map from './pages/Map.tsx';
import Buildings from './pages/Buildings.tsx';
import SB1 from './pages/SB1.tsx';
import SB2 from './pages/SB2.tsx';
import HB from './pages/HB.tsx';
import Mathay from './pages/mathay.tsx';
import NB from './pages/NB.tsx';
import Court from './pages/Court.tsx';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/map" element={<Map />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path="/map/sb1" element={<SB1 />} />
        <Route path="/map/sb2" element={<SB2 />} />
        <Route path="/map/hb" element={<HB />} />
        <Route path="/map/mathay" element={<Mathay />} />
        <Route path="/map/nb" element={<NB />} />
        <Route path="/map/court" element={<Court />} />
      </Routes>
    </>
  )
}

export default App
