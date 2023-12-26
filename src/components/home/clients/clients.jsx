"use client"
import { Text } from "@radix-ui/themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link'
import { toast } from "sonner"
import { Button } from "@/components/ui/button";

export const ClientsSection = () => {
    return(<div className={`flex p-28 md:p-5 sm:p-3 flex-col w-full text-3xl text-center items-center justify-center bg-gradient-to-r from-purple-500 dark:from-purple-800 to-pink-500 dark:to-pink-800 bg-cover `}>
        
        <div className="w-full text-left mb-20 mt-20 ml-10">
            <Text>Our Clients</Text>
        </div>
        <div className="flex flex-row flex-wrap w-full mb-20">
        
            <Card className="p-10 pb-20 pt-20 bg-[url('/banner/digital-marketing.png')] md:w-full sm:w-full 2xl:w-1/5 xl:w-1/4 m-5">
                <CardHeader>
                    <CardTitle>
                        Google
                    </CardTitle>
                    <CardDescription>
                        Helped build a solid app for their new product Bard
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="p-10 pb-20 pt-20 bg-[url('/banner/digital-marketing.png')] md:w-full sm:w-full 2xl:w-1/5 xl:w-1/4 m-5">
                <CardHeader>
                    <CardTitle className="">
                        Facebook
                    </CardTitle>
                    <CardDescription>
                        Built an app for their Marketplace
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="p-10 pb-20 pt-20 bg-[url('/banner/digital-marketing.png')] md:w-full sm:w-full 2xl:w-1/5 xl:w-1/4 m-5">
                <CardHeader>
                    <CardTitle className="">
                        Instagram
                    </CardTitle>
                    <CardDescription>
                        Optimized their website
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="p-10 pb-20 pt-20 bg-[url('/banner/digital-marketing.png')] md:w-full sm:w-full 2xl:w-1/5 xl:w-1/4 m-5">
                <CardHeader>
                    <CardTitle>
                        Twitter
                    </CardTitle>
                    <CardDescription>
                        Search Engine Optimization
                    </CardDescription>
                </CardHeader>
            </Card>
            
        </div>
    </div>)
}