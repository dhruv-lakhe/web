"use client"

import { FloatingElements } from "@/components/floating-elements";
import { ParticlesContainer } from "@/components/particles-container";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code,
  Database,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Server,
  Sparkles,
  User,
  X,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function PortfolioPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const sections = [
        { id: "hero", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "experience", ref: experienceRef },
        { id: "skills", ref: skillsRef },
        { id: "education", ref: educationRef },
        { id: "contact", ref: contactRef },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <ParticlesContainer />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-black/20 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-amber-500"
          >
            <span className="relative">
              Dhruv Lakhe
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-orange-400 via-red-500 to-amber-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </motion.div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          <motion.nav
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <NavLink href="#about" isActive={activeSection === "about"}>
              About
            </NavLink>
            <NavLink href="#experience" isActive={activeSection === "experience"}>
              Experience
            </NavLink>
            <NavLink href="#skills" isActive={activeSection === "skills"}>
              Skills
            </NavLink>
            <NavLink href="#education" isActive={activeSection === "education"}>
              Education
            </NavLink>
            <NavLink href="#contact" isActive={activeSection === "contact"}>
              Contact
            </NavLink>
            <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 hover:from-orange-600 hover:via-red-600 hover:to-amber-600 text-white border-0 shadow-glow-orange">
              Resume <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 right-0 bg-black/95 border-b border-orange-500/20 py-4 px-6 flex flex-col gap-4 md:hidden overflow-hidden"
            >
              <NavLink href="#about" onClick={toggleMenu} isActive={activeSection === "about"}>
                About
              </NavLink>
              <NavLink href="#experience" onClick={toggleMenu} isActive={activeSection === "experience"}>
                Experience
              </NavLink>
              <NavLink href="#skills" onClick={toggleMenu} isActive={activeSection === "skills"}>
                Skills
              </NavLink>
              <NavLink href="#education" onClick={toggleMenu} isActive={activeSection === "education"}>
                Education
              </NavLink>
              <NavLink href="#contact" onClick={toggleMenu} isActive={activeSection === "contact"}>
                Contact
              </NavLink>
              <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 hover:from-orange-600 hover:via-red-600 hover:to-amber-600 text-white border-0 w-full shadow-glow-orange">
                Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section ref={heroRef} id="hero" className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-orange-600/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-red-600/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>
            <FloatingElements />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <div className="flex-1 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 text-sm"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-400" /> Software Developer | Freelancer
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-4xl md:text-6xl font-bold leading-tight"
                >
                  DHRUV{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-amber-500 animate-text-gradient">
                    LAKHE
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg text-zinc-300 max-w-xl"
                >
                  Full-stack Developer with experience in designing and implementing business management systems,
                  including CRM, invoicing, inventory management, and automation systems.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 hover:from-orange-600 hover:via-red-600 hover:to-amber-600 text-white border-0 shadow-glow-orange group">
                    <span>View My Work</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button className="bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 hover:from-orange-600 hover:via-red-600 hover:to-amber-600 text-white border-0 shadow-glow-orange">
              Resume
            </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative w-72 h-72 md:w-96 md:h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-orange-500/30 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-orange-600/50 to-red-600/50 p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="https://firebasestorage.googleapis.com/v0/b/nationalwaterproofingcom-b700d.appspot.com/o/gallery-images%2FWhatsApp%20Image%202025-04-20%20at%2021.00.56_b7908afb.jpg?alt=media&token=9be6d6ab-a32b-4049-8d51-b6503fed6cf7?height=400&width=400"
                        alt="Dhruv Lakhe"
                        width={400}
                        height={400}
                        className="rounded-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/40 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Animated elements around the profile image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Code className="h-6 w-6" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-amber-500 flex items-center justify-center text-white"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <Database className="h-5 w-5" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-orange-500/50 flex items-center justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section with Bento Grid */}
        <section ref={aboutRef} id="about" className="py-20 px-6 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-orange-600/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-red-600/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeader
              title="About Me"
              subtitle="My profile and expertise"
              delay={0.1}
              icon={<User className="h-6 w-6" />}
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
              {/* Profile Card - Larger */}
              <BentoCard
                title="Profile"
                icon={<User className="h-6 w-6" />}
                className="md:col-span-2 md:row-span-1"
                index={0}
                glowColor="from-orange-500 to-red-500"
              >
                <p className="text-zinc-300">
                  Results-driven Full-stack Developer with experience in designing and implementing business management
                  systems, including CRM, invoicing, inventory management, and automation systems. Adept at backend and
                  frontend development, with expertise in Django, MySQL, and cloud deployments.
                </p>
                <p className="text-zinc-300 mt-4">
                  Proven ability to optimize system performance, automate workflows, and customize open-source solutions
                  for diverse business needs. Passionate about leveraging technology to streamline business operations
                  and drive growth.
                </p>
              </BentoCard>

              {/* Contact Info Card */}
              <BentoCard
                title="Contact"
                icon={<Mail className="h-6 w-6" />}
                className="md:col-span-1 md:row-span-1"
                index={1}
                glowColor="from-red-500 to-amber-500"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-amber-400" />
                    <span>dhruvlakhe@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-amber-400" />
                    <span>Hermes Park, Pune 411001</span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <SocialLink icon={<Github className="h-5 w-5" />} href="https://github.com" />
                    <SocialLink icon={<Linkedin className="h-5 w-5" />} href="https://www.linkedin.com/in/dhruv-lakhe/" />
                  </div>
                </div>
              </BentoCard>

              {/* Skills Highlight Card */}
              <BentoCard
                title="Core Skills"
                icon={<Code className="h-6 w-6" />}
                className="md:col-span-1 md:row-span-1"
                index={2}
                glowColor="from-amber-500 to-orange-500"
              >
                <div className="grid grid-cols-2 gap-3">
                  <SkillBadge>Django</SkillBadge>
                  <SkillBadge>Python</SkillBadge>
                  <SkillBadge>Java</SkillBadge>
                  <SkillBadge>MySQL</SkillBadge>
                  <SkillBadge>Docker</SkillBadge>
                  <SkillBadge>Azure</SkillBadge>
                </div>
              </BentoCard>

              {/* Featured Project Card */}
              <BentoCard
                title="Featured Project"
                icon={<Briefcase className="h-6 w-6" />}
                className="md:col-span-2 md:row-span-1"
                index={3}
                glowColor="from-red-500 to-orange-500"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
                    All-in-one Business Suite
                  </h3>
                  <p className="text-zinc-300">
                    Comprehensive business management system including quotation & invoice management, CRM & lead
                    management, task planner, inventory management, automated mailing, expense management, admin panel,
                    and product master.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                      Django
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                      JavaScript
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                      MySQL
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                      IIS
                    </span>
                  </div>
                </div>
              </BentoCard>
            </div>
          </div>
        </section>

        {/* Experience Section - Bento Grid */}
        <section ref={experienceRef} id="experience" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Experience"
              subtitle="My professional journey"
              delay={0.1}
              icon={<Briefcase className="h-6 w-6" />}
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
              {/* Ashay Infotech Card */}
              {/* Ashay Infotech Card with Nested Projects */}
<BentoCard
  title="Ashay Infotech"
  icon={<Briefcase className="h-6 w-6" />}
  className="md:col-span-3 md:row-span-1"
  index={0}
  glowColor="from-amber-500 to-red-500"
>
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold">Software Development Intern</h3>
      <span className="text-sm text-zinc-400">2024 - May</span>
    </div>
    <p className="text-zinc-300 text-sm">
      Developed and implemented innovative software solutions for various projects under Ashay Infotech.
    </p>

    {/* Nested Projects */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Project 1 */}
      <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all hover:translate-y-[-5px] hover:shadow-glow-sm">
        <h4 className="font-medium mb-2">Business Suite</h4>
        <ul className="list-disc pl-4 text-sm text-zinc-300 space-y-1">
          <li>Quotation & Invoice management</li>
          <li>CRM & Lead management</li>
          <li>Task Planner</li>
          <li>Inventory management</li>
          <li>Automated Mailing</li>
          <li>Expense Management</li>
        </ul>
        <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                          HTML
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                          CSS
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                          JavaScript
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                          Firebase
                        </span>
                      </div>
      </div>

      {/* Project 2 */}
      <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all hover:translate-y-[-5px] hover:shadow-glow-sm">
        <h4 className="font-medium mb-2">Face Recognition System</h4>
        <p className="text-zinc-300 text-sm">
          Real-time face recognition with barcode technology for exam reporting.
        </p>
      </div>

      {/* Project 3 */}
      <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all hover:translate-y-[-5px] hover:shadow-glow-sm">
        <h4 className="font-medium mb-2">Dealer Outstanding Model</h4>
        <p className="text-zinc-300 text-sm">
          Designed a web model for managing dealer outstanding issues.
        </p>
      </div>

      {/* Project 4 */}
      <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all hover:translate-y-[-5px] hover:shadow-glow-sm">
        <h4 className="font-medium mb-2">Website Optimization</h4>
        <p className="text-zinc-300 text-sm">
          Reduced load time from 7-8 mins to under 40 seconds.
        </p>
      </div>
    </div>
  </div>
</BentoCard>


              {/* Freelancer Card */}
              <BentoCard
                title="Freelancer"
                icon={<Code className="h-6 w-6" />}
                className="md:col-span-3 md:row-span-1"
                index={5}
                glowColor="from-orange-500 to-red-500"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Full-stack Software Developer</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all hover:translate-y-[-5px] hover:shadow-glow-sm">
                      <h4 className="font-medium mb-2">National Waterproofing Company</h4>
                      <p className="text-zinc-300 text-sm">
                        Developed and deployed a website with a strong SEO score. Created a custom admin panel for easy
                        management of galleries, blogs, and content.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                          Node.js
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                          MySQL
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                          Bootstrap
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all hover:translate-y-[-5px] hover:shadow-glow-sm">
                      <h4 className="font-medium mb-2">Financity Club Portfolio</h4>
                      <p className="text-zinc-300 text-sm">
                        Developed and deployed a portfolio website for Financity Club at Bharati Vidyapeeth.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                          HTML
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                          CSS
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                          JavaScript
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-zinc-300 border border-orange-500/30">
                          Firebase
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all hover:translate-y-[-5px] hover:shadow-glow-sm">
                      <h4 className="font-medium mb-2">CRM Customization</h4>
                      <p className="text-zinc-300 text-sm">
                        Configured and customized open-source CRM solutions for multiple client companies, tailoring
                        features to meet specific business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </BentoCard>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Skills & Technologies"
              subtitle="Technical expertise and capabilities"
              delay={0.1}
              icon={<Zap className="h-6 w-6" />}
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkillCard
                icon={<Code className="h-6 w-6" />}
                title="Programming Languages"
                skills={["Advanced Java", "Python", "JavaScript", "HTML/CSS", "OOPs"]}
                delay={0.2}
                glowColor="from-orange-500 to-red-500"
              />
              <SkillCard
                icon={<Database className="h-6 w-6" />}
                title="Databases & Backend"
                skills={["MySQL", "Django", "Node.js", "REST APIs", "Docker"]}
                delay={0.3}
                glowColor="from-red-500 to-amber-500"
              />
              <SkillCard
                icon={<Server className="h-6 w-6" />}
                title="Infrastructure & Deployment"
                skills={["Linux", "Azure", "Webservers", "Virtual Machine Management", "Networking"]}
                delay={0.4}
                glowColor="from-amber-500 to-orange-500"
              />
            </div>
          </div>
        </section>

        {/* Education Section - Bento Grid */}
        <section ref={educationRef} id="education" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Education"
              subtitle="My academic background"
              delay={0.1}
              icon={<GraduationCap className="h-6 w-6" />}
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
              <BentoCard
                title="B.TECH in Computer Engineering"
                icon={<GraduationCap className="h-6 w-6" />}
                className="md:col-span-1 md:row-span-1"
                index={0}
                glowColor="from-red-500 to-orange-500"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">BVUCOEP</h3>
                    <span className="text-sm text-zinc-400">2023 - Pursuing</span>
                  </div>
                  <p className="text-zinc-300 text-sm">Currently in third year</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-medium">SGPA:</span>
                    <span className="text-amber-400 font-semibold">8.62</span>
                  </div>
                </div>
              </BentoCard>

              <BentoCard
                title="Diploma in Computer Engineering"
                icon={<GraduationCap className="h-6 w-6" />}
                className="md:col-span-1 md:row-span-1"
                index={1}
                glowColor="from-amber-500 to-red-500"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">BVJNIOT</h3>
                    <span className="text-sm text-zinc-400">2020 - 2023</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-medium">Percentage:</span>
                    <span className="text-amber-400 font-semibold">88%</span>
                  </div>
                </div>
              </BentoCard>

              <BentoCard
                title="X CBSE"
                icon={<GraduationCap className="h-6 w-6" />}
                className="md:col-span-1 md:row-span-1"
                index={2}
                glowColor="from-orange-500 to-amber-500"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">BLOSSOM PUBLIC SCHOOL</h3>
                    <span className="text-sm text-zinc-400">2019 - 2020</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-medium">Percentage:</span>
                    <span className="text-amber-400 font-semibold">75%</span>
                  </div>
                </div>
              </BentoCard>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="py-20 px-6 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-orange-600/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-red-600/20 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeader
              title="Get In Touch"
              subtitle="Let's work together on your next project"
              delay={0.1}
              icon={<Mail className="h-6 w-6" />}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="text-zinc-300 max-w-md">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/30 to-red-500/30 flex items-center justify-center border border-orange-500/30">
                      <Mail className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400">Email</p>
                      <p className="text-white">dhruvlakhe@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/30 to-red-500/30 flex items-center justify-center border border-orange-500/30">
                      <Globe className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400">Location</p>
                      <p className="text-white">Hermes Park, Pune 411001</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <SocialLink icon={<Github className="h-5 w-5" />} href="https://github.com" />
                    <SocialLink icon={<Linkedin className="h-5 w-5" />} href="https://linkedin.com" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30 hover:border-orange-500/50 transition-all">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-zinc-400">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-zinc-400">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-zinc-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-zinc-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 hover:from-orange-600 hover:via-red-600 hover:to-amber-600 text-white border-0 shadow-glow-orange">
                    Send Message <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-500/20 py-8 px-6 backdrop-blur-md bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-amber-500">
              Dhruv Lakhe
            </div>
            <p className="text-sm text-zinc-400 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex gap-4">
            <SocialLink icon={<Github className="h-5 w-5" />} href="https://github.com" />
            <SocialLink icon={<Linkedin className="h-5 w-5" />} href="https://linkedin.com" />
          </div>
        </div>
      </footer>
    </div>
  )
}

