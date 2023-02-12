import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  title?: ReactNode;
};

export function Button({ onClick, type, title }: ButtonProps) {
  return (
    <button className="btn btn-primary" onClick={onClick} type={type}>
      {title}
    </button>
  );
}
