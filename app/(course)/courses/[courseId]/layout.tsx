import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getProgress } from "@/actions/get-progress";


const CourseLayout = async ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {

   const { userId } = auth();

   if (!userId) {
     return redirect("/")
   }
 
   const course = await db.course.findUnique({
     where: {
       id: params.courseId,
     },
     include: {
       chapters: {
         where: {
           isPublished: true,
         },
         include: {
           userProgress: {
             where: {
               userId,
             }
           }
         },
         orderBy: {
           position: "asc"
         }
       },
     },
   });
 
   if (!course) {
     return redirect("/");
   }
 
   const progressCount = await getProgress(userId, course.id);
 

  return (
    <div className="h-full">
      {children}
    </div>
  )
}

export default CourseLayout

