'use client'

import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

export default function Education() {
    const education = [
        {
            status: 'Current',
            statusColor: 'bg-primary-500',
            degree: 'Bachelor of Technology in Computer Science Engineering',
            institution: 'Maharshi Dayanand University, Rohtak',
            subInstitution: 'St. Andrews Institute of Technology and Management',
            period: '2022 - 2026',
            location: 'Gurgaon, Haryana',
            grade: 'Percentage: 85.4%',
            gradeColor: 'text-primary-400',
            highlights: [
                'Specialization in Computer Science and Engineering',
                'Strong foundation in programming and software development',
            ],
        },
        {
            status: 'Completed',
            statusColor: 'bg-accent-500',
            degree: 'Senior Secondary Education (BSEB)',
            institution: 'K. R. S. S. S. Secondary College',
            subInstitution: '',
            period: '2020 - 2022',
            location: 'Vaishali, Bihar',
            grade: 'Percentage: 91.2%',
            gradeColor: 'text-accent-400',
            highlights: [
                'Science stream with Mathematics',
                'Foundation in Physics, Chemistry, and Mathematics',
            ],
        },
        {
            status: 'Completed',
            statusColor: 'bg-accent-500',
            degree: 'Secondary Education (CBSE)',
            institution: 'Sushant Public School',
            subInstitution: '',
            period: '2019 - 2020',
            location: 'Vaishali, Bihar',
            grade: 'Percentage: 89%',
            gradeColor: 'text-accent-400',
            highlights: [
                'Strong academic foundation',
                'Mathematics and Science focus',
            ],
        },
    ]

    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Education</h2>
                </div>

                {/* Education Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="glass-strong rounded-lg p-6 border-l-4 border-primary-500 hover:scale-105 transition-all duration-300"
                        >
                            {/* Status Badge */}
                            <div className="flex items-center gap-2 mb-4">
                                <FaGraduationCap className="text-primary-400" />
                                <span className={`px-3 py-1 ${edu.statusColor} rounded-full text-white text-xs font-semibold`}>
                                    {edu.status}
                                </span>
                            </div>

                            {/* Degree */}
                            <h3 className="text-xl font-bold text-white mb-3">{edu.degree}</h3>

                            {/* Institution */}
                            <p className="text-white font-medium mb-1">{edu.institution}</p>
                            {edu.subInstitution && (
                                <p className="text-gray-400 text-sm mb-3">{edu.subInstitution}</p>
                            )}

                            {/* Period */}
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                                <FaCalendar className="text-primary-400 text-sm" />
                                <span className="text-sm">{edu.period}</span>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-2 text-gray-400 mb-4">
                                <FaMapMarkerAlt className="text-primary-400 text-sm" />
                                <span className="text-sm">{edu.location}</span>
                            </div>

                            {/* Grade */}
                            <div className={`${edu.gradeColor} font-bold text-lg mb-4`}>
                                {edu.grade}
                            </div>

                            {/* Highlights */}
                            <div>
                                <h4 className="text-sm font-semibold text-primary-400 mb-2">• Highlights</h4>
                                <ul className="space-y-1">
                                    {edu.highlights.map((highlight, i) => (
                                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                                            <span className="text-primary-400">✓</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
