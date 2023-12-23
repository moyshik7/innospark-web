"use client"
import { Text } from "@radix-ui/themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link'
import { toast } from "sonner"
import { Button } from "@/components/ui/button";

export const ServiceSection = () => {
    return(<div className={`flex p-28 md:p-5 sm:p-3 flex-col w-full text-3xl text-center items-center justify-center bg-gradient-to-r from-purple-500 dark:from-purple-800 to-pink-500 dark:to-pink-800 bg-cover `}>
        
        <div className="w-full text-left mb-20 mt-20 ml-10">
            <Text>Our Services</Text>
        </div>
        <div className="flex flex-row flex-wrap w-full mb-20">
        
            <Card className="p-10 pb-20 pt-20 bg-[url('/banner/digital-marketing.png')] md:w-full sm:w-full 2xl:w-1/5 xl:w-1/4 m-5">
                <CardHeader>
                    <CardTitle>
                        Digital Marketing
                    </CardTitle>
                    <CardDescription>
                        For an example, consider a pages directory with the following files
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="#">
                        <Button onClick={() => toast("You have successfully learned more")} className=" mt-16">
                            Learn More
                        </Button>
                    </Link>
                </CardContent>
            </Card>
            <Card className="p-10 pb-20 pt-20 bg-[url('/banner/video-editing.jpeg')] md:w-full sm:w-full 2xl:w-1/5 xl:w-1/4 m-5">
                <CardHeader>
                    <CardTitle className="text-violet-500">
                        Video Editing
                    </CardTitle>
                    <CardDescription>
                        For an example, consider a pages directory with the following files
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="#">
                        <Button onClick={() => toast("You have successfully learned more")} className=" mt-16">
                            Learn More
                        </Button>
                    </Link>
                </CardContent>
            </Card>
            <Card className="p-10 pb-20 pt-20 bg-[url('/banner/motion-graphics.gif')] md:w-full sm:w-full 2xl:w-1/5 xl:w-1/4 m-5">
                <CardHeader>
                    <CardTitle className="text-violet-700 dark:text-violet-600">
                        Motion Graphics
                    </CardTitle>
                    <CardDescription>
                        For an example, consider a pages directory with the following files
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="#">
                        <Button onClick={() => toast("You have successfully learned more")} className=" mt-16">
                            Learn More
                        </Button>
                    </Link>
                </CardContent>
            </Card>
            <Card className="p-10 pb-20 pt-20 bg-[url('/banner/seo.jpeg')] md:w-full sm:w-full 2xl:w-1/5 xl:w-1/4 m-5">
                <CardHeader>
                    <CardTitle>
                        SEO
                    </CardTitle>
                    <CardDescription>
                        Search Engine Optimization
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="#">
                        <Button onClick={() => toast("You have successfully learned more")} className=" mt-16">
                            Learn More
                        </Button>
                    </Link>
                </CardContent>
            </Card>
            
        </div>
    </div>)
}