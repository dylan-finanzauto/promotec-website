import { useEffect, useRef, useState } from "react"

type User = {
    name: string,
    rol: string,
    email: string,
    img: string
}

type Props = {
    user: User
    onExit: () => void
}

const SideUser: React.FC<Props> = ({ user, onExit }) => {

    const [isFocus, setIsFocus] = useState(false);
    const containerRef = useRef(null);

    const toggleClick = () => setIsFocus(v => !v)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !(containerRef.current as Element).contains(event.target as Node)) {
                setIsFocus(false); // Cierra el dropdown si se hace clic fuera
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },)

    return (
        <div className="relative">
            <div
                className="p-3 flex gap-2 rounded-[10px] hover:bg-[#EDEFF7] border border-transparent hover:border-princ-blue transition cursor-pointer"
                ref={containerRef}
                onClick={toggleClick}
            >
                <img className="size-11 rounded-full" src={user.img} alt="" />
                <div className="w-32 space-y-1">
                    <h4 className="text-text2 font-bold text-[14px]">
                        {user.name}
                    </h4>
                    <span
                        className="py-1 px-4 rounded-sm bg-princ-blue text-[8px] text-text2"
                    >{user.rol}</span>
                </div>
            </div>

            {isFocus && (

                <div className="absolute bottom-0 left-0 mb-8 bg-white border border-[#DEE5ED] p-2 rounded-lg w-xs">
                    <div className="grid gap-1">
                        <div className="p-2 space-y-1">
                            <div className="font-semibold">{user.name}</div>
                            <div className="text-[14px]">{user.email}</div>
                        </div>
                        <span className="block h-[1px] w-full bg-[#DEE5ED]"></span>
                        <div className="p-2 hover:bg-white2 rounded-lg cursor-pointer" onClick={onExit}>
                            <div className="">Cerrar Sesión</div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default SideUser;