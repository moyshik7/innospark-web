"use client"
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/navbar/navbar';
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <body className={inter.className}>
                    <Navbar/>
                    <main>
                        {children}
                    </main>
                    <Toaster />
                </body>
            </ThemeProvider>
        </html>
    )
}
