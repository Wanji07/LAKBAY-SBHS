import sb301 from './sb1_301.svg'
import sb302 from './sb_302.svg'
import sb303 from './sb1_303.svg'
import sb304 from './sb1_304.svg'
import sb1_ap from './sb1_ap.svg'
import sb1_ap2 from './sb1_ap2.svg'
import sb1_esp from './sb1_esp.svg'
import Base from './sb1-3rd_floor-base.svg'

function SB1_Floor2() {
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
            <img src={sb301} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 20,
                width: 'auto',
                height: '55%',
                zIndex: 2,
                pointerEvents: 'auto'
            }} />
            <img src={sb302} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 305,
                width: 'auto',
                height: '55%',
                zIndex: 3,
                pointerEvents: 'auto'
            }} />
            <img src={sb303} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 1030,
                width: 'auto',
                height: '55%',
                zIndex: 4,
                pointerEvents: 'auto'
            }} />
            <img src={sb304} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                right: 15,
                width: 'auto',
                height: '55%',
                zIndex: 5,
                pointerEvents: 'auto'
            }} />
            <img src={sb1_ap} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 590,
                width: 'auto',
                height: '55%',
                zIndex: 6,
                pointerEvents: 'auto'
            }} />
            <img src={sb1_ap2} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 940,
                width: 'auto',
                height: '55%',
                zIndex: 6,
                pointerEvents: 'auto'
            }} />
            <img src={sb1_esp} className="cursor-pointer" style={{
                position: 'absolute',
                bottom: 50,
                left: 20,
                width: 'auto',
                height: '27%',
                zIndex: 6,
                pointerEvents: 'auto'
            }} />
        </div>
        </>
    )
}

export default SB1_Floor2

