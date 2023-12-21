import { Inter } from 'next/font/google'
import { Text } from '@radix-ui/themes';
import Head from 'next/head'
import Navbar from '@/components/navbar/navbar';

export const metadata = {
  title: 'InnoSpark',
  description: 'Leading digital marketing service in Bangladesh',
  
  keywords: ['Next.js', 'React', 'JavaScript'],
  openGraph: {
    title: 'InnoSpark',
    description: 'Leading digital marketing service in Bangladesh',
    url: 'https://innosparkbd.com',
    siteName: 'InnoSpark',
    images: 'https://images2.imgbox.com/57/71/NYnzgUOV_o.png',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true, 
    follow: true,

  },
  twitter: {
    card: 'summary_large_image',
    title: 'InnoSpark',
    description: 'Leading digital marketing service in Bangladesh',
    creator: '@akiorochi',
    images: ['https://images2.imgbox.com/57/71/NYnzgUOV_o.png'],
  },
}

export const viewport = {
  themeColor: '#ff6f61',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'dark',
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 mt-96 ${inter.className}`}>
      <div className="flex">
        <Text size={"8"}>
          Innospark
        </Text>
      </div>
    </main>
  )
}
