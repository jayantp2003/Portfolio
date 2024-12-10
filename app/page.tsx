'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Moon, Sun, Calendar, Trophy, ChevronRight, Code, Briefcase, Award, Menu } from "lucide-react"
import { skills, projects, experiences, competitions } from "./data"

export default function UnifiedPortfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!loading) {
      document.documentElement.classList.toggle("dark", darkMode)
      localStorage.setItem("darkMode", darkMode.toString())
    }
  }, [darkMode, loading])

  if (loading) return null

  const sections = [
    { id: "about", title: "About", content: true },
    { id: "skills", title: "Skills", content: skills.length > 0 },
    { id: "experience", title: "Experience", content: experiences.length > 0 },
    { id: "projects", title: "Projects", content: projects.length > 0 },
    { id: "competitions", title: "Competitions", content: competitions.length > 0 },
    { id: "contact", title: "Contact", content: true },
  ]

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} transition-colors duration-300`}>
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/90 border-b border-primary/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#about" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Jayant Parakh
          </a>
          <nav className="hidden md:flex items-center space-x-4">
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
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden bg-background border-t border-primary/10 py-2">
            {sections
              .filter((section) => section.content)
              .map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-4 py-2 hover:bg-primary/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {section.title}
                </a>
              ))}
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="py-20 mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                About Me
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-6">
                Hello! I'm a passionate developer with a keen interest in
                creating elegant and efficient solutions. I love to learn new
                technologies and apply them to solve real-world problems. With
                a background in computer science, hands-on experience through
                internships, and a track record of success in coding
                competitions, I strive to create impactful and user-friendly
                applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/projects">
                    <Code className="mr-2 h-4 w-4" /> View Projects
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4D03AQELATKIqFNCww/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726073382266?e=1735776000&v=beta&t=UpnwM1fC1ne-S3RDlim7dKbXN8GDQcLbRp7t1Hcmx4w"
                  alt="Jayant Parakh"
                  fill
                  className="rounded-full shadow-lg object-cover"
                  sizes="(max-width: 768px) 192px, (max-width: 1200px) 256px, 320px"
                />
              </div>
            </div>
          </div>
        </section>

        {skills.length > 0 && (
          <section id="skills" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="py-1 px-3 text-sm font-medium bg-primary/10 hover:bg-primary/50 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {experiences.length > 0 && (
          <section id="experience" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg md:text-xl">
                      <Briefcase className="mr-2 h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      <Calendar className="inline-block mr-2 h-4 w-4" />
                      {exp.duration}
                    </p>
                    <p className="text-sm md:text-base">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section id="projects" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {projects.slice(0, 3).map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors text-lg md:text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary">+{project.technologies.length - 3}</Badge>
                      )}
                    </div>
                    <Link href={`/projects/${project.slug}`}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        View Details <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link href="/projects">
                <Button variant="default" size="lg">
                  View All Projects <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </section>
        )}

        {competitions.length > 0 && (
          <section id="competitions" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Competitions
            </h2>
            <div className="space-y-6">
              {competitions.map((competition, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg md:text-xl">
                      <Award className="mr-2 h-5 w-5 text-primary" />
                      {competition.title}
                    </CardTitle>
                    <CardDescription>{competition.organizer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      <Calendar className="inline-block mr-2 h-4 w-4" />
                      {competition.date}
                    </p>
                    <p className="mb-2 text-sm md:text-base">{competition.description}</p>
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

        <section id="contact" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Contact Me
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    className="flex items-center p-4 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <item.icon className="w-6 h-6 mr-3 text-primary" />
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-muted py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Jayant Parakh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}