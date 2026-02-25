import '../index.css';
import Navbar from '../Navbar'
import Footer from '../Footer'
import Floor1 from '../mapComponents/buildings/SB1/Floor1/SB1_Floor1'
import Floor2 from '../mapComponents/buildings/SB1/Floor2/SB1_Floor2'
import Floor3 from '../mapComponents/buildings/SB1/Floor3/SB1_Floor3'
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
    ];

    const [currentFloor, setFloor] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);

    const handlePreviousFloor = () => {
      setFloor(
        currentFloor === 0 ? floors.length - 1 : currentFloor - 1
      );
    };

    const handleNextFloor = () => {
      setFloor((currentFloor + 1) % floors.length);
    };

    const CurrentFloorComponent = floors[currentFloor];

    const handleRoomClick = (roomData) => {
      setSelectedRoom(roomData);
      setOpen(true);
    }
  
    return (
        <>
        <Navbar />
        <div
          id="container"
          className={`min-h-screen grid ${
            isOpen ? "grid-cols-[1fr_350px]" : "grid-cols-1"
          } transition-all duration-300`}
        >
          
          <section
            id="mapContainer"
            className="flex flex-row justify-center items-center gap-5 my-auto"
          >
            <div className="flex flex-col items-center w-full max-w-250.75">
              <button
                onClick={() => navigate('/map')}
                className="mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow transition-colors duration-200 self-start"
              >
                ← Back to Map
              </button>

              <CurrentFloorComponent onRoomClick={handleRoomClick} />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 my-8">
              <button onClick={handleNextFloor} className="bg-blue-600 text-white rounded-full p-4">
                <img src={nextFloorIcon} className="w-6 h-6" />
              </button>

              <button onClick={handlePreviousFloor} className="bg-blue-600 text-white rounded-full p-4">
                <img src={previousFloorIcon} className="w-6 h-6" />
              </button>
            </div>
          </section>

          {isOpen && (
            <Aside
              isOpen={isOpen}
              selectedRoom={selectedRoom}
              onClose={() => setOpen(false)}
            />
          )}
        </div>
        <Footer />
        </>
    )
}

export default SB2