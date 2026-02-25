import NB4_Base from './nb-4th_floor-base.svg'
import NB4_Restroom from './nb-restroom-4.svg'
import NB4_FIL_Department from './nb-fil-department.svg'
import NB401 from './nb401.svg'
import NB402 from './nb402.svg'
import NB403 from './nb403.svg'
import NB404 from './nb404.svg'
import NB405 from './nb405.svg'
import NB406 from './nb406.svg'

function NB4({ onRoomClick = () => {} }: { onRoomClick?: (roomData: any) => void }) {
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
				src={NB4_Base}
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
				src={NB4_Restroom}
                onClick={() => onRoomClick({ name: "New Building 4F Restroom", type: "Restroom"})}
				className="cursor-pointer"
				style={{
				position: "absolute",
				top: "7.2%",
				left: "1.6%",
				height: "55%",
				zIndex: 2,
				}}
			/>

			<img
				src={NB4_FIL_Department}
				onClick={() => onRoomClick({ name: "New Building Filipino Department", type: "Faculty"})}
				className="cursor-pointer"
				style={{
				position: "absolute",
				top: "7.2%",
				left: "7.1%",
				height: "55%",
				zIndex: 3,
				}}
			/>

			<img
				src={NB401}
				className="cursor-pointer"
                onClick={() => onRoomClick({ name: "NB401", type: "Classroom"})}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "12.7%",
				height: "55%",
				zIndex: 4,
				}}
			/>

			<img
				src={NB402}
				className="cursor-pointer"
                onClick={() => onRoomClick({ name: "NB402", type: "Classroom"})}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "23.9%",
				height: "55%",
				zIndex: 5,
				}}
			/>

			<img
				src={NB403}
				className="cursor-pointer"
                onClick={() => onRoomClick({ name: "NB403", type: "Classroom"})}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "35.1%",
				height: "55%",
				zIndex: 6,
				}}
			/>

			<img
				src={NB404}
				className="cursor-pointer"
                onClick={() => onRoomClick({ name: "NB404", type: "Classroom"})}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "64.3%",
				height: "55%",
				zIndex: 7,
				}}
			/>

			<img
				src={NB405}
				className="cursor-pointer"
                onClick={() => onRoomClick({ name: "NB405", type: "Classroom"})}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "75.7%",
				height: "55%",
				zIndex: 8,
				}}
			/>

			<img
				src={NB406}
				className="cursor-pointer"
                onClick={() => onRoomClick({ name: "NB406", type: "Classroom"})}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "87.2%",
				height: "55%",
				zIndex: 9,
				}}
			/>
			</div>
		</>
	)
}

export default NB4
