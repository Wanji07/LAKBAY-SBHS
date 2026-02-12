import NB4_Base from './nb-4th_floor-base.svg'
import NB4_Restroom from './nb-restroom-4.svg'
import NB4_FIL_Department from './nb-fil-department.svg'
import NB401 from './nb401.svg'
import NB402 from './nb402.svg'
import NB403 from './nb403.svg'
import NB404 from './nb404.svg'
import NB405 from './nb405.svg'
import NB406 from './nb406.svg'

function NB4() {
	return(
		<>
		<div id="container" style={{
			position: 'relative',
			width: '1611px',
			height: '558px',
			margin: '0 auto'
		}}>
			<img src={NB4_Base} style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 1,
				pointerEvents: 'none'
			}} />
			<img src={NB4_Restroom} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 25,
				width: 'auto',
				height: '55%',
				zIndex: 2,
				pointerEvents: 'auto'
			}} />
			<img src={NB4_FIL_Department} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 115,
				width: 'auto',
				height: '55%',
				zIndex: 3,
				pointerEvents: 'auto'
			}} />
			<img src={NB401} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 205,
				width: 'auto',
				height: '55%',
				zIndex: 4,
				pointerEvents: 'auto'
			}} />
			<img src={NB402} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 385,
				width: 'auto',
				height: '55%',
				zIndex: 5,
				pointerEvents: 'auto'
			}} />
			<img src={NB403} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 565,
				width: 'auto',
				height: '55%',
				zIndex: 6,
				pointerEvents: 'auto'
			}} />
			<img src={NB404} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 1035,
				width: 'auto',
				height: '55%',
				zIndex: 7,
				pointerEvents: 'auto'
			}} />
			<img src={NB405} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 1220,
				width: 'auto',
				height: '55%',
				zIndex: 8,
				pointerEvents: 'auto'
			}} />
			<img src={NB406} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 1405,
				width: 'auto',
				height: '55%',
				zIndex: 9,
				pointerEvents: 'auto'
			}} />
		</div>
		</>
	)
}

export default NB4
