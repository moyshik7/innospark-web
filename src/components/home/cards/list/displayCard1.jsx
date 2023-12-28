import React from 'react';
import Image from "next/image"

export const GenerateDisplayCardLeft = ({image, title, description}) => {
    return (
        <div className="flex shadow-lg items-center justify-center m-0 mt-20 mb-20 border rounded-xl p-20 lg:m-20">
            <div className="overflow-hidden">
                <div className="lg:flex lg:justify-between">
                    <div className="p-8 lg:flex-shrink-0 w-full lg:w-1/3">
                        <Image
                            className="w-full object-cover rounded-lg"
                            src={image}
                            alt={title}
                            width={1024} height={720}
                        />
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center w-full lg:w-1/3 space-a  text-center">
                        <div className="tracking-wide text-2xl text-indigo-500 font-semibold">
                            {title}
                        </div>
                        <p className="mt-2 text-lg text-gray-500">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export const GenerateDisplayCardRight = ({image, title, description}) => {
    return (
        <div className="flex shadow-lg items-center justify-center m-0 mt-20 mb-20 border rounded-xl p-20 lg:m-20">
            <div className="overflow-hidden">
                <div className="lg:flex lg:justify-between">
                    <div className="p-8 flex flex-col items-center justify-center w-full lg:w-1/3 space-a text-center">
                        <div className="tracking-wide text-2xl text-indigo-500 font-semibold">
                            {title}
                        </div>
                        <p className="mt-2 text-lg text-gray-500">
                            {description}
                        </p>
                    </div>

                    <div className="p-8 lg:flex-shrink-0 w-full lg:w-1/3">
                        <Image
                            className="w-full object-cover rounded-lg"
                            src={image}
                            alt={title}
                            width={1024} height={720}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

