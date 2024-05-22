import React from 'react'

type Props = {
    extraClasses?: string,
    width?: string,
    height?: string,
}

const Bubble = ({extraClasses, width, height}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : '77'} height={ height ? height : '77' } viewBox="0 0 77 77" fill="none" className={extraClasses}>
        <circle cx="38.5" cy="38.5" r="38.5" fill="#D0F0FF"/>
        <path d="M25.9456 12.49C10.3654 20.9239 0.965702 51.3376 25.9456 67.9223" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>
  )
}

export default Bubble
