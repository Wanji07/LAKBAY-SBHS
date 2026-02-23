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
                <img src={Girls_Restroom} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 585,
                    width: 'auto',
                    height: '55%',
                    zIndex: 2,
                    pointerEvents: 'auto'
                }} />
                <img src={Boys_Restroom} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 590,
                    width: 'auto',
                    height: '55%',
                    zIndex: 3,
                    pointerEvents: 'auto'
                }} />
                <img src={Coop} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 30,
                    width: 'auto',
                    height: '55%',
                    zIndex: 4,
                    pointerEvents: 'auto'
                }} />
                <img src={Ehemplo} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 310,
                    width: 'auto',
                    height: '55%',
                    zIndex: 5,
                    pointerEvents: 'auto'
                }} />
                <img src={Finance} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 15,
                    width: 'auto',
                    height: '55%',
                    zIndex: 5,
                    pointerEvents: 'auto'
                }} />
                <img src={Paragon} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 450,
                    width: 'auto',
                    height: '55%',
                    zIndex: 5,
                    pointerEvents: 'auto'
                }} />
                <img src={Principal} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 300,
                    width: 'auto',
                    height: '55%',
                    zIndex: 5,
                    pointerEvents: 'auto'
                }} />
                <img src={MAPEH} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 170,
                    width: 'auto',
                    height: '55%',
                    zIndex: 5,
                    pointerEvents: 'auto'
                }} />
            </div>
        </>
    )
}

export default Mathay_Floor1