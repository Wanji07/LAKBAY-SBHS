import AVR from './avr.svg'
import Base from './nb-2nd_floor-base.svg'
import Comlab from './sb1_comlab.svg'
import RestroomWomen from './sb1_girls_restroom.svg'
import RestroomMen from './sb1_boys_restroom.svg'
import TLE from './sb1_tle.svg'


function SB1_Floor1({ onRoomClick = () => {} }: { onRoomClick?: (roomData: any) => void }) {
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
            <img src={RestroomWomen} className="cursor-pointer" onClick={() => onRoomClick({ name: "Girl's Restroom", type: "Restroom"})} style={{
                position: 'absolute',
                top: '9%',
                left: '37%',
                height: '55%',
                zIndex: 2
            }} />
            <img src={RestroomMen} className="cursor-pointer"onClick={() => onRoomClick({ name: "Boy's Restroom", type: "Restroom"})}  style={{
                position: 'absolute',
                top: '9%',
                left: '58.5%',
                height: '55%',
                zIndex: 3
            }} />
            <img src={Comlab} className="cursor-pointer" onClick={() => onRoomClick({ name: "SHS Computer Laboratory", type: "Laboratory"})} style={{
                position: 'absolute',
                top: '9%',
                left: '64%',
                height: '55%',
                zIndex: 4
            }} />
            <img src={AVR} className="cursor-pointer" onClick={() => onRoomClick({ name: "Audio Visual Room", type: "Miscellaneous"})} style={{
                position: 'absolute',
                top: '9%',
                left: '1%',
                height: '55%',
                zIndex: 5
            }} />
            <img src={TLE} className="cursor-pointer" onClick={() => onRoomClick({ name: "TLE Department", type: "Faculty"})} style={{
                position: 'absolute',
                bottom: '9%',
                left: '64%',
                height: '27%',
                zIndex: 6
            }} />
        </div>
        </>
    )
}

export default SB1_Floor1

