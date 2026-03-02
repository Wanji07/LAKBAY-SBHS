function MapAside() {
    return(
        <>
            <aside className="w-[350px] min-h-[400px] bg-white rounded-lg shadow-lg flex flex-col p-6 gap-4 border border-gray-200">
                <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-2">
                <span className="font-bold text-lg text-blue-900">INFO PANEL</span>
                <button className="text-gray-400 hover:text-red-500 text-xl font-bold" aria-label="Close Info Panel">×</button>
                </div>
                <div className="border-b border-gray-200 pb-2 mb-2">
                <span className="font-semibold text-blue-800">Mathay Building</span>
                </div>
                <div className="mb-2">
                <div className="text-sm text-gray-700"><span className="font-semibold">Room:</span> Principal’s Office</div>
                <div className="text-sm text-gray-700"><span className="font-semibold">Type:</span> Administrative Office</div>
                <div className="text-sm text-gray-700"><span className="font-semibold">Strand:</span> N/A</div>
                <div className="text-sm text-gray-700"><span className="font-semibold">Adviser:</span> N/A</div>
                </div>
                <div className="border-b border-gray-200 pb-2 mb-2">
                <div className="text-sm text-gray-700 font-semibold mb-1">Description:</div>
                <div className="text-sm text-gray-600">The Principal’s Office serves as the main administrative center of the school. It is where official meetings, academic planning, and important school decisions take place. <br /><br /> Students, parents, and faculty may visit the office for concerns, approvals, and formal consultations.</div>
                </div>
                <div>
                <div className="text-sm text-gray-700 font-semibold mb-1">Facilities:</div>
                <ul className="list-disc list-inside text-sm text-gray-600">
                    <li>Office desk and seating area</li>
                    <li>Meeting table for conferences</li>
                    <li>Air-conditioned</li>
                </ul>
                </div>
                <div className="flex gap-3 mt-6">
                <button className="flex-1 px-4 py-2 bg-[#1c4487] hover:bg-[#4a6eb1] text-white rounded shadow transition-colors duration-200 font-semibold">
                    HIGHLIGHT ROOM
                </button>
                <button className="flex-1 px-4 py-2 bg-white hover:bg-[#1c4487] hover:text-white text-[#1c4487] rounded shadow transition-colors duration-200 font-semibold">
                    GET WRITTEN DIRECTIONS
                </button>
                </div>
            </aside>
        </>
    )
}

export default MapAside