// Components
const NavLink = ({ href, children, onClick, isActive }) => {
  return (
    <Link
      href={href}
      className={`text-zinc-300 hover:text-white transition-colors relative group ${isActive ? "text-white" : ""}`}
      onClick={onClick}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-400 via-red-500 to-amber-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
      ></span>
    </Link>
  )
}

const SocialLink = ({ icon, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center hover:from-orange-500/40 hover:to-red-500/40 transition-colors border border-orange-500/30"
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 15px rgba(249, 115, 22, 0.5)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {icon}
    </motion.a>
  )
}

const SectionHeader = ({ title, subtitle, delay = 0, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center space-y-4"
    >
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500/30 to-red-500/30 flex items-center justify-center border border-orange-500/30">
          {icon}
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-amber-500">
        {title}
      </h2>
      <p className="text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-20 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 mx-auto rounded-full"></div>
    </motion.div>
  )
}

const BentoCard = ({ title, icon, children, className, index, glowColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
      className={`group relative overflow-hidden rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm hover:border-orange-500/50 hover:shadow-glow ${className}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${glowColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>

      {/* Animated corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <div
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${glowColor} opacity-30 transform rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-300`}
        ></div>
      </div>

      <div className="relative h-full p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className={`w-10 h-10 rounded-full bg-gradient-to-r ${glowColor} flex items-center justify-center`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <div className="relative flex-grow">{children}</div>
      </div>
    </motion.div>
  )
}

const SkillCard = ({ icon, title, skills, delay = 0, glowColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
      className={`bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 hover:border-orange-500/50 hover:shadow-glow transition-all`}
    >
      <motion.div
        className={`w-12 h-12 rounded-full bg-gradient-to-r ${glowColor} flex items-center justify-center mb-4`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>

      <h3 className="text-xl font-bold mb-4">{title}</h3>

      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${glowColor}`}></div>
            <span>{skill}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

const SkillBadge = ({ children }) => {
  return (
    <motion.div
      className="px-3 py-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 text-sm font-medium text-center border border-orange-500/30 hover:border-orange-500/50 transition-colors"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 10px rgba(249, 115, 22, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  )
}
