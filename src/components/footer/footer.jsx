"use client"

import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";


import { Facebook, Twitter, MessageSquare } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Switch } from "../ui/switch";
import { Card, CardHeader, CardTitle } from "../ui/card";

const Footer = () => {
    const {theme, setTheme} = useTheme();
    console.log(theme)
    return (
        <>
            <div className="block p-5 md:p-14 md:flex flex-row justify-center items-center flex-wrap">
                <div className="w-full md:w-1/2 rounded-xl bg-card text-card-foreground text-center" >
                    <Link href={`#`}>
                        <div className="p-5 text-lg font-bold flex flex-row items-center justify-center">
                            <Facebook /> Facebook
                        </div>
                    </Link>
                    <Link href={`#`}>
                        <div className="p-5 text-lg font-bold flex flex-row items-center justify-center">
                            <Twitter /> Twitter
                        </div>
                    </Link>
                    <Link href={`#`}>
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
        </>
    );
};

export default Footer;
