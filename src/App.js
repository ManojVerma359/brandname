import './App.css';
import BackToTop from './Components/BackToTop';
import Every from './Components/Every';
import Footer from './Components/Footer';
import Getquilty from './Components/Getquilty';
import Header from './Components/Header';
import Most from './Components/Most';
import OurProcess from './Components/OurProcess';
import Popular from './Components/Popular';
import Video from './Components/Video';
import Preloder from './Components/Preloder'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  <script></script>;
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <div className='overflow-hidden'>
  <Preloder/>
    <BackToTop/>
<Header/>
<OurProcess/>
<Most/>
<Popular/>
<Every/>
<Getquilty/>
<Video/>
<Footer/>
    </div>
  );
}

export default App;
