import { ReactNode } from 'react';

type ButtonProps = {
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
  title?: ReactNode;
  color?: 'primary' | 'danger' | 'secondary';
};

export function Button({ onClick = () => null, type, title, color = 'primary' }: ButtonProps) {
  let buttonColor = ''
switch (color) {
  case 'primary':
    buttonColor = 'bg-blue-400'
    break;
  case 'danger':
    buttonColor = 'bg-red-400'
    break
    case 'secondary':
      buttonColor = 'bg-gray-400'
      break
}

  return (
    <button
      className={`${buttonColor} py-2 rounded-lg w-full hover:bg-opacity-70 transition`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
}
