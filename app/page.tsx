"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  ChevronRight,
  Calendar,
  ArrowLeft,
  ExternalLink,
  ChevronLeft,
  Trophy,
} from "lucide-react";

// Define types for our data structures
type Skill = string;

type Project = {
  title: string;
  description: string;
  slug: string;
  fullDescription: string;
  images: string[];
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
};

type Experience = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

type Competition = {
  title: string;
  organizer: string;
  date: string;
  description: string;
  achievement: string;
  projectLink?: string;
};

// Sample data (replace with your own)
const skills: Skill[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Python",
  "Django",
  "HTML5",
  "CSS3",
  "Sass",
  "Tailwind CSS",
  "GraphQL",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Docker",
  "AWS",
  "Firebase",
  "Jest",
  "Cypress",
  "Webpack",
  "Babel",
];

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack online store built with React and Node.js, featuring real-time inventory management and secure payment processing.",
    slug: "e-commerce-platform",
    fullDescription: `
      This full-stack e-commerce platform was built using React for the frontend and Node.js with Express for the backend. 
      It features real-time inventory management, secure payment processing with Stripe, and a responsive design for optimal user experience across all devices.

      Key Features:
      - User authentication and authorization
      - Product catalog with search and filter functionality
      - Shopping cart with persistent storage
      - Checkout process with Stripe integration
      - Admin dashboard for inventory management
      - Order tracking and history for users

      Technologies Used:
      - Frontend: React, Redux, Styled-Components
      - Backend: Node.js, Express, MongoDB
      - Authentication: JWT
      - Payment Processing: Stripe
      - Deployment: Docker, AWS

      Challenges and Solutions:
      One of the main challenges was implementing real-time inventory updates to prevent overselling. This was solved by using WebSockets to push inventory changes to all connected clients instantly.

      Another challenge was optimizing the performance of the product catalog for large inventories. This was addressed by implementing server-side pagination and efficient database indexing.

      Future Improvements:
      - Implement a recommendation system based on user browsing history
      - Add a review and rating system for products
      - Integrate with multiple payment gateways for broader payment options
    `,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Stripe",
      "Docker",
      "AWS",
    ],
    githubLink: "https://github.com/yourusername/e-commerce-platform",
    liveLink: "https://your-ecommerce-platform.com",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack online store built with React and Node.js, featuring real-time inventory management and secure payment processing.",
    slug: "e-commerce-platform",
    fullDescription: `
      This full-stack e-commerce platform was built using React for the frontend and Node.js with Express for the backend. 
      It features real-time inventory management, secure payment processing with Stripe, and a responsive design for optimal user experience across all devices.

      Key Features:
      - User authentication and authorization
      - Product catalog with search and filter functionality
      - Shopping cart with persistent storage
      - Checkout process with Stripe integration
      - Admin dashboard for inventory management
      - Order tracking and history for users

      Technologies Used:
      - Frontend: React, Redux, Styled-Components
      - Backend: Node.js, Express, MongoDB
      - Authentication: JWT
      - Payment Processing: Stripe
      - Deployment: Docker, AWS

      Challenges and Solutions:
      One of the main challenges was implementing real-time inventory updates to prevent overselling. This was solved by using WebSockets to push inventory changes to all connected clients instantly.

      Another challenge was optimizing the performance of the product catalog for large inventories. This was addressed by implementing server-side pagination and efficient database indexing.

      Future Improvements:
      - Implement a recommendation system based on user browsing history
      - Add a review and rating system for products
      - Integrate with multiple payment gateways for broader payment options
    `,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Stripe",
      "Docker",
      "AWS",
    ],
    githubLink: "https://github.com/yourusername/e-commerce-platform",
    liveLink: "https://your-ecommerce-platform.com",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack online store built with React and Node.js, featuring real-time inventory management and secure payment processing.",
    slug: "e-commerce-platform",
    fullDescription: `
      This full-stack e-commerce platform was built using React for the frontend and Node.js with Express for the backend. 
      It features real-time inventory management, secure payment processing with Stripe, and a responsive design for optimal user experience across all devices.

      Key Features:
      - User authentication and authorization
      - Product catalog with search and filter functionality
      - Shopping cart with persistent storage
      - Checkout process with Stripe integration
      - Admin dashboard for inventory management
      - Order tracking and history for users

      Technologies Used:
      - Frontend: React, Redux, Styled-Components
      - Backend: Node.js, Express, MongoDB
      - Authentication: JWT
      - Payment Processing: Stripe
      - Deployment: Docker, AWS

      Challenges and Solutions:
      One of the main challenges was implementing real-time inventory updates to prevent overselling. This was solved by using WebSockets to push inventory changes to all connected clients instantly.

      Another challenge was optimizing the performance of the product catalog for large inventories. This was addressed by implementing server-side pagination and efficient database indexing.

      Future Improvements:
      - Implement a recommendation system based on user browsing history
      - Add a review and rating system for products
      - Integrate with multiple payment gateways for broader payment options
    `,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Stripe",
      "Docker",
      "AWS",
    ],
    githubLink: "https://github.com/yourusername/e-commerce-platform",
    liveLink: "https://your-ecommerce-platform.com",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack online store built with React and Node.js, featuring real-time inventory management and secure payment processing.",
    slug: "e-commerce-platform",
    fullDescription: `
      This full-stack e-commerce platform was built using React for the frontend and Node.js with Express for the backend. 
      It features real-time inventory management, secure payment processing with Stripe, and a responsive design for optimal user experience across all devices.

      Key Features:
      - User authentication and authorization
      - Product catalog with search and filter functionality
      - Shopping cart with persistent storage
      - Checkout process with Stripe integration
      - Admin dashboard for inventory management
      - Order tracking and history for users

      Technologies Used:
      - Frontend: React, Redux, Styled-Components
      - Backend: Node.js, Express, MongoDB
      - Authentication: JWT
      - Payment Processing: Stripe
      - Deployment: Docker, AWS

      Challenges and Solutions:
      One of the main challenges was implementing real-time inventory updates to prevent overselling. This was solved by using WebSockets to push inventory changes to all connected clients instantly.

      Another challenge was optimizing the performance of the product catalog for large inventories. This was addressed by implementing server-side pagination and efficient database indexing.

      Future Improvements:
      - Implement a recommendation system based on user browsing history
      - Add a review and rating system for products
      - Integrate with multiple payment gateways for broader payment options
    `,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Stripe",
      "Docker",
      "AWS",
    ],
    githubLink: "https://github.com/yourusername/e-commerce-platform",
    liveLink: "https://your-ecommerce-platform.com",
  },
  // Add more projects here...
];

const experiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "Tech Innovators Inc.",
    duration: "June 2023 - August 2023",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with the team to implement new features and improve existing ones. Participated in code reviews and agile development processes.",
  },
  {
    title: "Software Engineering Intern",
    company: "Tech Innovators Inc.",
    duration: "June 2023 - August 2023",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with the team to implement new features and improve existing ones. Participated in code reviews and agile development processes.",
  },
  // Add more experiences here...
];

const competitions: Competition[] = [
  {
    title: "Global Hackathon 2023",
    organizer: "TechGiants Inc.",
    date: "July 2023",
    description:
      "Developed an AI-powered personal finance assistant in 48 hours. Our team's solution won first place for its innovative use of natural language processing and machine learning algorithms.",
    achievement: "1st Place",
    projectLink: "https://github.com/yourusername/ai-finance-assistant",
  },
  {
    title: "Global Hackathon 2023",
    organizer: "TechGiants Inc.",
    date: "July 2023",
    description:
      "Developed an AI-powered personal finance assistant in 48 hours. Our team's solution won first place for its innovative use of natural language processing and machine learning algorithms.",
    achievement: "1st Place",
    projectLink: "https://github.com/yourusername/ai-finance-assistant",
  },
  // Add more competitions here...
];

export default function UnifiedPortfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    if (dialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [dialogOpen]);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  const sections = [
    { id: "about", title: "About", content: true },
    { id: "skills", title: "Skills", content: skills.length > 0 },
    { id: "experience", title: "Experience", content: experiences.length > 0 },
    { id: "projects", title: "Projects", content: projects.length > 0 },
    {
      id: "competitions",
      title: "Competitions",
      content: competitions.length > 0,
    },
    { id: "contact", title: "Contact", content: true },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${
        darkMode ? "from-gray-900 to-gray-800" : "from-blue-50 to-indigo-100"
      } text-foreground transition-colors duration-300`}
    >
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/90 border-b border-primary/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#about">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-primary">
            Jayant Parakh
          </h1>
          </a>
          <nav className="flex items-center space-x-4">
            {sections
              .filter((section) => section.content)
              .map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {section.title}
                </a>
              ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="py-20 mb-16 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              <div className="md:w-2/3">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  About Me
                </h2>
                <p className="text-lg leading-relaxed">
                  Hello! I'm a passionate developer with a keen interest in
                  creating elegant and efficient solutions. I love to learn new
                  technologies and apply them to solve real-world problems. With
                  a background in computer science, hands-on experience through
                  internships, and a track record of success in coding
                  competitions, I strive to create impactful and user-friendly
                  applications.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D03AQELATKIqFNCww/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726073382266?e=1735776000&v=beta&t=UpnwM1fC1ne-S3RDlim7dKbXN8GDQcLbRp7t1Hcmx4w"
                    alt="Jayant Parakh"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {skills.length > 0 && (
          <section id="skills" className="mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {experiences.length > 0 && (
          <section id="experience" className="mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      <Calendar className="inline-block mr-2 h-4 w-4" />
                      {exp.duration}
                    </p>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section id="projects" className="mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          onClick={() => {
                            setSelectedProject(project);
                            setCurrentImageIndex(0);
                          }}
                        >
                          View Details <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{project.title}</DialogTitle>
                          <DialogDescription>
                            {project.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          {project.images.length > 0 && (
                            <div className="relative aspect-video mb-4">
                              <Image
                                src={project.images[currentImageIndex]}
                                alt={`${project.title} screenshot ${
                                  currentImageIndex + 1
                                }`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                              />
                              {project.images.length > 1 && (
                                <>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                                    onClick={prevImage}
                                  >
                                    <ChevronLeft className="h-6 w-6" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                    onClick={nextImage}
                                  >
                                    <ChevronRight className="h-6 w-6" />
                                  </Button>
                                </>
                              )}
                            </div>
                          )}
                          <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="w-full justify-start">
                              <TabsTrigger value="overview">
                                Overview
                              </TabsTrigger>
                              <TabsTrigger value="features">
                                Features
                              </TabsTrigger>
                              <TabsTrigger value="technologies">
                                Technologies
                              </TabsTrigger>
                              <TabsTrigger value="challenges">
                                Challenges
                              </TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview" className="mt-4">
                              <h3 className="text-lg font-semibold mb-2">
                                Project Overview
                              </h3>
                              <p className="whitespace-pre-line">
                                {
                                  project.fullDescription.split(
                                    "Key Features:"
                                  )[0]
                                }
                              </p>
                            </TabsContent>
                            <TabsContent value="features" className="mt-4">
                              <h3 className="text-lg font-semibold mb-2">
                                Key Features
                              </h3>
                              <ul className="list-disc pl-5 space-y-1">
                                {project.fullDescription
                                  .split("Key Features:")[1]
                                  .split("Technologies Used:")[0]
                                  .split("\n")
                                  .filter((line) => line.trim().startsWith("-"))
                                  .map((feature, index) => (
                                    <li key={index}>
                                      {feature.trim().substring(1).trim()}
                                    </li>
                                  ))}
                              </ul>
                            </TabsContent>
                            <TabsContent value="technologies" className="mt-4">
                              <h3 className="text-lg font-semibold mb-2">
                                Technologies Used
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </TabsContent>
                            <TabsContent value="challenges" className="mt-4">
                              <h3 className="text-lg font-semibold mb-2">
                                Challenges and Solutions
                              </h3>
                              <p>
                                {project.fullDescription
                                  .split("Challenges and Solutions:")[1]
                                  .split("Future Improvements:")[0]
                                  .trim()}
                              </p>
                            </TabsContent>
                          </Tabs>
                          <div className="mt-4 flex gap-4">
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button variant="outline">
                                  <Github className="mr-2 h-4 w-4" /> View on
                                  GitHub
                                </Button>
                              </a>
                            )}
                            {project.liveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button>
                                  <ExternalLink className="mr-2 h-4 w-4" /> View
                                  Live Project
                                </Button>
                              </a>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {competitions.length > 0 && (
          <section id="competitions" className="mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Competitions
            </h2>
            <div className="space-y-6">
              {competitions.map((competition, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{competition.title}</CardTitle>
                    <CardDescription>{competition.organizer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      <Calendar className="inline-block mr-2 h-4 w-4" />
                      {competition.date}
                    </p>
                    <p className="mb-2">{competition.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      <span className="font-semibold">
                        {competition.achievement}
                      </span>
                    </div>
                    {competition.projectLink && (
                      <a
                        href={competition.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline">
                          <Github className="mr-2 h-4 w-4" /> View Project
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <section id="contact" className="mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Contact Me
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              {
                icon: Mail,
                text: "Email",
                href: "mailto:your.email@example.com",
              },
              {
                icon: Linkedin,
                text: "LinkedIn",
                href: "https://www.linkedin.com/in/yourprofile",
              },
              {
                icon: Github,
                text: "GitHub",
                href: "https://github.com/yourusername",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.text}
                </Button>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-muted py-4">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
