import React from 'react'
import { PrimaryLinkGradient } from '../components/common/PrimaryLinkGradient'


const NotFound = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full flex-col'>
        <div className="w-full max-w-[1400px] mx-auto px-5 text-center">
            <h1 className='text-7xl font-bold text-neutral2 text-center mb-6'>404!</h1>
            <p className='text-base text-center text-neutral2 font-medium mb-4'>The page you're looking for doesn't exist.</p>
            <PrimaryLinkGradient href="/" className="text-white mx-auto inline-flex text-center">Go back to home</PrimaryLinkGradient>
        </div>
    </div>
  )
}

export default NotFound