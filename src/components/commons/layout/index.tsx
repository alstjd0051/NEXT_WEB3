import React, { ReactNode } from "react";
import { useMoralis } from "react-moralis";
import Header from "./header";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
