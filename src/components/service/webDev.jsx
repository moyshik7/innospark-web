'use client';
import * as React from 'react';
import { Roboto } from 'next/font/google'
import { WebDevPackageText } from './webdev/packagesText';
import { WebDevPricingCards } from './webdev/pricing';

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})

export const WebDevService = () => {
    return (<>
        <div className={"w-full min-h-screen flex flex-row justify-center items-center bg-[url('/images/bg/web-dev.jpg')] bg-cover"}>
            <h2 className={`${roboto.className} capitalize text-3xl lg:text-6xl text-center text-slate-800 pr-16 pl-16 lg:pr-52 lg:pl-52 min-h-screen flex items-center justify-center bg-gray-400/60 backdrop-blur-md`}>
                GET YOUR AWESOME, HIGH-CONVERTING AND SESRCH ENGINE OPTIMIZED WEBSITE UP AND RUNNING WITHIN WEEKS
            </h2>
        </div>
        <WebDevPackageText/>
        <WebDevPricingCards/>
    </>);
};
