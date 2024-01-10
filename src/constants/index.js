
import {
    codsoft, inderdeep
} from '../assets/images';

import {
contact,
css,
express, 
git,
html,
javascript, 
linkedin,
mongodb,
motion,
mui,
nodejs,
jobportal,
react,
redux,
summiz,
tailwindcss,
threads,
typescript,
java,
dsa,
mysql,
emailjs,
movieticket,
eshop, 
github
} from '../assets/icons';

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: dsa,
        name: "DSA",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: emailjs,
        name: "Email JS",
        type: "",
    },
];

 
export const experiences = [
    {
      title: "Web Development Intern",
      company_name: "CodSoft",
      icon: codsoft,
      iconBg: "#a15a60",
      date: "Sep 2023 - Oct 2023",
      points: [
        "Constructed a Tribute Page dedicated to Shree Krishna, highlighting the preservation of cultural heritage.",
        "Developed a Full Stack Job Portal project with a user-centric approach, benefiting job seekers and employers through a feature-rich platform.",        
      ],
    },
    {
      title: "Accounting Clerk",
      company_name: "Inderdeep Construction Co.",
      icon: inderdeep,
      iconBg: "#05abf2",
      date: "March 2020 - Nov 2020",
      points: [
      "Successfully maintained precise financial records, meticulously tracking transactions, invoices, and receipts.",
      "Implemented rigorous proofreading procedures, ensuring error-free record-keeping and conducting in-depth report reviews to identify and rectify discrepancies.",
      ],
    },
  ];
  
export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/3D_Portfolio_App/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/narendrawadhwa',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/narendrawadhwa',
    }
];

export const projects = [
    {
        iconUrl: jobportal,
        theme: 'btn-back-red',
        name: 'HireSync Central',
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Material UI", "JWT", "Redux"],
        description: 'Engineered a robust HireSync Central (a Full Stack Job Portal) with seamless user interfaces for registration, login, job exploration, and applications for job seekers and employers. Efficiently integrated category and location filtering.',
        link: 'https://github.com/narendrawadhwa/CodSoft/tree/main/job-board',
      },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Mystic Krishna Reverence',
        skills: ["HTML", "CSS", "JavaScript", "MongoDB"],
        description: 'Created a heartfelt tribute to Lord Krishna, covering his iconography, life events, key figures, festivals and 108 names from the Sahastranama with a flute-shaped cursor and background flute music.',
        link: 'https://github.com/narendrawadhwa/CodSoft/tree/main/tribute-page'
    },
    {
        iconUrl: movieticket,
        theme: 'btn-back-blue',
        name: 'CineCore Engine',
        skills: ["Node.js", "Express.js", "MongoDB"],
        description: 'Developed the Backend Engine for CineCore, a robust backend system that empowers users to seamlessly explore upcoming and released movies. Allowing users to efficiently filter released movies, access comprehensive details including genres, artists, and trailers and seamless booking of movie tickets.',
        link: 'https://github.com/narendrawadhwa/backend-project',
    },
    {
        iconUrl: eshop,
        theme: 'btn-back-pink',
        name: 'InfinityCart Bazaar',
        skills: ["React.js", "Material UI"],
        description: 'Designed and implemented an engaging frontend for InfinityCart Bazaar (an E-commerce site), seamlessly connected with a powerful backend. The interfaces include user-friendly login/signup, product showcases, detailed product information, and an efficient order creation process. ',
        link: 'https://github.com/narendrawadhwa/eshop-project',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'InkVoyage',
        skills: ["HTML", "CSS","JavaScript"],
        description: 'Crafted an engaging blog project with a user-friendly homepage, create blog, edit blog, and blogs page. The platform includes interactive features for commenting and liking, enhancing the overall user experience.',
        link: 'https://github.com/narendrawadhwa/upgradproject',
    }
];