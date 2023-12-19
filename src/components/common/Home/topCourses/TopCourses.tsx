import YourCourseHeader from "../YourCourses/yourCourseHeader /YourHeader";
import TopCourseCard from "./newCourseTab/topCourseCard/TopCourseCard";

const TopCourse = () => {
  return (
    <>
      <div className="mx-auto relative flex flex-col mb-60 items-center w-full -mt-[8.8rem]">
        <YourCourseHeader />
      </div>
      <TopCourseCard />
    </>
  );
};

export default TopCourse;
