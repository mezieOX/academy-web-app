import { BookCard } from "@/components/global/Card";
import { useState } from "react";
import { useGetBooksQuery } from "../../../reduxToolkit/store";
import NewCourseTab from "./newCourseTab/newCourseTab";

const NewCourse = () => {
  const [keyword, setKeyword] = useState("");
  const { data, isLoading } = useGetBooksQuery(`?search=${keyword}`);
  
  console.log("data", data)

  return (
    <>
      <div className="mx-auto relative flex flex-col mb-60 items-center w-full mt-4">
        <NewCourseTab setKeyword={setKeyword} />
      </div>

      {isLoading ? <div className="text-center">Loading.....</div> : null}

      {data ? <BookCard books={data} /> : null}
    </>
  );
};

export default NewCourse;
