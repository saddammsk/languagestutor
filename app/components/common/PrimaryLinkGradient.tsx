import { Link } from '@/i18n/navigation'; 
import React from 'react'
import {clsx} from 'clsx'

interface Props {
  className?: string
  href: string
  children: React.ReactNode

}


export const PrimaryLinkGradient = ({href, children, className=""}: Props) => {
  return (
    <>
    
    <Link href={href} className={ clsx('inline-flex text-neutral5 bg-primary1 hover:bg-slate-800 border border-[#fff3] font-medium transition-all duration-200 py-2.5 px-5 rounded-lg', className)}>       
        {children}
    </Link>

    </>
  )
}
