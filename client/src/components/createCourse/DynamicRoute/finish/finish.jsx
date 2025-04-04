import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/clerk-react";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseBasicInfo from "../components/CourseBasicInfo";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

function Finish() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);

  const GetCourse = async () => {
    // Ensure user is loaded and signed in
    if (!isLoaded || !isSignedIn || !user?.primaryEmailAddress?.emailAddress) {
      console.error("User is not signed in or user data is not loaded.");
      return;
    }

    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(
          and(
            eq(CourseList.courseId, id),
            eq(CourseList.createdBy, user.primaryEmailAddress.emailAddress)
          )
        );
      console.log(result);
      setCourse(result[0]);
      console.log(course);
    } catch (error) {
      console.error("Error fetching course:", error);
    } finally {
      //setLoading(false); // Set loading to false once data is fetched
      console.log("Loading finished");
    }
  };
//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//         <p className="mt-3 text-gray-600">Fetching course details...</p>
//       </div>
//     );
//   }
  useEffect(() => {
    GetCourse();
  }, [isLoaded, isSignedIn, user]);
  return (
    <div className="px-10 md:px-20 lg:px-44 my-7">
      <h2 className="text-center font-bold text-2xl my-3 text-blue-600">
        Congrats! Your Learning Material is Ready!
      </h2>
      <CourseBasicInfo course={course} refreshData={() => console.log()} />
      <h2 className="mt-3">Course URL:</h2>
      <h2 className="text-center text-gray-700 border p-2 round-md flex gap-5 items-center">
        {import.meta.env.VITE_PUBLIC_HOST}course/view/{course.courseId}
        <HiOutlineClipboardDocumentList
          className="h-7 w-7 cursor-pointer"
          onClick={async () =>
            await navigator.clipboard.writeText(
              `${import.meta.env.VITE_PUBLIC_HOST}course/view/${
                course.courseId
              }`
            )
          }
        />
      </h2>
    </div>
  );
}

export default Finish;
