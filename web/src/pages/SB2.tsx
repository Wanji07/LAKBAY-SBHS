import '../index.css';
import Navbar from '../Navbar'
import Footer from '../Footer'
import Floor1 from '../mapComponents/buildings/SB2/Floor1/SB2_Floor1'
import Floor2 from '../mapComponents/buildings/SB2/Floor2/SB2_Floor2'
import Floor3 from '../mapComponents/buildings/SB2/Floor3/SB2_Floor3'
import Floor4 from '../mapComponents/buildings/SB2/Floor4/SB2_Floor4'
import nextFloorIcon from '../assets/nextFloor.svg'
import previousFloorIcon from '../assets/previousFloor.svg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Aside from '../MapAside'

function SB2() {

    const navigate = useNavigate();
    const floors = [
      Floor1,
      Floor2,
      Floor3,
      Floor4
    ]

    const [currentFloor, setFloor] = useState(0);

    const handlePreviousFloor = () => {
      setFloor(
        currentFloor === 0 ? floors.length - 1 : currentFloor - 1 );
    }

    const handleNextFloor = () => {
      setFloor((currentFloor + 1) % floors.length)
    }

    const CurrentFloorComponent = floors[currentFloor];
  
    return (
        <>
        <Navbar />
        <div id="container" className="min-h-screen grid grid-cols-[1fr_10fr]">
          <Aside />
          <section id="mapContainer" className="flex flex-row justify-center items-center gap-5 my-auto">
            <div className="flex flex-col items-center w-full max-w-250.75">
              <button
                onClick={() => navigate('/map')}
                className="mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow transition-colors duration-200 self-start"
                aria-label="Back to Map"
              >
                ← Back to Map
              </button>
              <CurrentFloorComponent />
            </div>
            <div id="buttonContainer" className="flex flex-col items-center justify-center gap-6 my-8">
              <button
                id="nextFloor"
                onClick={handleNextFloor}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Next Floor"
              >
                <img src={nextFloorIcon} alt="Next Floor" className="w-6 h-6" />
              </button>
              <button
                id="previousFloor"
                onClick={handlePreviousFloor}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Previous Floor"
              >
                <img src={previousFloorIcon} alt="Previous Floor" className="w-6 h-6" />
              </button>
            </div>
          </section>
        </div>
        <Footer />
        </>
    )
}

export default SB2