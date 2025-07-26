import clsx from "clsx";
import { NextPage } from "next";

interface Props extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

const Button: NextPage<Props> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition w-full",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
