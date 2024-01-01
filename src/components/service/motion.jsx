'use client';
import * as React from 'react';
import { Roboto } from 'next/font/google'
import { WhyUsCard } from './util/whyUs';
import { MotionPackageText } from './motion/packagesText';
import { MotionPricingCards } from './motion/pricing';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})

export const MotionService = () => {
    return (<>
        <div className={"w-full min-h-screen flex flex-row justify-center items-center bg-[url('/images/bg/digital-marketing.jpg')] bg-cover"}>
            <h2 className={`${roboto.className} capitalize text-3xl lg:text-6xl text-center text-slate-800 pr-16 pl-16 lg:pr-52 lg:pl-52 min-h-screen flex items-center justify-center bg-gray-400/50 backdrop-blur-md`}>
                GET ANIMATED DESIGNES TO ENHANCE YOUR WEBSITE, CAMPAIGNS, PRESENTATION & ADS
            </h2>
        </div>
        <MotionPackageText/>
        <MotionPricingCards/>
        <WhyUsCard/>
    </>);
};
