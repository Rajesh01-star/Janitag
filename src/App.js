import './App.css';
import BrandsRow from './components/BrandsRow';
import Card from './components/Card';
import Frame from './components/Frame';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FollowUp from './components/FollowUp';
import Features from './components/Features';

function App() {
  return (
    <div className="App bg-[#EFEFED] min-h-screen">
      <Navbar />
      <Hero />
      <div className='w-full h-[640px] px-10 mx-auto'>
        <img src='./images/hero-image.jpg' className='object-cover w-full h-full rounded-[20px]' alt='heroImage' />
      </div>
      <BrandsRow />
      <div className='my-80 min-w-[964px] w-1/2 h-[270px] mx-40 text-[56px] font-[700] text-[#333232] leading-tight'>
      “The real fact of the matter is that nobody reads ads. People read what interests them, and sometimes it’s an ad”
      </div>
      <Features />
      <FollowUp />
      <Footer />
    </div>
  );
}

export default App;
