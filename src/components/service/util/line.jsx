"use client"

import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})

export const LineText = ({ text }) => {
    return(<>
        <div className={`w-full pt-7 pb-7 flex justify-center items-center bg-amber-500 dark:bg-amber-600 text-yellow-100 dark:text-white ${roboto.className}`}>
            <h3 className="text-3xl lg:text-5xl text-center">
                {text}
            </h3>
        </div>
    </>)
}