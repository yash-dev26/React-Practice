import React from 'react'
import LeftText from './leftText'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6  flex items-center gap-10 h-[90vh]  px-18'>
      <LeftText />
      <RightText users={props.users}/>
    </div>
  )
}

export default Page1Content
