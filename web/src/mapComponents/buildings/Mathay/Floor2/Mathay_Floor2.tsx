import Library from './LIBRARY.svg'
import MT201 from './M201.svg'
import MathFaculty from './MATH FACULTY.svg'
import Base from './MATHAY-2ND-BASE.svg'
import MT202 from './MT202.svg'
import MT203 from './MT203.svg'
import SHSFaculty from './SHS FACULTY.svg'

function Mathay_Floor2() {
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
                <img src={Library} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 295,
                    width: 'auto',
                    height: '55%',
                    zIndex: 2,
                    pointerEvents: 'auto'
                }} />
                <img src={MT201} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 10,
                    width: 'auto',
                    height: '55%',
                    zIndex: 3,
                    pointerEvents: 'auto'
                }} />
                <img src={MathFaculty} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 585,
                    width: 'auto',
                    height: '55%',
                    zIndex: 4,
                    pointerEvents: 'auto'
                }} />
                <img src={MT202} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 300,
                    width: 'auto',
                    height: '55%',
                    zIndex: 5,
                    pointerEvents: 'auto'
                }} />
                <img src={MT203} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    left: 15,
                    width: 'auto',
                    height: '55%',
                    zIndex: 5,
                    pointerEvents: 'auto'
                }} />
                <img src={SHSFaculty} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: 50,
                    right: 580,
                    width: 'auto',
                    height: '55%',
                    zIndex: 5,
                    pointerEvents: 'auto'
                }} />
            </div>
        </>
    )
}

export default Mathay_Floor2