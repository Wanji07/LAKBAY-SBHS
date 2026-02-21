import Base from './SB2_3rdFloor_Base.svg'
import SB2_301 from './SB2_301.svg'
import SB2_302 from './SB2_302.svg'
import SB2_303 from './SB2_303.svg'
import SB2_304 from './SB2_304.svg'

function SB2_Floor3() {
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
                <img src={SB2_301} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 70,
                    width: 'auto',
                    height: '55%',
                    zIndex: 2,
                    pointerEvents: 'auto'
                }} />
                <img src={SB2_302} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 355,
                    width: 'auto',
                    height: '55%',
                    zIndex: 3,
                    pointerEvents: 'auto'
                }} />
                <img src={SB2_303} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 370,
                    width: 'auto',
                    height: '55%',
                    zIndex: 4,
                    pointerEvents: 'auto'
                }} />
                <img src={SB2_304} className="cursor-pointer" style={{
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

export default SB2_Floor3
