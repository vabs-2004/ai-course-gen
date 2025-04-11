import React from 'react'
import { HiOutlineBookOpen,HiMiniEllipsisVertical } from 'react-icons/hi2'
import DropdownOption from './DropdownOption'
import { CourseList } from '@/configs/schema'
import { db } from '@/configs/db'
import { eq } from 'drizzle-orm'
import { useNavigate } from 'react-router-dom'

  
function CourseCard({course,refreshData,displayUser=false}) {
    const navigate = useNavigate();
    const handleOnDelete = async() => {
        const query = `
            DELETE FROM "courseList"
            WHERE "id" = ${course.id}
            RETURNING "id"
        `;
        const resp = await db.query(query);
        if(resp){
            refreshData()
        }
    }
    const handleClick = () => {
        navigate(`/course/${course.courseId}`)
    }

  return (
    <div className='shadow-sm rounded-lg border p-2 cursor-pointer mt-3 hover:border-blue-500'>
        <div>
        <img src={course.courseBanner} width={300} height={200} className='w-full h-[200px] object-cover rounded-lg' onClick={handleClick}/>
        </div>
      
        <div className='p-2'>
            <h2 className='font-medium text-lg flex justify-between items-center'>{course.courseOutput["Course Name"]}
                <DropdownOption handleOnDelete={() => handleOnDelete()}><HiMiniEllipsisVertical className='text-4xl'/></DropdownOption>
                </h2>
            <div className='flex items-center justify-between'>
                <h2 className='flex gap-2 items-center p-1 bg-blue-50 text-blue-700 text-sm rounded-sm'><HiOutlineBookOpen />{course.courseOutput["NoOf Chapters"]} Chapters</h2>
                <h2 className='text-sm bg-blue-50 text-blue-700 p-1 rounded-sm'>{course.courseOutput.Level}</h2>
            </div>

            <div className='flex gap-2 items-center mt-2'>
                <img src={course.userProfileImage} width={35} height={35} className='rounded-full'/>
                <h2 className='text-sm'>{course.userName}</h2>
            </div>
        </div>

    </div>
  )
}

export default CourseCard
