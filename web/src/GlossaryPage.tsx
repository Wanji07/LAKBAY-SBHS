import { Link } from 'react-router-dom'
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
  

  const getRoutePath = (building: string, floor: number) => {
    const buildingMap: { [key: string]: string } = {
      'Mathay': 'mathay',
      'New Building': 'nb',
      'SB1': 'sb1',
      'SB2': 'sb2'
    }
    return `/map/${buildingMap[building]}/floor/${floor}`
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
        
        {buildings.sort().map((building) => (
          <section key={building} className="building-section">
            <h2 className="building-title">{building}</h2>
            
            {[1, 2, 3, 4].map((floor) => {
              const floorsRooms = getRoomsByBuilding(building).filter(r => r.floor === floor)
              if (floorsRooms.length === 0) return null
              
              return (
                <div key={`${building}-floor${floor}`} className="floor-group">
                  <h3 className="floor-title">Floor {floor}</h3>
                  <div className="rooms-grid">
                    {floorsRooms.map((room) => (
                      <Link
                        key={room.name}
                        to={getRoutePath(room.building, room.floor)}
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
        ))}
      </div>
      <Footer />
    </>
  )
}

export default GlossaryPage