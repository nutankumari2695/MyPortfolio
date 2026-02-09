'use client'

import { FaCode, FaExternalLinkAlt, FaUniversity, FaWind, FaTractor, FaReceipt } from 'react-icons/fa'

export default function Projects() {
    const projects = [
        {
            icon: FaUniversity,
            title: 'BankQ - Online Slot Booking Website',
            description: 'BankQ is a digital banking portal that enables citizens to conveniently book online slots for services like deposits, withdrawals, and document verification.',
            features: [
                'Service accessibility by allowing users to choose preferred time slots',
                'Designed to reduce waiting times and ensure efficient queue management',
                'User-friendly interface for seamless booking experience',
            ],
            technologies: ['React', 'CSS', 'Java', 'MySQL'],
        },
        {
            icon: FaWind,
            title: 'AeroScope - Air Quality Monitoring',
            description: 'AeroScope is a real-time air quality monitoring system that analyzes environmental pollution levels.',
            features: [
                'Classifies air quality into categories like Good, Moderate, and High for quick awareness',
                'Integrated Flask APIs and front-end visualization to display live pollution data dynamically',
                'Real-time monitoring and analysis of environmental data',
            ],
            technologies: ['Python', 'Flask', 'JavaScript', 'CSS', 'APIs'],
        },
        {
            icon: FaTractor,
            title: 'AgriSetu - Digital Platform for Farmers',
            description: 'AgriSetu is a digital platform for farmers, enabling them to sell fresh vegetables directly to wholesale traders.',
            features: [
                'Allows farmers to upload product details, including name, quantity, price, and images, along with their location',
                'Simplifies the supply chain by providing a transparent and efficient platform for both sellers and buyers',
                'Direct farmer-to-trader connection for better pricing',
            ],
            technologies: ['Bootstrap', 'React.js', 'Node.js', 'MySQL', 'API'],
        },
        {
            icon: FaReceipt,
            title: 'Fees Receipt Management System',
            description: 'A comprehensive fee management solution for educational institutions to streamline fee collection and receipt generation.',
            features: [
                'Automated fee collection and tracking system',
                'Student fee records management with detailed history',
                'Receipt generation and printing functionality',
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'CSS'],
        },
    ]

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Showcase of my technical projects and innovative solutions
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-strong rounded-lg p-6 hover:scale-105 transition-all duration-300 flex flex-col"
                        >
                            {/* Icon */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-primary-500/20 rounded-lg">
                                    <project.icon className="text-2xl text-primary-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                            {/* Key Features */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-primary-400 mb-2">• Key Features</h4>
                                <ul className="space-y-1">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                                            <span className="text-primary-400">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-primary-400 mb-2">• Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-white/5 rounded text-xs text-white font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 mt-auto">
                                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 glass rounded-lg hover:glass-strong transition-all text-white text-sm">
                                    <FaCode />
                                    Code
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-all text-white text-sm font-semibold">
                                    <FaExternalLinkAlt />
                                    Demo
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
