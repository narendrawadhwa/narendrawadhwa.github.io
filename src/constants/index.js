const images = import("../assets/images");
const icons = import("../assets/icons");

const codsoftImage = await images.then((module) => module.codsoft);
const inderdeepImage = await images.then((module) => module.inderdeep);

const contactIcon = await icons.then((module) => module.contact);
const cssIcon = await icons.then((module) => module.css);
const expressIcon = await icons.then((module) => module.express);
const gitIcon = await icons.then((module) => module.git);
const githubIcon = await icons.then((module) => module.github);
const htmlIcon = await icons.then((module) => module.html);
const javascriptIcon = await icons.then((module) => module.javascript);
const linkedinIcon = await icons.then((module) => module.linkedin);
const mongodbIcon = await icons.then((module) => module.mongodb);
const motionIcon = await icons.then((module) => module.motion);
const muiIcon = await icons.then((module) => module.mui);
const nodejsIcon = await icons.then((module) => module.nodejs);
const jobportalIcon = await icons.then((module) => module.jobportal);
const reactIcon = await icons.then((module) => module.react);
const reduxIcon = await icons.then((module) => module.redux);
const summizIcon = await icons.then((module) => module.summiz);
const tailwindcssIcon = await icons.then((module) => module.tailwindcss);
const threadsIcon = await icons.then((module) => module.threads);
const typescriptIcon = await icons.then((module) => module.typescript);
const javaIcon = await icons.then((module) => module.java);
const dsaIcon = await icons.then((module) => module.dsa);
const mysqlIcon = await icons.then((module) => module.mysql);
const emailjsIcon = await icons.then((module) => module.emailjs);
const movieticketIcon = await icons.then((module) => module.movieticket);
const eshopIcon = await icons.then((module) => module.eshop);


export const skills = [
    {
        imageUrl: cssIcon,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: expressIcon,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: gitIcon,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: githubIcon,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: htmlIcon,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascriptIcon,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodbIcon,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motionIcon,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: muiIcon,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejsIcon,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: reactIcon,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: reduxIcon,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcssIcon,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescriptIcon,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: javaIcon,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: dsaIcon,
        name: "DSA",
        type: "Backend",
    },
    {
        imageUrl: mysqlIcon,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: emailjsIcon,
        name: "Email JS",
        type: "",
    },
];

 
export const experiences = [
    {
      title: "Web Development Intern",
      company_name: "CodSoft",
      icon: codsoftImage,
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
      icon: inderdeepImage,
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
        iconUrl: contactIcon,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: githubIcon,
        link: 'https://github.com/narendrawadhwa',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedinIcon,
        link: 'https://www.linkedin.com/in/narendrawadhwa',
    }
];

export const projects = [
    {
        iconUrl: jobportalIcon,
        theme: 'btn-back-red',
        name: 'HireSync Central',
        description: 'Engineered a robust HireSync Central (a Full Stack Job Portal) with seamless user interfaces for registration, login, job exploration, and applications for job seekers and employers. Efficiently integrated category and location filtering.',
        link: 'https://github.com/narendrawadhwa/CodSoft/tree/main/job-board',
    },
    {
        iconUrl: threadsIcon,
        theme: 'btn-back-green',
        name: 'Mystic Krishna Reverence',
        description: 'Created a heartfelt tribute to Lord Krishna, covering his iconography, life events, key figures, festivals and 108 names from the Sahastranama with a flute-shaped cursor and background flute music.',
        link: 'https://github.com/narendrawadhwa/CodSoft/tree/main/tribute-page'
    },
    {
        iconUrl: movieticketIcon,
        theme: 'btn-back-blue',
        name: 'CineCore Engine',
        description: 'Developed the Backend Engine for CineCore, a robust backend system that empowers users to seamlessly explore upcoming and released movies. Allowing users to efficiently filter released movies, access comprehensive details including genres, artists, and trailers and seamless booking of movie tickets.',
        link: 'https://github.com/narendrawadhwa/backend-project',
    },
    {
        iconUrl: eshopIcon,
        theme: 'btn-back-pink',
        name: 'InfinityCart Bazaar',
        description: 'Designed and implemented an engaging frontend for InfinityCart Bazaar (an E-commerce site), seamlessly connected with a powerful backend. The interfaces include user-friendly login/signup, product showcases, detailed product information, and an efficient order creation process. ',
        link: 'https://github.com/narendrawadhwa/eshop-project',
    },
    {
        iconUrl: summizIcon,
        theme: 'btn-back-yellow',
        name: 'InkVoyage',
        description: 'Crafted an engaging blog project with a user-friendly homepage, create blog, edit blog, and blogs page. The platform includes interactive features for commenting and liking, enhancing the overall user experience.',
        link: 'https://github.com/narendrawadhwa/upgradproject',
    }
];