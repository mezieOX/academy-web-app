import { cardData } from "@/data";
import { BookCard } from "@/components/global/Card";
import NewCourseTab from "./newCourseTab/newCourseTab";

const YourCourse = () => {
  return (
    <>
      <div className="mx-auto relative flex flex-col mb-60 items-center w-full mt-4">
        <NewCourseTab />
      </div>
      <BookCard cardData={cardData} />
    </>
  );
};

export default YourCourse;
