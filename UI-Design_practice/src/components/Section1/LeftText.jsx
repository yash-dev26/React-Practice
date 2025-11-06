import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroContent'
import Arrow from './Arrow'

const LeftText = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
      <HeroText />
      <Arrow />
    </div>
  )
}

export default LeftText
