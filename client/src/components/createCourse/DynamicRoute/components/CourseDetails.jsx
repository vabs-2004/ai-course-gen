import React from 'react'
import { HiOutlineChartBar,HiOutlineClock,HiOutlineBookmarkSquare,HiOutlineVideoCamera } from "react-icons/hi2";
function CourseDetails({course}) {

  
    
  return (
    <div className='border p-6 rounded-xl shadow-sm mt-3'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        <div className='flex gap-2'>
            <HiOutlineChartBar className='text-4xl text-blue-500'/>
            <div>
                <h2 className='text-sm text-gray-700'>Skill Level</h2>
                <h2 className='font-medium text-lg'>{course.level}</h2>
            </div>
        </div>
        <div className='flex gap-2'>
            <HiOutlineClock className='text-4xl text-blue-500'/>
            <div>
                <h2 className='text-sm text-gray-700'>Duration</h2>
                <h2 className='font-medium text-lg'>{course.courseOutput["Total Duration"]}</h2>
            </div>
        </div>
        <div className='flex gap-2'>
            <HiOutlineVideoCamera className='text-4xl text-blue-500'/>
            <div>
                <h2 className='text-sm text-gray-700'>Video Included?</h2>
                <h2 className='font-medium text-lg'>{course.includeVideo}</h2>
            </div>
        </div>
        <div className='flex gap-2'>
            <HiOutlineBookmarkSquare className='text-4xl text-blue-500'/>
            <div>
                <h2 className='text-sm text-gray-700'>No Of Chapters</h2>
                <h2 className='font-medium text-lg'>{course.courseOutput["NoOf Chapters"]}</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
