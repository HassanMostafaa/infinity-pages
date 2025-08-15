import React, { FunctionComponent } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
export const Button: FunctionComponent<IButtonProps> = ({ text, ...props }) => {
  return (
    <button
      className={` 
      //base-classes
        rounded-lg  py-2 px-4 text-xs md:text-base

      //disabled-state
      ${
        props?.disabled
          ? "!bg-neutral-200 !text-neutral-400 cursor-default pointer-events-none"
          : "bg-neutral-100 cursor-pointer hover:bg-neutral-200 active:bg-neutral-300"
      } 
        
      ${props?.className ?? ""}
      `}
      {...props}
    >
      {text}
    </button>
  );
};
