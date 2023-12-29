"use client"
import React from 'react';
import Image from "next/image"

export const GenerateStatsCard = ({q, a, image}) => {
    return (
        <div className="flex items-center justify-center m-0 mt-20 mb-20 p-10 md:p-20 md:pb-10 md:pt-10 lg:p-40 lg:pt-10 lg:pb-10 w-full lg:w-1/2">
            <div className="overflow-hidden">
                <div className="p-8 flex flex-col items-center justify-center w-full space-a  text-center">
                    <Image
                        src={image}
                        alt={a}
                        width={1024}
                        height={1024}
                        className="w-full"
                    />
                    <h3 className="tracking-wide text-2xl text-left text-gray-500 font-semibold w-full">
                        {q}
                    </h3>
                    <p className="mt-10 text-lg text-gray-500 text-left w-full">
                        {a}
                    </p>
                </div>
            </div>
        </div>
    );
};