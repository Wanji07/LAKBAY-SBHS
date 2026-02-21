import Base from './SB2-2ND-BASE.svg'
import SB2_201 from './SB2-201.svg'
import SB2_202 from './SB2-202.svg'
import SB2_203 from './SB2-203.svg'
import SB2_204 from './SB2-204.svg'

function SB2_Floor2() {
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
            <img src={SB2_201} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 70,
                width: 'auto',
                height: '55%',
                zIndex: 2,
                pointerEvents: 'auto'
            }} />
            <img src={SB2_202} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 355,
                width: 'auto',
                height: '55%',
                zIndex: 3,
                pointerEvents: 'auto'
            }} />
            <img src={SB2_203} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                right: 370,
                width: 'auto',
                height: '55%',
                zIndex: 4,
                pointerEvents: 'auto'
            }} />
            <img src={SB2_204} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                right: 80,
                width: 'auto',
                height: '55%',
                zIndex: 5,
                pointerEvents: 'auto'
            }} />
        </div>
        </>
    )
}

export default SB2_Floor2
