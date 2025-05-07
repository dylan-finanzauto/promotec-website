import React from 'react';

type Props = {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<Props> = ({ text, children }) => {
  return (
    <div className="relative group inline-block cursor-pointer">
      {children}
      <span className="absolute left-1/2 bottom-full mb-1 w-max max-w-xs transform -translate-x-1/2 scale-0 rounded-lg bg-[#444D64] p-2 text-xs text-white transition-all group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
