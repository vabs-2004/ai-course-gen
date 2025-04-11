import { Button } from "@/components/ui/button";
import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseBasicInfo from "./components/CourseBasicInfo";
import CourseDetails from "./components/CourseDetails";
import ChapterList from "./components/ChapterList";
import { GenerateChapterContent_AI } from "@/configs/AiModel";
import LoadingDialog from "../LoadingDialog";
import service from "@/configs/service";

function CourseLayout() {
  const { id } = useParams();
  const { isLoaded, isSignedIn, user } = useUser();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch Course Data
  const GetCourse = async () => {
    if (!isLoaded || !isSignedIn || !user?.primaryEmailAddress?.emailAddress) {
      console.error("User is not signed in or user data is not loaded.");
      return;
    }

    try {
      const query = `
            SELECT * FROM "courseList"
            WHERE "courseId" = '${id}' AND "createdBy" = '${user.primaryEmailAddress.emailAddress}'
            `;
      const result = await db.query(query);
      if (result.length > 0) {
        setCourse(result[0]);
        console.log("Course Loaded:", result[0]);
      } else {
        console.error("No course found.");
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  useEffect(() => {
    GetCourse();
  }, [isLoaded, isSignedIn, user]);

  // Generate AI-Powered Chapter Content
  const GenerateChapterContent = async () => {
    if (!course || !course.courseOutput || !course.courseOutput.Chapters) {
      console.error("Course or Chapters data is missing.");
      return;
    }

    setLoading(true);
    const chapters = course.courseOutput.Chapters;

    try {
      for (const [index, chapter] of chapters.entries()) {
        const PROMPT =
          "Explain the concept in detail on Topic:" +
          course.name +
          ", Chapter:" +
          chapter["Chapter Name"] +
          ", in JSON Format with list of array with field as title, description in detail, Code Example(Code field in <precode> format) if applicable, Real life Analogy";

        console.log("Prompt:", PROMPT);
        let videoId = "";

        // Fetch video content
        try {
          const videoResponse = await service.getVideos(
            `${course.courseOutput["Course Name"]}:${chapter["Chapter Name"]}`
          );
          if (videoResponse.length > 0) {
            videoId = videoResponse[0].id.videoId;
          }
        } catch (videoError) {
          console.error("Error fetching video:", videoError);
        }

        // Generate Chapter Content
        try {
          const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
          const responseText = await result.response.text(); // Read response only once
          console.log("Raw Response Text:", responseText);
          // const content = JSON.parse(responseText);
          // const escapedContent = JSON.stringify(content).replace(/'/g, "''");
          const escapedContent = JSON.stringify(responseText).replace(/'/g, "''"); // Escape single quotes
          const insertQuery = `
                    INSERT INTO "chapters" (
                        "chapterId", "courseId", "content", "videoId"
                    ) VALUES ('${index}', '${course.courseId}', '${escapedContent}', '${videoId}')
                `;
          console.log("Insert Query:", insertQuery);
          // Insert into the database
          await db.query(insertQuery);

          console.log(`Chapter ${index + 1} saved!`);
        } catch (error) {
          console.error(
            `Error generating content for Chapter ${index + 1}:`,
            error
          );
        }
      }
      const updateQuery = `
            UPDATE "courseList"
            SET "publish" = true
            WHERE "courseId" = '${course.courseId}'
        `;
      // Mark course as published
      await db.query(updateQuery);
    } catch (error) {
      console.error("Error in GenerateChapterContent:", error);
    } finally {
      setLoading(false);
      navigate(`/create-course/${course.courseId}/finish`);
    }
  };

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">Course Layout</h2>

      {course ? (
        <>
          <LoadingDialog loading={loading} />
          {/* Basic Info */}
          <CourseBasicInfo course={course} />

          {/* Course Detail */}
          <CourseDetails course={course} />

          {/* List of Chapters */}
          <ChapterList course={course} />

          <Button
            className="my-10 bg-blue-700 text-white"
            onClick={GenerateChapterContent}
          >
            Generate Course Content
          </Button>
        </>
      ) : (
        <p className="text-center mt-5">Loading Course...</p>
      )}
    </div>
  );
}

export default CourseLayout;
