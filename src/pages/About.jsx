
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills,experiences} from '../constants'
import CTA from "../components/CTA";




const About = () => {
  return (
    <section className='max-container'>
    <h1 className='head-text'>
    Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
        Narendra
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        A passionate and aspiring Full Stack Developer. Excited to embark on a journey of creating innovative digital experiences.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center cursor-pointer'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
<h3 className='subhead-text'>
  Work Experience
</h3>
   <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Recent graduate with a passion for Full Stack Development, seeking opportunities to contribute and grow with one internship experience.
        </p>
      </div>
      <div className="mt-12 flex">
      <VerticalTimeline>
        {experiences.map((experience)=>(
             <VerticalTimelineElement
             key={experience.company_name}
             date={experience.date}
             iconStyle={{ background: experience.iconBg }}
             icon={
               <div className='flex justify-center items-center w-full h-full'>
                 <img
                   src={experience.icon}
                   alt={experience.company_name}
                   className='w-[80%] h-[80%] object-contain'
                 />
               </div>
             }
             contentStyle={{
               borderBottom: "8px",
               borderStyle: "solid",
               borderBottomColor: experience.iconBg,
               boxShadow: "none",
             }}
           >
            <div>
              <h3 className='text-black text-xl font-poppins' 
              style={{margin:0}}>
                {experience.title}
              </h3>
              <p className='text-black-500 font-medium font-base' style={{margin:'5px 0px'}}>
                {experience.company_name}
              </p>
            </div>
            <ul className='my-5 list-disc ml-5 space-y-2'>
             {experience.points.map((point, index)=>(
              <li key={`experience-point-${index}`} className='text-black-500/80 font-normal pl-1 text-sm'>
                {point}
              </li>
             ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      </div>
      </div>
      <div>
        <hr className='border-slate-300'/>
        <CTA/>
      </div>
    </section>
  )
}

export default About