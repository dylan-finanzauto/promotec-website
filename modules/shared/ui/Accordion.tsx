'use client'
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../components/SVGIcons";

const Accordion: React.FC<{
  title: string;
  content: string;
}> = ({ title, content }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(curr => !curr);
  };

  return (
        <div className="border-b border-[#E7E7E7]">
          <button
            className="w-full text-left px-6 py-4 text-text-4 hover:text-blue-primary focus:outline-none flex justify-between items-center cursor-pointer"
            onClick={() => handleToggle()}
          >
            {title}
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
          {open && (
            <div className="px-6 pb-4 text-text-3 text-base">
              {content}
            </div>
          )}
        </div>
  );
};

export default Accordion;