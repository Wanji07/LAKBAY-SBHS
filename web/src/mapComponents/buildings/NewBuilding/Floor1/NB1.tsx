import NB1_Base from './nb-1st_floor-base.svg'
import NB1_Restroom from './nb-restroom.svg'
import NB101 from './nb101.svg'
import NB102 from './nb102.svg'
import NB103 from './nb103.svg'
import NB104 from './nb104.svg'
import NB105 from './nb105.svg'
import NB106 from './nb106.svg'

function NB1() {
    return(
        <>
        <div id="container" style={{
            position: 'relative',
            width: '1611px', 
            height: '558px',
            margin: '0 auto'
        }}>
            <img src={NB1_Base} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none'
            }} />
            <img src={NB1_Restroom} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: -350,
                width: '55%',
                height: '55%',
                zIndex: 2,
                pointerEvents: 'auto'
            }} />
            <img src={NB101} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: -210,
                width: '55%',
                height: '55%',
                zIndex: 3,
                pointerEvents: 'auto'
            }} />
            <img src={NB102} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: -20,
                width: '55%',
                height: '55%',
                zIndex: 4,
                pointerEvents: 'auto'
            }} />
            <img src={NB103} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: 170,
                width: '55%',
                height: '55%',
                zIndex: 5,
                pointerEvents: 'auto'
            }} />
            <img src={NB104} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: 650,
                width: '55%',
                height: '55%',
                zIndex: 6,
                pointerEvents: 'auto'
            }} />
            /*
            <img src={NB105} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: 840,
                width: '55%',
                height: '55%',
                zIndex: 7,
                pointerEvents: 'auto'
            }} />
            <img src={NB106} className="cursor-pointer" style={{
                position: 'absolute',
                top: 40,
                left: 1030,
                width: '55%',
                height: '55%',
                zIndex: 8,
                pointerEvents: 'auto'
            }} />
        </div>
        </>
    )
}

export default NB1