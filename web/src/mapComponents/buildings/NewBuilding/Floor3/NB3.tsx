import NB3_Base from './nb-3rd_floor-base.svg'
import NB3_Restroom from './nb-restroom-3.svg'
import NB301 from './nb301.svg'
import NB302 from './nb302.svg'
import NB303 from './nb303.svg'
import NB304 from './nb304.svg'
import NB305 from './nb305.svg'
import NB306 from './nb306.svg'
import nbRooms from '../../../../data/nbRooms'

function NB3({ onRoomClick = () => {}, highlightedRoom }: { onRoomClick?: (roomData: any) => void; highlightedRoom?: string | null }) {
	const floor3Rooms = nbRooms.filter(room => room.floor === 3);
	const restroomData = floor3Rooms.find(r => r.name === "New Building 3F Restroom")!;
	const nb301Data = floor3Rooms.find(r => r.name === "NB301")!;
	const nb302Data = floor3Rooms.find(r => r.name === "NB302")!;
	const nb303Data = floor3Rooms.find(r => r.name === "NB303")!;
	const nb304Data = floor3Rooms.find(r => r.name === "NB304")!;
	const nb305Data = floor3Rooms.find(r => r.name === "NB305")!;
	const nb306Data = floor3Rooms.find(r => r.name === "NB306")!;
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
				left: "2.5%",
				height: "55%",
				zIndex: 2,
				}}
			>
				<img
					src={NB3_Restroom}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(nb301Data)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === nb301Data.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "8.1%",
				height: "55%",
				zIndex: 3,
				}}
			>
				<img
					src={NB301}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(nb302Data)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === nb302Data.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "19.9%",
				height: "55%",
				zIndex: 4,
				}}
			>
				<img
					src={NB302}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(nb303Data)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === nb303Data.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "31.7%",
				height: "55%",
				zIndex: 5,
				}}
			>
				<img
					src={NB303}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(nb304Data)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === nb304Data.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "63.3%",
				height: "55%",
				zIndex: 6,
				}}
			>
				<img
					src={NB304}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(nb305Data)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === nb305Data.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "75.1%",
				height: "55%",
				zIndex: 7,
				}}
			>
				<img
					src={NB305}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover'
					}}
				/>
			</div>

			<div
				onClick={() => onRoomClick?.(nb306Data)}
				className={`absolute cursor-pointer transition-all ${
					highlightedRoom === nb306Data.name
						? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
						: ""
				}`}
				style={{
				position: "absolute",
				top: "7.2%",
				left: "86.9%",
				height: "55%",
				zIndex: 8,
				}}
			>
				<img
					src={NB306}
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

export default NB3
