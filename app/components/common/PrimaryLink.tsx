import { Link } from '@/i18n/navigation';
import React from 'react'
import {clsx} from 'clsx'

interface Props {
  className?: string
  href: string
  children: React.ReactNode
}

export const PrimaryLink = ({href, children, className=""}: Props) => {
  return (
    <Link href={href} className={ clsx('text-neutral3 bg-gray4 hover:bg-gray2 transition-all duration-200 border border-gray3 py-2.5 px-5 rounded-lg', className)}>       
            {children}
    </Link>
  )
}
