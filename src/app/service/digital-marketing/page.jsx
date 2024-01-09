import { DigitalMarketingService } from '@/components/service/digitalMarketing';

export const metadata = {
    title: 'Digital Marketing - InnoSpark',
    description: 'Grow your business and reach to your potential customers with our Digital Marketing services',

    metadataBase: new URL('https://innosparkbd.com'),
  
    keywords: [
        'Digital Marketing in Bangladesh', 
        'Digital Marketing in bd', 
        'Digital Marketing', 
        'Tech Company in Bangladesh', 
        'Enterprise website in bangladesh', 
        'E-Commerce Website in bd',
        'Facebook Ads in bangladesh',
        'Earn Money Facebook in Bangladesh',
        'Earm Money in bangladesh'
    ],

    openGraph: {
        title: 'Digital Marketing - InnoSpark',
        description: 'Grow your business and reach to your potential customers with our Digital Marketing services',
        url: 'https://innosparkbd.com',
        siteName: 'InnoSpark',
        images: 'https://innosparkbd.com/images/bg/digital-marketing.jpg',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true, 
        follow: true,
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Digital Marketing - InnoSpark',
        description: 'Grow your business and reach to your potential customers with our Digital Marketing services',
        creator: '@akiorochi',
        images: ['https://innosparkbd.com/images/bg/digital-marketing.jpg'],
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
