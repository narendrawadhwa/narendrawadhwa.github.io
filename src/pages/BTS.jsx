import { motion } from 'framer-motion';
import { bts } from "../constants";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";

const BTS = () => {


  return (
    <section className='max-container'>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className='head-text'>
          Behind the<span className='blue-gradient_text font-semibold drop-shadow'> Scenes
          </span>
        </h1>

        <div className='mt-5 flex flex-col text-slate-500 '>
          <p className='sm:text-[19px] text-[16px]'>
          Embarking on the journey of creating my portfolio was not initially 
          on my radar. I vividly recall my conversation with the UpGrad campus 
          representative, where she emphasized the importance of building a 
          digital resume during the Full Stack program. At that moment, I 
          underestimated its significance. However, as I delved deeper into the 
          IT sector, I realized the pivotal role a portfolio plays in showcasing 
          one's skills and achievements. Motivated by this realization, I decided
          to create mine in an innovative way, aiming to stand out and reflect my 
          unique skills and experiences.          
          </p>
        </div>

        <div className="flex flex-wrap mt-16 mb-12 gap-16 ">
          {bts.map((bts) => (
            <div className="w-full" key={bts.name}>
              <div className="flex items-center">
                <div className="block-container w-10 h-10">
                  <div className={`btn-back rounded-md  ${bts.theme}`} />
                  <div className="btn-front rounded-md cursor-pointer flex justify-center items-center">
                    <img
                      src={bts.iconUrl}
                      alt="Project Icon"
                      className="w-[55%] h-[55%] object-contain" />
                  </div>
                </div>
                <h4 className="subhead-text ml-5">
                  {bts.name}
                </h4>
              </div>
              <div className="mt-2 flex flex-col">
                <p className="mt-2 text-slate-500 sm:text-[19px] text-[16px]">
                  {bts.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-0 mb-10 flex flex-col text-slate-500 '>
          <p className='sm:text-[19px] text-[16px]'>
            Dive into my digital universe and uncover the story of my journey into the tech realm. Navigate through
            <Link to='/about' className="text-blue-500"> my skills, educational milestones, professional experience and certifications</Link>, and a portfolio adorned with
            <Link to='/projects' className="text-blue-500"> diverse projects.</Link> Connect with me through the
            <Link to='/contact' className="text-blue-500"> contact form,</Link> and let's shape the future together.
          </p>
        </div>


        <hr className="border-slate-200" />
        <CTA />
      </motion.div>
    </section>
  )
}

export default BTS;