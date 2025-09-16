import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutMe } from '../components/AboutMe'
import { SkillSection } from '../components/SkillSection'
import { ProjectSection } from '../components/ProjectSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export const Home = () => {
    return (
        <div className='min-h-screen  bg-background  text-foreground overflow-x-hidden'>
            {/* theme toggle */}
            <ThemeToggle />
            {/* background Effects */}
            <StarBackground />
            {/* navbar */}
            <Navbar />
            {/* main content */}
            <main>
                <HeroSection />
                <AboutMe />
                <SkillSection />
                <ProjectSection />
                <ContactSection />
                <Footer />
            </main>
            {/* footer */}
        </div>
    )
}
