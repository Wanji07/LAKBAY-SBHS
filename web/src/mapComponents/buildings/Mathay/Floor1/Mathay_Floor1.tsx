import Base from './MATHAY_FLOOR1_BASE.svg'
import Boys_Restroom from './BOYS_RESTROOM_MATHAY.svg'
import Girls_Restroom from './GIRLS_RESTROOM_MATHAY.svg'
import Coop from './COOP_OFFICE.svg'
import Ehemplo from './EHEMPLO.svg'
import Finance from './FINANCE_OFFICE.svg'
import Paragon from './PARAGON.svg'
import Principal from './PRINCIPALS.svg'
import MAPEH from './MAPEH_FACULTY.svg'
import mathayRooms from '../../../../data/mathayRooms'

function Mathay_Floor1({ 
  onRoomClick = () => {}, 
  highlightedRoom 
}: { 
  onRoomClick?: (roomData: any) => void
  highlightedRoom?: string | null
}) {
  const floor1Rooms = mathayRooms.filter(room => room.floor === 1);
  const girlsRestroomData = floor1Rooms.find(r => r.name === "Girl's Restroom")!;
  const boysRestroomData = floor1Rooms.find(r => r.name === "Boy's Restroom")!;
  const coopData = floor1Rooms.find(r => r.name === "Cooperative")!;
  const ehemploData = floor1Rooms.find(r => r.name === "Ehemplo Headquarters")!;
  const financeData = floor1Rooms.find(r => r.name === "Finance Office")!;
  const paragonData = floor1Rooms.find(r => r.name === "Paragon Headquarters")!;
  const principalData = floor1Rooms.find(r => r.name === "Principal's Office")!;
  const mapehData = floor1Rooms.find(r => r.name === "MAPEH Faculty")!;
    
    return(
        <div
            id="container"
            style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1611px',
                aspectRatio: '1611 / 558',
                margin: '0 auto'
            }}
        >
            <img
                src={Base}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            />

            <div onClick={() => onRoomClick?.(girlsRestroomData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === girlsRestroomData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                left: '36%',
                height: '55%',
                zIndex: 2
            }}>
              <img src={Girls_Restroom} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>

            <div onClick={() => onRoomClick?.(boysRestroomData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === boysRestroomData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                right: '36.5%',
                height: '55%',
                zIndex: 3
            }}>
              <img src={Boys_Restroom} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>

            <div onClick={() => onRoomClick?.(coopData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === coopData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                right: '2%',
                height: '55%',
                zIndex: 4
            }}>
              <img src={Coop} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>

            <div onClick={() => onRoomClick?.(ehemploData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === ehemploData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                right: '19%',
                height: '55%',
                zIndex: 5
            }}>
              <img src={Ehemplo} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>

            <div onClick={() => onRoomClick?.(financeData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === financeData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                left: '1%',
                height: '55%',
                zIndex: 5
            }}>
              <img src={Finance} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>

            <div onClick={() => onRoomClick?.(paragonData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === paragonData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                right: '27.5%',
                height: '55%',
                zIndex: 5
            }}>
              <img src={Paragon} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>

            <div onClick={() => onRoomClick?.(principalData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === principalData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                left: '18.5%',
                height: '55%',
                zIndex: 5
            }}>
              <img src={Principal} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>

            <div onClick={() => onRoomClick?.(mapehData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === mapehData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                right: '10.5%',
                height: '55%',
                zIndex: 5
            }}>
              <img src={MAPEH} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
        </div>
    )
}

export default Mathay_Floor1