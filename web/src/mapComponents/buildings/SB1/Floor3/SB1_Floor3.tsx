import sb1_clinic from './sb1-clinic.svg'
import sb1_english from './sb1-english.svg'
import sb1_english2 from './sb1-english2.svg'
import sb1_esp from './sb1-esp-1.svg'
import sb1_guidance from './sb1-guidance.svg'
import sb1_journalism from './sb1-journalism.svg'
import sb1_property from './sb1-property.svg'
import sb1_staff from './sb1-staff.svg'
import Base from './sb1-1st_floor-base.svg'
import sb1Rooms from '../../../../data/sb1Rooms'

function SB1_Floor3({ onRoomClick = () => {}, highlightedRoom }: { onRoomClick?: (roomData: any) => void; highlightedRoom?: string | null }) {
  const floor3Rooms = sb1Rooms.filter(room => room.floor === 3);
  const clinicData = floor3Rooms.find(r => r.name === "Clinic")!;
  const englishDeptData = floor3Rooms.find(r => r.name === "English Department")!;
  const englishAnnexData = floor3Rooms.find(r => r.name === "English Department (Annex)")!;
  const espDeptData = floor3Rooms.find(r => r.name === "ESP Department")!;
  const journalismData = floor3Rooms.find(r => r.name === "Journalism Office")!;
  const propertyCustodianData = floor3Rooms.find(r => r.name === "Property Custodian")!;
  const staffRoomData = floor3Rooms.find(r => r.name === "Staff Room")!;
  const guidanceData = floor3Rooms.find(r => r.name === "Guidance Office")!;
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

      {/* CLINIC */}
      <div
        onClick={() => onRoomClick?.(clinicData)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === clinicData.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '9%',
          left: '25%',
          height: '55%',
          zIndex: 2
        }}
      >
        <img
          src={sb1_clinic}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* ENGLISH DEPARTMENT */}
      <div
        onClick={() => onRoomClick?.(englishDeptData)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === englishDeptData.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '9%',
          left: '19%',
          height: '55%',
          zIndex: 2
        }}
      >
        <img
          src={sb1_english}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      <div
        onClick={() => onRoomClick?.(englishAnnexData)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === englishAnnexData.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '9%',
          right: '2%',
          height: '55%',
          zIndex: 2
        }}
      >
        <img
          src={sb1_english2}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* ESP DEPARTMENT */}
      <div
        onClick={() => onRoomClick?.(espDeptData)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === espDeptData.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '9%',
          left: '36%',
          height: '55%',
          zIndex: 2
        }}
      >
        <img
          src={sb1_esp}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* JOURNALISM */}
      <div
        onClick={() => onRoomClick?.(journalismData)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === journalismData.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '9%',
          left: '3%',
          height: '55%',
          zIndex: 2
        }}
      >
        <img
          src={sb1_journalism}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* PROPERTY CUSTODIAN */}
      <div
        onClick={() => onRoomClick?.(propertyCustodianData)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === propertyCustodianData.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '9%',
          left: '14%',
          height: '55%',
          zIndex: 2
        }}
      >
        <img
          src={sb1_property}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* STAFF ROOM */}
      <div
        onClick={() => onRoomClick?.(staffRoomData)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === staffRoomData.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '9%',
          right: '25%',
          height: '55%',
          zIndex: 2
        }}
      >
        <img
          src={sb1_staff}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* GUIDANCE OFFICE */}
      <div
        onClick={() => onRoomClick?.(guidanceData)}
        className={`absolute cursor-pointer transition-all ${
          highlightedRoom === guidanceData.name
            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
            : ""
        }`}
        style={{
          position: 'absolute',
          top: '9%',
          right: '14%',
          height: '55%',
          zIndex: 2
        }}
      >
        <img
          src={sb1_guidance}
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

export default SB1_Floor3;
