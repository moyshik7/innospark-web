"use client"
import { TypeAnimation } from 'react-type-animation';
import { Text } from "@radix-ui/themes"
import Image from "next/image"
import LogosList from '../cards/list/logoList';

export const Header = () => {
    return(<><div className={`flex flex-col w-f text-3xl text-center min-h-screen items-center justify-center`}
        style={{}}>
        <Image 
            src="/images/background.gif"
            alt=" aaaa "
            layout="fill"
            className="object-center object-cover pointer-events-none opacity-40"
            objectFit="cover"
        />
        <div className="pt-5 pb-5 w-full text-6xl text-violet-600 font-mono mb-20 animate-bounce cursor-pointer">
            InnoSpark
        </div>
        <div className="pt-5 pb-5 w-full">
            Get the expert&nbsp;
        </div>
        <Text className="text-5xl text-violet-600">
            <TypeAnimation
                sequence={[
                    "Digital Marketing",
                    3000,
                    "Graphics Designer",
                    3000,
                    "Web Development",
                    3000,
                    "Motion Graphics",
                    3000,
                    "Video Editing",
                    3000,
                    "UI / UX Design",
                    3000,
                    "App Development",
                    3000,
                ]}
                repeat={Infinity}
            />
        </Text>
        <div className="pt-5 pb-5 w-full text-2xl">
            and see the change for yourself!
        </div>
    </div>

    <LogosList/>
    
    </>)
}
