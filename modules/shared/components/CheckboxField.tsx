import React from 'react';
import { CheckIcon } from './SVGIcons';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

const CheckboxField: React.FC<Props> = ({ label, error = false, checked, ...props }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <span className="relative inline-flex items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          className={`peer appearance-none w-4 h-4 rounded border-2 border-[#D4D4D8] not-checked:hover:bg-gray-1 checked:bg-blue-600 checked:border-blue-600 cursor-pointer outline-none transition-all ${error ? 'border-red-500' : ''}`}
          {...props}
        />
        <CheckIcon className="absolute size-2 hidden peer-checked:block left-1/2 top-1/2 -translate-1/2 text-white pointer-events-none" />
      </span>
      {label && <span className={error ? 'text-red-600' : ''}>{label}</span>}
    </label>
  );
};

export default CheckboxField;
