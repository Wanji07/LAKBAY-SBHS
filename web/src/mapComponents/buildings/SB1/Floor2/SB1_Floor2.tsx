import sb301 from './sb1_301.svg'
import sb302 from './sb_302.svg'
import sb303 from './sb1_303.svg'
import sb304 from './sb1_304.svg'
import sb1_ap from './sb1_ap.svg'
import sb1_ap2 from './sb1_ap2.svg'
import sb1_esp from './sb1_esp.svg'
import Base from './sb1-3rd_floor-base.svg'

function SB1_Floor2({ onRoomClick = () => {} }: { onRoomClick?: (roomData: any) => void }) {
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
            <img src={sb301} className="cursor-pointer" onClick={() => onRoomClick({ name: "SB301", type: "Classroom"})} style={{
                position: 'absolute',
                top: '9%',
                left: '1%',
                height: '55%',
                zIndex: 2
            }} />
            <img src={sb302} className="cursor-pointer" onClick={() => onRoomClick({ name: "SB302", type: "Classroom"})} style={{
                position: 'absolute',
                top: '9%',
                left: '19%',
                height: '55%',
                zIndex: 3
            }} />
            <img src={sb303} className="cursor-pointer" onClick={() => onRoomClick({ name: "SB303", type: "Classroom"})} style={{
                position: 'absolute',
                top: '9%',
                left: '64%',
                height: '55%',
                zIndex: 4
            }} />
            <img src={sb304} className="cursor-pointer" onClick={() => onRoomClick({ name: "SB304", type: "Classroom"})} style={{
                position: 'absolute',
                top: '9%',
                right: '1%',
                height: '55%',
                zIndex: 5
            }} />
            <img src={sb1_ap} className="cursor-pointer" onClick={() => onRoomClick({ name: "Araling Panlipunan Department 1", type: "Faculty"})} style={{
                position: 'absolute',
                top: '9%',
                left: '37%',
                height: '55%',
                zIndex: 6
            }} />
            <img src={sb1_ap2} className="cursor-pointer" onClick={() => onRoomClick({ name: "Araling Panlipunan Department 2", type: "Faculty"})} style={{
                position: 'absolute',
                top: '9%',
                left: '58.5%',
                height: '55%',
                zIndex: 6
            }} />
            <img src={sb1_esp} className="cursor-pointer" onClick={() => onRoomClick({ name: "ESP Department", type: "Faculty"})} style={{
                position: 'absolute',
                bottom: '9%',
                left: '1%',
                height: '27%',
                zIndex: 6
            }} />
        </div>
        </>
    )
}

export default SB1_Floor2

