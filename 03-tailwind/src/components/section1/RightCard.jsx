import React from 'react'

function RightCard(props) {
  return (
    <div className='h-full w-60 rounded-4xl bg-red-300 overflow-hidden relative shrink-0'>
        <img src={props.user.img} alt="Card Image" className='h-full w-full rounded-4xl object-cover' />

        <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
            <h2 className='bg-white text-xl  h-8 w-8 rounded-full font-semibold flex justify-center items-center'>{props.index + 1}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-14 '>{props.user.intro}</p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor: props.user.backgroundColor }} className=' text-white font-medium px-8 py-2 rounded-full'>{props.user.tag}</button>
                    <button className=' text-white font-medium px-3 py-2 rounded-full'><i class="ri-arrow-right-long-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard
