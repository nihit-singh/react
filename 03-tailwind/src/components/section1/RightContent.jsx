import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

function RightContent(props) {
  return (
    <div className='h-full w-2/3 p-4 flex flex-nowrap gap-6 overflow-x-auto'>
        {props.user.map((element, index) => (
          <RightCard index={index} user={element}/>
        ))}
    </div>
  )
}

export default RightContent 
