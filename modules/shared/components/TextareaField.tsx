import React, { TextareaHTMLAttributes } from 'react';

type Props = {
  name: string;
  value: string;
  error: boolean;
  placeholder?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaField: React.FC<Props> = ({ name, value, error, placeholder, ...rest }) => {
  return (
    <textarea
      {...rest}
      className={`w-full px-3 py-[10px] rounded-lg outline-none bg-white border min-h-24 text-sm text-[#7C93B5]" ${error ? "border-red-500" : "border-[#DEE5ED]"}`}
      id={name}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  );
};

export default TextareaField;
