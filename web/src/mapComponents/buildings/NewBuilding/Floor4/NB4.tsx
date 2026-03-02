import NB4_Base from './nb-4th_floor-base.svg'
import NB4_Restroom from './nb-restroom-4.svg'
import NB4_FIL_Department from './nb-fil-department.svg'
import NB401 from './nb401.svg'
import NB402 from './nb402.svg'
import NB403 from './nb403.svg'
import NB404 from './nb404.svg'
import NB405 from './nb405.svg'
import NB406 from './nb406.svg'
import nbRooms from '../../../../data/nbRooms'

function NB4({ onRoomClick = () => {}, highlightedRoom }: { onRoomClick?: (roomData: any) => void; highlightedRoom?: string | null }) {
	const floor4Rooms = nbRooms.filter(room => room.floor === 4);
	const restroomData = floor4Rooms.find(r => r.name === "New Building 4F Restroom")!;
	const filDepartmentData = floor4Rooms.find(r => r.name === "New Building Filipino Department")!;
	const nb401Data = floor4Rooms.find(r => r.name === "NB401")!;
	const nb402Data = floor4Rooms.find(r => r.name === "NB402")!;
	const nb403Data = floor4Rooms.find(r => r.name === "NB403")!;
	const nb404Data = floor4Rooms.find(r => r.name === "NB404")!;
	const nb405Data = floor4Rooms.find(r => r.name === "NB405")!;
	const nb406Data = floor4Rooms.find(r => r.name === "NB406")!;
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

			<div
				onClick={() => onRoomClick?.(restroomData)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === restroomData.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "1.6%",
				height: "55%",
				zIndex: 2,
				}}
			>
				<img
					src={NB4_Restroom}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(filDepartmentData)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === filDepartmentData.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "7.1%",
				height: "55%",
				zIndex: 3,
				}}
			>
				<img
					src={NB4_FIL_Department}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(nb401Data)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === nb401Data.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "12.7%",
				height: "55%",
				zIndex: 4,
				}}
			>
				<img
					src={NB401}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(nb402Data)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === nb402Data.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "23.9%",
				height: "55%",
				zIndex: 5,
				}}
			>
				<img
					src={NB402}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(nb403Data)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === nb403Data.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "35.1%",
				height: "55%",
				zIndex: 6,
				}}
			>
				<img
					src={NB403}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(nb404Data)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === nb404Data.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "64.3%",
				height: "55%",
				zIndex: 7,
				}}
			>
				<img
					src={NB404}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(nb405Data)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === nb405Data.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "75.7%",
				height: "55%",
				zIndex: 8,
				}}
			>
				<img
					src={NB405}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(nb406Data)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === nb406Data.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "87.2%",
				height: "55%",
				zIndex: 9,
				}}
			>
				<img
					src={NB406}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>
			</div>
		</>
	)
}

export default NB4
