import { HTMLProps } from "react";

const Badge: React.FC<{
  children: React.ReactNode,
} & HTMLProps<HTMLSpanElement>> = ({ children, className: cls, ...rest }) => {
  return (
    <span className={`inline-flex justify-center items-center rounded-md w-28 px-2 py-1 text-sm font-medium shadow-sm ${cls}`} {...rest}>{children}</span>
  )
}

export default Badge;
