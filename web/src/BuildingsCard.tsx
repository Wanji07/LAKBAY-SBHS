import buildingData from './data/buildings.json';
import NewBuilding from './assets/NewBuilding.jpg';
import SonnyBuilding1 from './assets/SonnyBuilding1.jpg';
import SonnyBuilding2 from './assets/SonnyBuilding2.jpg';
import HelbertBuilding from './assets/HelbertBuilding.jpg';
import MathayBuilding from './assets/MathayBuilding.jpg';
import CoveredCourt from './assets/CoveredCourt.jpg';

const buildingImages: Record<number, string> = {
    1: NewBuilding,
    2: SonnyBuilding1,
    3: SonnyBuilding2,
    4: HelbertBuilding,
    5: MathayBuilding,
    6: CoveredCourt
};

function BuildingsCard() {
    return (
        <>
            {
                buildingData.map( building => {
                    return (
                    <div key={building.id} className="group relative max-w-sm mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-50">
                        <div className="relative overflow-hidden">
                            <img 
                                src={buildingImages[building.id]}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                                alt={building.buildingName}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-6 pb-16">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {building.tags.map((tag, index) => (
                                    <span key={index} className="px-2.5 py-1 bg-linear-to-r from-[#4a6fb1] to-[#1c4587] text-white text-xs font-medium rounded-full shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-bold text-[#1c4587] mb-3 group-hover:text-[#4a6fb1] transition-colors duration-300">
                                {building.buildingName}
                            </h3>
                            
                            <p className="text-[#546e7b] text-sm leading-relaxed line-clamp-3">
                                {building.description}
                            </p>
                        </div>
                        
                        <div className="absolute bottom-4 left-6 right-6">
                            <button className="w-full px-4 py-2.5 bg-linear-to-r from-[#4a6fb1] to-[#1c4587] text-white text-sm font-semibold rounded-lg hover:from-[#1c4587] hover:to-[#4a6fb1] transition-all duration-300 shadow-md hover:shadow-lg hover:cursor-not-allowed transform hover:scale-105">
                                View Details
                            </button>
                        </div>
                    </div>
                    )
                })
            }
        </>
    )
};

export default BuildingsCard