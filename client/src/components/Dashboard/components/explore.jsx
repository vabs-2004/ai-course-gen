import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

function Explore() {

  const[courseList,setCourseList] = useState([]);

  useEffect(() => {
    GetAllCourses();
  },[])

  const GetAllCourses = async() => {
    const query = `
            SELECT * FROM "courseList"
            LIMIT 9 OFFSET 0
        `;
        const result = await db.query(query);
    setCourseList(result);
  }


  return (
    <div className='p-8'>
        <h2 className='font-bold text-3xl'>Explore More Projects</h2>
        <p>Explore More Study Contents built by Other Users</p>
        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
          {courseList.map((course,index)=>(
            <CourseCard course={course} displayUser={true}/>
          ))}
        </div>
    </div>
    );
}

export default Explore;
