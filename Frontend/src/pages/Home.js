import React from 'react';
import Slider from '../components/Slider';
import HomeContent from '../components/HomeContent';
import cover1 from '../images/cover1.jpg';
import cover2 from '../images/cover2.jpg';
import cover3 from '../images/cover3.png';
import cover4 from '../images/cover4.png';
import cover5 from '../images/cover5.jpg';
import cover6 from '../images/cover6.jpg';
import cover7 from '../images/cover7.jpg';
import cover8 from '../images/cover8.jpg';
import SignUp from './SignUp';
import UserProfile from './UserProfile';
import UploadBook from './UploadBook';


const images = [
   cover1,
   cover2,
   cover3,
   cover4,
   cover5,
   cover6,
   cover7,
   cover8
];
  
  
function Home() {
  return (
    <div className="container mx-auto ">
    
      {/* <Slider images={images} />
      <HomeContent/> */}
     <UploadBook/>
     
   
      

    </div>
  );
}

export default Home;
