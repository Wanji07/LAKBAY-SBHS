import Base from './SB2_4thFloor_Base.svg'
import SB2_401 from './SB2_401.svg'
import SB2_402 from './SB2_402.svg'
import SB2_403 from './SB2_403.svg'
import SB2_404 from './SB2_404.svg'


function SB2_Floor4() {
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
                <img src={SB2_401} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 70,
                    width: 'auto',
                    height: '55%',
                    zIndex: 2,
                    pointerEvents: 'auto'
                }} />
                <img src={SB2_402} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 355,
                    width: 'auto',
                    height: '55%',
                    zIndex: 3,
                    pointerEvents: 'auto'
                }} />
                <img src={SB2_403} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 370,
                    width: 'auto',
                    height: '55%',
                    zIndex: 4,
                    pointerEvents: 'auto'
                }} />
                <img src={SB2_404} className="cursor-pointer" style={{
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

export default SB2_Floor4
