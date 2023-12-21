import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/navbar/navbar';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <body className={inter.className}>
                    <Navbar/>
                    {children}
                </body>
            </ThemeProvider>
        </html>
    )
}
