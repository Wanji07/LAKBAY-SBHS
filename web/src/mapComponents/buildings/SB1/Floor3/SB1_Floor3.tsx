import sb1_clinic from './sb1-clinic.svg'
import sb1_english from './sb1-english.svg'
import sb1_english2 from './sb1-english2.svg'
import sb1_esp from './sb1-esp-1.svg'
import sb1_guidance from './sb1-guidance.svg'
import sb1_journalism from './sb1-journalism.svg'
import sb1_property from './sb1-property.svg'
import sb1_staff from './sb1-staff.svg'
import Base from './sb1-1st_floor-base.svg'

function SB1_Floor3({ onRoomClick = () => {} }: { onRoomClick?: (roomData: any) => void }) {
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
      <img
        src={sb1_clinic}
        className="cursor-pointer"
        onClick={() =>
          onRoomClick({
            name: "Clinic",
            type: "Medical Facility",
          })
        }
        style={{
          position: 'absolute',
          top: '9%',
          left: '25%',
          height: '55%',
          zIndex: 2
        }}
      />

      {/* ENGLISH DEPARTMENT */}
      <img
        src={sb1_english}
        className="cursor-pointer"
        onClick={() =>
          onRoomClick({
            name: "English Department",
            type: "Faculty Room"
          })
        }
        style={{
          position: 'absolute',
          top: '9%',
          left: '19%',
          height: '55%',
          zIndex: 3
        }}
      />

      <img
        src={sb1_english2}
        className="cursor-pointer"
        onClick={() =>
          onRoomClick({
            name: "English Department (Annex)",
            type: "Faculty Room"
          })
        }
        style={{
          position: 'absolute',
          top: '9%',
          right: '2%',
          height: '55%',
          zIndex: 4
        }}
      />

      {/* ESP DEPARTMENT */}
      <img
        src={sb1_esp}
        className="cursor-pointer"
        onClick={() =>
          onRoomClick({
            name: "ESP Department",
            type: "Faculty Room"
          })
        }
        style={{
          position: 'absolute',
          top: '9%',
          left: '36%',
          height: '55%',
          zIndex: 5
        }}
      />

      {/* JOURNALISM */}
      <img
        src={sb1_journalism}
        className="cursor-pointer"
        onClick={() =>
          onRoomClick({
            name: "Journalism Office",
            type: "Club Office"
          })
        }
        style={{
          position: 'absolute',
          top: '9%',
          left: '3%',
          height: '55%',
          zIndex: 6
        }}
      />

      {/* PROPERTY CUSTODIAN */}
      <img
        src={sb1_property}
        className="cursor-pointer"
        onClick={() =>
          onRoomClick({
            name: "Property Custodian",
            type: "Administrative Office"
          })
        }
        style={{
          position: 'absolute',
          top: '9%',
          left: '14%',
          height: '55%',
          zIndex: 6
        }}
      />

      {/* STAFF ROOM */}
      <img
        src={sb1_staff}
        className="cursor-pointer"
        onClick={() =>
          onRoomClick({
            name: "Staff Room",
            type: "Faculty Room"
          })
        }
        style={{
          position: 'absolute',
          top: '9%',
          right: '25%',
          height: '55%',
          zIndex: 6
        }}
      />

      {/* GUIDANCE OFFICE */}
      <img
        src={sb1_guidance}
        className="cursor-pointer"
        onClick={() =>
          onRoomClick({
            name: "Guidance Office",
            type: "Student Services"
          })
        }
        style={{
          position: 'absolute',
          top: '9%',
          right: '14%',
          height: '55%',
          zIndex: 6
        }}
      />
    </div>
  );
}

export default SB1_Floor3;
