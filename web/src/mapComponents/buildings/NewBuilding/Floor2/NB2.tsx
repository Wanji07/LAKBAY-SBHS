import NB2_Base from './nb-2nd_floor-base.svg'
import NB2_Restroom from './nb-restroom-2.svg'
import NB201 from './nb201.svg'
import NB202 from './nb202.svg'
import NB203 from './nb203.svg'
import NB204 from './nb204.svg'
import NB205 from './nb205.svg'
import NB206 from './nb206.svg'

function NB2() {
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

            <img
                src={NB2_Restroom}
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
                src={NB201}
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
                src={NB202}
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
                src={NB203}
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
                src={NB204}
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
                src={NB205}
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
                src={NB206}
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

export default NB2