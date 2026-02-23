import Base from './MATHAY_FLOOR1_BASE.svg'
import Boys_Restroom from './BOYS_RESTROOM_MATHAY.svg'
import Girls_Restroom from './GIRLS_RESTROOM_MATHAY.svg'
import Coop from './COOP_OFFICE.svg'
import Ehemplo from './EHEMPLO.svg'
import Finance from './FINANCE_OFFICE.svg'
import Paragon from './PARAGON.svg'
import Principal from './PRINCIPALS.svg'
import MAPEH from './MAPEH_FACULTY.svg'

function Mathay_Floor1() {
    return(
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

            <img src={Girls_Restroom} className="cursor-pointer" style={{
                position: 'absolute',
                top: '9%',
                left: '36%',
                height: '55%',
                zIndex: 2
            }} />

            <img src={Boys_Restroom} className="cursor-pointer" style={{
                position: 'absolute',
                top: '9%',
                right: '36.5%',
                height: '55%',
                zIndex: 3
            }} />

            <img src={Coop} className="cursor-pointer" style={{
                position: 'absolute',
                top: '9%',
                right: '2%',
                height: '55%',
                zIndex: 4
            }} />

            <img src={Ehemplo} className="cursor-pointer" style={{
                position: 'absolute',
                top: '9%',
                right: '19%',
                height: '55%',
                zIndex: 5
            }} />

            <img src={Finance} className="cursor-pointer" style={{
                position: 'absolute',
                top: '9%',
                left: '1%',
                height: '55%',
                zIndex: 5
            }} />

            <img src={Paragon} className="cursor-pointer" style={{
                position: 'absolute',
                top: '9%',
                right: '27.5%',
                height: '55%',
                zIndex: 5
            }} />

            <img src={Principal} className="cursor-pointer" style={{
                position: 'absolute',
                top: '9%',
                left: '18.5%',
                height: '55%',
                zIndex: 5
            }} />

            <img src={MAPEH} className="cursor-pointer" style={{
                position: 'absolute',
                top: '9%',
                right: '10.5%',
                height: '55%',
                zIndex: 5
            }} />
        </div>
    )
}

export default Mathay_Floor1