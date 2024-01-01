import { MotionService } from '@/components/service/motion';

export const metadata = {
    title: 'Motion Graphics - InnoSpark',
    description: 'Get on-brand motion graphics designed to enhance your website, digital campaigns, presentations and ads',

    metadataBase: new URL('https://innosparkbd.com'),
  
    keywords: [
        'Motion Graphics in Bangladesh', 
        'Motion Graphics service in bd', 
        'ANimation Service in BD', 
        'Tech Company in Bangladesh', 
        'Enterprise website in bangladesh', 
        'Graphics work in Bangladesh',
    ],

    openGraph: {
        title: 'Motion Graphics - InnoSpark',
        description: 'Get on-brand motion graphics designed to enhance your website, digital campaigns, presentations and ads',
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
        title: 'Motion Graphics - InnoSpark',
        description: 'Get on-brand motion graphics designed to enhance your website, digital campaigns, presentations and ads',
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


export default function Home() {
    return (<>
        <MotionService/>
    </>)
}
