import MainLayout from "@/components/layout/mainLayout";
import { Banner, CourseOption } from "@/components/common/Home";

export default function Home() {
  return (
    <MainLayout>
      <CourseOption />
      <Banner />
    </MainLayout>
  );
}
