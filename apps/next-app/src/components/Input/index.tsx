import { InputHTMLAttributes } from "react"

type InputProps =  InputHTMLAttributes<HTMLInputElement>

export function Input({...props}: InputProps){
  return (
    <input
      className={`py-2 pl-2 rounded-md`}
      {...props}
    />
  )
}