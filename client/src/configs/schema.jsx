import { boolean, integer } from "drizzle-orm/gel-core";
import { pgTable,json,serial,varchar } from "drizzle-orm/pg-core";

export const CourseList=pgTable('courseList', {
    id:serial('id').primaryKey(),
    courseId: varchar('courseId').notNull(),
    name: varchar('name').notNull(),
    description: varchar('description').notNull(),
    level: varchar('level').notNull(),
    includeVideo: varchar('includeVideo').notNull().default('Yes'),
    courseOutput:json('courseOutput').notNull(),
    createdBy: varchar('createdBy').notNull(),
    userName: varchar('userName'),
    userProfileImage: varchar('userProfileImage'),
    courseBanner:varchar('courseBanner').default('/placeholder.jpg'),
    publish:boolean('publish').default(false)
})

export const Chapters = pgTable('chapters',{
    id:serial('id').primaryKey(),
    courseId:varchar('courseId').notNull(),
    chapterId:integer('chapterId').notNull(),
    content:json('content').notNull(),
    videoId:varchar('videoId').notNull()
})