import '../index.css';
import HeroBackground from '../assets/HeroBackground.png';
import ImageCarousel from '../ImageCarousel';
import MapIcon from '../assets/mapIcon.png';
import NavIcon from '../assets/navIcon.png';
import SearchIcon from '../assets/searchIcon.png';
import feedbackIcon from '../assets/feedbackIcon.png';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer'


function Home() {
  return (
    <>
      <div id="container">
        <Navbar />
        <main className="h-[60vh] flex flex-row items-center justify-around overflow-hidden relative">
          <section id="heroSection" className="text-center lg:text-left flex flex-col gap-5">
            <div className="max-h-[60vh] absolute inset-0 bg-cover bg-center -z-10 opacity-20" style={{backgroundImage: `url(${HeroBackground})`}}></div>
              <div id="ctaContainer" className="flex flex-col gap-1.5 justify-center align-center">
                <h1 className="text-xl lg:text-4xl font-semibold">Find Your Way Around</h1>
                <h2 className="text-xl lg:text-4xl font-bold">San Bartolome High School</h2>
                <h3 className="text-md lg:text-2xl font-light max-w-[25em] lg:text-justify">A web-based map system that helps students easily locate rooms, offices, and facilities inside the campus.</h3>
              </div>
            <div id="heroBtnContainer" className="flex flex-row gap-5">
              <Link to="/map">
                <button className="bg-[#4a6fb1] hover:bg-[#26539c] text-white font-bold py-2 px-4 rounded min-w-2xs">
                  <h2>Open Interactive Map</h2>
                </button>
              </Link>
            </div>
            <div id="heroFooter" className="hidden lg:flex flex-col gap-2">
              <h3>Also available in Java version</h3>
              <Link to="/404">
                <button className="bg-[#4a6fb1] hover:bg-[#26539c] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span>Download</span>
                </button>
              </Link>
            </div>
          </section>
          <section className="hidden lg:block">
            <ImageCarousel />
          </section>
        </main>
        <section id="valuesSection" className="p-5 flex flex-col gap-5 justify-center items-center mt-8">
          <h1 className="text-[#4a6fb1] font-bold text-3xl">Why LAKBAY SBHS Matters</h1>
          <h2 className="max-w-3xl text-center text-[#222222ea] font-medium">LAKBAY SBHS is more than just a map — it’s a tool designed to help students learn, explore, and navigate San Bartolome High School much more effectively. This capstone system serves as a preliminary project for III and Programming subjects.</h2>
          <div id="valuesContainer" className="grid grid-cols-3 gap-10 mt-5">
            <div id="cardContainer" className="relative p-8 rounded-md shadow-sm border-2 border-solid border-[#3764b38e] overflow-hidden bg-[#111} max-h-80 max-w-100 flex flex-col justify-center items-center text-justify gap-3">
              <img src={MapIcon} className="max-h-16 w-auto" />
              <h1 className="text-xl font-medium text-[#4a6fb1]">Simple Campus Navigation</h1>
              <p className="text-[#222222ea] max-w-75 text-base/6">Quickly find classrooms, offices, and facilities without confusion, helping students and visitors focus on learning.</p>
            </div>
            <div id="cardContainer" className="relative p-8 rounded-md shadow-sm border-2 border-solid border-[#3764b38e] overflow-hidden bg-[#111} max-h-80 max-w-100 flex flex-col justify-center items-center text-justify gap-3">
              <img src={NavIcon} className="max-h-16 w-auto" />
              <h1 className="text-xl font-medium text-[#4a6fb1]">Clear Visual Map Interface</h1>
              <p className="text-[#222222ea] max-w-75 text-base/6" >Explore the San Bartolome High School campus through a clear, interactive map designed for maximum ease of use.</p>
            </div>
            <div id="cardContainer" className="relative p-8 rounded-md shadow-sm border-2 border-solid border-[#3764b38e] overflow-hidden bg-[#111} max-h-80 max-w-100 flex flex-col justify-center items-center text-justify gap-3">
              <img src={SearchIcon} className="max-h-16 w-auto" />
              <h1 className="text-xl font-medium text-[#4a6fb1]">Fast and Easy Location Search</h1>
              <p className="text-[#222222ea] max-w-75 text-base/6">Find specific rooms or offices and instantly view their exact location on the campus map with a single search.</p>
            </div>
          </div>
        </section>
        <div className="
          relative
          after: my-15
          after: mb-35
          before:content-['']
          before:absolute
          before:z-1
          before:-top-2.25
          before:left-[calc(50%-9px)]
          before:w-4.5
          before:h-4.5
          before:bg-[#4a6fb1]
          before:border
          before:border-[rgb(48,49,51)]
          before:rounded-full
          before:shadow-[inset_0_0_0_2px_white,0_0_0_4px_white]
        ">
          <div className="
            relative
            before:content-['']
            before:absolute
            before:top-0
            before:left-[5%]
            before:right-[5%]
            before:w-[90%]
            before:h-px
            before:bg-[linear-gradient(to_right,transparent,rgb(48,49,51),transparent)]
          ">
          </div>
        </div>
        <section id="feedbackSection" className="mb-5 flex flex-col gap-5 items-center justify-center">
          <div id="feedbackHeaderContainer" className="flex justify-center items-center gap-5">
            <img src={feedbackIcon} className="max-h-15"/> 
            <h1 className="text-4xl font-semibold text-[#222222ea]">Help Us Grow <span className="text-[#4a6fb1]">Lakbay SBHS</span></h1>
          </div>
          <div id="feedbackContentContainer" className="flex flex-col justify-center items-center gap-8">
            <h3 className="text-lg font-medium text-[#222222ea] text-center max-w-3xl">Share your experience navigating San Bartolome High School. Your insights will help shape the development of the LAKBAY system.</h3>
            <button className="w-[80vh] bg-[#4a6fb1] hover:bg-[#26539c] text-white font-bold py-2 px-4 rounded-xs">
              <Link to="/404"><h2>SHARE YOUR FEEDBACK</h2></Link>
            </button>
            <p className="-mt-5 text-[#2222229f]">* For research and system development purposes only.</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home
