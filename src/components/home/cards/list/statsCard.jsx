"use client"
import React from 'react';
import Image from "next/image"

export const GenerateStatsCard = ({q, a, image}) => {
    return (
        <div className="flex justify-center m-0 mt-10 mb-10 w-full md:w-1/3 lg:w-1/4">
            <div className="overflow-hidden">
                <div className="p-3 w-full">
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