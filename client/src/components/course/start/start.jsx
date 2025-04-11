import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { eq,and } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ChapterListCard from './ChapterListCard';
import ChapterContent from './ChapterContent';

function CourseStudy() {

    const [course,setCourse]=useState();
    const [selectChapter,setSelectChapter]=useState();
    const [chapterContent,setChapterContent]=useState();
    const { courseId } = useParams();

    useEffect(() => {
        GetCourse();
    },[courseId]);

    const GetCourse=async()=>{
      const query = `
      SELECT * FROM "courseList"
      WHERE "courseId" = '${courseId}'
  `;
  const result = await db.query(query);
        setCourse(result[0]);
        const firstChapter=result[0].courseOutput.Chapters[0];
        if(firstChapter){
          setSelectChapter(firstChapter);
          GetSelectedChapterContent(0); //Get as soon as fast
        }
    }

    const GetSelectedChapterContent=async(chapterId)=>{
      const query = `
                SELECT * FROM "chapters"
                WHERE "chapterId" = ${chapterId} AND "courseId" = '${courseId}'
            `;
            const result = await db.query(query);
      setChapterContent(result[0]);
      console.log(result);

    }

    if (!course || !course.courseOutput) return null;

  return (
    <div className='flex h-screen'>
      {/* {Chapter List Sidebar} */}
      <div className='md:w-72 hidden md:flex flex-col h-full border-r shadow-sm overflow-y-auto'>
        <h2 className='font-medium text-lg bg-blue-500 p-4 text-white'>{course.courseOutput["Course Name"]}</h2>
        <div>
          {course.courseOutput.Chapters.map((chapter,index)=>(
            <div key={index} className={`cursor-pointer hover:bg-blue-50 ${selectChapter?.["Chapter Name"]==chapter["Chapter Name"]&&'bg-blue-100'}`} 
            onClick={()=>{setSelectChapter(chapter);GetSelectedChapterContent(index)}}>
                      <ChapterListCard chapter={chapter} index={index}/>
            </div>
          ))}
        </div>
      </div>

      {/* Content Div */}
      <div className='flex-1 p-6 overflow-auto'>
        <ChapterContent chapter={selectChapter} content={chapterContent}/>
      </div>
    </div>
  )
}

export default CourseStudy
