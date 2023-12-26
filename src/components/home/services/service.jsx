"use client"
import { Text } from "@radix-ui/themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link'
import { toast } from "sonner"
import { Button } from "@/components/ui/button";
import { Service } from "@/components/service/service";

export const ServiceSection = () => {
    /*return(<div className={`flex p-28 md:p-5 sm:p-3 flex-col w-full text-3xl text-center items-center justify-center bg-gradient-to-r from-purple-500 dark:from-purple-800 to-pink-500 dark:to-pink-800 bg-cover `}>
        
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
                        We help your peoduct reach to your customers
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="#">
                        <Button>
                            Learn More
                        </Button>
                    </Link>
                </CardContent>
            </Card>
            <Card className="p-10 pb-20 pt-20 bg-[url('/banner/digital-marketing.png')] md:w-full sm:w-full 2xl:w-1/5 xl:w-1/4 m-5">
                <CardHeader>
                    <CardTitle className="">
                        Web Development
                    </CardTitle>
                    <CardDescription>
                        Making robust user friendly websites 
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="#">
                        <Button>
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
                        Creating stunning animated videos
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="#">
                        <Button>
                            Learn More
                        </Button>
                    </Link>
                </CardContent>
            </Card>
            <Card className="p-10 pb-20 pt-20 bg-[url('/banner/digital-marketing.png')] md:w-full sm:w-full 2xl:w-1/5 xl:w-1/4 m-5">
                <CardHeader>
                    <CardTitle>
                        Video Editing
                    </CardTitle>
                    <CardDescription>
                        Editiing professional or cinematic videos
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="#">
                        <Button>
                            Learn More
                        </Button>
                    </Link>
                </CardContent>
            </Card>
            

            
            <Card className="p-10 pb-20 pt-20 bg-[url('/banner/digital-marketing.png')] md:w-full sm:w-full 2xl:w-1/5 xl:w-1/4 m-5">
                <CardHeader>
                    <CardTitle>
                        UI / UX Design
                    </CardTitle>
                    <CardDescription>
                        User Interface / User Experience development
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="#">
                        <Button>
                            Learn More
                        </Button>
                    </Link>
                </CardContent>
            </Card>
            <Card className="p-10 pb-20 pt-20 bg-[url('/banner/digital-marketing.png')] md:w-full sm:w-full 2xl:w-1/5 xl:w-1/4 m-5">
                <CardHeader>
                    <CardTitle>
                        App Development
                    </CardTitle>
                    <CardDescription>
                        Mobile app development with flutter
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="#">
                        <Button>
                            Learn More
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    </div>)
    */
    return(<Service/>)
}