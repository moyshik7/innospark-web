'use client';

import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { Menu, Sun } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Switch } from '../ui/switch';

const components = [
    {
        title: 'Habitile',
        href: '/clients',
        description: 'Habit tracking made simple',
    },
    {
        title: 'PollPebble',
        href: '/clients',
        description: 'Engage customers and uncover insights with microsurveys',
    },
    {
        title: 'Beep! 2.0',
        href: '/clients',
        description: 'Fastest tool to assign and share visual tasks with your team',
    },
    {
        title: 'Collab',
        href: '/clients',
        description: 'Unified project management & campaign calendaring',
    },
    {
        title: 'DownCount',
        href: '/clients',
        description: 'Start a count down from your menu bar',
    },
    {
        title: 'Remote',
        href: '/clients',
        description: 'Create a profile and get hired by 1000s of remote companies',
    },
];

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    console.log(theme);
    return (
        <>
            <div className="fixed top-0 left-0 bg-white dark:bg-black dark:bg-opacity-70 bg-opacity-50 backdrop-blur-lg md:grid grid-cols-12 right-0 w-full h-auto transition-all ease-in-out duration-300 z-50 lg:px-px py-2 hidden">
                <Link href="/">
                    <Image height={100} width={100} src="/logo.png" alt="sss" className="w-5 md:w-10 col-span-2" />
                </Link>
                <div className="col-span-10 flex justify-end">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/" className={`${navigationMenuTriggerStyle()} hover:shadow-md rounded-md bg-transparent hover:bg-transparent`}>
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
                                    <Link href={'/clients'}>Our Clients</Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {components.map((component) => (
                                            <ListItem2 key={component.title} title={component.title} href={component.href}>
                                                {component.description}
                                            </ListItem2>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={`hover:shadow-md rounded-md bg-transparent hover:bg-transparent`}>
                                    <Link href={"/service"}>
                                        Our Service
                                    </Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] rounded-lg bg-transparent hover:bg-transparent">
                                        <div className="row-span-3">
                                            <NavigationMenuLink href="/service/motion-graphics/" asChild>
                                                <div className="h-full w-full relative bg-[url('/banner/motion-graphics.gif')] bg-cover rounded-lg">
                                                    <Link className="flex h-full absolute top-0 left-0 right-0 bottom-0 w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-transparent to-chitro p-6 no-underline outline-none focus:shadow-md" href="/service/motion-graphics/">
                                                        <div className="mb-2 mt-1 text-lg font-bold text-white">Motion Graphics</div>
                                                        <p className="text-sm leading-tight"></p>
                                                    </Link>
                                                </div>
                                            </NavigationMenuLink>
                                        </div>
                                        <ListItem href="/service/digital-marketing/" title="Digital Marketing">
                                            We bring your vision to life with creativity and precision
                                        </ListItem>
                                        <ListItem href="/service/web-dev/" title="Web Development">
                                            Elevate your brand&apos;s story with captivating visuals
                                        </ListItem>
                                        <NavigationMenuLink href="/service">
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
                                <NavigationMenuLink href="/projects" className={`${navigationMenuTriggerStyle()} hover:shadow-md rounded-md bg-transparent hover:bg-transparent`}>
                                    Projects
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#" className={`${navigationMenuTriggerStyle()} hover:shadow-md rounded-md bg-transparent hover:bg-transparent`}>
                                    Contact Us
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/posts" className={`${navigationMenuTriggerStyle()} hover:shadow-md rounded-md bg-transparent hover:bg-transparent`}>
                                    Blog
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Switch onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
            <div className="fixed top-0 left-0 bg-white dark:bg-black dark:bg-opacity-70 bg-opacity-50 backdrop-blur-lg grid grid-cols-2 px-3 right-0 w-full h-auto transition-all ease-in-out duration-300 z-50 lg:px-28 py-2 md:hidden">
                <Link href="/">
                    <Image height={100} width={100} src="/logo.png" alt="sss" className="w-10 col-span-2" />
                </Link>
                <div className="flex justify-end">
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="stroke-chitro" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="flex flex-col items-end mt-16">
                                    <Image height={100} width={100} src="/logo.png" alt="Innospark" className="w-1/3 mb-10"/>
                                    <p className="text-right text-sm mt-3">
                                        From Spark to Wildfire. We Ignite Brand Growth<br/>
                                        Welcome to <span className="text-purple-600 text-lg">InnoSpark</span>
                                    </p>
                                </SheetTitle>
                                <SheetDescription className="text-lg">
                                    <ul className="w-full text-md text-right font-semibold [&>*]:my-8">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/clients">Our Clients</Link>
                                        </li>
                                        <li>
                                            <Link href="/service">Our Service</Link>
                                        </li>
                                        <li>
                                            <Link href="/projects">Projects</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/posts">Blog</Link>
                                        </li>
                                        <li>
                                            <Switch onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
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
            <Link href="/" ref={ref} className={cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-chitro/20 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', className)} {...props}>
                <div className="flex">
                    <div className="">
                        <div className="flex items-center">
                            <p className="text-sm font-medium leading-none">{title}</p>
                        </div>

                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                    </div>
                </div>
            </Link>
        </NavigationMenuLink>
    );
});
ListItem.displayName = 'ListItem';

const ListItem2 = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a ref={ref} className={cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', className)} {...props}>
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem2.displayName = 'ListItem2';

export default Navbar;
