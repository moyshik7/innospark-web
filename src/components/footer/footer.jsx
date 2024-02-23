"use client"
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";


import { Facebook, Twitter, MessageSquare, Phone } from "lucide-react";
import { Switch } from "../ui/switch";

const Footer = () => {
    const {theme, setTheme} = useTheme();
    console.log(theme)
    return (
        <>
            <div className="block p-5 md:p-14 md:flex flex-row justify-center items-center flex-wrap">
                <div className="w-full md:w-1/2 rounded-xl bg-card text-card-foreground text-center" >
                    <Link href={`https://www.facebook.com/innosparkbd?mibextid=ZbWKwL`} target="_blank">
                        <div className="p-5 text-lg font-bold flex flex-row items-center justify-center">
                            <Facebook /> &nbsp;&nbsp;Facebook
                        </div>
                    </Link>
                    {/*
                    <Link href={`#`} target="_blank">
                        <div className="p-5 text-lg font-bold flex flex-row items-center justify-center">
                            <Twitter /> &nbsp;&nbsp;Instagram
                        </div>
                    </Link>
                    */}
                    <Link href={`https://wa.me/8801615527254`} target="_blank">
                        <div className="p-5 text-lg font-bold flex flex-row items-center justify-center">
                            <MessageSquare/> &nbsp;&nbsp;Whatsapp
                        </div>
                    </Link>
                    <Link href={`tel:+8801615527254`} target="_blank">
                        <div className="p-5 text-lg font-bold flex flex-row items-center justify-center">
                            <Phone/> &nbsp;&nbsp;Call Us
                        </div>
                    </Link>
                </div>

                <div className="w-full md:w-1/2 rounded-xl bg-card text-card-foreground text-center" >
                    <Link href={`/tos`}>
                        <div className="p-5 text-lg font-bold">
                            Terms of Service
                        </div>
                    </Link>
                    <Link href={`/privacy`}>
                        <div className="p-5 text-lg font-bold">
                            Privacy Policy
                        </div>
                    </Link>
                    <Link href={`/posts`}>
                        <div className="p-5 text-lg font-bold">
                            Blog
                        </div>
                    </Link>
                    <div className="p-5 text-lg">
                        <span className="mr-4">{(theme === "dark" ? "Light Mode" : "Dark Mode")}</span>
                        <Switch onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}/>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-md font-semibold font-mono text-center w-full hover:animate-bounce">
                Copyright &copy;InnoSparkBD 2023 - {new Date().getFullYear()} all rights reserved
            </div>
        </>
    );
};

export default Footer;
