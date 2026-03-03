import sb301 from './sb1_301.svg'
import sb302 from './sb_302.svg'
import sb303 from './sb1_303.svg'
import sb304 from './sb1_304.svg'
import sb1_ap from './sb1_ap.svg'
import sb1_ap2 from './sb1_ap2.svg'
import sb1_esp from './sb1_esp.svg'
import Base from './sb1-3rd_floor-base.svg'
import sb1Rooms from '../../../../data/sb1Rooms'

function SB1_Floor2({ 
  onRoomClick = () => {}, 
  highlightedRoom 
}: { 
  onRoomClick?: (roomData: any) => void
  highlightedRoom?: string | null
}) {
  const floor2Rooms = sb1Rooms.filter(room => room.floor === 2);
  const sb301Data = floor2Rooms.find(r => r.name === "SB301")!;
  const sb302Data = floor2Rooms.find(r => r.name === "SB302")!;
  const sb303Data = floor2Rooms.find(r => r.name === "SB303")!;
  const sb304Data = floor2Rooms.find(r => r.name === "SB304")!;
  const sb1ApData = floor2Rooms.find(r => r.name === "Araling Panlipunan Department 1")!;
  const sb1Ap2Data = floor2Rooms.find(r => r.name === "Araling Panlipunan Department 2")!;
  const sb1EspData = floor2Rooms.find(r => r.name === "ESP Department")!;
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
            <div onClick={() => onRoomClick?.(sb301Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === sb301Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                left: '1%',
                height: '55%',
                zIndex: 2
            }}>
              <img src={sb301} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div onClick={() => onRoomClick?.(sb302Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === sb302Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                left: '19%',
                height: '55%',
                zIndex: 2
            }}>
              <img src={sb302} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div onClick={() => onRoomClick?.(sb303Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === sb303Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                left: '64%',
                height: '55%',
                zIndex: 2
            }}>
              <img src={sb303} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div onClick={() => onRoomClick?.(sb304Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === sb304Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                right: '1%',
                height: '55%',
                zIndex: 2
            }}>
              <img src={sb304} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div onClick={() => onRoomClick?.(sb1ApData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === sb1ApData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                left: '37%',
                height: '55%',
                zIndex: 2
            }}>
              <img src={sb1_ap} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div onClick={() => onRoomClick?.(sb1Ap2Data)} className={`absolute cursor-pointer transition-all ${highlightedRoom === sb1Ap2Data.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                top: '9%',
                left: '58.5%',
                height: '55%',
                zIndex: 2
            }}>
              <img src={sb1_ap2} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div onClick={() => onRoomClick?.(sb1EspData)} className={`absolute cursor-pointer transition-all ${highlightedRoom === sb1EspData.name ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse" : ""}`} style={{
                position: 'absolute',
                bottom: '9%',
                left: '1%',
                height: '27%',
                zIndex: 2
            }}>
              <img src={sb1_esp} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
        </div>
        </>
    )
}

export default SB1_Floor2

