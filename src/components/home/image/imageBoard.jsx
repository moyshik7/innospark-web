import React from 'react';
import Image from "next/image"

export const BGImageboard = ({q, a}) => {
    return (
        <div className="flex shadow-lg items-center justify-center m-0 mt-20 mb-20 rounded-xl lg:m-20">
            <Image
                className="w-full rounded-xl"
                src="/images/banners/2.png"
                alt="all"
                width={1080}
                height={720}
            />
        </div>
    );
};