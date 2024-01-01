"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})


export const PricingCard = ({ title, text, children }) => {
    return(<>
        <div className="pt-16 pb-16 w-full md:w-1/3 lg:w-1/4 mr-5 ml-5">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className={`text-xl lg:text-2xl capitalize ${roboto.className}`}>
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="text-left">
                        {text}
                    </div>
                    <div className="mt-16 text-left">
                        {children}
                    </div>
                </CardContent>
            </Card>
        </div>
    </>)
}