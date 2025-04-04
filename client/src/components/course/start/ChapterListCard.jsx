import React from 'react'
import { HiOutlineClock } from 'react-icons/hi2'
function ChapterListCard({chapter,index}) {
  return (
    <div className='grid grid-cols-6 p-3 items-center border-b'>
      <div>
        <h2 className='flex justify-center items-center p-2 bg-blue-600 text-white rounded-full w-8 h-8 '>{index+1}</h2>
      </div>
      <div className='col-span-4'>
        <h2 className='font-medium'>{chapter["Chapter Name"]}</h2>
        <h2 className='flex items-center gap-2 text-sm text-blue-600'><HiOutlineClock/>{chapter.Duration}</h2>
      </div>
    </div>
  )
}

export default ChapterListCard
