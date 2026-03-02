import './MapCanvas.css';
import { useNavigate } from 'react-router-dom';
import Cafeteria1 from './mapAssets/cafeteria-one.svg';
import Cafeteria2 from './mapAssets/cafeteria-two.svg';
import HelbertBuilding from './mapAssets/helbert-building.svg';
import MathayBuilding from './mapAssets/mathay-building.svg';
import MiscBuilding1 from './mapAssets/misc-building-1.svg';
import MiscBuilding2 from './mapAssets/misc-building-2.svg';
import MiscBuilding3 from './mapAssets/misc-building-3.svg';
import NewBuilding from './mapAssets/new-building.svg';
import SonnyBuilding1 from './mapAssets/sonny-building-1.svg';
import SonnyBuilding2 from './mapAssets/sonny-building-2.svg';
import CoveredCourt from './mapAssets/covered-court.svg';
import MapFrame from './mapAssets/base.svg';

function MapCanvas() {
    const navigate = useNavigate();

    return(
        <div
            style={{
                position: "relative",
                width: "120%",    
                maxWidth: "1932px", 
                aspectRatio: "1611 / 558",
                margin: "0 auto",
                transform: "scale(1.2)",
                transformOrigin: "top left"
            }}
        >
            <img
                src={MapFrame}
                alt="Campus Map"
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
                src={SonnyBuilding1}
                alt="Sonny Building 1"
                onClick={() => navigate('/map/sb1')}
                style={{
                    position: "absolute",
                    top: "24%",
                    left: "33%",
                    height: "39%",
                    cursor: "pointer",
                    zIndex: 2
                }}
            />
            <img
                src={SonnyBuilding2}
                alt="Sonny Building 2"
                onClick={() => navigate('/map/sb2')}
                style={{
                    position: "absolute",
                    top: "62.5%",
                    left: "37.2%",
                    height: "12%",
                    cursor: "pointer",
                    zIndex: 3
                }}
            />
            <img
                src={HelbertBuilding}
                alt="Helbert Building"
                onClick={() => navigate('/map/hb')}
                style={{
                    position: "absolute",
                    top: "10.4%",
                    right: "20.4%",
                    height: "29%",
                    cursor: "pointer",
                    zIndex: 4
                }}
            />
            <img
                src={NewBuilding}
                alt="New Building"
                onClick={() => navigate('/map/nb')}
                style={{
                    position: "absolute",
                    top: "17%",
                    right: "40%",
                    height: "62.4%",
                    cursor: "pointer",
                    zIndex: 5
                }}
            />
            <img
                src={CoveredCourt}
                alt="Covered Court"
                style={{
                    position: "absolute",
                    top: "32%",
                    left: "37%",
                    height: "31%",
                    zIndex: 6
                }}
            />
            <img
                src={MathayBuilding}
                alt="Mathay Building"
                onClick={() => navigate('/map/mathay')}
                style={{
                    position: "absolute",
                    top: "13.5%",
                    left: "36.4%",
                    height: "27%",
                    cursor: "pointer",
                    zIndex: 7
                }}
            />
            <img
                src={Cafeteria1}
                alt="Cafeteria 1"
                style={{
                    position: "absolute",
                    bottom: "27.9%",
                    left: "29.4%",
                    height: "8.5%",
                    zIndex: 1
                }}
            />
            <img
                src={Cafeteria2}
                alt="Cafeteria 2"
                style={{
                    position: "absolute",
                    bottom: "29.2%",
                    left: "22.4%",
                    height: "10.5%",
                    zIndex: 1
                }}
            />
            <img
                src={MiscBuilding1}
                alt="Misc Building 1"
                style={{
                    position: "absolute",
                    top: "13%",
                    left: "27.6%",
                    height: "9.8%",
                    zIndex: 1
                }}
            />
            <img
                src={MiscBuilding2}
                alt="Misc Building 2"
                style={{
                    position: "absolute",
                    top: "22%",
                    left: "27.6%",
                    height: "39%",
                    zIndex: 1
                }}
            />
            <img
                src={MiscBuilding3}
                alt="Misc Building 3"
                style={{
                    position: "absolute",
                    top: "34%",
                    left: "23.5%",
                    height: "25%",
                    zIndex: 1
                }}
            />
        </div>
    );
}

export default MapCanvas;