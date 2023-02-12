import { TextareaHTMLAttributes } from 'react';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ ...props }: TextAreaProps) {
  return <textarea className={`py-2 pl-2 rounded-md`} {...props} />;
}
