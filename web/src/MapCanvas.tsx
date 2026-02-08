import './MapCanvas.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mapFrame from './mapAssets/map-frame.png';
import Cafeteria1 from './mapComponents/Cafeteria1';



function MapCanvas() {
    const navigate = useNavigate();
    
    useEffect(() => {
        const sonnyBuilding1 = document.getElementById('sonny-building-1');
        const sonnyBuilding2 = document.getElementById('sonny-building-2');
        const helbertBuilding = document.getElementById('helbert-building');
        const coveredCourt = document.getElementById('covered-court');
        const newBuilding = document.getElementById('new-building');
        const mathayBuilding = document.getElementById('mathay-building');

        const handleSB1Click = () => {
            navigate('/map/sb1');
        };

        const handleSB2Click = () => {
            navigate('/map/sb2')
        }

        const handleHBClick = () => {
            navigate('/map/hb')
        }

        const handleNBClick = () => {
            navigate('/map/nb')
        }

        const handleCourtClick = () => {
            navigate('/map/court')
        }
        
        const handleMathayClick = () => {
            navigate('/map/mathay')
        }

        sonnyBuilding1?.addEventListener('click', handleSB1Click);
        sonnyBuilding2?.addEventListener('click', handleSB2Click);
        helbertBuilding?.addEventListener('click', handleHBClick);
        coveredCourt?.addEventListener('click', handleCourtClick);
        newBuilding?.addEventListener('click', handleNBClick);
        mathayBuilding?.addEventListener('click', handleMathayClick);

        return () => {
            sonnyBuilding1?.removeEventListener('click', handleSB1Click);
            sonnyBuilding2?.removeEventListener('click', handleSB2Click);
            helbertBuilding?.removeEventListener('click', handleHBClick);
            coveredCourt?.removeEventListener('click', handleCourtClick);
            newBuilding?.removeEventListener('click', handleNBClick);
            mathayBuilding?.removeEventListener('click', handleMathayClick);
        };
    }, []);

    return(
        <>
            <div id="container" className="map-container">
                <Cafeteria1 />

            </div>
        </>
    )
}

export default MapCanvas