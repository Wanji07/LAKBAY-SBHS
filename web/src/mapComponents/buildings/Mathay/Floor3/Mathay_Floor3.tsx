import MT301 from './MT301.svg'
import MT302 from './MT302.svg'
import MT303 from './MT303.svg'
import MT304 from './MT304.svg'
import SHS_Faculty1 from './SHS FACULTY.svg'
import SHS_Faculty2 from './SHS FACULTY 2.svg'
import TLE_Faculty from './TLE FACULTY.svg'
import Base from './Mathay_Floor3_BASE.svg'
import mathayRooms from '../../../../data/mathayRooms'

function Mathay_Floor3({ 
  onRoomClick = () => {}, 
  highlightedRoom 
}: { 
  onRoomClick?: (roomData: any) => void
  highlightedRoom?: string | null
}) {
  const floor3Rooms = mathayRooms.filter(room => room.floor === 3);
  const mt301Data = floor3Rooms.find(r => r.name === 'MT301')!;
  const mt302Data = floor3Rooms.find(r => r.name === 'MT302')!;
  const mt303Data = floor3Rooms.find(r => r.name === 'MT303')!;
  const mt304Data = floor3Rooms.find(r => r.name === 'MT304')!;
  const shsFaculty1Data = floor3Rooms.find(r => r.name === 'SHS Faculty 1')!;
  const shsFaculty2Data = floor3Rooms.find(r => r.name === 'SHS Faculty 2')!;
  const tleFacultyData = floor3Rooms.find(r => r.name === 'TLE Faculty')!;
    return(
        <>
            <div id="container" style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1611px',
                aspectRatio: '1611 / 558',
                margin: '0 auto'
            }}>
                <img src={Base} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    pointerEvents: 'none'
                }} />
                <div onClick={() => onRoomClick?.(mt301Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === mt301Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    top: '9%',
                    left: '1%',
                    height: '55%',
                    zIndex: 2
                }}>
                  <img src={MT301} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div onClick={() => onRoomClick?.(mt302Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === mt302Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    top: '9%',
                    left: '19%',
                    height: '55%',
                    zIndex: 2
                }}>
                  <img src={MT302} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div onClick={() => onRoomClick?.(mt303Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === mt303Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    top: '9%',
                    right: '19%',
                    height: '55%',
                    zIndex: 2
                }}>
                  <img src={MT303} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div onClick={() => onRoomClick?.(mt304Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === mt304Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    top: '9%',
                    right: '1%',
                    height: '55%',
                    zIndex: 2
                }}>
                  <img src={MT304} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div onClick={() => onRoomClick?.(shsFaculty1Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === shsFaculty1Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    top: '9%',
                    right: '36.5%',
                    height: '55%',
                    zIndex: 2
                }}>
                  <img src={SHS_Faculty1} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div onClick={() => onRoomClick?.(shsFaculty2Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === shsFaculty2Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    bottom: '9%',
                    right: '1%',
                    height: '27%',
                    zIndex: 2
                }}>
                  <img src={SHS_Faculty2} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div onClick={() => onRoomClick?.(tleFacultyData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === tleFacultyData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    top: '9%',
                    left: '37%',
                    height: '55%',
                    zIndex: 2
                }}>
                  <img src={TLE_Faculty} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
            </div>
        </>
    )
}

export default Mathay_Floor3