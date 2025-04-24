export interface WorkExperience {
  title: string;
  period: string;
  mainBullets: string[];
  additionalBullets: string[];
}

export interface TechCategory {
  title: string;
  items: string[];
}

export const techStackSections: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      "React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3",
      "TailwindCSS, Bootstrap, Shadcn UI",
    ],
  },
  {
    title: "State Management",
    items: [
      "React Hooks (useState, useEffect, useCallback, useContext)",
      "Context API, Redux",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js, Express.js, MongoDB, Firebase, REST APIs",
      "SQL (MySQL, PostgreSQL)",
    ],
  },
  {
    title: "Programming Languages",
    items: ["JavaScript (ES6+), TypeScript", "Java, C#, C, Python, SQL"],
  },
  {
    title: "Authentication & Security",
    items: ["JSON Web Tokens (JWT), OAuth, Firebase Authentication"],
  },
  {
    title: "Development & Deployment Tools",
    items: [
      "Version Control: Git, GitHub, GitLab",
      "CI/CD & Deployment: GitHub Actions, Vercel, Netlify",
      "Testing & Code Quality: Jest, React Testing Library",
      "Code Formatting: ESLint, Prettier",
    ],
  },
  {
    title: "Design & Collaboration Tools",
    items: [
      "UX/UI Design: Figma, Wireframing, Prototyping, User Flow Diagrams",
      "Project Management: Notion, Airtable",
      "Communication: Slack, Discord, Zoom",
    ],
  },
  {
    title: "Softwares & Platforms",
    items: [
      "E-commerce & CMS: WordPress",
      "Automation & Productivity: Airtable Forms, Google Workspace, Microsoft 365",
      "Social Media & Content Management: Facebook Business Suite, Instagram, Canva, Adobe Photoshop",
    ],
  },
];

export const workExperiences: WorkExperience[] = [
  {
    title: "Freelance Software Developer",
    period: "January 2024 - Present",
    mainBullets: [
      "Built and maintained scalable project repositories using Git and GitHub, with structured branching strategies, clear PR workflows, and comprehensive README documentation to support team collaboration and smooth onboarding.",
      "Translated detailed design specs and Figma mockups into fully responsive, accessible React components, following atomic design principles and ensuring implementation accuracy across platforms and browsers.",
      "Worked closely with a senior developer to implement consistent UI systems, aligning with accessibility standards and design guidelines to deliver polished user experiences.",
    ],
    additionalBullets: [
      "Developed responsive, cross-browser compatible layouts using Tailwind CSS, ensuring visual consistency and performance across mobile and desktop devices.",
      "Created and maintained reusable UI components, improving development speed and consistency across features by applying React best practices and modular design.",
      "Authored detailed internal documentation and setup guides to standardize development practices and reduce ramp-up time for new contributors.",
    ],
  },
  {
    title: "Marketing Consultant | Technology Advisor | Customer Support | VA",
    period: "July 2020 - September 2022",
    mainBullets: [
      "Delivered comprehensive virtual assistance services to small businesses, providing strategic administrative support and workflow optimization to enhance operational efficiency during the pandemic.",
      "Developed and executed targeted social media management strategies, creating engaging content that significantly improved brand visibility and audience interaction for diverse client portfolios.",
      "Implemented advanced productivity ecosystems using tools like Notion, Airtable, and Trello, revolutionizing team collaboration and task management for small businesses and entrepreneurs.",
    ],
    additionalBullets: [
      "Provided specialized product photography services, dramatically enhancing clients' marketing materials and e-commerce platform visual presentations to drive customer engagement.",
      "Offered expert technology advisory services, guiding clients through cost-effective remote work technology selections and ensuring optimal digital infrastructure investments.",
      "Delivered comprehensive technical support, including computer repair and troubleshooting, enabling small businesses to maintain seamless digital operations in a rapidly evolving work environment.",
    ],
  },
  {
    title: "Online Department Lead | Sales/Branch Supervisor",
    period: "November 2018 - June 2020",
    mainBullets: [
      "Spearheaded digital transformation at I Click Digishop Corp, revitalizing the company's e-commerce website and mobile app to enhance online customer experience and drive sales growth.",
      "Managed comprehensive digital presence across multiple platforms, including social media, website, and mobile app, strategically curating content and ensuring timely, engaging customer interactions.",
      "Led cross-departmental initiatives, collaborating with marketing, accounting, HR, operations, and warehouse teams to streamline business processes and achieve organizational objectives.",
    ],
    additionalBullets: [
      "Developed and implemented innovative social media marketing strategies that significantly boosted customer engagement and brand visibility across Facebook and Instagram platforms.",
      "Orchestrated the entire online ordering process, from order receipt to client delivery, ensuring a seamless and satisfactory customer experience while consistently exceeding sales targets.",
      "Directed a creative team of graphic designers and IT staff, producing compelling digital marketing materials and maintaining a cohesive brand identity across all online channels.",
    ],
  },
];

export interface EducationItem {
  text: string;
  prefix?: string;
}

export const educationItems: EducationItem[] = [
  {
    text: "B.S. in Computer Science: AMA East Rizal",
    prefix: "Coursework",
  },
  {
    text: "B.S. in Information Technology: Our Lady of Fatima University Antipolo",
    prefix: "Relevant Studies",
  },
];

export const certificationItems: EducationItem[] = [
  { text: "Web Development: Zuitt Coding Bootcamp" },
  { text: "SQL: Zuitt Coding Bootcamp" },
  { text: "Java: Zuitt Coding Bootcamp" },
  { text: "UX & UI Design: College of Arts and Technology" },
  {
    text: "Introduction to Front-end & Back-end: Meta (Facebook) via Coursera",
  },
  { text: "Foundation of UX & UX Design Process: Google via Coursera" },
];
