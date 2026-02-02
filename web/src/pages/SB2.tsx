import '../index.css';
import HeaderLogoLight from '../assets/HeaderLogoLight.png';
import FooterLogo from '../assets/HeaderLogo.png'
import FacebookLogoLight from '../assets/facebookLogoLight.png';
import FacebookLogoDark from '../assets/facebookLogoDark.png';
import GalleryIcon from '../assets/galleryIcon.png';
import { Link } from 'react-router-dom';

function SB2() {
    return (
        <>
              <div id="container">
        <header className="p-1  bg-[#fefeff] text-[#546e7b]">
          <nav className="pb-1 flex flex-row items-center justify-around" style={{boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.1)'}}>
            <Link to="/home"><img className="h-[60px] w-auto" src={HeaderLogoLight} alt="Lakbay SBHS logo" /></Link>
            <ul className="-m-6.25 flex flex-row justify-center gap-[3em] text-lg" id="navBtnContainer">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/map">Map</Link>
              </li>
              <li>
                <Link to="/buildings">Buildings & Faculties</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
            <ul className="flex flex-row items-center gap-8" id="navBtnContainer2">
              <li>
                <Link to="/" className="flex flex-row items-center gap-2">
                  <img src={GalleryIcon} className="h-6 w-auto filter-navy" />
                  <h2 className="font-medium text-[#1c4587]">Gallery</h2>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex flex-row items-center gap-2">
                  <img src={FacebookLogoDark} className="h-6 w-auto" />
                  <h2 className="font-medium text-[#1c4587]">Visit our Page</h2>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content will go here */}

        <footer id="footerContainer" className="mt-20 flex flex-row justify-around items-center p-5 bg-[#4a6fb1] text-[#fefeff]" style={{boxShadow: '0px -2px 8px 0px rgba(0, 0, 0, 0.1)'}}>
          <section id="footerLeftContainer" className="flex flex-col gap-3 items-start justify-start">
            <img src={FooterLogo} className="max-h-15 w-auto" alt="Lakbay SBHS Logo" />
              <h3 className="ml-3 text-[#fefeff] font-medium">Optimizing campus navigation for San Bartolome High School.</h3>
            <div id="footerIconContainer" className="ml-3">
              <a href="https://www.facebook.com/profile.php?id=61586091340320">
                <img src={FacebookLogoLight} className="max-h-8 w-auto"/>
              </a>
            </div>
          </section>
          <section id="footerRightContainer" className="flex flex-row gap-50">
            <div>
            <h2 className="mb-2 text-[#fefeff] font-semibold">Quick Links</h2>
              <ul className="flex flex-col gap-2">
                <li className="text-[#fefeffda]"><Link to="/home">Home</Link></li>
                <li className="text-[#fefeffda]"><Link to="/">Map</Link></li>
                <li className="text-[#fefeffda]"><Link to="/">About Project</Link></li>
              </ul>
            </div>
            <div>
            <h2 className="mb-2 text-[#fefeff] font-semibold">Miscellaneous</h2>
              <ul className="flex flex-col gap-2">
                <li className="text-[#fefeffda]"><Link to="/home">Meet the Team</Link></li>
                <li className="text-[#fefeffda]"><Link to="/">Contact Us</Link></li>
                <li className="text-[#fefeffda]"><Link to="/">Gallery</Link></li>
              </ul>
            </div>
          </section>
        </footer>
        <footer className="p-2 flex justify-center bg-[#26539c] text-[#fefeff]">
          <p className="text-[#fefeffc0] font-semibold">© 2024 Lakbay SBHS Capstone Project | Developed for III and Programming Grade 12 Subjects.</p>
        </footer>
      </div>
        </>
    )
}

export default SB2