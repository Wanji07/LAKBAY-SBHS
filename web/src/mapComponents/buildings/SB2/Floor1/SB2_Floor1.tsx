import ALS from './SB2-ALS.svg'
import Base from './SB2-BASE.svg'
import DRRM from './SB2-DRRM.svg'
import REGISTRAR from './SB2-REGISTRAR.svg'

function SB2_Floor1() {
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

            <img src={ALS} className="cursor-pointer" style={{
                position: 'absolute',
                top: '5%',
                left: '22%',
                height: '55%',
                zIndex: 2
            }} />

            <img src={DRRM} className="cursor-pointer" style={{
                position: 'absolute',
                top: '23%',
                right: '32%',
                height: '15%',
                zIndex: 3
            }} />

            <img src={REGISTRAR} className="cursor-pointer" style={{
                position: 'absolute',
                top: '5%',
                left: '40%',
                height: '55%',
                zIndex: 4
            }} />
        </div>
        </>
    )
}

export default SB2_Floor1
