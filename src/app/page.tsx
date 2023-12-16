import MainLayout from "@/components/layout/mainLayout";
import {
  Banner,
  CourseOption,
  Instructors,
  NewCourse,
} from "@/components/common/Home";

export default function Home() {
  return (
    <MainLayout>
      <CourseOption />
      <Banner />
      <NewCourse />
      <Instructors />
      {/* 
      <YourCourse />
      <TopCourse />
      <NewsLetter /> */}
    </MainLayout>
  );
}
