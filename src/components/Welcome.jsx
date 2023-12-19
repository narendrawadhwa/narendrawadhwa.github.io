import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Welcome = ({ onExploreClick }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-black lg:px-28 px-8 lg:py-24 pt-4 pb-8 z-50 relative text-white welcome-content min-h-screen'>
      <h1 className='uppercase sm:text-[120px] text-[50px] lg:w-[70%] leading-[100%] font-[500]'>
        Welcome to my world
      </h1>
      <br />
      <p className='sm:text-[56px] text-[26px] my-5 text-right xl:pl-40 font-[250]'>
        I'm Narendra, a passionate and aspiring Full Stack Developer. Excited to
        embark on a journey of creating innovative digital experiences.
      </p>
      <br />
      <button
        onClick={onExploreClick}
        className="sm:text-[25px] items-center sm:w-[400px] w-[260px] flex uppercase sm:px-8 px-6 sm:py-6 py-4 rounded-full text-[17px] welcome-btn font-semibold"
        disabled={loading}
      >
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            Explore My World <FaArrowRight className='arrow-right sm:w-5 w-3' />
          </>
        )}
      </button>
    </div>
  );
};

export default Welcome;
