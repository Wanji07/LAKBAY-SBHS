import Base from './SB2_4thFloor_Base.svg'
import SB2_401 from './SB2_401.svg'
import SB2_402 from './SB2_402.svg'
import SB2_403 from './SB2_403.svg'
import SB2_404 from './SB2_404.svg'

function SB2_Floor4({ onRoomClick = () => {} }: { onRoomClick?: (roomData: any) => void }) {
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

            <img
                src={SB2_401}
                className="cursor-pointer"
                onClick={() => onRoomClick({ name: "SB2 401", type: "CLASSROOM" })}
                style={{
                    position: 'absolute',
                    top: '9%',
                    left: '4%',
                    height: '55%',
                    zIndex: 2
                }}
            />

            <img
                src={SB2_402}
                className="cursor-pointer"
                onClick={() => onRoomClick({ name: "SB2 402", type: "CLASSROOM" })}
                style={{
                    position: 'absolute',
                    top: '9%',
                    left: '22%',
                    height: '55%',
                    zIndex: 3
                }}
            />

            <img
                src={SB2_403}
                className="cursor-pointer"
                onClick={() => onRoomClick({ name: "SB2 403", type: "CLASSROOM" })}
                style={{
                    position: 'absolute',
                    top: '9%',
                    right: '23%',
                    height: '55%',
                    zIndex: 4
                }}
            />

            <img
                src={SB2_404}
                className="cursor-pointer"
                onClick={() => onRoomClick({ name: "SB2 404", type: "CLASSROOM" })}
                style={{
                    position: 'absolute',
                    top: '9%',
                    right: '5%',
                    height: '55%',
                    zIndex: 5
                }}
            />
        </div>
    )
}

export default SB2_Floor4