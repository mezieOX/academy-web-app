import YourCourseHeader from "./yourCourseHeader /YourHeader";
import YourCourseCard from "./yourCourseCard/yourCourseCard";

const YourCourse = () => {
  return (
    <>
      <div className="mx-auto relative flex flex-col mb-60 items-center w-full -mt-[5.4rem]">
        <YourCourseHeader />
      </div>
      <YourCourseCard />
    </>
  );
};

export default YourCourse;
