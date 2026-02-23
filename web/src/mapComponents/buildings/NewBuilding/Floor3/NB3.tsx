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
			<div
			id="container"
			style={{
				position: "relative",
				width: "100%",
				maxWidth: "1611px",
				aspectRatio: "1611 / 558",
				margin: "0 auto",
			}}
			>
			<img
				src={NB3_Base}
				style={{
				position: "absolute",
				inset: 0,
				width: "100%",
				height: "100%",
				zIndex: 1,
				pointerEvents: "none",
				}}
			/>

			<img
				src={NB3_Restroom}
				className="cursor-pointer"
				style={{
				position: "absolute",
				top: "7.2%",
				left: "2.5%",
				height: "55%",
				zIndex: 2,
				}}
			/>

			<img
				src={NB301}
				className="cursor-pointer"
				style={{
				position: "absolute",
				top: "7.2%",
				left: "8.1%",
				height: "55%",
				zIndex: 3,
				}}
			/>

			<img
				src={NB302}
				className="cursor-pointer"
				style={{
				position: "absolute",
				top: "7.2%",
				left: "19.9%",
				height: "55%",
				zIndex: 4,
				}}
			/>

			<img
				src={NB303}
				className="cursor-pointer"
				style={{
				position: "absolute",
				top: "7.2%",
				left: "31.7%",
				height: "55%",
				zIndex: 5,
				}}
			/>

			<img
				src={NB304}
				className="cursor-pointer"
				style={{
				position: "absolute",
				top: "7.2%",
				left: "63.3%",
				height: "55%",
				zIndex: 6,
				}}
			/>

			<img
				src={NB305}
				className="cursor-pointer"
				style={{
				position: "absolute",
				top: "7.2%",
				left: "75.1%",
				height: "55%",
				zIndex: 7,
				}}
			/>

			<img
				src={NB306}
				className="cursor-pointer"
				style={{
				position: "absolute",
				top: "7.2%",
				left: "86.9%",
				height: "55%",
				zIndex: 8,
				}}
			/>
			</div>
		</>
	)
}

export default NB3
