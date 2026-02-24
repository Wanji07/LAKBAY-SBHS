import HeaderLogoLight from './assets/HeaderLogoLight.png';
import FacebookLogoDark from './assets/facebookLogoDark.png';
import GalleryIcon from './assets/galleryIcon.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Navbar() {

    const [isOpen, setOpen] = useState(false);
    const toggle = () => setOpen((v) => !v)
    const close = () => setOpen(false)

    return(
<>
    <header className="w-full bg-[#fefeff] text-[#546e7b]">
    <nav 
      className="flex items-center justify-between px-4 py-3 lg:justify-around lg:pb-1"
      style={{ boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.1)' }}
    >
      <Link to="/home">
        <img 
          className="h-[50px] w-auto lg:h-[60px]" 
          src={HeaderLogoLight} 
          alt="Lakbay SBHS logo" 
        />
      </Link>
      <ul 
        className="hidden lg:flex flex-row justify-center gap-[3em] text-lg"
        id="navBtnContainer"
      >
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/buildings">Buildings & Faculties</Link></li>
        <li><Link to="/404">About</Link></li>
      </ul>
      <ul 
        className="hidden lg:flex flex-row items-center gap-8"
        id="navBtnContainer2"
      >
        <li>
          <Link to="/404" className="flex items-center gap-2">
            <img src={GalleryIcon} className="h-6 w-auto filter-navy" />
            <h2 className="font-medium text-[#1c4587]">Gallery</h2>
          </Link>
        </li>

        <li>
          <Link to="/404" className="flex items-center gap-2">
            <img src={FacebookLogoDark} className="h-6 w-auto" />
            <h2 className="font-medium text-[#1c4587]">Visit our Page</h2>
          </Link>
        </li>
      </ul>

      <button className="lg:hidden text-2xl">
        ☰
      </button>

    </nav>
  </header>
</>
    )
}

export default Navbar