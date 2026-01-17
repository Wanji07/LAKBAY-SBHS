import '../index.css';
import HeaderLogoLight from '../assets/HeaderLogoLight.png';
import FacebookLogoLight from '../assets/facebookLogoLight.png';
import FacebookLogoDark from '../assets/facebookLogoDark.png';
import GalleryIcon from '../assets/galleryIcon.png';
import FeedbackLogo from '../assets/feedbackLogo.png';
import { Link } from 'react-router-dom';

function Map() {
    return(
        <>
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
                        <Link to="/">Buildings & Faculties</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                </ul>
                <ul className="flex flex-row items-center gap-3" id="navBtnContainer2">
                    <li>
                        <Link to="/" className="flex flex-row items-center gap-1">
                            <img src={FeedbackLogo} className="h-6 w-auto" />
                            <h2 className="font-medium text-[#1c4587]">Feedback</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex flex-row items-center gap-1">
                            <img src={GalleryIcon} className="h-6 w-auto" />
                            <h2 className="font-medium text-[#1c4587]">Gallery</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="flex flex-row items-center gap-1">
                            <img src={FacebookLogoDark} className="h-6 w-auto" />
                            <h2 className="font-medium text-[#1c4587]">Visit our Page</h2>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Map