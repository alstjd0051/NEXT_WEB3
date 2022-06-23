import type { NextPage } from "next";
import Head from "next/head";
import { useMoralis } from "react-moralis";

const Home: NextPage = () => {
  const { isAuthenticated } = useMoralis();
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login | Dashboard3</title>
        </Head>

        <div
          className="flex 
        flex-col 
        justify-center 
        items-center 
        w-[100vw]
        h-[100vh]
        bg-gradient-to-r from-teal-400 to-purple-300
        "
        >
          <h1 className="text-5xl font-bold text-white mb-4">Dashboard3</h1>
          <button className="inline-flex items-center px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-md mx-2 mt-6 text-lg ">
            Login with Metamask
          </button>
        </div>
      </>
    );
  }
  return (
    <div>
      <h1>Hello Web3</h1>
    </div>
  );
};

export default Home;
