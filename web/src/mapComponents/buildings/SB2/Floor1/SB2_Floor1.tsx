import ALS from './SB2-ALS.svg'
import Base from './SB2-BASE.svg'
import DRRM from './SB2-DRRM.svg'
import REGISTRAR from './SB2-REGISTRAR.svg'

function SB2_Floor1() {
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
            <img src={ALS} className="cursor-pointer" style={{
                position: 'absolute',
                top: 30,
                left: 360,
                width: 'auto',
                height: '55%',
                zIndex: 2,
                pointerEvents: 'auto'
            }} />
            <img src={DRRM} className="cursor-pointer" style={{
                position: 'absolute',
                top: 130,
                right: 515,
                width: 'auto',
                height: '15%',
                zIndex: 3,
                pointerEvents: 'auto'
            }} />
            <img src={REGISTRAR} className="cursor-pointer" style={{
                position: 'absolute',
                top: 30,
                left: 650,
                width: 'auto',
                height: '55%',
                zIndex: 4,
                pointerEvents: 'auto'
            }} />
        </div>
        </>
    )
}

export default SB2_Floor1
