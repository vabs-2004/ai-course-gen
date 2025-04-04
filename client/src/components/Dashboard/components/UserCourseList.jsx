import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema'
import { useUser } from '@clerk/clerk-react'
import { eq } from 'drizzle-orm'
import React, { useEffect,useState } from 'react'
import CourseCard from './CourseCard';

function UserCourseList() {

  const[courseList,setCourseList] = useState([]);
  const {user} = useUser();

  useEffect(() => {
    user && getUserCourse();
  },[user]);
  const getUserCourse = async() => {
    const result = await db.select().from(CourseList)
    .where(eq(CourseList.createdBy, user.primaryEmailAddress.emailAddress));
    console.log(result);
    setCourseList(result);
  }
  return (
    <div className='mt-3'>
      <h2 className='font-medium text-xl'>My Courses:</h2>
      <div className='grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2'>
        {courseList.length>0?courseList.map((course,index)=>(
          <CourseCard course={course} key={index} refreshData={()=>getUserCourse()}/>
        ))
        :
          [1,2,3,4,5].map((item,index)=>(
            <div key={index} className='w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[270px]'></div>
          ))
          }
        
      </div>
    </div>
  )
}

export default UserCourseList