"use client"

import React from 'react';

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
]

const LogosList = ({ }) => {
    return (
        <div className="logo-container">
            <div className="logo-scroll overflow-hidden flex mt-20">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt={`logo-${index}`} className="logo mr-12 h-48 mr-20 rounded-lg" />
                ))}
            </div>

            <style jsx>{`
                .logo-scroll {
                    animation: scroll 20s linear infinite;
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