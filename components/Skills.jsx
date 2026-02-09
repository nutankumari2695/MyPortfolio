'use client'

import {
    SiCplusplus, SiPython, SiJavascript, SiMysql, SiMongodb,
    SiReact, SiNodedotjs, SiFlask, SiPhp, SiHtml5, SiCss3, SiBootstrap,
    SiGit, SiGithub, SiNextdotjs, SiFirebase
} from 'react-icons/si'
import { BiData } from 'react-icons/bi'
import { FaJava } from 'react-icons/fa'
import { TbChartBar } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'

export default function Skills() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
                { name: 'Java', icon: FaJava, color: 'text-red-500' },
                { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
                { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
            ],
        },
        {
            title: 'Web Technologies',
            skills: [
                { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
                { name: 'CSS', icon: SiCss3, color: 'text-blue-400' },
                { name: 'React', icon: SiReact, color: 'text-cyan-400' },
                { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
                { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
                { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
                { name: 'Flask', icon: SiFlask, color: 'text-gray-400' },
                { name: 'PHP', icon: SiPhp, color: 'text-indigo-400' },
            ],
        },
        {
            title: 'Databases',
            skills: [
                { name: 'SQL', icon: BiData, color: 'text-blue-600' },
                { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
                { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
                { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
            ],
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'VS Code', icon: VscCode, color: 'text-blue-500' },
                { name: 'Power BI', icon: TbChartBar, color: 'text-yellow-500' },
                { name: 'Git', icon: SiGit, color: 'text-orange-600' },
                { name: 'GitHub', icon: SiGithub, color: 'text-gray-300' },
            ],
        },
    ]

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="glass-strong p-8 rounded-2xl hover:scale-105 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="glass p-4 rounded-xl hover:glass-strong hover:scale-110 transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className="flex flex-col items-center gap-2">
                                            <skill.icon className={`text-4xl ${skill.color} group-hover:animate-bounce`} />
                                            <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
