"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Roboto } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})
const robotoBold = Roboto({
    weight: '700',
    subsets: ['latin'],
})


export const WhyUsCard = () => {
    return(<div className="flex justify-around items-stretch flex-wrap pt-20 pb-20 bg-teal-300 dark:bg-teal-600">
        <div className="pt-16 pb-16 w-full lg:w-1/3 mr-5 ml-5">
            <div className="mb-14">
                <h3 className={`${roboto.className} text-3xl`}>
                    Why choose us as your outsourced Agency?
                </h3>
            </div>
            <div className="mb-14">
                <p>
                    We know exactly what it takes to build a successful application from the ground up, and how to keep it growing too! Our team lives and breathes marketing on a daily basis, working across a number of verticals and discovering what is working and what is not in this fast changing specialist digital medium. 
                </p>
            </div>
            <div className="mb-14">
                <ul className="">
                    <li className="flex flex-nowrap flex-row items-center justify-start mb-10">
                        <Image 
                            src={"/images/icons/check.png"}
                            height={100}
                            width={100}
                            alt=" "
                            className="w-7 h-7 mr-3"
                        />
                        &nbsp;We provide strategic support to deliver consistent sales
                    </li>
                    <li className="flex flex-nowrap flex-row items-center justify-start mb-10">
                        <Image 
                            src={"/images/icons/check.png"}
                            height={100}
                            width={100}
                            alt=" "
                            className="w-7 h-7 mr-3"
                        />
                        &nbsp;We believe no two businesses are ever the same
                    </li>
                    <li className="flex flex-nowrap flex-row items-center justify-start mb-10">
                        <Image 
                            src={"/images/icons/check.png"}
                            height={100}
                            width={100}
                            alt=" "
                            className="w-7 h-7 mr-3"
                        />
                        &nbsp;We take an agnostic approach to technology
                    </li>
                    <li className="flex flex-nowrap flex-row items-center justify-start mb-10">
                        <Image 
                            src={"/images/icons/check.png"}
                            height={100}
                            width={100}
                            alt=" "
                            className="w-7 h-7 mr-3"
                        />
                        &nbsp;We offer 2 decades of experience growing multi -million dollar global programs
                    </li>
                    <li className="flex flex-nowrap flex-row items-center justify-start mb-10">
                        <Image 
                            src={"/images/icons/check.png"}
                            height={100}
                            width={100}
                            alt=" "
                            className="w-7 h-7 mr-3"
                        />
                        &nbsp;We&apos;re passionate about Affiliate Marketing
                    </li>
                    <li className="flex flex-nowrap flex-row items-baseline justify-start mb-10">
                        <Image 
                            src={"/images/icons/check.png"}
                            height={100}
                            width={100}
                            alt=" "
                            className="w-7 h-7 mr-3"
                        />
                        &nbsp;Access a breadth and depth of expertise in launching, scaling and growing a variety of affiliate programs
                    </li>
                </ul>
            </div>
            <div  className="mb-14 w-full">
                <Link href={"#"} className="w-full flex flex-row justify-center items-center text-center">
                    <div className={`${robotoBold.className} text-xl w-1/2 border text-center pt-5 pb-5 rounded-tl-3xl rounded-br-3xl font-semibold text-white bg-rose-500 hover:shadow-lg hover:shadow-rose-300`}>
                        MEET THE TEAM
                    </div>
                </Link>
            </div>
        </div>
        <div className="pt-16 pb-16 w-full lg:w-1/3 mr-5 ml-5">
            <Image
                src={"https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                className="w-full"
                alt=" "
                width={1974}
                height={2880}
            />
        </div>
    </div>)
}