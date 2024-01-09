import { DigitalMarketingService } from '@/components/service/digitalMarketing';

export const metadata = {
    title: 'Web Development - InnoSpark',
    description: 'Get Your Awesome, High-Converting, and SEO Optimized Website up and running within weeks',

    metadataBase: new URL('https://innosparkbd.com'),
  
    keywords: [
        'Web development in Bangladesh', 
        'Web Dev in bd', 
        'Website building', 
        'Tech Company in Bangladesh', 
        'Enterprise website in bangladesh', 
        'E-Commerce Website in bd',
        'Education / Coaching Site in Bangladesh',
        'Personal website in bangladesh',
        'Create website in Bangladesh',
        'Portfolio website in bangladesh'
    ],

    openGraph: {
        title: 'Web Development - InnoSpark',
        description: 'Get Your Awesome, High-Converting, and SEO Optimized Website up and running within weeks',
        url: 'https://innosparkbd.com',
        siteName: 'InnoSpark',
        images: 'https://innosparkbd.com/images/bg/web-dev.jpg',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true, 
        follow: true,
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Web Development - InnoSpark',
        description: 'Get Your Awesome, High-Converting, and SEO Optimized Website up and running within weeks',
        creator: '@akiorochi',
        images: ['https://innosparkbd.com/images/bg/web-dev.jpg'],
    },
}

export const viewport = {
    themeColor: '#ff6f61',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    colorScheme: 'dark',
}


export default function Home() {
    return (<>
        <DigitalMarketingService/>
    </>)
}
