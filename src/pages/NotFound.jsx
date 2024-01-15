import { useState } from 'react';
import { notFound } from '../assets/images';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';


const NotFound = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };



    return (
        <section className='max-container flex lg:flex-row flex-col items-center justify-center '>

            <div className='lg:w-[45%]'>
                <h1 className='lg:text-2xl text-[24px] font-bold mb-4 text-[#00a6e0]'>
                    Uh-oh! You've encountered a mystical fog.
                </h1>
                <p className='lg:text-lg text-[18px]'>
                    It appears you've veered off the path and entered a mystical fog. The
                    page you seek is hidden within the clouds of mystery. Don't worry!
                    You can always{' '}
                    <span className='text-blue-500 font-medium '>
                        explore my world again
                    </span>{' '}
                    by clicking the button below.
                </p>
                <div className='hidden lg:block sm:my-6 my-9'>
                    <span className='py-3 px-8 text-white text-[18px] rounded-3xl font-medium' style={{
                        background: 'linear-gradient(155deg, #6bd3f9, #00a6e0)',
                    }}>
                        <Link to="/">Explore My World</Link>
                    </span>
                </div>

            </div>
            <div>
                {!imageLoaded && <Loading />
                }

                <img src={notFound} className='lg:w-[520px] w-96 mt-4 lg:ml-5' onLoad={handleImageLoad} />
            </div>
            <div className='my-12 lg:hidden'>
                <span className='py-4 px-10 text-white text-[18px] rounded-[50px] font-medium' style={{
                    background: 'linear-gradient(155deg, #6bd3f9, #00a6e0)',
                }}>
                    <Link to="/">Explore My World</Link>
                </span>
            </div>
        </section>
    );
};

export default NotFound;
