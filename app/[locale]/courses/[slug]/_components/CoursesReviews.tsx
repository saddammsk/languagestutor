"use client";
import { urlFor } from '../../../../lib/sanityImage'
import Image from 'next/image'
import React from 'react'

const CoursesReviews = ({ course }: any) => {

  return (
    <div className="w-full">       
      <div className="w-full mt-6">
        <ul className='w-full md:space-y-6 space-y-4'>
          {course?.map((userReview: any, index: number) => (
            <li key={index} className='w-full'>
              <div className='border w-full border-neutral3 bg-white p-6 rounded-xl inline-block'>
                <div className="w-full flex gap-3">
                  <div className="relative">
                    {userReview?.userAvatar && (
                      <Image 
                        src={urlFor(userReview?.userAvatar).width(48).url()} 
                        width={48} 
                        height={48} 
                        className='rounded-full min-w-12 h-12' 
                        alt='user' 
                      />
                    )}
                    {userReview?.location && (
                      <Image 
                        src={urlFor(userReview?.location).width(48)?.url()} 
                        width={14} 
                        height={14} 
                        className='w-3.5 h-3.5 rounded-full absolute bottom-0 right-0' 
                        alt='flag' 
                      />
                    )}
                  </div>
                  <div className="w-full">
                    <div className="flex items-center gap-1">
                      <h3 className='text-base font-semibold text-neutral2'>
                        {userReview?.user}
                      </h3>
                      <Image src={'/verified-user.svg'} width={16} height={16} className='w-4 h-4 rounded-full' alt='verified' />
                    </div>
                    <p className='text-base text-gray5 font-medium'>{userReview?.userCourse}</p>
                  </div>
                </div>
                <p className='md:text-base text-sm font-medium text-neutral2 my-5'>
                  {userReview?.comment}
                </p>
                <Image src='/review-stars.svg' width={94} height={16} className='w-auto h-5 rounded-full' alt='stars' />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CoursesReviews
