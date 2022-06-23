import React from "react";
import { useMoralis } from "react-moralis";

const Header = () => {
  const { user } = useMoralis();

  return (
    <header>
      <div className="flex">
        <div className="justify-center ">
          <h1>Dashboard3</h1>
        </div>
        <div className="justify-center">
          <h1>{user?.getUsername}</h1>
          <button>Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
