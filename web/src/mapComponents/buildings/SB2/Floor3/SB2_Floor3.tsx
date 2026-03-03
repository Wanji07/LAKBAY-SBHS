import Base from './SB2_3rdFloor_Base.svg'
import SB2_301 from './SB2_301.svg'
import SB2_302 from './SB2_302.svg'
import SB2_303 from './SB2_303.svg'
import SB2_304 from './SB2_304.svg'
import sb2Rooms from '../../../../data/sb2Rooms'

function SB2_Floor3({ onRoomClick = () => {}, highlightedRoom }: { onRoomClick?: (roomData: any) => void; highlightedRoom?: string | null }) {
    const floor3Rooms = sb2Rooms.filter(room => room.floor === 3);
    const sb2_301Data = floor3Rooms.find(r => r.name === "SB2 301")!;
    const sb2_302Data = floor3Rooms.find(r => r.name === "SB2 302")!;
    const sb2_303Data = floor3Rooms.find(r => r.name === "SB2 303")!;
    const sb2_304Data = floor3Rooms.find(r => r.name === "SB2 304")!;
    return(
        <>
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
                    onClick={() => onRoomClick?.(sb2_301Data)}
                    className={`absolute cursor-pointer transition-all ${
                        highlightedRoom === sb2_301Data.name
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
                        src={SB2_301}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>

                <div
                    onClick={() => onRoomClick?.(sb2_302Data)}
                    className={`absolute cursor-pointer transition-all ${
                        highlightedRoom === sb2_302Data.name
                            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
                            : ""
                    }`}
                    style={{
                        position: 'absolute',
                        top: '9%',
                        left: '22%',
                        height: '55%',
                        zIndex: 2
                    }}
                >
                    <img
                        src={SB2_302}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>

                <div
                    onClick={() => onRoomClick?.(sb2_303Data)}
                    className={`absolute cursor-pointer transition-all ${
                        highlightedRoom === sb2_303Data.name
                            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
                            : ""
                    }`}
                    style={{
                        position: 'absolute',
                        top: '9%',
                        right: '23%',
                        height: '55%',
                        zIndex: 2
                    }}
                >
                    <img
                        src={SB2_303}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>

                <div
                    onClick={() => onRoomClick?.(sb2_304Data)}
                    className={`absolute cursor-pointer transition-all ${
                        highlightedRoom === sb2_304Data.name
                            ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
                            : ""
                    }`}
                    style={{
                        position: 'absolute',
                        top: '9%',
                        right: '5%',
                        height: '55%',
                        zIndex: 2
                    }}
                >
                    <img
                        src={SB2_304}
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

export default SB2_Floor3