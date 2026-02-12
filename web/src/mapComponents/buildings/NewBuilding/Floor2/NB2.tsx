import NB2_Base from './nb-2nd_floor-base.svg'
import NB2_Restroom from './nb-restroom-2.svg'
import NB201 from './nb201.svg'
import NB202 from './nb202.svg'
import NB203 from './nb203.svg'
import NB204 from './nb204.svg'
import NB205 from './nb205.svg'
import NB206 from './nb206.svg'

function NB2() {
    return(
        <>
        <div id="container" style={{
            position: 'relative',
            width: '1611px', 
            height: '558px',
            margin: '0 auto'
        }}>
            <img src={NB2_Base} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none'
            }} />
            <img src={NB2_Restroom} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: 40,
                width: 'auto',
                height: '55%',
                zIndex: 2,
                pointerEvents: 'auto'
            }} />
            <img src={NB201} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: 130,
                width: 'auto',
                height: '55%',
                zIndex: 3,
                pointerEvents: 'auto'
            }} />
            <img src={NB202} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: 320,
                width: 'auto',
                height: '55%',
                zIndex: 4,
                pointerEvents: 'auto'
            }} />
            <img src={NB203} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: 510,
                width: 'auto',
                height: '55%',
                zIndex: 5,
                pointerEvents: 'auto'
            }} />
            <img src={NB204} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: 1020,
                width: 'auto',
                height: '55%',
                zIndex: 6,
                pointerEvents: 'auto'
            }} />
            <img src={NB205} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: 1210,
                width: 'auto',
                height: '55%',
                zIndex: 7,
                pointerEvents: 'auto'
            }} />
            <img src={NB206} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: 1400,
                width: 'auto',
                height: '55%',
                zIndex: 8,
                pointerEvents: 'auto'
            }} />
        </div>
        </>
    )
}

export default NB2