import { Inter } from 'next/font/google'
import { Header } from '@/components/home/header/header';
import { ServiceSection } from '@/components/home/services/service';
import { ClientsSection } from '@/components/home/clients/clients';
import DisplayCards from '@/components/home/cards/displayCards';
import { BGImageboard } from '@/components/home/image/imageBoard';

export const metadata = {
  title: 'InnoSpark',
  description: 'Leading digital marketing service in Bangladesh',

  metadataBase: new URL('https://innosparkbd.com'),
  
  keywords: ['Next.js', 'React', 'JavaScript'],
  openGraph: {
    title: 'InnoSpark',
    description: 'Leading digital marketing service in Bangladesh',
    url: 'https://innosparkbd.com',
    siteName: 'InnoSpark',
    images: 'https://innosparkbd.com//images/banners/2.png',
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
    images: ['https://innosparkbd.com//images/banners/2.png'],
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
  return (<>
    <Header/>
    <DisplayCards/>
    <ServiceSection/>
    <ClientsSection/>
  </>)
}
