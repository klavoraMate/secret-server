import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import NavBar from "@/app/components/NavBar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Secret Server',
    description: 'Site for storing and retrieving secrets',
}

export default function RootLayout({children,}: {children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
            <NavBar/>
            {children}
            </body>
        </html>
    )
}
