
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Floor1 from '../mapComponents/buildings/NewBuilding/Floor1/NB1'
import Floor2 from '../mapComponents/buildings/NewBuilding/Floor2/NB2'
import Floor3 from '../mapComponents/buildings/NewBuilding/Floor3/NB3'
import Floor4 from '../mapComponents/buildings/NewBuilding/Floor4/NB4'
import nextFloorIcon from '../assets/nextFloor.svg'
import previousFloorIcon from '../assets/previousFloor.svg'
import Aside from '../MapAside'

type RoomData = {
  name: string
  type: string
  strand?: string
  adviser?: string
  description?: string
  facilities?: string[]
}


function NB() {

    const navigate = useNavigate();
    const floors = [
      Floor1,
      Floor2,
      Floor3,
      Floor4
    ];

    const [currentFloor, setFloor] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState<RoomData | null>(null);

    const handlePreviousFloor = () => {
      setFloor(
        currentFloor === 0 ? floors.length - 1 : currentFloor - 1
      );
    };

    const handleNextFloor = () => {
      setFloor((currentFloor + 1) % floors.length);
    };

    const CurrentFloorComponent = floors[currentFloor];

    const handleRoomClick = (roomData: RoomData) => {
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
            className="flex flex-col justify-center items-center gap-5 my-auto"
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

            <div className="flex flex-row gap-6">
              <button
            onClick={handlePreviousFloor}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 
                      text-white px-3 py-1 rounded-2xl shadow-lg 
                      transition-all duration-200"
          >
            <img 
              src={previousFloorIcon} 
              alt="Next Floor" 
              className="w-8 h-8"
            />
            <span className="text-base font-semibold">
              Previous Floor
            </span>
          </button>

            <div className="flex flex-row items-center justify-center gap-4 my-8" role="tablist" aria-label="Floor selector">
              {floors.map((_, idx) => (                
                <button
                  key={idx}
                  title={`Floor ${idx + 1}`}
                  aria-current={currentFloor === idx ? 'true' : 'false'}
                  className={`w-4 h-4 rounded-full transition-colors focus:outline-none ${
                    currentFloor === idx ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                ></button>
              ))}
            </div>

          <button
            onClick={handleNextFloor}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 
                      text-white px-3 py-1 rounded-2xl shadow-lg 
                      transition-all duration-200"
          >
            <img 
              src={nextFloorIcon} 
              alt="Next Floor" 
              className="w-8 h-8"
            />
            <span className="text-base font-semibold">
              Next Floor
            </span>
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
    );
}

export default NB