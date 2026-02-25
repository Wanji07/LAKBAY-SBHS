import Base from './SB2_3rdFloor_Base.svg'
import SB2_301 from './SB2_301.svg'
import SB2_302 from './SB2_302.svg'
import SB2_303 from './SB2_303.svg'
import SB2_304 from './SB2_304.svg'

function SB2_Floor3({ onRoomClick = () => {} }: { onRoomClick?: (roomData: any) => void }) {
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

                <img
                    src={SB2_301}
                    className="cursor-pointer"
                    onClick={() =>
                        onRoomClick({
                            name: "SB2 301",
                            type: "CLASSROOM"
                        })
                    }
                    style={{
                        position: 'absolute',
                        top: '9%',
                        left: '4%',
                        height: '55%',
                        zIndex: 2
                    }}
                />

                <img
                    src={SB2_302}
                    className="cursor-pointer"
                    onClick={() =>
                        onRoomClick({
                            name: "SB2 302",
                            type: "CLASSROOM"
                        })
                    }
                    style={{
                        position: 'absolute',
                        top: '9%',
                        left: '22%',
                        height: '55%',
                        zIndex: 3
                    }}
                />

                <img
                    src={SB2_303}
                    className="cursor-pointer"
                    onClick={() =>
                        onRoomClick({
                            name: "SB2 303",
                            type: "CLASSROOM"
                        })
                    }
                    style={{
                        position: 'absolute',
                        top: '9%',
                        right: '23%',
                        height: '55%',
                        zIndex: 4
                    }}
                />

                <img
                    src={SB2_304}
                    className="cursor-pointer"
                    onClick={() =>
                        onRoomClick({
                            name: "SB2 304",
                            type: "CLASSROOM"
                        })
                    }
                    style={{
                        position: 'absolute',
                        top: '9%',
                        right: '5%',
                        height: '55%',
                        zIndex: 5
                    }}
                />
            </div>
        </>
    )
}

export default SB2_Floor3