'use client';
import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const Service = () => {
    return (<>
        <div className={`mt-20 md:w-full min-h-screen xl:p-72 lg:p-52 md:p-28 sm:p-0 hidden lg:block md:block`} style={{display: "hidden"}}>
            <Carousel opts={{ align: 'center' }} className={`sm:hidden md:block`}>
                <CarouselContent>
                    <CarouselItem key={0} className="xl:basis-1/4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="sm:hidden md:block bg-[url('/images/service/digital-marketing.png')] bg-cover">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div className="text-2xl font-bold">Digital Marketing</div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem key={0} className="xl:basis-1/4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="sm:hidden md:block bg-[url('/images/service/motion-graphics.gif')] bg-cover">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div className="text-2xl font-bold text-slate-400">Web Development</div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem key={0} className="xl:basis-1/4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="sm:hidden md:block bg-[url('/images/service/motion-graphics.gif')] bg-cover">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div className="text-2xl font-bold text-slate-400">Motion Graphics</div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem key={0} className="xl:basis-1/4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="sm:hidden md:block bg-[url('/images/service/motion-graphics.gif')] bg-cover">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div className="text-2xl font-bold text-slate-400">Video Editing</div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem key={0} className="xl:basis-1/4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="sm:hidden md:block bg-[url('/images/service/motion-graphics.gif')] bg-cover">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div className="text-2xl font-bold text-slate-400">UI / UX Design</div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem key={0} className="xl:basis-1/4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="sm:hidden md:block bg-[url('/images/service/motion-graphics.gif')] bg-cover">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div className="text-2xl font-bold text-slate-400">App Development</div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem key={0} className="xl:basis-1/4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="sm:hidden md:block bg-[url('/images/service/motion-graphics.gif')] bg-cover">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div className="text-2xl font-bold text-slate-400">SEO</div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>


        {/**
         * 
         * 
         * 
         * 
         * 
         * Mobile
         * 
         * 
         * 
         * 
         * 
         * 
         */}
        <div className="mt-20 w-full min-h-screen xl:p-72 lg:p-52 md:p-28 sm:p-0 sm:block lg:hidden md:hidden">
            <div className="md:hidden sm:flex flex-col justify-center items-center p-10">
                <Card className="mb-10 bg-[url('/images/service/digital-marketing.png')] bg-cover">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-2xl font-bold">Digital Marketing</div>
                    </CardContent>
                </Card>
                

                <Card className="mb-10 bg-[url('/images/service/motion-graphics.gif')] bg-cover">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-2xl font-bold text-slate-400">Web Development</div>
                    </CardContent>
                </Card>

                <Card className="mb-10 bg-[url('/images/service/motion-graphics.gif')] bg-cover">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-2xl font-bold text-slate-400">Motion Graphics</div>
                    </CardContent>
                </Card>

                <Card className="mb-10 bg-[url('/images/service/motion-graphics.gif')] bg-cover">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-2xl font-bold text-slate-400">Video Editing</div>
                    </CardContent>
                </Card>

                <Card className="mb-10 bg-[url('/images/service/motion-graphics.gif')] bg-cover">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-2xl font-bold text-slate-400">UI / UX Design</div>
                    </CardContent>
                </Card>

                <Card className="mb-10 bg-[url('/images/service/motion-graphics.gif')] bg-cover">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-2xl font-bold text-slate-400">App Development</div>
                    </CardContent>
                </Card>

                <Card className="mb-10 bg-[url('/images/service/motion-graphics.gif')] bg-cover">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="text-2xl font-bold text-slate-400">SEO</div>
                    </CardContent>
                </Card>

            </div>
        </div>
    </>);
};
