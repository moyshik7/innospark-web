"use client"
import React from 'react';
import Image from "next/image"

export const GenerateStatsCard = ({q, a}) => {
    return (
        <div className="flex shadow-lg items-center justify-center m-0 mt-20 mb-20 border rounded-2xl p-10 md:p-20 lg:p-40 lg:m-20">
            <div className="overflow-hidden">
                <div className="p-8 flex flex-col items-center justify-center w-full space-a  text-center">
                    <div className="tracking-wide text-3xl text-indigo-500 font-semibold">
                        {q}
                    </div>
                    <p className="mt-10 text-xl text-gray-500">
                        {a}
                    </p>
                </div>
            </div>
        </div>
    );
};