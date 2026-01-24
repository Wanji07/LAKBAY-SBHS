import './MapCanvas.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function MapCanvas() {
    useEffect(() => {
        const SB1 = document.getElementById('SB1');
        const SB2 = document.getElementById('SB2');
        const hb_building = document.getElementById('hb-building');
        const covered_court = document.getElementById('covered-court');
        const new_building = document.getElementById('new-building');
        const mathay_building = document.getElementById('mathay-building');

        const handleSB1Click = () => {
            console.log("SB1 Clicked!");
        };

        const handleSB2Click = () => {
            console.log("SB2 Clicked!");
        }

        const handleHBClick = () => {
            console.log("HB Building Clicked!");
        }

        const handleNBClick = () => {
            console.log("New Building Clicked!");
        }

        const handleCourtClick = () => {
            console.log("Covered Court Clicked!");
        }
        
        const handleMathayClick = () => {
            console.log("Mathay Building Clicked!")
        }

        SB1?.addEventListener('click', handleSB1Click);
        SB2?.addEventListener('click', handleSB2Click);
        hb_building?.addEventListener('click', handleHBClick);
        covered_court?.addEventListener('click', handleCourtClick);
        new_building?.addEventListener('click', handleNBClick);
        mathay_building?.addEventListener('click', handleMathayClick);

        return () => {
            SB1?.removeEventListener('click', handleSB1Click);
            SB2?.removeEventListener('click', handleSB2Click);
            hb_building?.removeEventListener('click', handleHBClick);
            covered_court?.removeEventListener('click', handleCourtClick);
            new_building?.removeEventListener('click', handleNBClick);
            mathay_building?.removeEventListener('click', handleMathayClick);
        };
    }, []);

    return(
        <>
            <div id="container">
                <svg className="h-screen w-full" viewBox="0 0 2520 2477" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="sbhs-frame">
                        <path id="hb-building" d="M971 1172L836.5 1208.5L793 1076L701.5 1106L674.5 1044L628.5 1058L434.5 427.5L512 402.5L466.5 222L658.5 172L738.5 402.5L658.5 443.5L720 628.5L786 608L816 711L720 752L800 966.5L898 934.5L971 1172Z" fill="#1C4587" stroke="black"/>
                        <path id="covered-court" d="M1102.5 1866.5H1086.5V1916L1024 1922.5L1039 2083H1086.5L1095 2171L1532 2131L1493.5 1775L1102.5 1811.5V1866.5Z" fill="#1C4587" stroke="black"/>
                        <path id="new-building" d="M835.256 1522.63L842.741 1480.71L1646.65 1569.05H1662.62V1600H1752V1450.76H1685.08V1407.83L1454.03 1380.88V1397.85L1135.16 1355.92V1344.44L757.909 1311V1365.91H727.968L712 1513.15L835.256 1522.63Z" fill="#1C4587" stroke="black"/>
                        <path id="SB2" d="M1704.5 2114L1537.5 2132.5L1481.5 1588.5L1658 1574.5L1704.5 2114Z" fill="#1C4587" stroke="black"/>
                        <path id="SB1" d="M1571 2160.5C1385.83 2182.67 999.8 2227.4 937 2229L960.5 2404.5L1606.5 2335.5L1571 2160.5Z" fill="#1C4587" stroke="black" style={{cursor: 'pointer'}}/>
                        <g id="mathay-building" filter="url(#filter0_d_13_2)">
                            <path d="M1006.5 2166.5L841 2210.5L771 1544.5L948.5 1518.5L1006.5 2166.5Z" fill="#1C4587"/>
                            <path d="M1006.5 2166.5L841 2210.5L771 1544.5L948.5 1518.5L1006.5 2166.5Z" stroke="black"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_13_2" x="766.453" y="1517.93" width="244.583" height="701.205" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_2"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_2" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </div>
        </>
    )
}

export default MapCanvas