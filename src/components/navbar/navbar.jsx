"use client"

import React from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";


import { Menu, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

const Navbar = () => {
    const {theme, setTheme} = useTheme();
    console.log(theme)
    return (
        <>
            <div className="fixed top-0 left-0 bg-white dark:bg-black dark:bg-opacity-70 bg-opacity-50 backdrop-blur-lg md:grid grid-cols-12 right-0 w-full h-auto transition-all ease-in-out duration-300 z-50 lg:px-px py-2 hidden shadow-sm shadow-violet-600">
                <Link href="/">
                    <Image height={100} width={100} src="/logo.png" alt="sss" className="w-10 col-span-2" />
                </Link>
                <div className="col-span-10 flex justify-end">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:shadow-md rounded-md`}>
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#" className={`${navigationMenuTriggerStyle()} hover:shadow-md rounded-md`}>
                                    Our Clients
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={`hover:shadow-md rounded-md`}>Our Service</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] rounded-lg">
                                        <div className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <div className="h-full w-full relative bg-[url('/banner/digital-marketing.png')] bg-cover rounded-lg">
                                                    <Link className="flex h-full absolute top-0 left-0 right-0 bottom-0 w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-transparent to-chitro p-6 no-underline outline-none focus:shadow-md" href="#">
                                                        <div className="mb-2 mt-1 text-lg font-semibold text-white">Digital Marketing</div>
                                                        <p className="text-sm leading-tight"></p>
                                                    </Link>
                                                </div>
                                            </NavigationMenuLink>
                                        </div>
                                        <ListItem href="#" title="Video Editing">
                                            We bring your vision to life with creativity and precision
                                        </ListItem>
                                        <ListItem href="#" title="Motion Graphics" year="২০২০">
                                            Elevate your brand&apos;s story with captivating visuals
                                        </ListItem>
                                        <NavigationMenuLink href="/archive">
                                            <div className="p-3 rounded-md bg-violet-600 to-chitro flex">
                                                <div className=""></div>
                                                <div className="">
                                                    <p className="text-white dark:text-black font-medium">All Services</p>
                                                    <p className="font-light text-gray-200 text-sm">Check out all our Services</p>
                                                </div>
                                            </div>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                                
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#" className={`${navigationMenuTriggerStyle()} hover:shadow-md rounded-md`}>
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#" className={`${navigationMenuTriggerStyle()} hover:shadow-md rounded-md`}>
                                    Contact Us
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Switch onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}/>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
            <div className="fixed top-0 left-0 bg-white dark:bg-black dark:bg-opacity-70 bg-opacity-50 backdrop-blur-lg grid grid-cols-2 px-3 right-0 w-full h-auto transition-all ease-in-out duration-300 z-50 lg:px-28 py-2 md:hidden">
                <Link href="/">
                    <Image height={200} width={200} src="/logo.png" alt="sss" className="w-20 col-span-2" />
                </Link>
                <div className="flex justify-end">
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="stroke-chitro" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="flex flex-col items-end mt-16">
                                    <Image height={100} width={100} src="/logo.png" alt="Chitrolekha" />
                                    <p className="text-right text-sm mt-3">Abrakadabra Abrakadabra Abrakadabra Abrakadabra Abrakadabra </p>
                                </SheetTitle>
                                <SheetDescription className="text-lg">
                                    <ul className="w-full text-md text-right font-semibold [&>*]:my-8">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Our Clients</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Our Service</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Projects</Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <Button>Contact Us</Button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Switch onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}/>
                                        </li>
                                    </ul>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </>
    );
};

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <NavigationMenuLink asChild>
            <Link href="/" ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-chitro/20 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
                <div className="flex">
                    <div className="">
                        <div className="flex items-center">
                            <p className="text-sm font-medium leading-none">{title}</p>
                            <div className="ml-1 rounded-md bg-red-200 text-xs px-1 py-0.5 text-red-500">Contact Us</div>
                        </div>

                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                    </div>
                </div>
            </Link>
        </NavigationMenuLink>
    );
});
ListItem.displayName = "ListItem";

export default Navbar;
