import '../index.css'
import HeaderLogo from '../assets/HeaderLogo.png'
import FacebookLogo from '../assets/facebookLogo.png'
import GalleryLogo from '../assets/galleryLogo.png'
import FeedbackLogo from '../assets/feedbackLogo.png'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <div id="container">
        <header className="p-1  bg-[#1c4587] text-[#FFFFFF]">
          <nav className="flex flex-row items-center justify-around">
            <img className="h-[60px] w-auto" src={HeaderLogo} alt="Lakbay SBHS logo" />
            <ul className="m-[-25px] flex flex-row justify-center gap-[3em] text-lg" id="navBtnContainer">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Map</Link>
              </li>
              <li>
                <Link to="/">Buildings & Faculties</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
            <ul className="flex flex-row items-center gap-[12px]" id="navBtnContainer2">
              <li>
                <Link to="/"><img src={FacebookLogo} className="h-[24px] w-auto" /></Link>
              </li>
              <li>
                <Link to="/"><img src={GalleryLogo} className="h-[24px] w-auto" /></Link>
              </li>
              <li>
                <Link to="/"><img src={FeedbackLogo} className="h-[24px] w-auto" /></Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Home
