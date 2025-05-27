'use client';
import { AnglesIcon } from "@/modules/shared/components/SVGIcons";
// Libraries
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
// Components

export type Item = {
    key: string;
    value: any;
};

type Props = {
    items: Item[];
    name: string;
    value: any;
    onChange: (value: any) => void;
    renderItem?: (item: Item) => React.ReactNode;
};

export default function InsuranceSelect({ items, value, onChange, renderItem }: Props) {
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
        setIsOpen(!isOpen);
    };

    const handleSelect = (item: Item) => {
        onChange(item.value);
        setIsOpen(false);
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
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {

            document.body.style.overflowY = 'hidden';

            const rect = selectRef.current?.getBoundingClientRect();
            if (rect) {
                const windowHeight = window.innerHeight;
                const dropdownHeight = 240;
                const spaceBelow = windowHeight - rect.bottom;
                const spaceAbove = rect.top;

                if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
                    setActionPosition({ top: rect.top - dropdownHeight, left: rect.left, width: rect.width, });
                } else {
                    setActionPosition({ top: rect.bottom, left: rect.left, width: rect.width });
                }
            }
        } else {
            document.body.style.overflowY = 'auto';
        }

        return () => {
            document.body.style.overflowY = 'auto';
        }

    }, [isOpen]);

    const dropdown = isOpen && actionPosition ? (
        <ul
            ref={dropdownRef}
            className="fixed max-h-[240px]  overflow-y-auto rounded-lg bg-white border border-[#DEE5ED] z-50 shadow-lg text-sm"
            style={{
                top: actionPosition.top,
                left: actionPosition.left,
                width: actionPosition.width,
            }}
        >
            {items.map((item) => (
                <li
                    key={item.value}
                    className={`h-[60px] px-4 flex items-center cursor-pointer truncate ${selectedItem == item ? "bg-gray-3" : "hover:bg-gray-3"}`}
                    onClick={() => handleSelect(item)}
                >
                    {renderItem ? renderItem(item) : item.key}
                </li>
            ))}
        </ul>
    ) : null;

    return (
        <div className="w-xs" ref={containerRef}>
            <div
                ref={selectRef}
                className="p-4 rounded-lg border border-[#DEE5ED] flex items-center cursor-default"
                onClick={toggleDropdown}
            >
                <div className="grow">
                    {renderItem && selectedItem ? renderItem(selectedItem) : selectedItem?.key}
                </div>
                <AnglesIcon />
                {portalContainer && ReactDOM.createPortal(dropdown, portalContainer)}
            </div>
        </div>
    );
}
