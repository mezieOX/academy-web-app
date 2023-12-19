"use client";

import {
  Banner,
  CourseOption,
  Instructors,
  NewCourse,
  NewsLetter,
  YourCourse,
} from "@/components/common/Home";
import MainLayout from "@/components/layout/mainLayout";
import { Provider } from "react-redux";
import { store } from "../components/reduxToolkit/store";

export default function Home() {
  return (
    <Provider store={store}>
      <MainLayout>
        <CourseOption />
        <Banner />
        <NewCourse />
        <Instructors />
        <YourCourse />
        <NewsLetter />

        {/* <TopCourse /> */}
      </MainLayout>
    </Provider>
  );
}
