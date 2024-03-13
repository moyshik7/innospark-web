import React from 'react';
import Image from 'next/image';
import Link from "next/link"

//Legacy
export const GenerateDisplayCardLeft = ({ image, title, description }) => {
    return (
        <div className="flex flex-row shadow-lg items-center justify-start m-0 mt-10 mb-10 border rounded-xl lg:m-10">
            <div className="overflow-hidden">
                <div className="block lg:flex lg:flex-row lg:justify-between">
                    <div className="lg:flex-shrink-0 w-full lg:w-1/3">
                        <Image className="w-full object-cover lg:rounded-tl-lg lg:rounded-bl-lg" src={image} alt={title} width={1024} height={720} />
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center w-full lg:w-1/3 space-a text-center">
                        <div className="tracking-wide text-2xl text-indigo-500 font-semibold">{title}</div>
                        <p className="mt-2 text-lg text-gray-500">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

//Legacy
export const GenerateDisplayCardRight = ({ image, title, description }) => {
    return (
        <div className="flex shadow-lg items-center justify-end m-0 mt-10 mb-10 border rounded-xl lg:m-10">
            <div className="overflow-hidden">
                <div className="block lg:flex lg:flex-row-reverse lg:justify-between">
                    <div className="lg:flex-shrink-0 w-full lg:w-1/3">
                        <Image className="w-full object-cover lg:rounded-tr-lg lg:rounded-br-lg" src={image} alt={title} width={1024} height={720} />
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center w-full lg:w-1/3 space-a text-center">
                        <div className="tracking-wide text-2xl text-indigo-500 font-semibold">{title}</div>
                        <p className="mt-2 text-lg text-gray-500">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
export const GenerateDisplayCard = ({ image, title, description, href }) => {
    return (
        <Link href={href} className="w-full lg:w-1/3 xl:w-1/4 m-0 mb-10 p-10 cursor-pointer">
            <div className="flex items-center h-full overflow-hidden hover:shadow-gray-600 hover:shadow-lg border">
                <div className="block justify-between h-full">
                    <div className="lg:flex-shrink-0 w-full">
                        <Image className="w-full object-cover" src={image} alt={title} width={1024} height={720} />
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center w-full space-a text-center">
                        <div className="tracking-wide text-xl text-indigo-500 font-semibold">{title}</div>
                        <p className="mt-2 text-sm text-gray-500">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
