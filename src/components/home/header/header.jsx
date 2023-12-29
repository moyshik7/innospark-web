"use client"
import { TypeAnimation } from 'react-type-animation';
import { Text } from "@radix-ui/themes"

export const Header = () => {
    return(<div className={`flex flex-col w-f text-3xl text-center min-h-screen items-center justify-center bg-gradient-to-r from-purple-500 dark:from-purple-800 to-pink-500 dark:to-pink-800 bg-cover`}
        style={{background: /*"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(240,179,249,1) 62%, rgba(148,187,233,1) 100%)"*/ "url('https://images2.imgbox.com/fb/c1/0Rz3yNVQ_o.jpg')"}}
    >
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
    </div>)
}
