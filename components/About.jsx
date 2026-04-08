'use client'

import { FaCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa'

export default function About() {
    const stats = [
        { icon: FaCode, label: 'Projects Completed', value: '10+' },
        { icon: FaBriefcase, label: 'Internships', value: '2' },
        { icon: FaGraduationCap, label: 'CGPA', value: '85.4%' },
    ]

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - Description */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-white">
                            Crafting Digital Experiences
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            I am a passionate Software Engineer currently pursuing my Bachelor of Technology in
                            Computer Science Engineering at Maharshi Dayanand University, Rohtak. With a strong
                            foundation in data structures, algorithms, and modern web technologies, I strive to
                            build efficient and scalable solutions.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            My journey in tech has been enriched by hands-on internship experiences at WebsJyoti
                            and BharatIntern, where I developed responsive web interfaces and collaborated on
                            real-world projects. I am committed to continuous learning and staying updated with
                            the latest industry trends.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Beyond coding, I believe in the power of teamwork, effective communication, and
                            problem-solving to achieve organizational goals and deliver impactful results.
                        </p>
                    </div>

                    {/* Right - Stats */}
                    <div className="grid gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="glass-strong p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl group-hover:animate-glow">
                                        <stat.icon className="text-3xl text-white" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                                        <p className="text-gray-400">{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
