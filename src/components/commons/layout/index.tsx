import React, { ReactNode } from "react";
import { useMoralis } from "react-moralis";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const { authenticate, isAuthenticated, user } = useMoralis();
  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Authenticate</button>
      </div>
    );
  }
  return <div>Welecom {user?.get("username")} </div>;
};

export default Layout;
