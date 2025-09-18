import Image from 'next/image'
import { Link } from '@/i18n/navigation';
import React from 'react'

interface Props {
    href: string
    img: string
    title: string
    users: string
    rating: string
    intermediate: string
    description: string
    price: string
 
}

export const ProductCard = ({href, img, title, users, rating, intermediate, description, price}: Props) => {
  return (
    <Link href={href} className='w-full p-3 bg-white flex flex-col rounded-2xl transition-all duration-300 hover:shadow-lg border border-neutral3'>
        <Image src={img} width={397} height={224} className='w-full object-cover rounded-lg h-[224px] ' alt={title}  />
        <div className="w-full p-2 pt-4 flex flex-col">
        <h3 className='md:text-xl text-lg font-semibold text-black'>{title}</h3>
        <ul className='flex items-center gap-2 py-2'>
            <li className='flex items-center gap-1'>
                <Image src='/downloads-icon.svg' width={20} height={20} alt='user' />
                <span className='text-sm text-gray5 '>{users}</span>
            </li>
            <li className='flex items-center gap-1'>
                <Image src='/star-yellow.svg' width={20} height={20} alt='star-yellow' />
                <span className='text-sm text-gray5 '>{rating}</span>
            </li>
            <li className='flex items-center gap-1'>
                <Image src='/intermediate-icon.svg' width={20} height={20} alt='intermediate-icon' />
                <span className='text-sm text-gray5 '>{intermediate}</span>
            </li>
        </ul>
        <p className='text-sm font-medium mt-1 text-gray3'>{description}</p>
        <span className='text-xl font-bold text-neutral2 pt-4 mt-auto block'>{price}</span>
        </div>


    </Link>
  )
}
