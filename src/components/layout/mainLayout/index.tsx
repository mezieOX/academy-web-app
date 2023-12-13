import { FC } from "react";

import Header from "./Header/Header";

const MainLayout: FC<any> = ({ children, className }) => {
  return (
    <>
      <div className={`${className}  z-50`}>
        <Header />
      </div>
      {children}
    </>
  );
};

export default MainLayout;
