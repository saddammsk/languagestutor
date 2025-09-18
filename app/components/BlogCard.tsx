import Image from 'next/image'
import { Link } from '@/i18n/navigation';
import React from 'react'

interface Props {
    href: string
    img: string
    title: string
    authorImage: string
    authorName: string
    blogCategory: string
    description: string
    createdAt: string
    duration?: number
 
}

export const BlogCard = ({href, img, title,authorImage, authorName, createdAt, blogCategory, description}: Props) => {


  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <Link href={href} className='w-full p-3 flex flex-col bg-white rounded-2xl transition-all duration-300 hover:drop-shadow-lg border border-neutral3'>
        <div className="w-full">
        <Image src={img} width={397} height={224} className='w-full object-cover object-center rounded-lg h-[224px]' alt={title}  />
        </div>
        <div className="w-full p-2 pt-4 h-full flex flex-col">
        <span className='text-sm font-medium text-gray5 mb-1'>{blogCategory}</span>
        <h3 className='md:text-xl text-lg font-semibold text-black'>{title}</h3>
        <p className='text-sm font-medium mt-1 text-gray3'>{description}</p>
        <div className="flex items-center justify-start gap-6 pt-4 mt-auto">
        <Image src={authorImage} alt='Avatar' width={40} height={40} className='w-10 h-10 rounded-full object-cover' />
        <div className="">
        <span className='font-semibold text-sm block'>{authorName} Michael Wong</span>
        <span className='text-gray5 text-sm font-medium'>{formattedDate}</span>
        </div>
        </div>
        </div>


    </Link>
  )
}
