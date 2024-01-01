"use client"

import { PricingCard } from "../util/pricingCard"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export const MotionPricingCards = () => {
    return(<>
        <div className="flex flex-row justify-around items-stretch flex-wrap">
            <PricingCard 
                title={"Lorem ipsum dolor sit amet"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at hendrerit felis. In tincidunt quam orci, pellentesque finibus felis tincidunt in. Morbi luctus libero massa, in faucibus augue ultrices et. Donec auctor, arcu at varius ultricies, nisl nulla pulvinar elit, at feugiat turpis mi ultricies sem. Proin imperdiet cursus felis a sollicitudin."}
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
                </div>
            </PricingCard>




            <PricingCard 
                title={"Lorem ipsum dolor sit amet"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at hendrerit felis. In tincidunt quam orci, pellentesque finibus felis tincidunt in. Morbi luctus libero massa, in faucibus augue ultrices et. Donec auctor, arcu at varius ultricies, nisl nulla pulvinar elit, at feugiat turpis mi ultricies sem. Proin imperdiet cursus felis a sollicitudin."}
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
                    
                    
                </div>
            </PricingCard>





            <PricingCard 
                title={"Lorem ipsum dolor sit amet"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at hendrerit felis. In tincidunt quam orci, pellentesque finibus felis tincidunt in. Morbi luctus libero massa, in faucibus augue ultrices et. Donec auctor, arcu at varius ultricies, nisl nulla pulvinar elit, at feugiat turpis mi ultricies sem. Proin imperdiet cursus felis a sollicitudin."}
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
                </div>
            </PricingCard>
        </div>
    </>)
}