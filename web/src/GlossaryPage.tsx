import { Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import mathayRooms from './data/mathayRooms'
import nbRooms from './data/nbRooms'
import sb1Rooms from './data/sb1Rooms'
import sb2Rooms from './data/sb2Rooms'
import './GlossaryPage.css'

function GlossaryPage() {

  const allRooms = [...mathayRooms, ...nbRooms, ...sb1Rooms, ...sb2Rooms]
  

  const buildings = [...new Set(allRooms.map(room => room.building))]
  const [selectedBuilding, setSelectedBuilding] = useState(buildings.sort()[0])
  

  const getRoutePath = (building: string, floor: number, roomName?: string) => {
    const buildingMap: { [key: string]: string } = {
      'Mathay': 'mathay',
      'New Building': 'nb',
      'SB1': 'sb1',
      'SB2': 'sb2'
    }
    const basePath = `/map/${buildingMap[building]}/floor/${floor}`
    return roomName ? `${basePath}?room=${encodeURIComponent(roomName)}` : basePath
  }
  

  const getRoomsByBuilding = (building: string) => {
    return allRooms.filter(room => room.building === building)
  }
  
  return (
    <>
      <Navbar />
      <div className="glossary-container">
        <h1>Room & Faculty Glossary</h1>
        <p className="subtitle">Complete directory of all rooms, faculties, and buildings</p>
        
        <div className="building-nav-buttons">
          {buildings.includes('Mathay') && (
            <button 
              onClick={() => setSelectedBuilding('Mathay')} 
              className={`building-nav-btn ${selectedBuilding === 'Mathay' ? 'active' : ''}`}
            >
              Mathay Building
            </button>
          )}
          {buildings.includes('New Building') && (
            <button 
              onClick={() => setSelectedBuilding('New Building')} 
              className={`building-nav-btn ${selectedBuilding === 'New Building' ? 'active' : ''}`}
            >
              New Building
            </button>
          )}
          {buildings.includes('SB1') && (
            <button 
              onClick={() => setSelectedBuilding('SB1')} 
              className={`building-nav-btn ${selectedBuilding === 'SB1' ? 'active' : ''}`}
            >
              Sonny Building 1
            </button>
          )}
          {buildings.includes('SB2') && (
            <button 
              onClick={() => setSelectedBuilding('SB2')} 
              className={`building-nav-btn ${selectedBuilding === 'SB2' ? 'active' : ''}`}
            >
              Sonny Building 2
            </button>
          )}
        </div>
        
        <section key={selectedBuilding} id={selectedBuilding} className="building-section">
          <h2 className="building-title">{selectedBuilding}</h2>
          
          {[1, 2, 3, 4].map((floor) => {
            const floorsRooms = getRoomsByBuilding(selectedBuilding).filter(r => r.floor === floor)
            if (floorsRooms.length === 0) return null
            
            return (
              <div key={`${selectedBuilding}-floor${floor}`} className="floor-group">
                  <h3 className="floor-title">Floor {floor}</h3>
                  <div className="rooms-grid">
                    {floorsRooms.map((room) => (
                      <Link
                        key={room.name}
                        to={getRoutePath(room.building, room.floor, room.name)}
                        className="room-card"
                      >
                        <div className="room-name">{room.name}</div>
                        <div className="room-type">{room.type}</div>
                        <div className="room-floor">Floor {room.floor}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </section>
      </div>
      <Footer />
    </>
  )
}

export default GlossaryPage