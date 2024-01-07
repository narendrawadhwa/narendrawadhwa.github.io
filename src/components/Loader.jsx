import React from 'react';
import { Html } from '@react-three/drei';
import { ScaleLoader } from 'react-spinners';

const WowLoader = () => {
  return (
    <Html>
      <div className='wow-loader-container'>
        <ScaleLoader size={50} color='#0072ff' />
      </div>
    </Html>
  );
};

export default WowLoader;
