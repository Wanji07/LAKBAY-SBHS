import '../index.css';
import MapCanvas from '../MapCanvas';
import Navbar from '../Navbar'
import Footer from '../Footer'

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

                    <button className="text-left px-3 py-2 rounded-md hover:bg-blue-50 text-sm text-gray-700 transition">
                    Guidance Office
                    </button>

                    <button className="text-left px-3 py-2 rounded-md hover:bg-blue-50 text-sm text-gray-700 transition">
                    ICT Laboratory
                    </button>

                    <button className="text-left px-3 py-2 rounded-md hover:bg-blue-50 text-sm text-gray-700 transition">
                    Senior High Faculty Room
                    </button>
                </div>

                <div className="border-t border-gray-200 pt-4"></div>

                <div className="flex flex-col gap-3">
                    <button className="w-full px-4 py-2 bg-[#1c4487] hover:bg-[#4a6eb1] text-white rounded shadow transition-colors duration-200 font-semibold text-sm">
                    VIEW CAMPUS DIRECTORY
                    </button>

                    <button className="w-full px-4 py-2 bg-white border border-[#1c4487] hover:bg-[#1c4487] hover:text-white text-[#1c4487] rounded shadow transition-colors duration-200 font-semibold text-sm">
                    SUBMIT LOCATION FEEDBACK
                    </button>
                </div>
                </aside>
                <section className="relative">
                    <div id="mapContainer" className="absolute top-1/2 left-1/3-translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center">
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