import React, { useEffect, useRef, useState } from 'react';
import CalendarIcon from "./icons/CalendarIcon";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import clsx from 'clsx';

type Props = {
    className?: string;
};

const Days = ["D", "L", "M", "M", "J", "V", "S"];

const Calendar: React.FC<Props> = ({ className }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isFocus, setIsFocus] = useState(false);

    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !(containerRef.current as Element).contains(event.target as Node)) {
                setIsFocus(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleDayClick = (day: number) => {
        setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
        setIsFocus(false);
    };

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const daysArray = Array.from({ length: 42 }, (_, i) => {
        const day = i - firstDayOfMonth + 1;
        return day > 0 && day <= daysInMonth ? day : null;
    });

    return (
        <div className="relative" ref={containerRef}>
            <div className={clsx("p-3 flex items-center [&_*]:pointer-events-none gap-4 border border-[#DEE5ED] rounded-lg", className)} onClick={() => setIsFocus(true)}>
                <CalendarIcon className="text-[#7C93B5]" />
                <span className="text-sm text-text2">{selectedDate ? selectedDate.toLocaleDateString() : 'dd/mm/aaaa'}</span>
            </div>
            {isFocus && (
                <div className="absolute z-10 mt-2 p-5 border border-[#DEE5ED] shadow-lg bg-white rounded-lg">
                    <div className="py-4 flex items-center">
                        <button onClick={handlePrevMonth} className="size-8 rounded-lg grid place-items-center border border-[#DEE5ED] cursor-pointer">
                            <ChevronLeftIcon className="text-[#7C93B5]" />
                        </button>
                        <h4 className="flex-1 text-center">{currentDate.toLocaleString('default', { month: 'short' })} {year}</h4>
                        <button onClick={handleNextMonth} className="size-8 rounded-lg grid place-items-center border border-[#DEE5ED] cursor-pointer">
                            <ChevronRightIcon className="text-[#7C93B5]" />
                        </button>
                    </div>

                    <div className="grid grid-cols-[repeat(7,32px)] grid-rows-[repeat(6,32px)] gap-1">
                        {Days.map((day, i) => (
                            <div key={i} className="grid place-items-center text-secn-blue font-bold">
                                {day}
                            </div>
                        ))}

                        {daysArray.map((day, i) => {
                            return day !== null ? (
                                <div
                                    key={i}
                                    className={`grid place-items-center text-[#444444] rounded-lg cursor-pointer ${selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year ? 'bg-secn-blue text-white' : 'hover:bg-[#E5F3FF]'}`}
                                    onClick={() => handleDayClick(day)}
                                >
                                    {day}
                                </div>
                            ) : (
                                <div key={i}></div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;