import TopCourseTab from "../topCourses/newCourseTab/TopCourseTab";
import YourCourseCard from "./yourCourseCard/yourCourseCard";

const YourCourse = () => {
  return (
    <>
      <div className="mx-auto relative flex flex-col mb-60 items-center w-full -mt-[5.4rem]">
        <TopCourseTab />
      </div>
      <YourCourseCard />
    </>
  );
};

export default YourCourse;
