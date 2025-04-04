import React, { useEffect, useState } from 'react';
import placeholder from '/placeholder.jpg';
import { Button } from '@/components/ui/button';
import { storage } from '@/configs/firebaseconfig';
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage';
import { CourseList } from '@/configs/schema';
import { db } from '@/configs/db';
import { eq } from 'drizzle-orm';
import { useNavigate } from 'react-router-dom';
function CourseBasicInfo({ course,edit=true }) {

    const navigate = useNavigate();
    // Image Upload to Firebase
    const[selectedFile,setSelectedFile]=useState();
    useEffect(()=>{
      if(course){
        setSelectedFile(course.courseBanner)
      }
    },[course])
    const onFileSelected=async(e)=>{
        const file = e.target.files[0];
        setSelectedFile(URL.createObjectURL(file));
        const fileName = Date.now()+'.jpg'
        const storageReference = ref(storage,'ai-course/'+fileName)
        await uploadBytes(storageReference,file).then((snapshot)=>{
            console.log("File Uploaded.")
        }).then(resp=>{
            getDownloadURL(storageReference).then(async(downloadUrl)=>{
                console.log(downloadUrl);
                await db.update(CourseList).set({
                    courseBanner:downloadUrl
                }).where(eq(CourseList.id,course.id))
            })
        })
    }
    if (!course || !course.courseOutput) {
      return <p className="text-center text-gray-600">Loading course details...</p>;
    }
    
    
  return (

    <div className='p-10 border rounded-xl shadow-md mt-10'>
      <div className='grid grid-col-1 md:grid-cols-2 gap-5'>
        <div>
          <h2 className='font-bold text-2xl'>{course.courseOutput["Course Name"]}</h2> 
          <p className='text-sm text-gray-800 mt-3'>{course.courseOutput.Description}</p>
          <Button onClick={() => navigate(`/course/${course.courseId}/start`)} className={"w-full bg-blue-500 hover:bg-blue-700 text-white mt-5 "}>Start</Button>
        </div>
        <div className='flex flex-col items-center'>
            <label htmlFor='upload-image'>
            <img src={selectedFile?selectedFile:placeholder} width={300} height={200} className=' rounded-xl object-cover h-[200px] border cursor-pointer'/>
            </label>
            {edit && <input type="file" id="upload-image" className="hidden opacity-0" onChange={onFileSelected}/>}
        </div>
      </div>
      
    </div>
  );
}

export default CourseBasicInfo;