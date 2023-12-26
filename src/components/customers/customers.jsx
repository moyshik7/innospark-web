'use client';
import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const CustomersContainer = () => {
    return (
        <>
            <div className={`mt-20 md:w-full min-h-screen xl:p-72 lg:p-52 md:p-28 sm:p-0 hidden lg:block md:block`} style={{ display: 'hidden' }}>
                <Carousel opts={{ align: 'center' }} className={`sm:hidden md:block`}>
                    <CarouselContent>
                        <CarouselItem key={0} className="xl:basis-1/5 md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card className="sm:hidden md:block">
                                    <Image src={'/images/clients/001.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="text-xl font-bold">BabyStoryAI</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={0} className="xl:basis-1/5 md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <Image src={'/images/clients/002.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="text-xl font-bold">DownCount</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={0} className="xl:basis-1/5 md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <Image src={'/images/clients/003.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="text-xl font-bold">PollPebble</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={0} className="xl:basis-1/5 md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <Image src={'/images/clients/004.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="text-lg font-bold">Remote</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={0} className="xl:basis-1/5 md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <Image src={'/images/clients/005.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="text-xl font-bold">Habitile</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={0} className="xl:basis-1/5 md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <Image src={'/images/clients/006.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="text-xl font-bold">Beep! 2.0</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={0} className="xl:basis-1/5 md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <Image src={'/images/clients/007.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="text-xl font-bold">Meeting Guidelines</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>

                        <CarouselItem key={0} className="xl:basis-1/5 md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <Image src={'/images/clients/008.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="text-xl font-bold">Babylon Resources</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={0} className="xl:basis-1/5 md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <Image src={'/images/clients/009.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="text-xl font-bold">Rockskart</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={0} className="xl:basis-1/5 md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <Image src={'/images/clients/010.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="text-xl font-bold">CMS</div>
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
                    <Card className="mb-5">
                        <Image src={'/images/clients/001.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-xl font-bold">BabyStoryAI</div>
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <Image src={'/images/clients/002.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                        <CardContent className="flex aspect-square items-center justify-center p-3">
                            <div className="text-xl font-bold">DownCount</div>
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <Image src={'/images/clients/003.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-xl font-bold">PollPebble</div>
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <Image src={'/images/clients/004.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-lg font-bold">Remote</div>
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <Image src={'/images/clients/005.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-xl font-bold">Habitile</div>
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <Image src={'/images/clients/006.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-xl font-bold">Beep! 2.0</div>
                        </CardContent>
                    </Card>
                    
                    <Card className="mb-5">
                        <Image src={'/images/clients/007.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-xl font-bold">Meeting Guidelines</div>
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <Image src={'/images/clients/008.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-xl font-bold">Babylon Resources</div>
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <Image src={'/images/clients/009.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-xl font-bold">Rockskart</div>
                        </CardContent>
                    </Card>
                    <Card className="mb-5">
                        <Image src={'/images/clients/010.jpg'} height={700} width={700} className="w-full rounded-t-lg" alt="aa" />
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <div className="text-xl font-bold">CMS</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
};
