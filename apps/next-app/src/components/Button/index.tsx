import { ReactNode } from "react";

type ButtonProps = {
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
  title?: ReactNode;
};

export function Button({ onClick = () => null, type, title }: ButtonProps) {
  return (
    <button className="bg-blue-400 py-2 rounded-lg" onClick={onClick} type={type}>
      {title}
    </button>
  );
}
