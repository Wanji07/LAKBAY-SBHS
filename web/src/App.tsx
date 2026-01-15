import './index.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';
import Map from './pages/Map.tsx';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  )
}

export default App
