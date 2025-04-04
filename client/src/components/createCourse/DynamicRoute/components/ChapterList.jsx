import React from 'react'
import { HiOutlineCheckCircle,HiOutlineClock,HiOutlineBookmarkSquare,HiOutlineVideoCamera } from "react-icons/hi2";
  
function ChapterList({course}) {

    
    console.log(course.courseOutput.Chapters.map((c,i)=>{
        console.log(i+1);
}));

  return (
    <div className='mt-3'>
        <h2 className='font-bold text-xl'>Chapters</h2>
        <div className='mt-2'>
            {course.courseOutput.Chapters.map((chapter,index)=>(
                <div className='border p-5 rounded-lg mb-2 flex items-center justify-between'>
                <div className='flex gap-5 items-center'>
                    <h2 className='bg-blue-500 flex-none h-10 w-10 text-white rounded-full text-center p-2'>{index+1}</h2>
                    <div>
                        <h2 className='font-medium text-l'>{chapter["Chapter Name"]}</h2>
                        <p className='text-gray-700 text-sm'>{chapter.About}</p>
                        <p className='flex gap-2 text-blue-700 items-center'><HiOutlineClock className='mt-1'/>{chapter.Duration}</p>
                    </div>
                </div>
                <HiOutlineCheckCircle className='text-4xl text-gray-300 flex-none'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ChapterList