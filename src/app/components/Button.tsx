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
        <Link className={`rounded border border-transparent px-4 py-3 block bg-purple-50 cursor-pointer bg-primary hover:border-primary hover:text-primary hover:bg-transparent text-black ${extraClass}`} href={href}>{text}</Link>
    </>
  )
}

export default Button
