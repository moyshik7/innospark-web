"use client"
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";


import { Facebook, Twitter, MessageSquare } from "lucide-react";
import { Switch } from "../ui/switch";

const Footer = () => {
    const {theme, setTheme} = useTheme();
    console.log(theme)
    return (
        <>
            <div className="block p-5 md:p-14 md:flex flex-row justify-center items-center flex-wrap">
                <div className="w-full md:w-1/2 rounded-xl bg-card text-card-foreground text-center" >
                    <Link href={`#`} target="_blank">
                        <div className="p-5 text-lg font-bold flex flex-row items-center justify-center">
                            <Facebook /> Facebook
                        </div>
                    </Link>
                    <Link href={`#`} target="_blank">
                        <div className="p-5 text-lg font-bold flex flex-row items-center justify-center">
                            <Twitter /> Instagram
                        </div>
                    </Link>
                    <Link href={`https://wa.link/duinyh`} target="_blank">
                        <div className="p-5 text-lg font-bold flex flex-row items-center justify-center">
                            <MessageSquare/> Whatsapp
                        </div>
                    </Link>
                </div>

                <div className="w-full md:w-1/2 rounded-xl bg-card text-card-foreground text-center" >
                    <Link href={`#`}>
                        <div className="p-5 text-lg font-bold">
                            Terms of Service
                        </div>
                    </Link>
                    <Link href={`#`}>
                        <div className="p-5 text-lg font-bold">
                            Privacy Policy
                        </div>
                    </Link>
                    <div className="p-5 text-lg">
                        <span className="mr-4">{(theme === "dark" ? "Light Mode" : "Dark Mode")}</span>
                        <Switch onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}/>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-md font-semibold font-mono text-center w-full">
                Copyright &copy;InnoSparkBD 2023 - {new Date().getFullYear()} all rights received
            </div>
        </>
    );
};

export default Footer;
