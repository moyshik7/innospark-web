"use client"
import React from 'react';
import { GenerateDisplayCardLeft, GenerateDisplayCardRight } from './list/displayCard1';
import { GenerateWhyCard } from './list/whycard';
import { GenerateStatsCard } from './list/statsCard';
import LogosList from './list/logoList';

const DisplayCards = () => {
    return (<>

        <LogosList/>

        <GenerateDisplayCardLeft 
            title="Digital Marketing" 
            description={`Build a magnetic marketing structure that genuinely forces your brand to rapidly grow and produce profit together without pushing, crying, or begging in your marketplace.`} 
            image="/images/banners/digital-marketing.jpg"
        />

        <GenerateDisplayCardRight 
            title="Graphics Designer" 
            description={`Elevate your brand with our expertly crafted visual solutions. From sleek logos to impactful marketing materials, our designs seamlessly blend creativity and functionality. Experience the epitome of design excellence for a lasting brand impression`} 
            image="/images/banners/graphics.webp"
        />


        <GenerateDisplayCardLeft 
            title="Web Development" 
            description={`A website is essential for any business. It helps you reach a wider audience, establish your brand, and provide important information about your business. It can also help to increase sales and revenue`} 
            image="/images/banners/web-dev.jpg"
        />
        

        <GenerateDisplayCardRight
            title="Search Engine Optimization" 
            description={`Ranking in search engines specially in google search is important for businesses. We offer search engine optimization services that cover latest changes in the domain.`} 
            image="/images/banners/seo.webp"
        />


        <GenerateDisplayCardLeft
            title="App Development" 
            description={`Mobile application development is the method of making software applications that run on a mobile device`} 
            image="/images/banners/app.webp"
        />





        <GenerateWhyCard 
            q={`Why Choose InnoSpark?`} 
            a={`InnoSpark Ltd is committed to delivering top-tier software solutions, tailored to facilitate the growth and success of businesses. Our team comprises seasoned professionals who are dedicated to their craft, consistently seeking innovative approaches to enhance our services. With a focus on meeting the unique needs and requirements of our clients, we prioritize the delivery of exceptional results and maintain a high standard of customer service. As a dynamic and forward-thinking company, we embrace challenges and opportunities, firmly believing in the transformative power of technology for businesses. We are eager to collaborate with clients, working towards the achievement of their goals. Thank you for considering InnoSpark for your software needs; we anticipate the opportunity to contribute to the thriving success of your business.`}
        />



        <div className="block lg:flex flex-row flex-wrap">
            <GenerateStatsCard
                q="01. Data + Brainstorming" 
                a="Data takes the spotlight as the ultimate key to our success! We're armed with a treasure trove of market data collected over years across a myriad of industries. By blending this historical industry wisdom and competitor insights with your current business data, we kick off a cheerful brainstorming session on how to achieve some seriously awesome results!ll lg:w-1/2" 
                image="/images/box/logo-018.webp"
            />
            <GenerateStatsCard 
                q="02. Strategy + Execution" 
                a="In the exciting realm of business growth, our secret sauce involves crafting vibrant, custom campaign strategies driven by data! We pride ourselves on infusing every strategy with the power of data, ensuring adaptability for a future that's as bright as your business aspirations. Picture our execution plan as a lively roadmap, filled with targets, goals, milestones, tasks, and deadlines – because we believe in turning every business journey into a cheerful adventure!" 
                image="/images/box/logo-019.webp"
            />
            <GenerateStatsCard 
                q="03. Consistency + Quality" 
                a="In the delightful dance of execution, quality, and consistency, success is sure to take center stage! Our specially crafted Standard Operating Procedures (SOP) and cutting-edge automation, which is the talk of the industry, join forces to ensure unwavering consistency. Think of our work process as a symphony of checklists, with extensive automation sprinkled at every level, guaranteeing not just results, but results that sparkle with top-notch quality!" 
                image="/images/box/logo-020.webp"
            />
            <GenerateStatsCard 
                q="04. KPI Tracking + Optimization" 
                a="We're on a joyous mission, setting up advanced KPIs that gleefully track every move, even diving into the delightful world of behavior analysis to witness how our services are spreading joy and growth throughout your business. With a continuous dance of tracking and measurement involving over 50+ different data points, we joyfully fine-tune the campaign, aiming for results that sparkle with success!" 
                image="/images/box/logo-021.webp"
            />
        </div>
        
    </>);
};

export default DisplayCards;
