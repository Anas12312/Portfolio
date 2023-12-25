import { useEffect, useRef, useState } from 'react'
import './styles/App.css'
import Main from './components/Main'
import BacklightCircle from './components/BackLightCircle';
import Flashlight from './components/FlashLight';
import List from './components/List';
function App() {
  const mainRef = useRef(null);
  const scrollToMainRef = () => {
    mainRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAboutRef = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTokenomicsRef = () => {
    tokenomicsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToRoadmapRef = () => {
    roadMapRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContactRef = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='h-screen w-screen bg-[#0f172a] overflow-x-hidden text-[#8a99ad] font-Inter trans'>
      <Flashlight>
        <div className='h-screen flex justify-center'>
          <Main />
          <List />
        </div>
      </Flashlight>
    </div>
  )
}

export default App