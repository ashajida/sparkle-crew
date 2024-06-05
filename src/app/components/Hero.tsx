import React from 'react'
import Button from './Button'

type Props = {
    title: string,
    img: string,
    children?: JSX.Element,
    imgSx?: string,
    imgMd?: string
}

const Hero = ({ title, img, children, imgSx, imgMd }: Props) => {
  return (
    <div className="relative w-full">
      <picture className='w-full'>
          <source media="(max-width: 768px)" srcSet={imgMd}></source>
          <source media="(max-width: 576px)" srcSet={imgSx}></source>
          <img src={img} className="brightness-50 w-full" />
      </picture>
    <div className="wrapper absolute top-[50%] translate-y-[-50%] transleft-0 w-full">
      <div className="container flex flex-col items-center">
        <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.14 }} className="mb-[32px] text-white font-bold text-center">
          { title }
        </h1>
        { children }
      </div>
    </div>
  </div>
  )
}

export default Hero
