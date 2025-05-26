'use client';
// Libraries
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ChevronDownIcon } from "./SVGIcons";
// Components

export type Item = {
  key: string;
  value: any;
};

type Props = {
  items: Item[];
  className?: string;
  name: string;
  value: any;
  placeholder?: string;
  error: boolean;
  disabled?: boolean;
  onChange: (value: any) => void;
  onBlur: () => void;
};

export default function Select({ items, className, value, placeholder, error, disabled, onChange, onBlur }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | Item>(() => {
    return items.find(item => item.value == value) || null;
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [actionPosition, setActionPosition] = useState<{ top?: number; left?: number; width?: number } | null>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  const toggleDropdown = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  const handleSelect = (item: Item) => {
    if (!disabled) {
      onChange(item.value);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setSelectedItem(items.find(item => item.value == value) || null);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        containerRef.current &&
        !(containerRef.current as Element).contains(event.target as Node) &&
        dropdownRef.current &&
        !(dropdownRef.current as Element).contains(event.target as Node)
      ) {
        setIsOpen(false);
        onBlur();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onBlur]);

  useEffect(() => {
    if (isOpen) {
      const rect = selectRef.current?.getBoundingClientRect();
      if (rect) {
        const windowHeight = window.innerHeight;
        const dropdownHeight = 248;
        const spaceBelow = windowHeight - rect.bottom;
        const spaceAbove = rect.top;

        if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
          setActionPosition({ top: rect.top - dropdownHeight, left: rect.left, width: rect.width, });
        } else {
          setActionPosition({ top: rect.bottom, left: rect.left, width: rect.width });
        }
      }
    }
  }, [isOpen]);

  const dropdown = isOpen && actionPosition ? (
    <ul
      ref={dropdownRef}
      className="fixed space-y-1 max-h-[248px] mt-1 p-2 overflow-y-auto rounded-lg bg-white border border-[#DEE5ED] z-50 shadow-lg text-sm"
      style={{
        top: actionPosition.top,
        left: actionPosition.left,
        width: actionPosition.width,
      }}
    >
      {items.map((i) => (
        <li
          key={i.value}
          className={`h-10 px-3 flex items-center cursor-pointer rounded-lg truncate ${selectedItem == i ? "bg-gray-3" : "hover:bg-gray-3"}`}
          onClick={() => handleSelect(i)}
        >
          {i.key}
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div className="w-full" ref={containerRef}>
      <div
        className={
          `h-10 w-full shadow-sm border border-[#DEE5ED] bg-white rounded-lg px-3 py-[10px] flex justify-between items-center gap-2 cursor-pointer
          ${isOpen ? "outline" : ""} ${isOpen && error ? "outline-red-500" : "outline-blue-primary"}
          ${error ? "border-red-500" : ""}
          ${disabled ? "bg-gray-100 cursor-not-allowed text-gray-400" : ""}
          ${className}
        `}
        onClick={toggleDropdown}
        ref={selectRef}
      >
        <div className="text-[14px] truncate">
          {selectedItem ? (
            <span className="text-[#1F2024]">{selectedItem.key}</span>
          ) : (
            <span className="text-blue-secondary">{placeholder || "Seleccione..."}</span>
          )}
        </div>
        <ChevronDownIcon className={selectedItem ? "text-[#1F2024]" : "text-blue-secondary"} />
      </div>
      {portalContainer && !disabled && ReactDOM.createPortal(dropdown, portalContainer)}
    </div>
  );
}
