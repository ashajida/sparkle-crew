import Link from 'next/link'
import React from 'react'

type Props = {
    img: string,
    title: string,
    extraClasses: string,
    children?: JSX.Element
}

const ServiceCard = ({ img, title, extraClasses, children}: Props) => {
  return (
    <div className={`${extraClasses}`}>
        <div className='w-full h-[360px] mb-8'>
            <img src={img} alt={title} className='w-full h-full object-cover object-center rounded-md' />
        </div>
        {
            children
        }
    </div>
  )
}

export default ServiceCard
