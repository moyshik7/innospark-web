"use client"
import { Text } from "@radix-ui/themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link'
import { toast } from "sonner"
import { Button } from "@/components/ui/button";
import { CustomersContainer } from "@/components/customers/customers";

export const ClientsSection = () => {
    return(<>
        <div>
            <CustomersContainer/>
        </div>
    </>)
}