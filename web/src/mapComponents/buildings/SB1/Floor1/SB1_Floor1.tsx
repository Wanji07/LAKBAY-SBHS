import AVR from './avr.svg'
import Base from './nb-2nd_floor-base.svg'
import Comlab from './sb1_comlab.svg'
import RestroomWomen from './sb1_girls_restroom.svg'
import RestroomMen from './sb1_boys_restroom.svg'
import TLE from './sb1_tle.svg'


function SB1_Floor1() {
    return(
        <>
        <div id="container" style={{
            position: 'relative',
            width: '1611px', 
            height: '558px',
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
            <img src={RestroomWomen} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 590,
                width: 'auto',
                height: '55%',
                zIndex: 2,
                pointerEvents: 'auto'
            }} />
            <img src={RestroomMen} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 940,
                width: 'auto',
                height: '55%',
                zIndex: 3,
                pointerEvents: 'auto'
            }} />
            <img src={Comlab} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 1030,
                width: 'auto',
                height: '55%',
                zIndex: 4,
                pointerEvents: 'auto'
            }} />
            <img src={AVR} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 20,
                width: 'auto',
                height: '55%',
                zIndex: 5,
                pointerEvents: 'auto'
            }} />
            <img src={TLE} className="cursor-pointer" style={{
                position: 'absolute',
                bottom: 50,
                left: 1030,
                width: 'auto',
                height: '27%',
                zIndex: 6,
                pointerEvents: 'auto'
            }} />
        </div>
        </>
    )
}

export default SB1_Floor1

