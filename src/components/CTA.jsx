import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../constants';

const CTA = () => {
  return (
    <section>
      <div className='cta'>
        <p className='cta-text'>
          Have a project in mind? <br className='sm:block hidden' />
          Let's build something together!
        </p>
        <Link to="/contact" className='btn'>
          Contact
        </Link>
      </div>
      <hr className='my-6 border-slate-300' />

      <div className='flex space-x-4 sm:justify-between items-center sm:flex-row flex-col gap-3 '>
        <div>
          <p className='sm:text-[18px] text-[16px] text-center'>
            Crafted by Narendra Wadhwa | <br className='sm:hidden' />© 2023 All rights reserved.
          </p>
        </div>
        <div className='flex-column flex m-0'>
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link} 
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-500 hover:text-gray-700 mr-3 transition'
            >
              <img src={link.iconUrl} alt={`${link.name} Icon`} className='w-8 h-8' />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
