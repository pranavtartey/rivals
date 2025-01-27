import { ButtonHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  varient: "primary" | "secondary" | "text";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, className, varient }) => {
  return (
    <button
      className={twMerge(
        "p-2 lg:py-4 lg:p-4 rounded-full text-lg tracking-tight transition",
        varient === "primary" &&
          "bg-textBlack text-white hover:bg-white hover:text-black",
        varient === "secondary" &&
          "bg-neutral-100 hover:bg-blue-700 hover:text-white",
        varient === "text" &&
          "border bg-neutral-300/30 text-white hover:text-black hover:bg-white backdrop-blur-lg",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
