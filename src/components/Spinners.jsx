// AllSpinners.jsx
import React from 'react';
import { BeatLoader, BounceLoader, ClipLoader, DotLoader, FadeLoader,ClimbingBoxLoader,CircleLoader,GridLoader,MoonLoader,PacmanLoader,HashLoader, PropagateLoader, PulseLoader, RotateLoader, RiseLoader, ScaleLoader, SyncLoader } from 'react-spinners';

const Spinners = () => {
  return (
    <div className='wow-loader' style={{ background: 'rgba(255, 255, 255, 0.5)', width: '100%', height: '100vh' }}>
    {/* <h1>All Spinners</h1>
      <BeatLoader size={15} color="#36D7B7" />
      <BounceLoader size={30} color="#3498db" />
      <ClipLoader size={50} color="#f39c12" />
      <CircleLoader size={50} color="#f39c12" />
      <ClimbingBoxLoader size={50} color="#f39c12" />
      <GridLoader size={50} color="#f39c12" />
      <MoonLoader size={50} color="#f39c12" />
      <HashLoader size={50} color="#f39c12" />
      <PacmanLoader size={50} color="#f39c12" />
      <PropagateLoader size={50} color="#f39c12" />
      <PulseLoader size={50} color="#f39c12" />
      <RotateLoader size={50} color="#f39c12" />
      <RiseLoader size={50} color="#f39c12" /> */}
      <ScaleLoader size={50} color="#f39c12" />
      {/* <SyncLoader size={50} color="#f39c12" />
      <DotLoader size={60} color="#e74c3c" />
      <FadeLoader size={70} color="#9b59b6" /> */}
      {/* Add more spinners as needed */}
    </div>
  );
};

export default Spinners;
