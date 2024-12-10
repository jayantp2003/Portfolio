export type Skill = string;

export type Project = {
  title: string;
  description: string;
  slug: string;
  fullDescription: string;
  images: string[];
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
};

export type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

export type Competition = {
  title: string;
  organizer: string;
  date: string;
  description: string;
  achievement: string;
  projectLink?: string;
};

export const skills: Skill[] = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "Python",
  "Java",
  "C++",
  "Flask",
  "HTML5",
  "CSS3",
  "Sass",
  "Tailwind CSS",
  "Bootstrap",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Docker",
  "Redis",
  "Azure",
  "GCP"
];

export const projects: Project[] = [
  {
    title: "E-commerce Backend",
    description: "A comprehensive backend system for an e-commerce platform built with Node.js, featuring access control, user management, and payment gateway integration.",
    slug: "e-commerce-backend",
    fullDescription: `
      This backend system for an e-commerce platform was developed using Node.js and MongoDB, with Azure Blob Storage for media management. It supports full CRUD operations, user authentication, and an admin dashboard for inventory control.

      Key Features:
      - JWT-based user authentication and access control
      - Product catalog management with search and filtering
      - Shopping cart and checkout functionality
      - Integrated payment gateway with PayPal for secure transactions
      - Admin panel for managing products and viewing sales analytics
      - Real-time order tracking and history

      Technologies Used:
      - Backend: Node.js, MongoDB, Azure Blob Storage
      - Authentication: JWT
      - Payment Processing: PayPal
      - Deployment: Docker, Azure

      Challenges and Solutions:
      Ensuring data consistency during peak hours was a challenge; WebSockets and Docker orchestration were used to handle load balancing and real-time updates.

      Future Improvements:
      - Implement a recommendation system for user-specific product suggestions
      - Integrate product reviews and ratings to enhance user feedback
    `,
    images: [
      "https://i.imgur.com/O6VjW9S.png",
    ],
    technologies: [
      "Node.js",
      "MongoDB",
      "JWT",
      "Azure Blob Storage",
      "Azure",
    ],
    githubLink: "https://github.com/jayantp2003/Ekartbackend/",
  },
  // Add other projects here...
];

export const experiences: Experience[] = [
  {
    title: "Server Technology Intern",
    company: "Oracle",
    duration: "May 2024 - July 2024",
    description: "Developed CI/CD pipeline for building Spring Boot from source using gradle as the build automation tool. Performed Malware scanning using Grype and Trivy. Built Spring Boot web applications on generated artifacts through the pipeline and deployed them on Weblogic Server within Oracle Private Network.",
  },
  {
    title: "Developer Intern",
    company: "SpiderRock Platform Services, LLC",
    duration: "Feb 2024 - March 2024",
    description: "Developed API documentation of SpiderRock's MLink product utilising mintlify. Integrated real time api testing playground in the documentation",
  },
  // Add other experiences here...
];

export const competitions: Competition[] = [
  {
    title: "Global Hackathon 2023",
    organizer: "TechGiants Inc.",
    date: "July 2023",
    description: "Developed an AI-powered personal finance assistant in 48 hours. Our team's solution won first place for its innovative use of natural language processing and machine learning algorithms.",
    achievement: "1st Place",
    projectLink: "https://github.com/yourusername/ai-finance-assistant",
  },
  // Add other competitions here...
];