import React from 'react'

interface Props {
    icon: string,
    title: any,
    des: any,
  
}


export const SkillCard = ({icon, title, des}: Props) => {
  return (
        <div className="border border-neutral3 bg-neutral5 rounded-xl p-5">
        <img src={icon} className='w-9 h-9 object-contain' alt={title} />
          <h3 className="text-xl text-neutral2 font-semibold my-4">{title}</h3>
          <p className="text-base text-gray3 font-normal">{des}</p>
        </div>
  )
}
