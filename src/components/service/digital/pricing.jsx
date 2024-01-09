"use client"

import { PricingCard } from "../util/pricingCard"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export const DMPricingCards = () => {
    return(<>
        <div className="flex flex-row justify-around items-stretch flex-wrap">
            <PricingCard 
                title={"Pay-Per-Click (PPC) Advertising"} 
                text={"Supercharge your online presence and capture the spotlight with our Pay-Per-Click (PPC) Advertising service, a dynamic engine that propels your brand to the forefront of digital landscapes. Harnessing the precision of targeted advertising, we strategically position your business in front of the right audience at the right time, ensuring every click is a potential conversion. From crafting compelling ad copies to meticulous keyword selection, our PPC experts optimize your campaigns for maximum impact and cost-effectiveness. With a keen focus on driving measurable results, we continually refine and adapt our strategies, ensuring your budget translates into tangible returns on investment. Join us in the realm of PPC Advertising, where every click is not just a transaction but a strategic move towards heightened brand visibility, increased traffic, and a commanding online presence. Elevate your marketing game and amplify your brand's reach with our PPC service – because in the digital age, every click counts, and we're here to make them count for you."}
            >
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Affordable Pricing</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    we provide marketing service at an affordable price for all companies
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Every Click Counts</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    We charge for every click generated. So don&apos;t be afraid about your money going down the drain
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Analytics</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    We provide analytics with every package so you can see the growth in front of you
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </PricingCard>




            <PricingCard 
                title={"SEO - Search Engine Optimization"} 
                text={"Ignite your online visibility and soar to the top of search engine rankings with our Search Engine Optimization (SEO) service – the beacon that guides customers straight to your digital doorstep. Powered by strategic expertise and the latest SEO algorithms, we meticulously tailor your online presence to capture the attention of search engines and, in turn, your target audience. From optimizing website content and fine-tuning meta tags to cultivating authoritative backlinks, our dedicated SEO team employs cutting-edge techniques to ensure your brand shines brightly in the vast online landscape. We're not just boosting rankings; we're crafting an impactful digital narrative that resonates with your audience. Join us in the journey of unlocking the full potential of your online presence, where every click is a step closer to elevated visibility, increased traffic, and sustained success. Elevate your brand to new heights with our SEO service – because being found online shouldn't be a challenge; it should be your digital triumph."}
            >
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Mata Tag Optimization</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>We find the best hosting in your budget</li>
                                    <li className="mt-2">Fully Managed</li>
                                    <li className="mt-2 font-semibold">Lifetime Debugging</li>
                                    <li className="mt-2">Hassle free hosting</li>
                                    <li className="mt-2">Low Cost Maintenance</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Render Speed Increase</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Custom website according to your needs</li>
                                    <li className="mt-2">Top Notch UI Design</li>
                                    <li className="mt-2">Best User Experience Guaranteed</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Image Search Optimization</AccordionTrigger>
                            <AccordionContent>
                                <p>
                                    Make your product images appear on image searches
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">All Major Search Engines</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Google</li>
                                    <li className="mt-2">Bing</li>
                                    <li className="mt-2">Yandex</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </PricingCard>





            <PricingCard 
                title={"SMM - Social Media Marketing"} 
                text={"Ignite your brand's social presence and spark meaningful connections with our Social Media Marketing service – a vibrant avenue where engagement meets excellence. Crafted to amplify your brand story, we leverage the power of popular platforms to create a dynamic narrative that captivates, resonates, and converts. Our expert team doesn't just post; we curate compelling content, strategically plan campaigns, and foster authentic interactions to build a loyal community around your brand. From Instagram's visual allure to Twitter's real-time engagement, we tailor strategies for each platform, ensuring a seamless brand experience across the social spectrum. With a finger on the pulse of ever-evolving trends, we turn your social channels into a buzzing hub of activity, driving brand recognition, customer loyalty, and conversions. Join us in the realm of Social Media Marketing, where every share, like, and comment is a testament to your brand's social triumph. Elevate your social game and let your brand shine in the digital spotlight – because in the age of social, your story is your strength, and we're here to help you tell it brilliantly."}
            >
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Facebook Marketing</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Facebook Ads</li>
                                    <li className="mt-2">Influencer Marketing</li>
                                    <li className="mt-2 font-semibold">Sponsored Ads</li>
                                    <li className="mt-2">Post Boosting</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Instagram Marketing</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Instagram Ads</li>
                                    <li className="mt-2">Influencer Marketing</li>
                                    <li className="mt-2 font-semibold">Sponsored Ads</li>
                                    <li className="mt-2">Post Boosting</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Youtube Marketing</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Youtube Ads</li>
                                    <li className="mt-2">Sponsored Ads</li>
                                    <li className="mt-2">Boost Video</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </PricingCard>





            <PricingCard 
                title={"Content Marketing"} 
                text={"Elevate your brand narrative with our Content Marketing service, where each word weaves a captivating story that resonates, engages, and converts. Crafted to transcend traditional marketing, we strategically curate content that not only educates but sparks a genuine connection with your audience. From compelling blog posts and informative articles to visually stunning infographics and shareable social media content, our expert content creators tailor every piece to align seamlessly with your brand identity. With a meticulous focus on SEO optimization, we ensure your content not only captivates human audiences but also wins the favor of search engines, enhancing your online visibility. Join us in the realm of Content Marketing, where every piece is a strategic move towards building brand authority, fostering customer loyalty, and driving meaningful conversions. Elevate your content strategy with us, and let your brand story unfold in a way that leaves a lasting impression – because in the world of digital marketing, content isn't just king; it's the heartbeat of brand success, and we're here to make yours resonate brilliantly"}
            />





            <PricingCard 
                title={"Email Marketing"} 
                text={"Step into the realm of personalized engagement with our Email Marketing service, where every message is a strategic touchpoint designed to resonate, captivate, and drive action. Crafted with precision and creativity, our email campaigns go beyond the inbox, fostering meaningful connections with your audience. From attention-grabbing subject lines to compelling visuals and targeted content, our expert team ensures each email is a powerful extension of your brand narrative. Leveraging data-driven insights, we tailor campaigns to specific segments, delivering personalized content that speaks directly to the needs and interests of your audience. With a keen focus on maximizing deliverability and click-through rates, we turn email marketing into a dynamic channel for brand promotion, lead nurturing, and conversion optimization. Join us in the world of Email Marketing, where every open, click, and conversion is not just a metric but a testament to the success of your brand communication. Elevate your email strategy with us and let your messages resonate, inspire, and drive meaningful results – because in the digital landscape, your emails should do more than land in the inbox; they should leave a lasting impression"}
            />





            <PricingCard 
                title={"Mobile Marketing"} 
                text={"Unleash the power of Mobile Marketing with our strategic service, where your brand takes center stage in the palms of your audience. Seamlessly integrating creativity and technology, our Mobile Marketing campaigns are crafted to captivate, engage, and drive conversions. From eye-catching mobile ads to personalized SMS campaigns and interactive app experiences, we ensure your brand is not just present but thriving on the mobile landscape. Leveraging the latest innovations and data-driven insights, we tailor campaigns to resonate with diverse audiences, delivering targeted messages that cut through the digital noise. With a focus on optimizing user experiences and maximizing app downloads, we transform mobile devices into dynamic touchpoints for your brand. Join us in the realm of Mobile Marketing, where every tap, swipe, and engagement is a strategic move towards brand recognition, customer loyalty, and measurable results. Elevate your mobile strategy with us and let your brand shine in the digital pocket of your audience – because in the era of mobile dominance, we're here to ensure your brand is not just seen but celebrated on every screen"}
            />




            <PricingCard 
                title={"Affiliate Marketing"} 
                text={"Embark on a lucrative journey of collaborative success with our Affiliate Marketing service, a dynamic platform where partnerships translate into revenue and brand expansion. Crafted to propel your business into the spotlight, our Affiliate Marketing campaigns harness the strength of strategic collaborations, turning influencers, bloggers, and industry leaders into passionate advocates for your brand. With a finely tuned commission structure and meticulously designed promotional materials, we empower affiliates to seamlessly integrate your products or services into their content, driving traffic and conversions. Our data-driven approach ensures optimal performance, as we track and analyze every click, sale, and lead generated through the affiliate network. Join us in the Affiliate Marketing realm, where each partnership is not just a connection but a revenue-generating opportunity that fuels brand growth. Elevate your affiliate strategy with us, and let your brand flourish through a network of dedicated partners – because in the collaborative landscape of affiliate marketing, success is not just shared; it's multiplied, and we're here to multiply yours"}
            />






            <PricingCard 
                title={"Influencer Marketing"} 
                text={"Step into the influential realm of digital success with our Influencer Marketing service, where brand narratives are not just told but celebrated by industry leaders, content creators, and trendsetters. Crafted for maximum impact, our Influencer Marketing campaigns leverage the authenticity and reach of influencers to elevate your brand to new heights. From macro to micro influencers, we meticulously select partners whose audience aligns seamlessly with your target demographic, ensuring genuine engagement and brand resonance. With captivating storytelling, eye-catching visuals, and strategic collaborations, we transform influencers into brand advocates, driving not just awareness but meaningful connections and conversions. Our data-driven approach ensures measurable results, tracking the performance of each collaboration to optimize future campaigns. Join us in the Influencer Marketing arena, where every post, share, and endorsement is a strategic move towards expanding your brand's digital footprint. Elevate your influencer strategy with us and let your brand shine in the social spotlight – because in the era of digital influence, we're here to ensure your brand not only stands out but thrives."}
            />






            <PricingCard 
                title={"Marketing Analytics"} 
                text={"Enter the world of data-driven mastery with our Marketing Analytics service, where every click, interaction, and engagement transforms into strategic insights for unprecedented growth. Meticulously designed to decode the digital landscape, our Marketing Analytics solutions empower your brand to make informed, impactful decisions. From deciphering customer behavior to optimizing campaign performance, we leverage cutting-edge analytics tools to uncover patterns, trends, and opportunities that drive your marketing strategy forward. With real-time data analysis, we transform complex metrics into actionable intelligence, allowing you to measure the success of every marketing initiative and adapt swiftly to ever-evolving market dynamics. Join us in the Marketing Analytics arena, where every data point isn't just a number but a roadmap towards enhanced customer experiences, optimized conversions, and sustained business success. Elevate your analytical prowess with us and let data be the guiding force in your marketing journey – because in the era of digital evolution, the power of informed decisions is the key to marketing excellence, and we're here to unlock it for your brand."}
            />
        </div>
    </>)
}