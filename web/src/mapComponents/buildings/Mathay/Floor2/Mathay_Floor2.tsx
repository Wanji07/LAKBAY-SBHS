import Library from './LIBRARY.svg'
import MT201 from './M201.svg'
import MathFaculty from './MATH FACULTY.svg'
import Base from './MATHAY-2ND-BASE.svg'
import MT202 from './MT202.svg'
import MT203 from './MT203.svg'
import SHSFaculty from './SHS FACULTY.svg'
import mathayRooms from '../../../../data/mathayRooms'

function Mathay_Floor2({ 
  onRoomClick = () => {}, 
  highlightedRoom 
}: { 
  onRoomClick?: (roomData: any) => void
  highlightedRoom?: string | null
}) {
  const floor2Rooms = mathayRooms.filter(room => room.floor === 2);
  const libraryData = floor2Rooms.find(r => r.name === 'Library')!;
  const mt201Data = floor2Rooms.find(r => r.name === 'MT201')!;
  const mathFacultyData = floor2Rooms.find(r => r.name === 'Math Faculty')!;
  const mt202Data = floor2Rooms.find(r => r.name === 'MT202')!;
  const mt203Data = floor2Rooms.find(r => r.name === 'MT203')!;
  const shsFacultyData = floor2Rooms.find(r => r.name === 'SHS Faculty')!;
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
                <div onClick={() => onRoomClick?.(libraryData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === libraryData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    top: '9%',
                    right: '18.5%',
                    height: '55%',
                    zIndex: 2
                }}>
                  <img src={Library} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div onClick={() => onRoomClick?.(mt201Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === mt201Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    top: '9%',
                    right: '1%',
                    height: '55%',
                    zIndex: 3
                }}>
                  <img src={MT201} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div onClick={() => onRoomClick?.(mathFacultyData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === mathFacultyData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    top: '9%',
                    left: '36.5%',
                    height: '55%',
                    zIndex: 4
                }}>
                  <img src={MathFaculty} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div onClick={() => onRoomClick?.(mt202Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === mt202Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    top: '9%',
                    left: '19%',
                    height: '55%',
                    zIndex: 5
                }}>
                  <img src={MT202} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div onClick={() => onRoomClick?.(mt203Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === mt203Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    top: '9%',
                    left: '1%',
                    height: '55%',
                    zIndex: 5
                }}>
                  <img src={MT203} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
                <div onClick={() => onRoomClick?.(shsFacultyData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === shsFacultyData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                    position: 'absolute',
                    top: '9%',
                    right: '36%',
                    height: '55%',
                    zIndex: 5
                }}>
                  <img src={SHSFaculty} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
            </div>
        </>
    )
}

export default Mathay_Floor2