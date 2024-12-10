'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Github, ExternalLink, Calendar, Users, Code, Moon, Sun } from "lucide-react"
import { projects } from '../../data'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true) // Add loading state

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    setLoading(false) // Finish loading once dark mode is set
  }, [])

  useEffect(() => {
    if (!loading) { // Avoid toggling on initial load
      document.documentElement.classList.toggle("dark", darkMode)
      localStorage.setItem("darkMode", darkMode.toString())
    }
  }, [darkMode, loading])

  if (loading) return null // Prevent rendering until theme is set

  if (!project) {
    return (
      <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="mb-4">Sorry, we couldn't find the project you're looking for.</p>
          <Link href="/projects">
            <Button>Return to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/projects">
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {project.title}
            </h1>
            <p className="text-xl mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
            <div className="flex gap-4 mb-6">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Button>
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <ExternalLink className="mr-2 h-4 w-4" /> View Live Project
                  </Button>
                </a>
              )}
            </div>
          </div>
          {project.images.length > 0 && (
            <div className="relative aspect-video">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="rounded-lg"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        </div>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
                <p className="whitespace-pre-line mb-6">{project.fullDescription.split("Key Features:")[0]}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    <span>Duration: 1 month</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    <span>Team size: 1 member</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="mr-2 h-5 w-5 text-primary" />
                    <span>Lines of code: 2,000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="features" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-5">
                  {project.fullDescription
                    .split("Key Features:")[1]
                    .split("Technologies Used:")[0]
                    .split("\n")
                    .filter((line) => line.trim().startsWith("-"))
                    .map((feature, index) => (
                      <li key={index} className="ml-2">{feature.trim().substring(1).trim()}</li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="challenges" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">Challenges and Solutions</h3>
                <p className="mb-4">{project.fullDescription.split("Challenges and Solutions:")[1].split("Future Improvements:")[0].trim()}</p>
                <h4 className="text-xl font-semibold mb-2">Future Improvements</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.fullDescription
                    .split("Future Improvements:")[1]
                    .split("\n")
                    .filter((line) => line.trim().startsWith("-"))
                    .map((improvement, index) => (
                      <li key={index}>{improvement.trim().substring(1).trim()}</li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
