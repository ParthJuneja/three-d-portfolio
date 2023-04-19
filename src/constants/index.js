import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  dropspot,
  poss,
  tatsat,
  kohsha,
  tripguide,
  threejs,
  chat,
  notif,
  bitcoin,
  ticket,
  gps,
  ecommerce,
  wallet,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
    key:  'web'
  },
  {
    title: "Mobile App Development",
    icon: mobile,
    key:  'mobile'
  },
  {
    title: "UI/UX Design",
    icon: backend,
    key:  'uiux'
  },
  {
    title: "Digital Marketing",
    icon: creator,
    key:  'digital'
  },
];

const features = [
  {
    icon: chat,
    title: "Chat",
    description: "Website"
  },
  {
    icon: notif,
    title: "Notifications",
    description: "Website"
  },
  {
    icon: bitcoin,
    title: "Bitcoin",
    description: "Website"
  },
  {
    icon: ticket,
    title: "Booking System",
    description: "Website"
  },
  {
    icon: gps,
    title: "GPS",
    description: "Website"
  },
  {
    icon: ecommerce,
    title: "E-Commerce",
    description: "Website"
  },
  {
    icon: wallet,
    title: "Wallet",
    description: "Website"
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX Design",
    company_name: "Figma",
    icon: starbucks,
    iconBg: "#292c33",
    date: "March 2020 - April 2021",
    points: [
      "We design and develop websites and mobile apps that are beautiful, functional, and easy to use.",
      "From scratch, designs are created to meet your business goals and objectives.",
      "Responsive and modern designs that are easy to navigate and use.",
      "Beautiful UI and easy to use UX.",
    ],
  },
  {
    title: "ReactJS / React Native Developmet",
    company_name: "Web and App",
    icon: starbucks,
    iconBg: "#292c33",
    date: "March 2020 - April 2021",
    points: [
      "From easy solution to complex structures, we build apps and websites",
      "Wordpress Django MongoDB AWS Services",
      "Express.js Node.js React.js React Native",
      "Google Search Console Sitemap  C#  C++  Python  Dart",
      "HTML CSS  JS APIs Integration  Ad mob  Payment gateways MySQL Database Management"
    ],
  },
  {
    title: "Flutter Development",
    company_name: "Android",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Shopify Development",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Creating ecommerce websites using Shopify",
      "Creating custom themes for Shopify",
      "Helping you ship your product to your customers without any hassle",
      "Helping you with your marketing and advertising campaigns"
    ],
  },
  {
    title: "Artificial Intelligence",
    company_name: "Python",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "With the help of machine learning models, we solve real-world problems",
      "Make predictions using regression and classification algorithms",
      "Build recommender systems using collaborative filtering",
      "Help your website with machine learning",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Vorps proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Vorps is the best web development company I've ever worked with. They're fast, efficient, and very professional.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After they optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bonzo Tambola",
    description:
      "App to play Tambola, a popular Indian lottery game. It is a multiplayer game where players can play with their friends and family.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "/BonzoTambola",
  },
  {
    name: "Vows n Views",
    description:
      "A Wedding Planning App that helps couples plan their wedding and manage their guest list. It also helps them find vendors for their wedding.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "DropSpot",
    description:
      "A platform for people to find stores and deliver their favorite products to their doorstep. It also helps them find the best deals and offers.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs-expressjs",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: dropspot,
    source_code_link: "https://dropspot.in/",
  },
  {
    name: "Poss",
    description:
      "Website for dog parents to find the best dog products and services. It also helps them find dog-friendly places and events.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs-expressjs",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: poss,
    source_code_link: "https://possindia.in/",
  },
  {
    name: "Tatsat Wellness",
    description:
      "Yoga as a lifestyle, Body & Soul. Tatsat has interesting blog posts on creativity and design",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: tatsat,
    source_code_link: "https://tatsat.club/",
  },
  {
    name: "Kohsha",
    description:
      "The range of products is procured from hand-picked local farms from the most nurtured soil in India, the Himalayan Ranges. ",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: kohsha,
    source_code_link: "https://www.kohsha.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, features };
