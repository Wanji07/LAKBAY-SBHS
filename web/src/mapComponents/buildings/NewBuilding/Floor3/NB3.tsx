import NB3_Base from './nb-3rd_floor-base.svg'
import NB3_Restroom from './nb-restroom-3.svg'
import NB301 from './nb301.svg'
import NB302 from './nb302.svg'
import NB303 from './nb303.svg'
import NB304 from './nb304.svg'
import NB305 from './nb305.svg'
import NB306 from './nb306.svg'

function NB3() {
	return(
		<>
		<div id="container" style={{
			position: 'relative',
			width: '1611px',
			height: '558px',
			margin: '0 auto'
		}}>
			<img src={NB3_Base} style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 1,
				pointerEvents: 'none'
			}} />
			<img src={NB3_Restroom} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 40,
				width: 'auto',
				height: '55%',
				zIndex: 2,
				pointerEvents: 'auto'
			}} />
			<img src={NB301} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 130,
				width: 'auto',
				height: '55%',
				zIndex: 3,
				pointerEvents: 'auto'
			}} />
			<img src={NB302} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 320,
				width: 'auto',
				height: '55%',
				zIndex: 4,
				pointerEvents: 'auto'
			}} />
			<img src={NB303} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 510,
				width: 'auto',
				height: '55%',
				zIndex: 5,
				pointerEvents: 'auto'
			}} />
			<img src={NB304} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 1020,
				width: 'auto',
				height: '55%',
				zIndex: 6,
				pointerEvents: 'auto'
			}} />
			<img src={NB305} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 1210,
				width: 'auto',
				height: '55%',
				zIndex: 7,
				pointerEvents: 'auto'
			}} />
			<img src={NB306} className="cursor-pointer" style={{
				position: 'absolute',
				top: 40,
				left: 1400,
				width: 'auto',
				height: '55%',
				zIndex: 8,
				pointerEvents: 'auto'
			}} />
		</div>
		</>
	)
}

export default NB3
