import { useEffect, useState } from 'react'

function SelectedLocationCard() {
    const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
    const [buildingInfo, setBuildingInfo] = useState({
        name: '',
        status: '',
        floor: ''
    });

    useEffect(() => {
        const buildingElements = [
            { id: 'SB1', name: 'School Building 1', status: 'Active', floor: '3 Floors' },
            { id: 'SB2', name: 'School Building 2', status: 'Active', floor: '3 Floors' },
            { id: 'hb-building', name: 'HB Building', status: 'Active', floor: '3 Floors' },
            { id: 'covered-court', name: 'Covered Court', status: 'Active', floor: 'Ground' },
            { id: 'new-building', name: 'New Building', status: 'Active', floor: '4 Floors' },
            { id: 'mathay-building', name: 'Mathay Building', status: 'Active', floor: '3 Floors' }
        ];

        const handleBuildingClick = (event: Event) => {
            const target = event.target as Element;
            
            let buildingId = target.id;
            let currentElement: Element | null = target;
            while (!buildingId && currentElement?.parentElement) {
                currentElement = currentElement.parentElement;
                buildingId = currentElement.id;
            }
            
            const building = buildingElements.find(b => b.id === buildingId);
            if (building) {
                setSelectedBuilding(buildingId);
                setBuildingInfo({
                    name: building.name,
                    status: building.status,
                    floor: building.floor
                });
            }
        };


        buildingElements.forEach(building => {
            const element = document.getElementById(building.id);
            if (element) {
                element.addEventListener('click', handleBuildingClick);
                element.style.cursor = 'pointer';
                
                if (building.id === 'mathay-building') {
                    const paths = element.querySelectorAll('path');
                    paths.forEach(path => {
                        path.addEventListener('click', handleBuildingClick);
                        (path as SVGPathElement).style.cursor = 'pointer';
                    });
                }
            }
        });

        return () => {
            buildingElements.forEach(building => {
                const element = document.getElementById(building.id);
                if (element) {
                    element.removeEventListener('click', handleBuildingClick);
                    
                    if (building.id === 'mathay-building') {
                        const paths = element.querySelectorAll('path');
                        paths.forEach(path => {
                            path.removeEventListener('click', handleBuildingClick);
                        });
                    }
                }
            });
        };
    }, []);


    return (
        <>
            {selectedBuilding && (
                <div id="mapInformationContainer" className="absolute top-30 right-30 bg-[#1c4587] text-white p-4 rounded-lg shadow-lg border border-[#4a6fb1] min-w-62.5 backdrop-blur-sm">
                    <h1 className="font-semibold text-sm text-[#4a6fb1] mb-1">SELECTED LOCATION</h1>
                    <h2 className="font-bold text-lg mb-2">{buildingInfo.name}</h2>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="flex justify-between">
                            <span className="text-[#fefeffb3]">Status:</span>
                            <span className="font-medium">{buildingInfo.status}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#fefeffb3]">Floor:</span>
                            <span className="font-medium">{buildingInfo.floor}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SelectedLocationCard