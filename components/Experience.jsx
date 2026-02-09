'use client'

import { FaBriefcase, FaLocationDot } from 'react-icons/fa6'

export default function Experience() {
    const experiences = [
        {
            period: 'Jul 2025 - Aug 2025',
            role: 'Frontend Developer Intern',
            company: 'WebsJyoti',
            location: 'Remote and Virtual',
            description: 'Worked on developing and optimizing responsive web interfaces using JavaScript, Bootstrap, CSS, and HTML',
            achievements: [
                'Contributed to improving website accessibility, responsiveness, and overall visual appeal',
                'Gained valuable hands-on experience in real-world project workflows, team collaboration, and problem-solving',
            ],
            technologies: ['JavaScript', 'Bootstrap', 'CSS', 'HTML'],
        },
        {
            period: 'Jan 2024 - Feb 2024',
            role: 'Frontend Developer Intern',
            company: 'BharatIntern',
            location: 'Remote and Virtual',
            description: 'Completed a two-month internship in frontend development using HTML, CSS, JavaScript, React and Bootstrap',
            achievements: [
                'Designed and developed interactive UI components with responsive layouts using Bootstrap',
                'Collaborated on mini-projects focusing on improving user interface and accessibility',
            ],
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
        },
    ]

    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Professional experience gained through internships and hands-on projects
                    </p>
                </div>

                {/* Experience Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="glass-strong rounded-lg p-6 border-l-4 border-primary-500 hover:scale-105 transition-all duration-300"
                        >
                            {/* Period */}
                            <div className="text-primary-400 font-semibold mb-3">{exp.period}</div>

                            {/* Role */}
                            <h3 className="text-2xl font-bold text-white mb-3">{exp.role}</h3>

                            {/* Company */}
                            <div className="flex items-center gap-2 mb-2">
                                <FaBriefcase className="text-primary-400" />
                                <span className="text-white font-medium">{exp.company}</span>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-2 mb-4">
                                <FaLocationDot className="text-primary-400" />
                                <span className="text-gray-400">{exp.location}</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 mb-4">{exp.description}</p>

                            {/* Key Achievements */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-primary-400 mb-2">• Key Achievements</h4>
                                <ul className="space-y-1">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                                            <span className="text-primary-400">✓</span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h4 className="text-sm font-semibold text-primary-400 mb-2">• Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white/5 rounded text-sm text-white font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
