"use client"

import { PricingCard } from "../util/pricingCard"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export const WebDevPricingCards = () => {
    return(<>
        <div className="flex flex-row justify-around items-stretch flex-wrap mt-32 lg:mt-56">
            <PricingCard 
                title={"Enterprise website"} 
                text={"Elevate your corporate presence to new heights with our cutting-edge Corporate Website solution. Harnessing the power of leading technologies such as Node.js, NextJS, MongoDB, Python, PHP, MySQL, and PostgreSQL, we craft bespoke websites that seamlessly blend innovation and functionality. Our expert team works diligently to transform your vision into a digital masterpiece, ensuring a swift and efficient delivery within just a few weeks. From intuitive user interfaces to robust backend systems, we tailor every aspect to reflect the professionalism and sophistication your brand deserves. Step confidently into the digital realm with our Corporate Website service, where advanced technology meets accelerated delivery for a digital transformation that speaks volumes about your business prowess."}
            >
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Server Configaration</AccordionTrigger>
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
                            <AccordionTrigger className="text-violet-400">Custom Design tailored around the website&apos;s goal</AccordionTrigger>
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
                            <AccordionTrigger className="text-violet-400">Analytics and Tracking</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Google Analytics</li>
                                    <li className="mt-2">Vercel Analytics</li>
                                    <li className="mt-2">Facebook Analytics</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Powerful Blog with SEO</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Custom Built Blog Site</li>
                                    <li className="mt-2">Search Engine Optimized</li>
                                    <li className="mt-2">Custom Designed Blog Editor</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Training on how to operate your Website</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Video Tutorial</li>
                                    <li className="mt-2">In depth Training</li>
                                    <li className="mt-2">Online / Offline Training</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Speed Optimized</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Make your site lightning Fast</li>
                                    <li className="mt-2">Cold cache make loading 30-40 times Faster</li>
                                    <li className="mt-2">Decrease server load</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Backlink Building</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Make your website reach top in SEO</li>
                                    <li className="mt-2">Legit backlink building</li>
                                    <li className="mt-2">Increase Traffic by 800%</li>
                                    <li className="mt-2">Increase Google search appearance by 2100%</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Branding</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Create logos and graphic content</li>
                                    <li className="mt-2">Reasonable Pricing</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">SSL Encryption</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Better security guranteed</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Security Guranteed</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Make your website vulnerability free</li>
                                    <li className="mt-2">Ensure encryption</li>
                                    <li className="mt-2">Secure storage of Password</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">User Authentication</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Allows users to create accounts on your website</li>
                                    <li className="mt-2">Log in Option</li>
                                    <li className="mt-2">Sign up option</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Newsletter</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>MAke your users know what&apos;s going on with our newsletter system</li>
                                    <li className="mt-2">Weekly Newsletter</li>
                                    <li className="mt-2">Monthly Summary</li>
                                    <li className="mt-2">Year Recap</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </PricingCard>




            <PricingCard 
                title={"E-Commerce Website"} 
                text={"Unleash the power of online commerce with our E-Commerce Website service, where innovation and efficiency converge to redefine your digital storefront. Seamlessly integrating cutting-edge technologies including Node.js, NextJS, MongoDB, Python, PHP, MySQL, and PostgreSQL, we specialize in crafting dynamic and visually stunning e-commerce platforms. Our dedicated team is committed to turning your online retail vision into reality with swift and seamless delivery, ensuring a market-ready website within just a few weeks. Whether you're a budding entrepreneur or an established business, our E-Commerce Website service is designed to provide an immersive and secure shopping experience for your customers. From intuitive product displays to secure payment gateways, our websites are tailored to maximize engagement and conversions. Join us in the digital marketplace revolution, where your brand becomes synonymous with a seamless online shopping journey, driving growth and customer satisfaction. Elevate your e-commerce venture with a website that not only meets but exceeds the expectations of the modern online shopper, setting you apart in the competitive world of digital retail."}
            >
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Server Configaration</AccordionTrigger>
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
                            <AccordionTrigger className="text-violet-400">Custom Design tailored around the website&apos;s Goal</AccordionTrigger>
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
                            <AccordionTrigger className="text-violet-400">Analytics and Tracking</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Sales Analytics</li>
                                    <li className="mt-2">Google Analytics</li>
                                    <li className="mt-2">Facebook Analytics</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Easy to Add / Maintain</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Inventory Dashboard</li>
                                    <li className="mt-2">Low Stock Alert</li>
                                    <li className="mt-2">Easy to Add / Review Product</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Training on how to operate your Website</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Video Tutorial</li>
                                    <li className="mt-2">In depth Training</li>
                                    <li className="mt-2">Online / Offline Training</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Speed Optimized</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Make your site lightning Fast</li>
                                    <li className="mt-2">Cold cache make loading 30-40 times Faster</li>
                                    <li className="mt-2">Decrease server load</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Backlink Building</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Make your website reach top in SEO</li>
                                    <li className="mt-2">Legit backlink building</li>
                                    <li className="mt-2">Increase Traffic by 800%</li>
                                    <li className="mt-2">Increase Google search appearance by 2100%</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </PricingCard>





            <PricingCard 
                title={"Education / Coaching Site"} 
                text={"Embark on an educational journey like never before with our Education/Coaching Site service, where knowledge meets innovation to create dynamic online platforms tailored for learning institutions and coaches alike. Powered by the latest technologies such as Node.js, NextJS, MongoDB, Python, PHP, MySQL, and PostgreSQL, we specialize in crafting robust websites that redefine the educational experience. Our dedicated team is committed to transforming your educational vision into reality swiftly and efficiently, delivering powerful and visually captivating websites within just a few weeks. Whether you're looking to establish an interactive e-learning portal, a comprehensive coaching platform, or an engaging student community, our Education/Coaching Site service seamlessly integrates cutting-edge technology and strategic design to elevate your online presence. Join us in reshaping the future of education with websites that inspire learning, foster collaboration, and leave a lasting impact. Elevate your educational brand with a digital space that embodies excellence and stands out in the competitive online landscape."}
            >
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Server Configaration</AccordionTrigger>
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
                            <AccordionTrigger className="text-violet-400">Custom Design tailored around the website&apos;s goal</AccordionTrigger>
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
                            <AccordionTrigger className="text-violet-400">Course Modules & Course Reviews</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Add Course Videos</li>
                                    <li className="mt-2">Live Stream Videos</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Speed Optimized</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Make your site lightning Fast</li>
                                    <li className="mt-2">Cold cache make loading 30-40 times Faster</li>
                                    <li className="mt-2">Decrease server load</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Course / Education Level</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Create Different content for different education level</li>
                                    <li className="mt-2">Create classroom between users</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Exam System</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Create Exams</li>
                                    <li className="mt-2">Create Grading System</li>
                                    <li className="mt-2">Sending Result via Message / Email</li>
                                    <li className="mt-2">Custom grading system for different course</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Certificate Issuing</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Issue certificate upon completing course</li>
                                    <li className="mt-2">Unique certificate ID</li>
                                    <li className="mt-2">Verify certificates</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Class Alerts for Students</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Create message alert for students</li>
                                    <li className="mt-2">Create Email alerts for students</li>
                                    <li className="mt-2">Send class link in message / email</li>
                                    <li className="mt-2">Result Alert</li>
                                    <li className="mt-2">Absent Alert</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Setup Payment</AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>Accept Online Payment via</li>
                                    <li className="mt-2">
                                        <ul className="ml-5">
                                            <li className="mt-2">BKash</li>
                                            <li className="mt-2">Nagad</li>
                                            <li className="mt-2">Upay</li>
                                            <li className="mt-2">Credit Cards</li>
                                            <li className="mt-2">Debit Cards</li>
                                        </ul>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </PricingCard>





            <PricingCard 
                title={"Niche Sites (Affiliate / Adsense)"} 
                text={"Dive into the world of tailored excellence with our Niche Sites service, where precision meets innovation to craft online platforms finely tuned to specific interests and industries. Harnessing the technological prowess of Node.js, NextJS, MongoDB, Python, PHP, MySQL, and PostgreSQL, we specialize in creating bespoke websites that not only meet but exceed the unique demands of niche markets. Our dedicated team is committed to transforming your vision into reality swiftly and efficiently, delivering powerful and visually stunning websites within a matter of weeks. Whether you're in need of a specialized blog, community forum, or industry-specific portal, our Niche Sites service ensures a seamless fusion of cutting-edge technology and strategic design, setting you apart in the digital landscape. Elevate your online presence with a tailored digital space that caters to your niche audience, turning possibilities into captivating realities. Join us in the journey of crafting niche-specific websites that leave a lasting impression and redefine excellence in the digital sphere."}
            >
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Server Configaration</AccordionTrigger>
                            <AccordionContent>
                                LOrem Ipsum De ODOR
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </PricingCard>





            <PricingCard 
                title={"Hobby / Personal"} 
                text={"Immerse yourself in the world of personalized digital expression with our Hobby/Personal Website service, where we seamlessly blend passion and technology to craft online masterpieces tailored to your individual interests. Leveraging the dynamic capabilities of Node.js, NextJS, MongoDB, Python, PHP, MySQL, and PostgreSQL, our dedicated team transforms ideas into reality within just a few weeks, ensuring a swift and seamless development process. Whether you're creating a hobby blog or a personal portfolio, our websites resonate with your unique style, offering a visually engaging and user-friendly experience. Elevate your online presence and turn your hobbies into an interactive journey that captivates and inspires. Join us in shaping a digital space that reflects the essence of who you are, effortlessly combining technology and passion to create a website that truly stands out."}
            >
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Server Configaration</AccordionTrigger>
                            <AccordionContent>
                                LOrem Ipsum De ODOR
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </PricingCard>





            <PricingCard 
                title={"Portfolio / Showcase / Professional Sites"} 
                text={"Step into the spotlight with our Portfolio/Showcase/Professional Sites service, a fusion of artistry and technology that transforms your essence into a captivating digital experience. Harnessing the power of Node.js, NextJS, MongoDB, Python, PHP, MySQL, and PostgreSQL, we craft personalized websites that transcend the ordinary, delivering immersive showcases within just a few weeks. From dynamic user interfaces to robust backend systems, each site is meticulously designed to resonate with your unique style, offering a digital narrative that amplifies your professional identity. Join us on a journey where innovation meets efficiency, turning possibilities into visually stunning realities, and where your digital presence becomes a work of art."}
            >
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Photography Site</AccordionTrigger>
                            <AccordionContent>
                                LOrem Ipsum De ODOR
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Resume / CV Site</AccordionTrigger>
                            <AccordionContent>
                                LOrem Ipsum De ODOR
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Cooking / Recipe Site</AccordionTrigger>
                            <AccordionContent>
                                LOrem Ipsum De ODOR
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-violet-400">Showcase Site</AccordionTrigger>
                            <AccordionContent>
                                LOrem Ipsum De ODOR
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </PricingCard>
        </div>
    </>)
}