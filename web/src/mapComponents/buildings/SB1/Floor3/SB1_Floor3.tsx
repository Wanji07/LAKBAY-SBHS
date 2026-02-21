import sb1_clinic from './sb1-clinic.svg'
import sb1_english from './sb1-english.svg'
import sb1_english2 from './sb1-english2.svg'
import sb1_esp from './sb1-esp-1.svg'
import sb1_guidance from './sb1-guidance.svg'
import sb1_journalism from './sb1-journalism.svg'
import sb1_property from './sb1-property.svg'
import sb1_staff from './sb1-staff.svg'
import Base from './sb1-1st_floor-base.svg'

function SB1_Floor3() {
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
            <img src={sb1_clinic} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 410,
                width: 'auto',
                height: '55%',
                zIndex: 2,
                pointerEvents: 'auto'
            }} />
            <img src={sb1_english} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 305,
                width: 'auto',
                height: '55%',
                zIndex: 3,
                pointerEvents: 'auto'
            }} />
            <img src={sb1_english2} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                right: 30,
                width: 'auto',
                height: '55%',
                zIndex: 4,
                pointerEvents: 'auto'
            }} />
            <img src={sb1_esp} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 590,
                width: 'auto',
                height: '55%',
                zIndex: 5,
                pointerEvents: 'auto'
            }} />
            <img src={sb1_english} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                right: 590,
                width: 'auto',
                height: '55%',
                zIndex: 6,
                pointerEvents: 'auto'
            }} />
            <img src={sb1_journalism} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 50,
                width: 'auto',
                height: '55%',
                zIndex: 6,
                pointerEvents: 'auto'
            }} />
            <img src={sb1_property} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                left: 230,
                width: 'auto',
                height: '55%',
                zIndex: 6,
                pointerEvents: 'auto'
            }} />
            <img src={sb1_staff} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                right: 410,
                width: 'auto',
                height: '55%',
                zIndex: 6,
                pointerEvents: 'auto'
            }} />
            <img src={sb1_guidance} className="cursor-pointer" style={{
                position: 'absolute',
                top: 50,
                right: 230,
                width: 'auto',
                height: '55%',
                zIndex: 6,
                pointerEvents: 'auto'
            }} />
        </div>
        </>
    )
}

export default SB1_Floor3

