import './App.css';
import BrandsRow from './components/BrandsRow';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FollowUp from './components/FollowUp';
import Features from './components/Features';
import Actions from './components/Actions';
import Filler from './components/Filler';

function App() {
  return (
    <div className="App bg-[#EFEFED] min-h-screen">
      <Navbar />
      <Hero />
      <div className='w-full h-[400px] lg:h-[640px] px-10 mx-auto mb-20'>
        <img src='./images/hero-image.jpg' className='object-cover w-full h-full rounded-[20px]' alt='heroImage' />
      </div>
      <BrandsRow />
      <div className='lg:my-80 md:my-40 my-20 lg:min-w-[964px] lg:w-1/2 h-[270px] md:mx-20 lg:mx-40 lg:text-[56px] md:text-[40px] text-[32px] md:text-start text-center font-[600] md:font-[700] text-[#333232] leading-normal'>
      “The real fact of the matter is that nobody reads ads. People read what interests them, and sometimes it’s an ad”
      </div>
      <Filler />
      <Actions />
      <Features />
      <FollowUp />
      <Footer />
    </div>
  );
}

export default App;
