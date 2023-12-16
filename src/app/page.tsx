import MainLayout from "@/components/layout/mainLayout";
import { Banner, CourseOption, NewCourse } from "@/components/common/Home";
import TopCourse from "@/components/common/Home/topCourses/TopCourses";

export default function Home() {
  return (
    <MainLayout>
      <CourseOption />
      <Banner />
      <NewCourse />
      <TopCourse />
      {/* <Instructors />
      <YourCourse />
      <NewsLetter /> */}
    </MainLayout>
  );
}
