import Base from './SB2-2ND-BASE.svg'
import SB2_201 from './SB2-201.svg'
import SB2_202 from './SB2-202.svg'
import SB2_203 from './SB2-203.svg'
import SB2_204 from './SB2-204.svg'

function SB2_Floor2() {
    return(
        <>
            <div
                id="container"
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1611px',
                    aspectRatio: '1611 / 558',
                    margin: '0 auto'
                }}
            >
                <img
                    src={Base}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        pointerEvents: 'none'
                    }}
                />

                <img src={SB2_201} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: '9%',
                    left: '4%',
                    height: '55%',
                    zIndex: 2
                }} />

                <img src={SB2_202} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: '9%',
                    left: '22%',
                    height: '55%',
                    zIndex: 3
                }} />

                <img src={SB2_203} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: '9%',
                    right: '23%',
                    height: '55%',
                    zIndex: 4
                }} />

                <img src={SB2_204} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: '9%',
                    right: '5%',
                    height: '55%',
                    zIndex: 5
                }} />
            </div>
        </>
    )
}

export default SB2_Floor2
