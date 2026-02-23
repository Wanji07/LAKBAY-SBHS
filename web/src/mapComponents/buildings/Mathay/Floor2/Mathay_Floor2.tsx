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
                width: '100%',
                maxWidth: '1611px',
                aspectRatio: '1611 / 558',
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
                    top: '9%',
                    right: '18%',
                    height: '55%',
                    zIndex: 2
                }} />
                <img src={MT201} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: '9%',
                    right: '1%',
                    height: '55%',
                    zIndex: 3
                }} />
                <img src={MathFaculty} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: '9%',
                    left: '36.5%',
                    height: '55%',
                    zIndex: 4
                }} />
                <img src={MT202} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: '9%',
                    left: '19%',
                    height: '55%',
                    zIndex: 5
                }} />
                <img src={MT203} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: '9%',
                    left: '1%',
                    height: '55%',
                    zIndex: 5
                }} />
                <img src={SHSFaculty} className="cursor-pointer" style={{
                    position: 'absolute',
                    top: '9%',
                    right: '36%',
                    height: '55%',
                    zIndex: 5
                }} />
            </div>
        </>
    )
}

export default Mathay_Floor2