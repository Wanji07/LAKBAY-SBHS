import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

type Room = {
  name: string
  type: string
  strand?: string
  adviser?: string
  description?: string
  facilities?: string[]
}

type MapAsideProps = {
  isOpen: boolean
  selectedRoom: Room | null
  onClose: () => void
  onHighlight: (roomName: string) => void
  onViewImage?: () => void
}

function MapAside({ isOpen, selectedRoom, onClose, onHighlight, onViewImage }: MapAsideProps) {

  if (!isOpen || !selectedRoom) return null;

  return (
    <aside className="w-full min-h-screen bg-white rounded-lg shadow-lg flex flex-col p-6 gap-4 border border-gray-200">
      
      <div className="flex items-center justify-between border-b border-gray-300 pb-2 mb-2">
        <span className="font-bold text-lg text-blue-900">INFO PANEL</span>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>
      </div>

      <div className="border-b border-gray-200 pb-2 mb-2">
        <span className="font-semibold text-blue-800">
          {selectedRoom.type}
        </span>
      </div>

      <div className="mb-2">
        <div className="text-sm text-gray-700">
          <span className="font-semibold">Room:</span> {selectedRoom.name}
        </div>

        <div className="text-sm text-gray-700">
          <span className="font-semibold">Type:</span> {selectedRoom.type}
        </div>

        <div className="text-sm text-gray-700">
          <span className="font-semibold">Strand:</span> {selectedRoom.strand ?? "N/A"}
        </div>

        <div className="text-sm text-gray-700">
          <span className="font-semibold">Adviser:</span> {selectedRoom.adviser ?? "N/A"}
        </div>
      </div>

      {selectedRoom.description && (
        <div className="border-b border-gray-200 pb-2 mb-2">
          <div className="text-sm text-gray-700 font-semibold mb-1">
            Description:
          </div>
          <div className="text-sm text-gray-600">
            {selectedRoom.description}
          </div>
        </div>
      )}

      {selectedRoom.facilities && (
        <div>
          <div className="text-sm text-gray-700 font-semibold mb-1">
            Facilities:
          </div>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {selectedRoom.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-3 mt-6">
        <button onClick={() => onHighlight(selectedRoom.name)} className="flex-1 px-4 py-2 bg-[#1c4487] hover:bg-[#4a6eb1] text-white rounded shadow transition-colors duration-200 font-semibold">
          HIGHLIGHT ROOM
        </button>
        <button className="flex-1 px-4 py-2 bg-white hover:bg-[#1c4487] hover:text-white text-[#1c4487] rounded shadow transition-colors duration-200 font-semibold">
          VIEW GALLERY
        </button>
      </div>
    </aside>
  );
}

export default MapAside;