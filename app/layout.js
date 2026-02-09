import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Nutan Kumari - Software Engineer Portfolio',
    description: 'Software Engineer specializing in full-stack development, data structures, and modern web technologies. Computer Science student with hands-on experience in React, Node.js, Python, and more.',
    keywords: 'Nutan Kumari, Software Engineer, Full Stack Developer, React, Node.js, Python, Portfolio',
    authors: [{ name: 'Nutan Kumari' }],
    openGraph: {
        title: 'Nutan Kumari - Software Engineer Portfolio',
        description: 'Software Engineer specializing in full-stack development and modern web technologies',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
