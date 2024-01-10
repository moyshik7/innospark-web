"use client"
import React from 'react';
import { GenerateDisplayCard } from './list/displayCard1';
import { GenerateStatsCard } from './list/statsCard';
import { WhyUsCard } from '@/components/service/util/whyUs';

const DisplayCards = () => {
    return (<>
        <div className="w-full" />

        
        <WhyUsCard/>


        <div className="flex flex-row flex-wrap items-stretch">
        <GenerateDisplayCard 
            title="Digital Marketing" 
            description={`Build a magnetic marketing structure that genuinely forces your brand to rapidly grow and produce profit together without pushing, crying, or begging in your marketplace.`} 
            image="/images/banners/digital-marketing.jpg"
            href="/service/digital-marketing"
        />

        <GenerateDisplayCard
            title="Graphics Design" 
            description={`Elevate your brand with our expertly crafted visual solutions. From sleek logos to impactful marketing materials, our designs seamlessly blend creativity and functionality. Experience the epitome of design excellence for a lasting brand impression`} 
            image="/images/banners/graphics.webp"
            href="/service/motion-graphics"
        />


        <GenerateDisplayCard
            title="Web Development" 
            description={`A website is essential for any business. It helps you reach a wider audience, establish your brand, and provide important information about your business. It can also help to increase sales and revenue`} 
            image="/images/banners/web-dev.jpg"
            href="/service/web-dev"
        />
        

        <GenerateDisplayCard
            title="Search Engine Optimization" 
            description={`Ranking in search engines specially in google search is important for businesses. We offer search engine optimization services that cover latest changes in the domain.`} 
            image="/images/banners/seo.webp"
            href="/service/web-dev"
        />


        <GenerateDisplayCard
            title="App Development" 
            description={`Mobile application development is the method of making software applications that run on a mobile device`} 
            image="/images/banners/app.webp"
            href="#"
        />


        <GenerateDisplayCard
            title="UI / UX Design" 
            description={`UI (User Interface) and UX (User Experience) is the key to making your mobile app / website stand out from the others and making n expression on your users`} 
            image="/images/banners/ui-design.webp"
            href="#"
        />


        <GenerateDisplayCard
            title="Website Optimization" 
            description={`Make your website blazing fast and increase user experience with our website optimization plan. Decrease loading time, Decrease Cumulative Layer Shift and make your website more appealing`} 
            image="/images/banners/web-dev.jpg"
            href="#"
        />
        </div>
        



        <div className="block lg:flex flex-row flex-wrap">
            <GenerateStatsCard
                q="Data + Brainstorming" 
                a="Data takes the spotlight as the ultimate key to our success! We're armed with a treasure trove of market data collected over years across a myriad of industries. By blending this historical industry wisdom and competitor insights with your current business data, we kick off a cheerful brainstorming session on how to achieve some seriously awesome results!ll lg:w-1/2" 
                image="/images/box/logo-018.webp"
            />
            <GenerateStatsCard 
                q="Strategy + Execution" 
                a="In the exciting realm of business growth, our secret sauce involves crafting vibrant, custom campaign strategies driven by data! We pride ourselves on infusing every strategy with the power of data, ensuring adaptability for a future that's as bright as your business aspirations. Picture our execution plan as a lively roadmap, filled with targets, goals, milestones, tasks, and deadlines – because we believe in turning every business journey into a cheerful adventure!" 
                image="/images/box/logo-019.webp"
            />
            <GenerateStatsCard 
                q="Consistency + Quality" 
                a="In the delightful dance of execution, quality, and consistency, success is sure to take center stage! Our specially crafted Standard Operating Procedures (SOP) and cutting-edge automation, which is the talk of the industry, join forces to ensure unwavering consistency. Think of our work process as a symphony of checklists, with extensive automation sprinkled at every level, guaranteeing not just results, but results that sparkle with top-notch quality!" 
                image="/images/box/logo-020.webp"
            />
            <GenerateStatsCard 
                q="KPI Tracking + Optimization" 
                a="We're on a joyous mission, setting up advanced KPIs that gleefully track every move, even diving into the delightful world of behavior analysis to witness how our services are spreading joy and growth throughout your business. With a continuous dance of tracking and measurement involving over 50+ different data points, we joyfully fine-tune the campaign, aiming for results that sparkle with success!" 
                image="/images/box/logo-021.webp"
            />
        </div>
        
        
    </>);
};

export default DisplayCards;
