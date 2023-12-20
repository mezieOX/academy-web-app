import { FC } from "react";

import { IHeader } from "@/interfaces";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const MainLayout: FC<IHeader> = ({ children, className }) => {
  return (
    <>
      <div className={`${className}  z-50 !max-w-[100vw]`}>
        <Header />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
