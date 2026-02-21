import MT301 from './MT301.svg'
import MT302 from './MT302.svg'
import MT303 from './MT303.svg'
import MT304 from './MT304.svg'
import SHS_Faculty1 from './SHS FACULTY.svg'
import SHS_Faculty2 from './SHS FACULTY 2.svg'
import TLE_Faculty from './TLE FACULTY.svg'
import Base from './Mathay_Floor3_BASE.svg'

function Mathay_Floor3() {
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
                <img src={MT301} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 20,
                    width: 'auto',
                    height: '55%',
                    zIndex: 2,
                    pointerEvents: 'auto'
                }} />
                <img src={MT302} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 310,
                    width: 'auto',
                    height: '55%',
                    zIndex: 3,
                    pointerEvents: 'auto'
                }} />
                <img src={MT303} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 305,
                    width: 'auto',
                    height: '55%',
                    zIndex: 4,
                    pointerEvents: 'auto'
                }} />
                <img src={MT304} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 15,
                    width: 'auto',
                    height: '55%',
                    zIndex: 5,
                    pointerEvents: 'auto'
                }} />
                <img src={SHS_Faculty1} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 590,
                    width: 'auto',
                    height: '55%',
                    zIndex: 5,
                    pointerEvents: 'auto'
                }} />
                <img src={SHS_Faculty2} className="cursor-pointer" style={{
                    position: 'absolute',
                    bottom: 50,
                    right: 15,
                    width: 'auto',
                    height: '27%',
                    zIndex: 5,
                    pointerEvents: 'auto'
                }} />
                <img src={TLE_Faculty} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 595,
                    width: 'auto',
                    height: '55%',
                    zIndex: 5,
                    pointerEvents: 'auto'
                }} />
            </div>
        </>
    )
}

export default Mathay_Floor3