import BlinkitNavbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Offers from './Components/Offers'

const App = () =>{
  return (
    <div>
      <BlinkitNavbar />
      <HeroSection />
      <img src="../src/assets/pictures/trally.jpg" className='img-fluid' alt="trally image" />
      <Offers />
      <Features />
      <Footer />
    </div>
  )
}

export default App