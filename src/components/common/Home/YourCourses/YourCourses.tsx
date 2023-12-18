import { BookCard } from "@/components/global/Card";
import { cardData } from "@/data";
import NewCourseTab from "./newCourseTab/newCourseTab";

const YourCourse = () => {
  return (
    <>
      <div className="mx-auto relative flex flex-col mb-60 items-center w-full mt-4">
        <NewCourseTab />
      </div>
      <BookCard books={cardData} />
    </>
  );
};

export default YourCourse;
