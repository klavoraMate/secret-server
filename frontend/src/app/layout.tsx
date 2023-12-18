import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import NavBar from "@/app/components/navigation/NavBar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Secret Server',
    description: 'Site for storing and retrieving secrets',
}

/**
 * RootLayout is a component that renders the root layout of the application.
 * It includes a navigation bar and the child components passed to it.
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the root layout.
 * @returns {JSX.Element} The RootLayout component.
 */
export default function RootLayout({children,}: {children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div style={{position: 'relative', zIndex: 1}}>
            <NavBar/>
            {children}
        </div>
        </body>
        </html>
    )
}