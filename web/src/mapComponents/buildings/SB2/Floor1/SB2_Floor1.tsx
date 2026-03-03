import ALS from './SB2-ALS.svg'
import Base from './SB2-BASE.svg'
import DRRM from './SB2-DRRM.svg'
import REGISTRAR from './SB2-REGISTRAR.svg'
import sb2Rooms from '../../../../data/sb2Rooms'

function SB2_Floor1({ onRoomClick = () => {}, highlightedRoom }: { onRoomClick?: (roomData: any) => void; highlightedRoom?: string | null }) {
  const floor1Rooms = sb2Rooms.filter(room => room.floor === 1);
  const alsData = floor1Rooms.find(r => r.name === "ALS Office")!;
  const drrmData = floor1Rooms.find(r => r.name === "DRRM Office")!;
  const registrarData = floor1Rooms.find(r => r.name === "Registrar's Office")!;
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

      {/* ALS */}
      <div
        onClick={() => onRoomClick?.(alsData)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === alsData.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '5%',
          left: '22%',
          height: '55%',
          zIndex: 2
        }}
      >
        <img
          src={ALS}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* DRRM */}
      <div
        onClick={() => onRoomClick?.(drrmData)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === drrmData.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '23%',
          right: '32%',
          height: '15%',
          zIndex: 2
        }}
      >
        <img
          src={DRRM}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* REGISTRAR */}
      <div
        onClick={() => onRoomClick?.(registrarData)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === registrarData.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '5%',
          left: '40%',
          height: '55%',
          zIndex: 2
        }}
      >
        <img
          src={REGISTRAR}
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

export default SB2_Floor1;
