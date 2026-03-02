import NB2_Base from './nb-2nd_floor-base.svg'
import NB2_Restroom from './nb-restroom-2.svg'
import NB201 from './nb201.svg'
import NB202 from './nb202.svg'
import NB203 from './nb203.svg'
import NB204 from './nb204.svg'
import NB205 from './nb205.svg'
import NB206 from './nb206.svg'
import nbRooms from '../../../../data/nbRooms'

function NB2({ onRoomClick = () => {}, highlightedRoom }: { onRoomClick?: (roomData: any) => void; highlightedRoom?: string | null }) {
    const floor2Rooms = nbRooms.filter(room => room.floor === 2);
    const restroomData = floor2Rooms.find(r => r.name === "New Building 2F Restroom")!;
    const nb201Data = floor2Rooms.find(r => r.name === "NB201")!;
    const nb202Data = floor2Rooms.find(r => r.name === "NB202")!;
    const nb203Data = floor2Rooms.find(r => r.name === "NB203")!;
    const nb204Data = floor2Rooms.find(r => r.name === "NB204")!;
    const nb205Data = floor2Rooms.find(r => r.name === "NB205")!;
    const nb206Data = floor2Rooms.find(r => r.name === "NB206")!;
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
                src={NB2_Base}
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
                    src={NB2_Restroom}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <div
                onClick={() => onRoomClick?.(nb201Data)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === nb201Data.name
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
                    src={NB201}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <div
                onClick={() => onRoomClick?.(nb202Data)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === nb202Data.name
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
                    src={NB202}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <div
                onClick={() => onRoomClick?.(nb203Data)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === nb203Data.name
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
                    src={NB203}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <div
                onClick={() => onRoomClick?.(nb204Data)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === nb204Data.name
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
                    src={NB204}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <div
                onClick={() => onRoomClick?.(nb205Data)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === nb205Data.name
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
                    src={NB205}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <div
                onClick={() => onRoomClick?.(nb206Data)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === nb206Data.name
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
                    src={NB206}
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

export default NB2