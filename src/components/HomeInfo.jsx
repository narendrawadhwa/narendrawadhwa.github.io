import { Link } from "react-router-dom";
const icons = import("../assets/icons");

const arrowIcon = await icons.then((module) => module.arrow);
// const dragAnimationIcon = await icons.then((module) => module.drag_animation);

const HomeInfo = ({ currentStage, showGuide }) => {
  if (currentStage === 1 && !showGuide) {
    return (
      <div className='details-box'>
        <p className='font-medium sm:text-[18px] text-[16px] text-center'>
          Hi, I'm Narendra Wadhwa <br/> A Fresher Full Stack Developer
        </p>
      </div>
    );
  }

  // if (currentStage === 1)
  //   return (
  //     <span className='flex flex-col justify-center items-center sm:leading-snug '>
  //       <img src={dragAnimationIcon} className="w-20" />
  //       <span className='uppercase sm:text-[18px] text-[16px] font-semibold m-2 text-black'>Drag to explore</span>
  //     </span>
  //   );
  if (currentStage === 2) {
    return (
      <div className='details-box'>
        <p className='font-medium sm:text-[18px] text-[16px] text-center'>
          My journey as a developer started in SYJC, where I came across Web Designing using HTML and CSS.
        </p>
      </div>
    );
  }
  if (currentStage === 3) {
    return (
      <div className='details-box'>
        <p className='font-medium sm:text-[18px] text-[16px] text-center'>
          Continuing with my bachelor's, I decided to enroll in the Full Stack Development program.
        </p>
      </div>
    );
  }
  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-[18px] text-[16px]'>
          During the program i worked on three projects using various technologies.</p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Projects
          <img src={arrowIcon} alt='arrow' className='w-4 h-4 object-contain arrow-img' />
        </Link>
      </div>
    );
  }

  if (currentStage === 5) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-[17px]'>
          In August 2023, i successfully graduated and completed FSD program with average employment test score of 94%.
        </p>
        <Link to='https://drive.google.com/file/d/1_FyuFZxpHJrp07lRCqf55P4omHezNvJP/view?usp=drive_link' className='neo-brutalism-white neo-btn' target='_blank'>
          View Certificate
          <img src={arrowIcon} alt='arrow' className='w-4 h-4 object-contain arrow-img' />
        </Link>
      </div>
    );
  }
  if (currentStage === 6) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-[18px] text-[16px] text-center'>
          I interned at CodSoft as a Web Development Intern, worked on two  projects gaining hands-on experience</p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Projects
          <img src={arrowIcon} alt='arrow' className='w-4 h-4 object-contain arrow-img' />
        </Link>
      </div>
    );
  }

  if (currentStage === 7) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-[18px] text-[16px] text-center'>
          Currently seeking opportunities while enhancing my skills in AWS and Docker.
          <Link to='https://drive.google.com/file/d/18LYq_vNK6uxiLQ99plZjvjz7oqP528t4/view?usp=drive_link' className='neo-brutalism-white neo-btn' target='_blank'>
            View Resume
            <img src={arrowIcon} alt='arrow' className='w-4 h-4 object-contain arrow-img' />
          </Link> </p>
      </div>
    );
  }

  if (currentStage === 8) {
    return (
      <div className='info-box'>
        <p className='font-medium  sm:text-[18px] text-[16px] text-center'>
          Need a project done or looking for a dev?  I'm just a few keystrokes away
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <img src={arrowIcon} alt='arrow' className='w-4 h-4 object-contain arrow-img' />
        </Link>
      </div>
    );
  }



  return null;
};

export default HomeInfo;