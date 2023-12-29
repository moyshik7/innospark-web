"use client"

import React, { useEffect, useRef } from 'react';

const logos = [
    "images/logo/logo-001.webp",
    "images/logo/logo-002.webp",
    "images/logo/logo-003.webp",
    "images/logo/logo-004.webp",
    "images/logo/logo-005.webp",
    "images/logo/logo-006.webp",
    "images/logo/logo-007.webp",
    "images/logo/logo-008.webp",
    "images/logo/logo-009.webp",
    "images/logo/logo-010.webp",
    "images/logo/logo-011.webp",
    "images/logo/logo-012.webp",
    "images/logo/logo-013.webp",
    "images/logo/logo-014.webp",
    "images/logo/logo-015.webp",
    "images/logo/logo-016.webp",
    "images/logo/logo-017.webp",
]

const LogosList = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            const totalWidth = Array.from(scrollRef.current.children).reduce(
                (total, child) => total + child.offsetWidth, 0
            );
            scrollRef.current.style.width = `${totalWidth * 1.8}px`;
        }
    }, []);

    return (
        <div className="logo-container">
            <div ref={scrollRef} className="logo-scroll overflow-hidden flex flex-nowrap mt-20 w-auto">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt={`logo-${index}`} className="logo mr-12 h-48 mr-40 rounded-lg" />
                ))}
            </div>

            <style jsx>{`
                .logo-scroll {
                    animation: scroll 35s linear infinite;
                }
                @keyframes scroll {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </div>
    );
};

export default LogosList;