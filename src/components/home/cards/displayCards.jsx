import React from 'react';
import { GenerateDisplayCardLeft, GenerateDisplayCardRight } from './list/displayCard1';
import { GenerateWhyCard } from './list/whycard';

const DisplayCards = () => {
    return (<>
        <GenerateDisplayCardLeft 
            title="Web Development" 
            description={`A website is essential for any business. It helps you reach a wider audience, establish your brand, and provide important information about your business. It can also help to increase sales and revenue`} 
            image="/images/banners/web-dev.jpg"
        />


        <GenerateDisplayCardRight 
            title="Digital Marketing" 
            description={`A website is essential for any business. It helps you reach a wider audience, establish your brand, and provide important information about your business. It can also help to increase sales and revenue`} 
            image="/images/banners/digital-marketing.jpg"
        />
        

        <GenerateDisplayCardLeft 
            title="Search Engine Optimization" 
            description={`Ranking in search engines specially in google search is important for businesses. We offer search engine optimization services that cover latest changes in the domain.`} 
            image="/images/banners/seo.webp"
        />


        <GenerateDisplayCardRight 
            title="App Development" 
            description={`Mobile application development is the method of making software applications that run on a mobile device`} 
            image="/images/banners/app.webp"
        />





        <GenerateWhyCard 
            q={`Why Choose InnoSpark?`} 
            a={`InnoSpark Ltd is committed to delivering top-tier software solutions, tailored to facilitate the growth and success of businesses. Our team comprises seasoned professionals who are dedicated to their craft, consistently seeking innovative approaches to enhance our services. With a focus on meeting the unique needs and requirements of our clients, we prioritize the delivery of exceptional results and maintain a high standard of customer service. As a dynamic and forward-thinking company, we embrace challenges and opportunities, firmly believing in the transformative power of technology for businesses. We are eager to collaborate with clients, working towards the achievement of their goals. Thank you for considering InnoSpark for your software needs; we anticipate the opportunity to contribute to the thriving success of your business.`}
        />
    </>);
};

export default DisplayCards;
