import Base from './SB2-2ND-BASE.svg'
import SB2_201 from './SB2-201.svg'
import SB2_202 from './SB2-202.svg'
import SB2_203 from './SB2-203.svg'
import SB2_204 from './SB2-204.svg'
import sb2Rooms from '../../../../data/sb2Rooms'

function SB2_Floor2({ onRoomClick = () => {}, highlightedRoom }: { onRoomClick?: (roomData: any) => void; highlightedRoom?: string | null }) {
  const floor2Rooms = sb2Rooms.filter(room => room.floor === 2);
  const sb2_201Data = floor2Rooms.find(r => r.name === "SB2 201")!;
  const sb2_202Data = floor2Rooms.find(r => r.name === "SB2 202")!;
  const sb2_203Data = floor2Rooms.find(r => r.name === "SB2 203")!;
  const sb2_204Data = floor2Rooms.find(r => r.name === "SB2 204")!;
  return (
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
      {/* BASE */}
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

      {/* ROOM 201 */}
      <div
        onClick={() => onRoomClick?.(sb2_201Data)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === sb2_201Data.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '9%',
          left: '4%',
          height: '55%',
          zIndex: 2
        }}
      >
        <img
          src={SB2_201}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* ROOM 202 */}
      <div
        onClick={() => onRoomClick?.(sb2_202Data)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === sb2_202Data.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '9%',
          left: '22%',
          height: '55%',
          zIndex: 3
        }}
      >
        <img
          src={SB2_202}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* ROOM 203 */}
      <div
        onClick={() => onRoomClick?.(sb2_203Data)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === sb2_203Data.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '9%',
          right: '23%',
          height: '55%',
          zIndex: 4
        }}
      >
        <img
          src={SB2_203}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* ROOM 204 */}
      <div
        onClick={() => onRoomClick?.(sb2_204Data)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === sb2_204Data.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '9%',
          right: '5%',
          height: '55%',
          zIndex: 5
        }}
      >
        <img
          src={SB2_204}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
    </div>
  );
}

export default SB2_Floor2;