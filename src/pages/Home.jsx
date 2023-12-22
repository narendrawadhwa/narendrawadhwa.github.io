import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import Loader from "../components/Loader";
import Bird from '../models/Bird';
import Island from '../models/Island';
import Plane from '../models/Plane';
import Sky from '../models/Sky';
import HomeInfo from "../components/HomeInfo";
import Welcome from "../components/Welcome";  
const images = import("../assets/images");
const arrowleft = await images.then((module) => module.arrowleft);

import { OrbitControls } from "@react-three/drei";

import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from "../assets/icons";
import { arrowright, arrows } from "../assets/images";

const icons = import("../assets/icons");
const dragAnimationIcon = await icons.then((module) => module.drag_animation);

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  // const [showWelcome, setShowWelcome] = useState(true); 
  const [showGuide, setShowGuide] = useState(true);
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

  // const handleExploreClick = () => {
  //   setShowWelcome(false);
  //   setIsRotating(false); 
  // };

  // if (showWelcome) {
  //   return <Welcome onExploreClick={handleExploreClick} />;
  // }

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -2, 0];
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
      screenPosition = [0, -8, -50.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -8, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();


  const renderGuideModal = () => {
    const isLastStep = guideStep === 2; 
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center text-center">
      <div className="bg-white p-4 rounded-lg flex flex-col justify-between sm:w-[450px] w-[350px] bg-opacity-95">
          {guideStep === 1 && 
          <>
          <p className="font-semibold mb-3">
            Step 1
</p>
<span className="flex flex-row items-center justify-center">
<img src={dragAnimationIcon} className="w-20 mr-2" /> <p>OR</p> 
{/* <img src={arrowleft} className="w-10 ml-3" />
<img src={arrowright} className="w-10 ml-1" /> */}
<img src={arrows} alt="" className="w-32" />
</span>
<p> Drag or use arrow left and right buttons to rotate the island.</p>
</>
}
          {guideStep === 2 && <p>
            <span className='text-blue-500 font-semibold'>
            Step 2: {" "}
        </span> Explore the 3D world.</p>}
  
          <div className="flex justify-between mt-4">
            <div>
            <button
              onClick={handlePrevStep}
                  className="text-blue-500 px-4 py-2 "
              disabled={guideStep === 1}
            >
              Prev
            </button>

              {isLastStep ? (
                <button onClick={handleSkip} className="text-gray-500 mr-2">
                  Close
                </button>
              ) : (
                <button
                  onClick={handleNextStep}
                  className="text-blue-500 px-4 py-2 "
                >
                  Next
                </button>
              )}
              </div>
              {!isLastStep && (
                <button onClick={handleSkip} className="text-gray-500 mr-2 ">
                  Skip
                </button>
              )}
          </div>
        </div>
      </div>
    );
  };
  


  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage} showGuide={showGuide} />}
      </div>

      {showGuide && renderGuideModal()}

      <Canvas
  className={`w-full h-screen bg-transparent ${
    (isRotating && !showGuide) ? "cursor-grabbing" : "cursor-grab"
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
            // onDragStart={handleExploreClick}

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
      <div className="absolute bottom-2 left-2">
        <img src={isPlayingMusic ? soundon : soundoff} alt="sound"
        className="w-10 h-10 cursor-pointer object-contain"
        onClick={()=>setIsPlayingMusic(!isPlayingMusic)} />
      </div>
    </section>
  );
};

export default Home;
