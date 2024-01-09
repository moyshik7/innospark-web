"use client"

import React from 'react';
import Slider from "react-slick";
import Image from "next/image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
    "/images/logo/logo-001.webp",
    "/images/logo/logo-002.webp",
    "/images/logo/logo-003.webp",
    "/images/logo/logo-004.webp",
    "/images/logo/logo-005.webp",
    "/images/logo/logo-006.webp",
    "/images/logo/logo-007.webp",
    "/images/logo/logo-008.webp",
    "/images/logo/logo-009.webp",
    "/images/logo/logo-010.webp",
    "/images/logo/logo-011.webp",
    "/images/logo/logo-012.webp",
    "/images/logo/logo-013.webp",
    "/images/logo/logo-014.webp",
    "/images/logo/logo-015.webp",
    "/images/logo/logo-016.webp",
    "/images/logo/logo-017.webp",
    "/images/logo/logo-018.webp",
    "/images/logo/logo-019.webp",
    "/images/logo/logo-020.webp",
    "/images/logo/logo-021.webp",
    "/images/logo/logo-022.webp",
    "/images/logo/logo-023.webp",
    "/images/logo/logo-024.webp",
    "/images/logo/logo-025.webp",
    "/images/logo/logo-026.webp",
]

const Ass = ({img}) => {
    return(<>
        <div className="flex flex-row justify-center items-center">
            <Image 
                width={100} 
                height={100} 
                src={img} 
                alt={`logo-${img}`} 
                className="logo h-48 w-48 mr-40 rounded-lg" 
            />
        </div>
    </>)
}

const LogosList = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const settingsMobile = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 500,
        cssEase: "linear"
    };

    return (
        <div className="logo-container overflow-hidden mt-20 w-auto">
            <div className="hidden xl:block">
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <Ass img={logo} key={index} />
                ))}
            </Slider>
            </div>

            <div className="block xl:hidden">
            <Slider {...settingsMobile}>
                {logos.map((logo, index) => (
                    <Ass img={logo} key={index} />
                ))}
            </Slider>
            </div>
        </div>
    );
};

export default LogosList;