import Image from 'next/image'
import { Link } from '@/i18n/navigation';
import React from 'react'
import { useTranslations } from 'next-intl' 


interface Props {
    href: string
    img: string
    title: string
    users: string
    rating: string
    level: string
    description: string
    lessons?: number
    duration?: number
 
}

export const CourseCard = ({href, img, title, users, rating, level, description, lessons, duration}: Props) => {
  const t = useTranslations()
    return (
    <Link href={href} className='w-full p-3 flex flex-col bg-white rounded-2xl transition-all duration-300 hover:drop-shadow-lg border border-neutral3'>
        <div className="w-full">
        <Image src={img} width={397} height={224} className='w-full object-cover object-center rounded-lg h-[224px]' alt={title}  />
        </div>
        <div className="w-full p-2 pt-4 h-full flex flex-col">
        <h3 className='md:text-xl text-lg font-semibold text-black'>{title}</h3>
        <ul className='flex items-center gap-2 py-2'>
            <li className='flex items-center gap-1'>
                <Image src='/user-group-icon.svg' width={20} height={20} alt='user' />
                <span className='text-sm text-gray5'>{users}</span>
            </li>
            <li className='flex items-center gap-1'>
                <Image src='/star-yellow.svg' width={20} height={20} alt='star-yellow' />
                <span className='text-sm text-gray5 '>{rating}</span>
            </li>
            <li className='flex items-center gap-1'>
            {level === 'beginner' ? (
            <Image src='/beginner-icon.svg' width={20} height={20} alt='beginner-icon' />
            ) : level === 'intermediate' ? (
            <Image src='/intermediate-icon.svg' width={20} height={20} alt='intermediate-icon' />
            ) : (
            <Image src='/advanced-icon.svg' width={20} height={20} alt='advanced-icon' />
            )}

                <span className='text-sm text-gray5 '>{level}</span>
            </li>
        </ul>
        <p className='text-sm font-medium mt-1 text-gray3'>{description}</p>
        <div className="flex items-center justify-start gap-6 pt-4 mt-auto">
        <span className='font-semibold  block'>{lessons} {t('lessons')}</span>
        <span className='font-semibold text-neutral2'>{duration} {t('weeks')}</span>
        </div>
        </div>


    </Link>
  )
}
