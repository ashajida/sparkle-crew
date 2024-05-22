import Link from 'next/link'
import React from 'react'

type Props = {
    href: string,
    text: string,
    extraClass?: string
}

const Button = ({href, text, extraClass}: Props) => {
  return (
    <>
        <Link className={`rounded px-4 py-3 block bg-purple-50 cursor-pointer bg-primary text-white ${extraClass}`} href={href}>{text}</Link>
    </>
  )
}

export default Button
