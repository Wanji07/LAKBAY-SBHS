import '../index.css';
import Navbar from '../Navbar'
import Footer from '../Footer'
import Aside from '../MapAside'

function HB() {
    return (
      <>
        <div id="container">
        <Navbar />
          <div id="container" className="min-h-screen grid grid-cols-[1fr_10fr]">
          <Aside />
          </div>
        <Footer />
        </div>
      </>
    )
}

export default HB