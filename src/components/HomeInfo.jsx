import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { wavinghand } from "../assets/images";


const HomeInfo = ({ currentStage, showGuide }) => {
  if (currentStage === 1 && !showGuide) {
    return (
      <div className='details-box'>
        <p className='font-medium '>
          <span className="flex flex-row">  Hi<img src={wavinghand} alt="" className="sm:w-4 w-6" />, I'm Narendra Wadhwa</span>
          <span> {" "}A Fresher Full Stack Developer</span> 
        </p>
      </div>
    );
  }

  if (currentStage === 2) {
    return (
      <div className='details-box'>
        <p className='font-medium '>
          My journey as a developer started in SYJC, where I came across Web Designing using HTML and CSS.
        </p>
      </div>
    );
  }
  if (currentStage === 3) {
    return (
      <div className='details-box'>
        <p className='font-medium  '>
          Continuing with my bachelor's, I decided to enroll in the Full Stack Development program.
        </p>
      </div>
    );
  }
  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center  sm:text-[14px] text-[16px]'>
          During the program i worked on three projects using various technologies.</p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain arrow-img' />
        </Link>
      </div>
    );
  }

  if (currentStage === 5) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-[14px] text-[16px]'>
          In August 2023, i successfully graduated and completed FSD program with test score of 94%.
        </p>
        <Link to='https://drive.google.com/file/d/1_FyuFZxpHJrp07lRCqf55P4omHezNvJP/view?usp=drive_link' className='neo-brutalism-white neo-btn' target='_blank'>
          View Certificate
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain arrow-img' />
        </Link>
      </div>
    );
  }
  if (currentStage === 6) {
    return (
      <div className='info-box'>
        <p className='font-medium  '>
          I interned at CodSoft as a Web Development Intern, worked on two  projects gaining hands-on experience</p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain arrow-img' />
        </Link>
      </div>
    );
  }

  if (currentStage === 7) {
    return (
      <div className='info-box'>
        <p className='font-medium  '>
          Currently seeking opportunities while enhancing my skills in Docker.
          <Link to='https://drive.google.com/file/d/1tO2y3R646TazMq8ClmTLYlJjCc01cxE6/view?usp=drive_link' className='neo-brutalism-white neo-btn' target='_blank'>
            View Resume
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain arrow-img' />
          </Link> </p>
      </div>
    );
  }

  if (currentStage === 8) {
    return (
      <div className='info-box'>
        <p className='font-medium '>
          Need a project done or looking for a dev?  I'm just a few keystrokes away
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain arrow-img' />
        </Link>
      </div>
    );
  }



  return null;
};

export default HomeInfo;