'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode } from 'react-icons/fa'

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Ready to collaborate on exciting projects or discuss opportunities. Let&apos;s connect!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Side - Contact Information */}
                    <div className="space-y-6">
                        {/* Contact Information Card */}
                        <div className="glass-strong rounded-lg p-6 border-l-4 border-primary-500">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-4">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-500/20 rounded-lg">
                                        <FaEnvelope className="text-primary-400 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <a href="mailto:nutankumari2695@gmail.com" className="text-white font-medium hover:text-primary-400 transition-colors">
                                            nutankumari2695@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-500/20 rounded-lg">
                                        <FaPhone className="text-primary-400 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Phone</p>
                                        <a href="tel:+917654618577" className="text-white font-medium hover:text-primary-400 transition-colors">
                                            +91 7654618577
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-500/20 rounded-lg">
                                        <FaMapMarkerAlt className="text-primary-400 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Location</p>
                                        <p className="text-white font-medium">Gurugram, Haryana | Bihar (Vaishali)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Follow Me */}
                        <div className="glass-strong rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
                            <div className="flex gap-3">
                                <a href="https://github.com/nutankumari2695" target="_blank" rel="noopener noreferrer"
                                    className="p-3 glass rounded-lg hover:glass-strong hover:scale-110 transition-all">
                                    <FaGithub className="text-xl text-white" />
                                </a>
                                <a href="https://www.linkedin.com/in/nutankumari2695" target="_blank" rel="noopener noreferrer"
                                    className="p-3 glass rounded-lg hover:glass-strong hover:scale-110 transition-all">
                                    <FaLinkedin className="text-xl text-white" />
                                </a>
                                <a href="mailto:nutankumari2695@gmail.com"
                                    className="p-3 glass rounded-lg hover:glass-strong hover:scale-110 transition-all">
                                    <FaEnvelope className="text-xl text-white" />
                                </a>
                                <a href="#" className="p-3 glass rounded-lg hover:glass-strong hover:scale-110 transition-all">
                                    <FaCode className="text-xl text-white" />
                                </a>
                            </div>
                        </div>

                        {/* CTA Card */}
                        <div className="glass-strong rounded-lg p-6 text-center">
                            <h3 className="text-2xl font-bold gradient-text mb-3">
                                Let&apos;s Build Something Amazing
                            </h3>
                            <p className="text-gray-300 mb-4">
                                Whether it is a web application, AI project, or innovative solution, I&apos;m always excited to work on meaningful projects.
                            </p>
                            <button className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:gap-3 transition-all">
                                <span>• Open to opportunities</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="glass-strong rounded-lg p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <FaEnvelope className="text-primary-400 text-2xl" />
                            <h3 className="text-2xl font-bold gradient-text">Send Message</h3>
                        </div>
                        <p className="text-gray-300 mb-6">Fill out the form below and I&apos;ll get back to you soon!</p>

                        <form className="space-y-4">
                            {/* Name and Email Row */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        <span className="text-primary-400">•</span> Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        <span className="text-primary-400">•</span> Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="youremail@example.com"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <span className="text-primary-400">•</span> Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="Project collaboration, job opportunity, etc."
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <span className="text-primary-400">•</span> Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project or opportunity..."
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-white placeholder-gray-500"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all flex items-center justify-center gap-2"
                            >
                                <FaEnvelope />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
