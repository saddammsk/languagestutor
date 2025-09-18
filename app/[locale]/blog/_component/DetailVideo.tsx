'use client'
import { LightBox } from '../../../components/LightBox';
import Image from 'next/image';
import React, { useState } from 'react'

type Props = {

  thumbnail: string
  url: string

}

export const DetailVideo = (props: Props) => {
    const [IsOpenModel, setIsOpenModel] = useState(false);

  return (
    <div>
    <div  onClick={() => {setIsOpenModel(true)}}
     className="inline-flex items-center justify-center cursor-pointer relative overflow-hidden md:h-[490px] py-24 rounded-[10px] w-full">
        <Image
        src={props.thumbnail}
        alt="no img"
        width={274}
        height={369}
        className="thubmail-img duration-500 scale-100 transition-all w-full absolute left-0 top-0 h-full object-cover"
        />
        <Image src="/PlayButton.svg" className="relative z-10" alt="Play Button" width={64} height={64} />
        <div className="w-full h-full bg-black/30 absolute left-0 top-0"></div>
    </div>

    {props.url &&
    <>
    {IsOpenModel && (
        <LightBox
        isOpenModel={IsOpenModel}
        setIsOpenModel={setIsOpenModel}
        media={props?.url} />
    )}</>}
    </div>
  )
}