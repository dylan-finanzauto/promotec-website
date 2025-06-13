import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom";
import { CalendarIcon } from './SVGIcons';

type Props = {
    className?: string;
    name: string;
    value: Date | null;
    error: boolean;
    onChange: (value: Date | null) => void;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    onBlur: () => void;
};

const Days = ["D", "L", "M", "M", "J", "V", "S"];

const DateField: React.FC<Props> = ({
    className, value, error, onChange, onBlur, disabled, name, maxDate, minDate }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentDate, setCurrentDate] = useState(new Date());

    const containerRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                containerRef.current &&
                !containerRef.current.contains(event.target as Node) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                onBlur();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onBlur]);

    const goToPrevMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() - 1);
        setCurrentDate(newDate);
    };

    const goToNextMonth = () => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + 1);
        setCurrentDate(newDate);
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const daysArray = Array.from({ length: 42 }, (_, i) => {
        const day = i - firstDayOfMonth + 1;
        return day > 0 && day <= daysInMonth ? day : null;
    });

    const isSameDate = (d1: Date, d2: Date) =>
        d1.getDate() === d2.getDate() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getFullYear() === d2.getFullYear();

    const isBefore = (a: Date, b: Date) => a.getTime() < b.getTime();
    const isAfter = (a: Date, b: Date) => a.getTime() > b.getTime();

    const handleDayClick = (day: number) => {
        const selected = new Date(year, month, day);
        if ((minDate && isBefore(selected, minDate)) || (maxDate && isAfter(selected, maxDate)))
            return;
        onChange(selected);
        setIsOpen(false);
        onBlur();
    };

    const formatDate = (date: Date) =>
        `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;

    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const dropdown = isOpen
        ? ReactDOM.createPortal(
            <div
                ref={dropdownRef}
                className="absolute z-50 mt-2 p-4 border rounded-lg shadow bg-white"
                style={{ top: "100%", left: 0 }}
            >
                <div className="flex justify-between items-center mb-2">
                    <button onClick={goToPrevMonth}>←</button>
                    <span className="font-semibold">
                        {monthNames[month]} {year}
                    </span>
                    <button onClick={goToNextMonth}>→</button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center">
                    {Days.map((d, i) => (
                        <div key={i} className="text-xs font-bold text-blue-700">{d}</div>
                    ))}

                    {daysArray.map((day, i) => {
                        if (!day) return <div key={i}></div>;

                        const thisDate = new Date(year, month, day);
                        const isSelected = value && isSameDate(value, thisDate);
                        const isDisabled =
                            (minDate && isBefore(thisDate, minDate)) ||
                            (maxDate && isAfter(thisDate, maxDate));

                        return (
                            <button
                                key={i}
                                onClick={() => handleDayClick(day)}
                                disabled={isDisabled}
                                className={`text-sm w-8 h-8 rounded-full transition ${isSelected
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-blue-100"
                                    } ${isDisabled ? "text-gray-400 cursor-not-allowed" : ""}`}
                            >
                                {day}
                            </button>
                        );
                    })}
                </div>
            </div>,
            document.body
        )
        : null;

    return (
        <div ref={containerRef}>
            <div
                className={`h-10 flex-1 border rounded-lg text-[#1F2024] px-3 py-[10px] max-w-full shadow-sm transition-all bg-white disabled:bg-slate-50 ${error ? "border-red-400 outline-red-500" : "border-[#DEE5ED] outline-blue-primary hover:border-blue-primary"} ${className ?? ""}`}
                onClick={() => !disabled && setIsOpen(true)}
                ref={calendarRef}
            >
                <div className='flex'>
                    <CalendarIcon className="text-[#7C93B5]" />
                    <span className="text-sm text-[#1F2024] ml-3">
                        {value ? formatDate(value) : ""}
                    </span>

                </div>
            </div>
            {dropdown}
        </div>
    );
};

export default DateField;
