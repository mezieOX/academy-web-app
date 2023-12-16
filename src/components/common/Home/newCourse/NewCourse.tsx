import { cardData } from "@/data";
import NewCourseTab from "./newCourseTab/newCourseTab";
import { BookCard } from "@/components/global/Card";

const NewCourse = () => {
  return (
    <>
      <div className="mx-auto relative flex flex-col mb-60 items-center w-full mt-4">
        <NewCourseTab />
      </div>
      <BookCard cardData={cardData} />
    </>
  );
};

export default NewCourse;
