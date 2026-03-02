import Base from './SB2_4thFloor_Base.svg'
import SB2_401 from './SB2_401.svg'
import SB2_402 from './SB2_402.svg'
import SB2_403 from './SB2_403.svg'
import SB2_404 from './SB2_404.svg'
import sb2Rooms from '../../../../data/sb2Rooms'

function SB2_Floor4({ onRoomClick = () => {}, highlightedRoom }: { onRoomClick?: (roomData: any) => void; highlightedRoom?: string | null }) {
    const floor4Rooms = sb2Rooms.filter(room => room.floor === 4);
    const sb2_401Data = floor4Rooms.find(r => r.name === "SB2 401")!;
    const sb2_402Data = floor4Rooms.find(r => r.name === "SB2 402")!;
    const sb2_403Data = floor4Rooms.find(r => r.name === "SB2 403")!;
    const sb2_404Data = floor4Rooms.find(r => r.name === "SB2 404")!;
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

            <div
                onClick={() => onRoomClick?.(sb2_401Data)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === sb2_401Data.name
                        ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
                        : ""
                }`}
                style={{
                    position: 'absolute',
                    top: '9%',
                    left: '4%',
                    height: '55%',
                    zIndex: 2
                }}
            >
                <img
                    src={SB2_401}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <div
                onClick={() => onRoomClick?.(sb2_402Data)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === sb2_402Data.name
                        ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
                        : ""
                }`}
                style={{
                    position: 'absolute',
                    top: '9%',
                    left: '22%',
                    height: '55%',
                    zIndex: 3
                }}
            >
                <img
                    src={SB2_402}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <div
                onClick={() => onRoomClick?.(sb2_403Data)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === sb2_403Data.name
                        ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
                        : ""
                }`}
                style={{
                    position: 'absolute',
                    top: '9%',
                    right: '23%',
                    height: '55%',
                    zIndex: 4
                }}
            >
                <img
                    src={SB2_403}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <div
                onClick={() => onRoomClick?.(sb2_404Data)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === sb2_404Data.name
                        ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
                        : ""
                }`}
                style={{
                    position: 'absolute',
                    top: '9%',
                    right: '5%',
                    height: '55%',
                    zIndex: 5
                }}
            >
                <img
                    src={SB2_404}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
        </div>
    )
}

export default SB2_Floor4