
import React from 'react'
import NewsTicker from '@/components/Pincode/three'
import EventsTicker from '@/components/Pincode/four'

const page = () => {
  return (
    <>
  
    <div className="p-4 flex flex-row">
      <div className='flex-grow'>
        <h1 className="text-2xl font-bold mb-4  text-center ">Latest News and Updates</h1>
        <NewsTicker />
      </div>
      <div className='flex-grow'>
        <h1 className="text-2xl font-bold mb-4  text-center">Latest Events and Updates</h1>
        <EventsTicker />
      </div>
    </div>
    </>
  )
}

export default page
