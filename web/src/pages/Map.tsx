import '../index.css';
import MapCanvas from '../MapCanvas';
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import CampusTitle from '../assets/Campus Map.png'

function Map() {


    return(
        <>
        <div id="container">
            <Navbar />
            <main className="grid grid-cols-[2fr_10fr] h-screen text-[#fefeff]">
                <aside className="w-full min-h-screen bg-white rounded-lg shadow-lg flex flex-col p-6 gap-6 border border-gray-200">
                <div className="flex items-center justify-between border-b border-gray-300 pb-3">
                    <span className="font-bold text-lg text-blue-900">
                    CAMPUS NAVIGATOR
                    </span>
                </div>

                <div className="flex flex-col gap-2 border-t border-gray-200 pt-4">
                    <span className="text-sm font-semibold text-gray-700">
                    Frequently Accessed
                    </span>

                    <Link to="/map/sb1/floor/3?room=Guidance Office" className="text-left px-3 py-2 rounded-md hover:bg-blue-50 text-sm text-gray-700 transition">
                    Guidance Office
                    </Link>

                    <Link to="/map/mathay/floor/1?room=Principal's Office" className="text-left px-3 py-2 rounded-md hover:bg-blue-50 text-sm text-gray-700 transition">
                    Principal's Office
                    </Link>

                    <Link to="/map/mathay/floor/2?room=SHS Faculty" className="text-left px-3 py-2 rounded-md hover:bg-blue-50 text-sm text-gray-700 transition">
                    Senior High Faculty Room
                    </Link>
                </div>

                <div className="border-t border-gray-200 pt-4"></div>

                <div className="flex flex-col gap-2 p-4 rounded-lg shadow-lg">
                    <span className="text-sm font-semibold text-gray-700">Building Legend</span>
                    <div className="text-xs text-gray-600 space-y-2">
                        <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#4a6eb1] border-2 border-white flex items-center justify-center text-white text-s font-bold shadow-md">1</div> Herbert Building</div>
                        <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#4a6eb1] border-2 border-white flex items-center justify-center text-white text-s font-bold shadow-md">2</div> New Building</div>
                        <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#4a6eb1] border-2 border-white flex items-center justify-center text-white text-s font-bold shadow-md">3</div> Sonny Building 2</div>
                        <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#4a6eb1] border-2 border-white flex items-center justify-center text-white text-s font-bold shadow-md">4</div> Covered Court</div>
                        <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#4a6eb1] border-2 border-white flex items-center justify-center text-white text-s font-bold shadow-md">5</div> Mathay Building</div>
                        <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#4a6eb1] border-2 border-white flex items-center justify-center text-white text-s font-bold shadow-md">6</div> Sonny Building 1</div>
                        <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#4a6eb1] border-2 border-white flex items-center justify-center text-white text-s font-bold shadow-md">7</div> Canteen Building 1</div>
                        <div className="flex items-center gap-2"><div className="w-7 h-7 rounded-full bg-[#4a6eb1] border-2 border-white flex items-center justify-center text-white text-s font-bold shadow-md">8</div> Canteen Building 2</div>
                        <div className="flex items-center gap-2"><div className="w-11 h-7 rounded-full bg-[#4a6eb1] border-2 border-white flex items-center justify-center text-white text-s font-bold shadow-md">9-11</div> Miscellaneous Buildings</div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4"></div>

                <div className="flex flex-col gap-3">
                    <button className="w-full px-4 py-2 bg-[#1c4487] hover:bg-[#4a6eb1] text-white rounded shadow transition-colors duration-200 font-semibold text-sm">
                    <Link to="/glossary">VIEW CAMPUS GLOSSARY (LOCATIONS)</Link>
                    </button>

                    <button className="w-full px-4 py-2 bg-white border border-[#1c4487] hover:bg-[#1c4487] hover:text-white text-[#1c4487] rounded shadow transition-colors duration-200 font-semibold text-sm">
                    SUBMIT LOCATION FEEDBACK
                    </button>
                </div>
                </aside>
                <section className="relative flex-1">
                    <div id="mapContainer" className="w-full h-full flex justify-center items-center" style={{
                        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                        backgroundColor: '#fafafa'
                    }}>
                        <img src={CampusTitle} className="absolute top-1/7 left-10 transform max-w-[90%] max-h-[90%] object-contain" />
                        <MapCanvas />
                    </div>
                </section>
                </main>
            <Footer />
        </div>
    </>
    )
}

export default Map