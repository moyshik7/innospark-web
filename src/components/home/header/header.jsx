"use client"
import { TypeAnimation } from 'react-type-animation';
import { Text } from "@radix-ui/themes"

export const Header = () => {
    return(<div className={`flex flex-col w-f text-3xl text-center min-h-screen items-center justify-center  bg-[url('/background.gif')] bg-cover`}>
        <div className="pt-5 pb-5 w-full text-6xl text-violet-600 font-mono mb-20 animate-bounce">
            Innospark
        </div>
        <div className="pt-5 pb-5 w-full">
            Get the expert&nbsp;
        </div>
        <Text className="text-5xl text-violet-600">
            <TypeAnimation
                sequence={[
                    "Video Editor",
                    3000,
                    "Digital Marketing",
                    3000,
                    "Motion Graphics",
                    3000,
                    "Search Engine Optimization",
                    3000,
                ]}
                repeat={Infinity}
            />
        </Text>
        <div className="pt-5 pb-5 w-full text-2xl">
            and see the change for yourself!
        </div>
    </div>)
}
