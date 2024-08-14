import { cn } from '@/lib/utils'
import React, { Children } from 'react'
import { Button } from './button'
import Image from 'next/image'

interface ButtonProps {
    isLoading: boolean,
    className?: string,
    children: React.ReactNode,
}
const SubmitButton = ({isLoading, children, className}: ButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading} className={cn(className ?? "shad-primary-btn w-full")}>
        {isLoading ? (
            <div className='flex items-center gap-4'>
                <Image 
                    src="/assets/icons/loader.svg"
                    alt="loader"
                    width={24}
                    height={24}
                    className='animate-spin'
                />
                Loading...
            </div>
        ): children}
    </Button>
  )
}

export default SubmitButton