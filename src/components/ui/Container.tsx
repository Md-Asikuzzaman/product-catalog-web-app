import clsx from "clsx";
import { NextPage } from "next";

interface Props extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

const Container: NextPage<Props> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={clsx("max-w-[1440px] w-full mx-auto px-4 md:px-8", className)}
    >
      {children}
    </div>
  );
};

export default Container;
