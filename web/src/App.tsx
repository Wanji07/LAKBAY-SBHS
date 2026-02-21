import './index.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';
import Map from './pages/Map.tsx';
import Buildings from './pages/Buildings.tsx';
import SB1 from './pages/SB1.tsx';
import SB2 from './pages/SB2.tsx';
import HB from './pages/HB.tsx';
import Mathay from './pages/Mathay.tsx';
import NB1 from './mapComponents/buildings/NewBuilding/Floor1/NB1.tsx'
import NB2 from './mapComponents/buildings/NewBuilding/Floor2/NB2.tsx'
import NB3 from './mapComponents/buildings/NewBuilding/Floor3/NB3.tsx'
import NB4 from './mapComponents/buildings/NewBuilding/Floor4/NB4.tsx'
import SB1_Floor1 from './mapComponents/buildings/SB1/Floor1/SB1_Floor1.tsx'
import SB1_Floor2 from './mapComponents/buildings/SB1/Floor2/SB1_Floor2.tsx'
import SB1_Floor3 from './mapComponents/buildings/SB1/Floor3/SB1_Floor3.tsx'
import SB2_Floor1 from './mapComponents/buildings/SB2/Floor1/SB2_Floor1.tsx'
import SB2_Floor2 from './mapComponents/buildings/SB2/Floor2/SB2_Floor2.tsx'
import SB2_Floor3 from './mapComponents/buildings/SB2/Floor3/SB2_Floor3.tsx'
import SB2_Floor4 from './mapComponents/buildings/SB2/Floor4/SB2_Floor4.tsx'
import Mathay_Floor2 from './mapComponents/buildings/Mathay/Floor2/Mathay_Floor2.tsx'
import Mathay_Floor3 from './mapComponents/buildings/Mathay/Floor3/Mathay_Floor3.tsx'
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
        <Route path="/map/nb/floor1" element={<NB1 />} />
        <Route path="/map/nb/floor2" element={<NB2 />} />
        <Route path="/map/nb/floor3" element={<NB3 />} />
        <Route path="/map/nb/floor4" element={<NB4 />} />
        <Route path="/map/sb1/floor1" element={<SB1_Floor1 />} />
        <Route path="/map/sb1/floor2" element={<SB1_Floor2 />} />
        <Route path="/map/sb1/floor3" element={<SB1_Floor3 />} />
        <Route path="/map/sb2/floor1" element={<SB2_Floor1 />} />
        <Route path="/map/sb2/floor2" element={<SB2_Floor2 />} />
        <Route path="/map/sb2/floor3" element={<SB2_Floor3 />} />
        <Route path="/map/sb2/floor4" element={<SB2_Floor4 />} />
        <Route path="/map/mathay/floor2" element={<Mathay_Floor2 />} />
        <Route path="/map/mathay/floor3" element={<Mathay_Floor3 />} />
        <Route path="/map/court" element={<Court />} />
      </Routes>
    </>
  )
}

export default App
