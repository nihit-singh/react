import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page1Content(props) {
  return (
    <div className='py-3 px-18 flex gap-10 h-[90vh] bg-beige-900'>
        <LeftContent />
        <RightContent user={props.user} />
    </div>
  )
}

export default Page1Content

