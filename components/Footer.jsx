'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaCode } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <footer className="bg-dark-900/50 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Left Section - Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center font-bold text-lg">
                                NK
                            </div>
                            <h3 className="text-xl font-bold gradient-text">Nutan Kumari</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Software Engineer passionate about creating innovative solutions and building the future through technology.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/nutankumari2695"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-white/5 rounded-lg hover:bg-primary-500/20 transition-all duration-300"
                            >
                                <FaGithub className="text-lg text-white" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nutankumari2695"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-white/5 rounded-lg hover:bg-primary-500/20 transition-all duration-300"
                            >
                                <FaLinkedin className="text-lg text-white" />
                            </a>
                            <a
                                href="mailto:nutankumari2695@gmail.com"
                                className="p-2.5 bg-white/5 rounded-lg hover:bg-primary-500/20 transition-all duration-300"
                            >
                                <FaEnvelope className="text-lg text-white" />
                            </a>
                            <a
                                href="https://www.instagram.com/nutankumari2695"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-white/5 rounded-lg hover:bg-primary-500/20 transition-all duration-300"
                            >
                                <FaInstagram className="text-lg text-white" />
                            </a>
                            <a
                                href="#"
                                className="p-2.5 bg-white/5 rounded-lg hover:bg-primary-500/20 transition-all duration-300"
                            >
                                <FaCode className="text-lg text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Middle Section - Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary-400 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section - Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary-400 mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <FaEnvelope className="text-primary-400 mt-1 flex-shrink-0" />
                                <a
                                    href="mailto:nutankumari2695@gmail.com"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    nutankumari2695@gmail.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaPhone className="text-primary-400 mt-1 flex-shrink-0" />
                                <a
                                    href="tel:+917654618577"
                                    className="text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    +91 7654618577
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-400 text-sm">
                                    Gurugram, Haryana
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
  <p className="text-gray-400 text-sm">
    © {currentYear} Nutan Kumari. All rights reserved.
  </p>

  {/* <p className="text-gray-400 text-sm">
    Built with <span className="text-primary-400">Next.js</span> & <span className="text-primary-400">React</span>
  </p> */}
</div>

            </div>
        </footer>
    )
}
