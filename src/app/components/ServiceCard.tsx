import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    img: string,
    title: string,
    extraClasses: string,
    children?: JSX.Element,
    href: string,
    height: number,
    width: number
}

const ServiceCard = ({ img, title, extraClasses, children, href, width, height}: Props) => {
  return (
    <div className={`${extraClasses}`}>
        <Link href={href}>
          <div className='w-full h-[360px] mb-8'>
              <Image width={width} height={height} src={img} alt={title} className='w-full h-full object-cover object-center rounded-md' />
          </div>
          {
              children
          }
        </Link>
    </div>
  )
}

export default ServiceCard
