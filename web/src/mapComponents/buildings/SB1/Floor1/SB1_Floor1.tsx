import AVR from './avr.svg'
import Base from './nb-2nd_floor-base.svg'
import Comlab from './sb1_comlab.svg'
import RestroomWomen from './sb1_girls_restroom.svg'
import RestroomMen from './sb1_boys_restroom.svg'
import TLE from './sb1_tle.svg'
import sb1Rooms from '../../../../data/sb1Rooms'


function SB1_Floor1({ 
  onRoomClick = () => {}, 
  highlightedRoom 
}: { 
  onRoomClick?: (roomData: any) => void
  highlightedRoom?: string | null
}) {
  const floor1Rooms = sb1Rooms.filter(room => room.floor === 1);
  const restroomWomenData = floor1Rooms.find(r => r.name === "Girl's Restroom")!;
  const restroomMenData = floor1Rooms.find(r => r.name === "Boy's Restroom")!;
  const comlabData = floor1Rooms.find(r => r.name === "SHS Computer Laboratory")!;
  const avrData = floor1Rooms.find(r => r.name === "Audio Visual Room")!;
  const tleData = floor1Rooms.find(r => r.name === "TLE Department")!;
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
            <div onClick={() => onRoomClick?.(restroomWomenData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === restroomWomenData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                left: '37%',
                height: '55%',
                zIndex: 2
            }}>
              <img src={RestroomWomen} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div onClick={() => onRoomClick?.(restroomMenData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === restroomMenData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                left: '58.5%',
                height: '55%',
                zIndex: 3
            }}>
              <img src={RestroomMen} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div onClick={() => onRoomClick?.(comlabData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === comlabData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                left: '64%',
                height: '55%',
                zIndex: 4
            }}>
              <img src={Comlab} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div onClick={() => onRoomClick?.(avrData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === avrData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                left: '1%',
                height: '55%',
                zIndex: 5
            }}>
              <img src={AVR} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div onClick={() => onRoomClick?.(tleData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === tleData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                bottom: '9%',
                left: '64%',
                height: '27%',
                zIndex: 6
            }}>
              <img src={TLE} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
        </div>
        </>
    )
}

export default SB1_Floor1

