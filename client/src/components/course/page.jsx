import React, { useEffect, useState } from 'react'
import {db} from '@/configs/db'
import { useParams } from "react-router-dom";
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import CourseBasicInfo from '../createCourse/DynamicRoute/components/CourseBasicInfo';
import Header from '../Landing/Header';
import CourseDetails from '../createCourse/DynamicRoute/components/CourseDetails';
import ChapterList from '../createCourse/DynamicRoute/components/ChapterList';
function CourseId() {   
    const { courseId } = useParams();
    const[course,setCourse]=useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        courseId && GetCourse();
    },[courseId]);
    const GetCourse = async () => {

        try{
            const query = `
                SELECT * FROM "courseList"
                WHERE "courseId" = '${courseId}'
            `;
            const result = await db.query(query);
            setCourse(result[0]);
            console.log(result);
        }catch(error){
            console.error("Error fetching course:", error);
        }finally {
            setLoading(false); // Set loading to false once data is fetched
        }
        
    }
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-3 text-gray-600">Fetching course details...</p>
            </div>
        );
    }

  return (
    <div>
      <Header/>
      <div className='px-20 p-20 md:px-30 lg:px-44'>
        <CourseBasicInfo course = {course} edit={false}/>
        <CourseDetails course = {course}/>
        <ChapterList course = {course}/>
        </div>
      
    </div>
  )
}

export default CourseId
