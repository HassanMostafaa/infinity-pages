import React, { FunctionComponent } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
export const Button: FunctionComponent<IButtonProps> = ({ text, ...props }) => {
  return (
    <button
      className={` bg-white py-2 px-4 text-xs md:text-base ${
        props?.className ?? ""
      }`}
      {...props}
    >
      {text}
    </button>
  );
};
