"use client";

import { NextPage } from "next";
import { Toaster } from "react-hot-toast";

interface Props {
  children: React.ReactNode;
}

const Providers: NextPage<Props> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default Providers;
