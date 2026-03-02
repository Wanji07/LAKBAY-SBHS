import '../index.css';
import Navbar from '../Navbar'
import Footer from '../Footer'
import buildingPageBackground from '../assets/buildingPageBackground.png';
import BuildingsCard  from '../BuildingsCard';

function Buildings() {
  return (
    <>
      <div id="container">
        <Navbar />

        <section className="mb-15">
        <div className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10 opacity-40" 
              style={{backgroundImage: `url(${buildingPageBackground})`}}>
        </div>

        <div className="relative text-center py-10 bg-linear-to-r from-[#4a6fb1] to-[#1c4587] text-white shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Buildings & Facilities</h1>
          <p className="text-lg md:text-xl text-[#fefeffda] max-w-2xl mx-auto px-4">
            Explore the modern infrastructure and academic facilities of San Bartolome High School
          </p>
        </div>
        
        <main className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 gap-6 min-h-screen">
            <BuildingsCard />
        </main>
        </section>
      
        <Footer />
      </div>
    </>
  )
}

export default Buildings