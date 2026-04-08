'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Hero() {
    const [displayText, setDisplayText] = useState('')
    const fullText = 'Software Engineer'

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index))
                index++
            } else {
                clearInterval(timer)
            }
        }, 100)

        return () => clearInterval(timer)
    }, [])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Animated Background Particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 20}s`,
                            animationDuration: `${Math.random() * 10 + 15}s`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 animate-fadeIn">
                        <div className="space-y-2">
                            <p className="text-primary-400 text-lg font-semibold">{"Hello, I'm"}</p>
                            <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                                Nutan Kumari
                            </h1>
                            <div className="h-12 flex items-center">
                                <h2 className="text-2xl md:text-3xl text-gray-300">
                                    {displayText}
                                    <span className="animate-pulse">|</span>
                                </h2>
                            </div>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Passionate about building innovative solutions and creating seamless user experiences.
                            Specializing in full-stack development with expertise in modern web technologies.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2 text-gray-400">
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-primary-400" />
                                <span>Gurugram, IN</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-primary-400" />
                                <a href="mailto:nutankumari2695@gmail.com" className="hover:text-white transition-colors">
                                    nutankumari2695@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://github.com/nutankumari2695"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-4 rounded-full hover:glass-strong hover:scale-110 transition-all duration-300 group"
                            >
                                <FaGithub className="text-2xl group-hover:text-primary-400 transition-colors" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nutankumari2695"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-4 rounded-full hover:glass-strong hover:scale-110 transition-all duration-300 group"
                            >
                                <FaLinkedin className="text-2xl group-hover:text-accent-400 transition-colors" />
                            </a>
                            <a
                                href="mailto:nutankumari2695@gmail.com"
                                className="glass p-4 rounded-full hover:glass-strong hover:scale-110 transition-all duration-300 group"
                            >
                                <FaEnvelope className="text-2xl group-hover:text-primary-400 transition-colors" />
                            </a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="/resume.pdf"
                                download="Nutan_Kumari_Resume.pdf"
                                className="px-8 py-3 glass rounded-full font-semibold hover:glass-strong hover:scale-105 transition-all duration-300"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="flex justify-center">
                        <div className="relative group">
                            <div className="relative p-1 rounded-full border-4 border-primary-500/50 hover:border-accent-500 transition-all duration-500">
                                <Image
                                    src="/profile.jpg"
                                    alt="Nutan Kumari"
                                    width={400}
                                    height={400}
                                    className="rounded-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}
