import { useEffect, useRef, useState } from "react";
import BellIcon from "./icons/BellIcon"
import TrashIcon from "./icons/TrashIcon";
import clsx from "clsx";

type Props = {

}

const Notification: React.FC<Props> = () => {

    const [isFocus, setIsFocus] = useState(false);
    const containerRef = useRef(null);

    const toggleClick = () => setIsFocus(v => !v)

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
    }, [])

    return (
        <div className="relative" ref={containerRef}>
            <div
                className="grid place-items-center rounded-full size-12 bg-[#3155A3] cursor-pointer outline-2 outline-transparent hover:outline-tirth"
                onClick={toggleClick}
            >
                <BellIcon className="size-5 text-white" />
                <div
                    className="absolute size-4 text-[10px] grid place-items-center top-0 right-0 mt-[5px] mr-[5px] rounded-full text-white bg- truncate bg-tirth"
                >
                    99
                </div>
            </div>

            {isFocus && (
                <div className="absolute z-20 top-0 mt-4 right-0 mr-1 mb-8 bg-white border border-[#DEE5ED] p-4 rounded-lg w-sm space-y-4 shadow-lg">
                    <h3 className="font-semibold">Notificaciones {"(80)"}</h3>
                    <div className="flex flex-col gap-4 max-h-[600px] overflow-auto pr-4">
                        <div className="space-y-4">
                            <h5 className="text-[#7C93B5] font-semibold text-xs">Hoy</h5>

                            {Array.from({ length: 3 }).map((_, i) => (
                                <>
                                    <div className="group p-4 flex items-center gap-4 border-l-[3px] border-[#0020A8] rounded-sm hover:bg-[#DEE5ED] transition">
                                        <div className="space-y-1 flex-1">
                                            <h6 className="text-sm font-semibold">Ingreso de PQR</h6>
                                            <p className="text-sm">La petición 23422 se le ha asignado.</p>
                                            <p className="text-xs text-end">9:00am</p>
                                        </div>
                                        <TrashIcon className="size-4 text-[#7C93B5] group-hover:text-black" />
                                    </div>

                                    {i !== 2 && (
                                        <span className="block h-[1px] w-full bg-[#DEE5ED]"></span>
                                    )}
                                </>
                            ))}

                        </div>
                        <div className="space-y-4">
                            <h6 className="text-[#7C93B5] font-semibold text-xs">Ayer - 20/06/2024</h6>

                            {Array.from({ length: 2 }).map((_, i) => (
                                <>
                                    <div className="p-4 flex items-center gap-4 border-l-[3px] border-[#0020A8] rounded-sm">
                                        <div className="space-y-1 flex-1">
                                            <h6 className="text-sm font-semibold">Ingreso de PQR</h6>
                                            <p className="text-sm">La petición 23422 se le ha asignado.</p>
                                            <p className="text-xs text-end">9:00am</p>
                                        </div>
                                        <TrashIcon className="size-4 text-[#7C93B5]" />
                                    </div>

                                    {i !== 1 && (
                                        <span className="block h-[1px] w-full bg-[#DEE5ED]"></span>
                                    )}
                                </>
                            ))}

                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Notification;
