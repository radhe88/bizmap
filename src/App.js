import React from 'react'
import Header from './component/Header';
import CustomButton from './component/CustomButton';
import Custombox from './component/Custombox';
import Tabcontent from './component/Tabcontent';
import Toptranding from './component/Toptranding';
import Popular from './component/Popular';
import Rohit from './component/Rohit'
import Footer from './component/Footer'
import Seconne from './component/Seconne'
import { FaMapMarkerAlt, FaMusic, FaGlassMartiniAlt } from 'react-icons/fa'
import { BsFillCartDashFill } from 'react-icons/bs'
import { FaCandyCane, FaBirthdayCake, FaPlaceOfWorship } from 'react-icons/fa'
import { GiFoodChain, GiMedicines } from 'react-icons/gi'
import Boxbtxt from './component/Boxbtxt';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/header.css';
import './css/tabcontent.css';
import './css/custombox.css'
import './css/popular.css'
import './css/toptranding.css'
import './css/boxcard.css'
import './css/boxtbxt.css'
import './css/cardone.css'
import './css/footer.css'



function App() {
  return (
    <div>
      <div className="header">
        <Header />
        <div className='main'>Find & Get</div>
        <div className='main-1'>Your Dream Place.</div>
        <div className='d-flex justify-content-center mg-3'>
          <CustomButton icon={<FaMapMarkerAlt />} name="Place" active={true} />
          <CustomButton icon={<FaMusic />} name="Party" />
          <CustomButton icon={<FaGlassMartiniAlt />} name="Restaurant" />
        </div>
        <div>
          <Tabcontent />
        </div>
        <div>
          <div>
            <div className=' bk-1 mg-2 d-flex justify-content-center'>
              <Custombox icon={< BsFillCartDashFill />} name="CARTS" />
              <Custombox icon={< GiFoodChain />} name="FOODS" />
              <Custombox icon={< FaCandyCane />} name="CANDY" />
              <Custombox icon={< GiMedicines />} name="MEDICINE" />
              <Custombox icon={< FaBirthdayCake />} name="CACK" />
              <Custombox icon={< FaPlaceOfWorship />} name="PLACE" />
            </div>
          </div>
        </div>
      </div>
      <section className='popular'>
        < Popular />
      </section>
      <section className='top-trending'>
        <Toptranding />
      </section>
      <section className='header1'>
        <Boxbtxt />
      </section>
      <section>
        <Rohit />
      </section>
      <section>
        <Seconne />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;



