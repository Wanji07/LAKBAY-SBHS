import '../index.css'
import HeaderLogo from '../assets/HeaderLogo.png'
import HeaderLogoLight from '../assets/HeaderLogoLight.png'
import FacebookLogo from '../assets/facebookLogo.png'
import GalleryLogo from '../assets/galleryLogo.png'
import FeedbackLogo from '../assets/feedbackLogo.png'
import HeroBackground from '../assets/HeroBackground.png'
import Placeholder from '../assets/Placeholder.png'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <div id="container">
        <header className="p-1  bg-[#fefeff] text-[#546e7b]">
          <nav className="pb-1 flex flex-row items-center justify-around" style={{boxShadow: '0px 3px 10px 0px rgba(0, 0, 0, 0.1)'}}>
            <Link to="/home"><img className="h-[60px] w-auto" src={HeaderLogoLight} alt="Lakbay SBHS logo" /></Link>
            <ul className="-m-6.25 flex flex-row justify-center gap-[3em] text-lg" id="navBtnContainer">
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
            <ul className="flex flex-row items-center gap-3" id="navBtnContainer2">
              <li>
                <Link to="/" className="flex flex-row items-center gap-1">
                  <img src={FeedbackLogo} className="h-6 w-auto filter-navy" />
                  <h2 className="font-medium text-[#1c4587]">Feedback</h2>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex flex-row items-center gap-1">
                  <img src={GalleryLogo} className="h-6 w-auto filter-navy" />
                  <h2 className="font-medium text-[#1c4587]">Gallery</h2>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex flex-row items-center gap-1">
                  <img src={FacebookLogo} className="h-6 w-auto filter-navy" />
                  <h2 className="font-medium text-[#1c4587]">Visit our Page</h2>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex flex-row items-center justify-around">
          <section id="heroSection" className="text-left flex flex-col gap-5" style={{marginTop:'10vh'}}>
            <div className="h-[80vh] absolute inset-0 bg-cover bg-center -z-10 opacity-20" style={{backgroundImage: `url(${HeroBackground})`}}></div>
              <div id="ctaContainer" className="m-auto flex flex-col gap-1.5 justify-center align-center" style={{marginTop: '5vh'}}>
                <h1 className="text-4xl font-semibold">Find Your Way Around</h1>
                <h2 className="text-4xl font-bold">San Bartolome High School</h2>
                <h3 className="text-2xl font-light max-w-[25em] text-justify">A web-based map system that helps students easily locate rooms, offices, and facilities inside the campus.</h3>
              </div>
            <div id="heroBtnContainer" className="flex flex-row gap-5">
              <Link to="/map">
                <button className="bg-[#4a6fb1] hover:bg-[#26539c] text-white font-bold py-2 px-4 rounded">
                  <h2>Open Interactive Map</h2>
                </button>
              </Link>
              <Link to="/">
                <button className="bg-transparent hover:bg-[#4a6fb1] text-[#4a6fb1] font-semibold hover:text-white py-2 px-4 border border-[#4a6fb1] hover:border-transparent rounded">
                  <h2>Search a Room</h2>
                </button>
              </Link>
            </div>
            <div id="heroFooter" className="flex flex-col gap-2">
              <h3>Also available in Java version</h3>
              <Link to="/">
                <button className="bg-[#4a6fb1] hover:bg-[#26539c] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span>Download</span>
                </button>
              </Link>
            </div>
          </section>
          <img src={Placeholder} className="h-80 w-auto" style={{marginTop: '15vh'}}/>
        </main>
      </div>
    </>
  )
}

export default Home
