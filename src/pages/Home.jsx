import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import Loader from "../components/Loader";
import Bird from '../models/Bird';
import Island from '../models/Island';
import Plane from '../models/Plane';
import Sky from '../models/Sky';
import HomeInfo from "../components/HomeInfo";
import Welcome from "../components/Welcome";
import * as THREE from 'three';

import { OrbitControls } from "@react-three/drei";

import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  // const [loading, setLoading] = useState(true);
  const [guideStep, setGuideStep] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);


  const handleNextStep = () => {
    setGuideStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setGuideStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSkip = () => {
    setShowGuide(false);
  };

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);;


  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(delayTimer);
  }, []);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.7, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -5, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6, -50.4]
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -8, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();




  return (
    <section className='w-full h-screen relative'>

      <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} showGuide={showGuide} />}
      </div>

      <Welcome
        showWelcome={showGuide}
        setShowWelcome={setShowGuide}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
        handleSkip={handleSkip}
        isLastStep={guideStep === 2}
        guideStep={guideStep}
      />


      <Canvas
        className={`w-full h-screen bg-transparent ${(isRotating && !showGuide) ? "cursor-grabbing" : "cursor-grab"
          }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          <OrbitControls
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            maxDistance={7}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>
      <div className="absolute sm:bottom-8 bottom-24 left-8">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="sound"
          className="lg:w-9 w-12 lg:h-9 h-12 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
