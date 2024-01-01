"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export const PricingCard = ({ title, text, children }) => {
    return(<>
        <div className="pt-16 pb-16 w-full md:w-1/3 lg:w-1/5">
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl lg:text-2xl capitalize">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-7">
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