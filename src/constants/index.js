import { meta, shopify, codsoft, inderdeep } from "../assets/images";
import {
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    // nextjs,
    nodejs,
    jobportal,
    react,
    redux,
    // sass,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    dsa,
    mysql,
    emailjs,
    docker,
    movieticket,
    eshop
} from "../assets/icons";

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
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
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
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
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


// export const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#fbc3bc",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#b7e4c7",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#a2d2ff",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];

 
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
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: jobportal,
        theme: 'btn-back-red',
        name: 'HireSync Central',
        description: 'Engineered a robust HireSync Central (a Full Stack Job Portal) with seamless user interfaces for registration, login, job exploration, and applications for job seekers and employers. Efficiently integrated category and location filtering.',
        link: 'https://github.com/narendrawadhwa/CodSoft/tree/main/job-board',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Mystic Krishna Reverence',
        description: 'Created a heartfelt tribute to Lord Krishna, covering his iconography, life events, key figures, festivals and 108 names from the Sahastranama with a flute-shaped cursor and background flute music.',
        link: 'https://github.com/narendrawadhwa/CodSoft/tree/main/tribute-page'
    },
    {
        iconUrl: movieticket,
        theme: 'btn-back-blue',
        name: 'CineCore Engine',
        description: 'Developed the Backend Engine for CineCore, a robust backend system that empowers users to seamlessly explore upcoming and released movies. Allowing users to efficiently filter released movies, access comprehensive details including genres, artists, and trailers and seamless booking of movie tickets.',
        link: 'https://github.com/narendrawadhwa/backend-project',
    },
    {
        iconUrl: eshop,
        theme: 'btn-back-pink',
        name: 'InfinityCart Bazaar',
        description: 'Designed and implemented an engaging frontend for InfinityCart Bazaar (an E-commerce site), seamlessly connected with a powerful backend. The interfaces include user-friendly login/signup, product showcases, detailed product information, and an efficient order creation process. ',
        link: 'https://github.com/narendrawadhwa/eshop-project',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'InkVoyage',
        description: 'Crafted an engaging blog project with a user-friendly homepage, create blog, edit blog, and blogs page. The platform includes interactive features for commenting and liking, enhancing the overall user experience.',
        link: 'https://github.com/narendrawadhwa/upgradproject',
    }
];