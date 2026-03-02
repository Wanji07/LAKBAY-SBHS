import NB1_Base from './nb-1st_floor-base.svg'
import NB1_Restroom from './nb-restroom.svg'
import NB101 from './nb101.svg'
import NB102 from './nb102.svg'
import NB103 from './nb103.svg'
import NB104 from './nb104.svg'
import NB105 from './nb105.svg'
import NB106 from './nb106.svg'
import nbRooms from '../../../../data/nbRooms'

function NB1({ onRoomClick = () => {}, highlightedRoom }: { onRoomClick?: (roomData: any) => void; highlightedRoom?: string | null }) {
    const floor1Rooms = nbRooms.filter(room => room.floor === 1);
    const restroomData = floor1Rooms.find(r => r.name === "New Building 1F Restroom")!;
    const nb101Data = floor1Rooms.find(r => r.name === "NB101")!;
    const nb102Data = floor1Rooms.find(r => r.name === "NB102")!;
    const nb103Data = floor1Rooms.find(r => r.name === "NB103")!;
    const nb104Data = floor1Rooms.find(r => r.name === "NB104")!;
    const nb105Data = floor1Rooms.find(r => r.name === "NB105")!;
    const nb106Data = floor1Rooms.find(r => r.name === "NB106")!;
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
            {/* Base */}
            <img
                src={NB1_Base}
                style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                pointerEvents: "none",
                }}
            />

            {/* Restroom */}
            <div
                onClick={() => onRoomClick?.(restroomData)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === restroomData.name
                        ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
                        : ""
                }`}
                style={{
                position: "absolute",
                top: "7%",
                left: "2.5%",
                height: "55%",
                zIndex: 2,
                }}
            >
                <img
                    src={NB1_Restroom}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            {/* NB101 */}
            <div
                onClick={() => onRoomClick?.(nb101Data)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === nb101Data.name
                        ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
                        : ""
                }`}
                style={{
                position: "absolute",
                top: "7%",
                left: "8%",
                height: "55%",
                zIndex: 3,
                }}
            >
                <img
                    src={NB101}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            {/* NB102 */}
            <div
                onClick={() => onRoomClick?.(nb102Data)}
                className={`absolute cursor-pointer transition-all ${
                    highlightedRoom === nb102Data.name
                        ? "bg-yellow-400/60 ring-4 ring-yellow-500 animate-pulse"
                        : ""
                }`}
                style={{
                position: "absolute",
                top: "7%",
                left: "20%",
                height: "55%",
                zIndex: 4,
                }}
            >
                <img
                    src={NB102}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
        <div
        onClick={() => onRoomClick?.(nb103Data)}
        className={`absolute cursor-pointer transition-all ${
            highlightedRoom === nb103Data.name
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
                src={NB103}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </div>

        <div
        onClick={() => onRoomClick?.(nb104Data)}
        className={`absolute cursor-pointer transition-all ${
            highlightedRoom === nb104Data.name
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
                src={NB104}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </div>

        <div
        onClick={() => onRoomClick?.(nb105Data)}
        className={`absolute cursor-pointer transition-all ${
            highlightedRoom === nb105Data.name
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
                src={NB105}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </div>

        <div
        onClick={() => onRoomClick?.(nb106Data)}
        className={`absolute cursor-pointer transition-all ${
            highlightedRoom === nb106Data.name
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
                src={NB106}
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

export default NB1