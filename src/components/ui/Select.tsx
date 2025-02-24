import React, { useEffect, useRef, useState } from "react"
import ChevronDownIcon from "@ui/icons/ChevronDownIcon"
import clsx from "clsx"

type Item = {
    key: string,
    value: any
}

type Props = {
    items: Item[],
    className?: string
}

export default function Select({ items, className }: Props) {

    const [isOpen, setIsOpen] = useState(false); // Para abrir o cerrar la lista
    const [selectedItem, setSelectedItem] = useState<null | Item>(null); // Opción seleccionada
    const selectRef = useRef(null); // Ref para detectar clics fuera del componente

    const toggleDropdown = () => setIsOpen(!isOpen); // Alterna la visibilidad de la lista
    const handleSelect = (item: Item) => {
        setSelectedItem(item); // Establece la opción seleccionada
        setIsOpen(false); // Cierra el dropdown después de seleccionar
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !(selectRef.current as Element).contains(event.target as Node)) {
                setIsOpen(false); // Cierra el dropdown si se hace clic fuera
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={selectRef}>
            <div className={clsx("h-10 border border-[#DEE5ED] rounded-lg px-3 py-[10px] flex justify-between items-center cursor-pointer", isOpen ? "outline-2 outline-secn-blue" : "", className)} onClick={toggleDropdown}>
                <span className="text-[#7C93B5] text-[14px]">{selectedItem ? selectedItem.key : ""}</span>
                <ChevronDownIcon className="text-[#7C93B5]" />
            </div>
            {isOpen && (
                <ul className="absolute w-full max-h-[248px] overflow-y-auto rounded-lg py-2 bg-white border border-[#DEE5ED] mt-1 z-10 shadow-lg">
                    {items.map(i => (
                        <li key={i.value} className="py-3 px-4 hover:bg-white2 cursor-pointer" onClick={() => handleSelect(i)}>{i.key}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}