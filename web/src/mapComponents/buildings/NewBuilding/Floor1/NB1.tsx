import NB1_Base from './nb-1st_floor-base.svg'
import NB1_Restroom from './nb-restroom.svg'
import NB101 from './nb101.svg'
import NB102 from './nb102.svg'
import NB103 from './nb103.svg'
import NB104 from './nb104.svg'
import NB105 from './nb105.svg'
import NB106 from './nb106.svg'

function NB1() {
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
            <img
                src={NB1_Restroom}
                className="cursor-pointer"
                style={{
                position: "absolute",
                top: "7%",
                left: "2.5%",
                height: "55%",
                zIndex: 2,
                }}
            />

            {/* NB101 */}
            <img
                src={NB101}
                className="cursor-pointer"
                style={{
                position: "absolute",
                top: "7%",
                left: "8%",
                height: "55%",
                zIndex: 3,
                }}
            />

            {/* NB102 */}
            <img
                src={NB102}
                className="cursor-pointer"
                style={{
                position: "absolute",
                top: "7%",
                left: "20%",
                height: "55%",
                zIndex: 4,
                }}
            />
        <img
        src={NB103}
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
        src={NB104}
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
        src={NB105}
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
        src={NB106}
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

export default NB1