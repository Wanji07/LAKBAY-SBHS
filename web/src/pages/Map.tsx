import '../index.css';
import HeaderLogoLight from '../assets/HeaderLogoLight.png';
import FooterLogo from '../assets/HeaderLogo.png'
import FacebookLogoLight from '../assets/facebookLogoLight.png';
import FacebookLogoDark from '../assets/facebookLogoDark.png';
import GalleryIcon from '../assets/galleryIcon.png';
import MapCanvas from '../MapCanvas';
import SearchIcon from '../assets/searchRoomIcon.png';
import Arrow from '../assets/Arrow.png';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'
import Footer from '../Footer'

function Map() {
    return(
        <>
        <div id="container">
            <Navbar />
            <main className="grid grid-cols-[1fr_2fr] h-screen text-[#fefeff]" >
                <aside className="bg-[#1c4587] max-w-[40vh] flex flex-col gap-5 px-5 pt-5" style={{boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.5)'}}>
                    <h1 className="font-bold text-2xl">Explore Campus</h1>
                    <div id="searchInputContainer" className="flex items-center bg-[#4a6fb1] rounded-sm border border-[#1c4587] focus-within:ring-2 focus-within:ring-[#1c4587] focus-within:border-transparent overflow-hidden">
                        <img src={SearchIcon} className="h-5 w-5 ml-3 opacity-80" />
                        <input type="text" placeholder="Search locations..." className="bg-transparent text-white font-medium px-3 py-2 flex-1 focus:outline-none placeholder:text-white placeholder:opacity-70" />
                    </div>
                    <div id="categoryContainer" className="flex flex-col gap-2">
                        <h1 className="font-semibold text-[#fefeff]">FILTER BY CATEGORY</h1>
                        <select name="buildings" id="buildings" className="bg-[#4a6fb1] text-white font-medium px-3 py-2 rounded-sm border border-[#1c4587] focus:outline-none focus:ring-2 focus:ring-[#1c4587] focus:border-transparent cursor-pointer">
                            <option value="general" className="bg-white text-[#1c4587] font-medium py-2">General</option>
                            <option value="classrooms" className="bg-white text-[#1c4587] font-medium py-2">Classrooms</option>
                            <option value="faculties" className="bg-white text-[#1c4587] font-medium py-2">Faculties</option>
                            <option value="laboratories" className="bg-white text-[#1c4587] font-medium py-2">Laboratories</option>
                            <option value="comfort-rooms" className="bg-white text-[#1c4587] font-medium py-2">Comfort Rooms</option>
                        </select>
                    </div>
                    <div id="quickLocateContainer">
                        <h1 className="font-semibold">QUICK LINKS</h1>
                        <ul className="flex flex-col gap-2 mt-2">
                            <li className="flex items-center gap-2 text-white hover:text-[#1e68df] transition-colors cursor-pointer">
                                <img src={Arrow} className="h-4" />
                                <Link to="/" className="hover:underline">Principal's Office</Link>
                            </li>
                            <li className="flex items-center gap-2 text-white hover:text-[#1e68df] transition-colors cursor-pointer">
                                <img src={Arrow} className="h-4" />
                                <Link to="/" className="hover:underline">Registrar's Office</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="border-t border-[#4a6fb1] opacity-60 my-2" />
                    <div id="missingRoomContainer" className="flex flex-col gap-2">
                        <h1 className="font-semibold flex justify-center">Missing Information?</h1>
                        <button className="bg-[#4a6fb1] text-white font-medium px-3 py-2 rounded-sm border border-[#1c4587] hover:bg-[#1e68df] focus:outline-none focus:ring-2 focus:ring-[#1c4587] focus:border-transparent transition-colors cursor-pointer">
                            Report Here.
                        </button>
                    </div>
                </aside>
                <section className="relative">
                    <div id="mapContainer" className="flex justify-center items-center w-6xl h-auto mt-50">
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