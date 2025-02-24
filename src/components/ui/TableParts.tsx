import OptionsIcon from "./icons/OptionsIcon";
import TrashIcon from "./icons/TrashIcon";
import Select from "./Select";

type Props = {
    isInput: boolean,
    onNoInput: () => void
}

const TableParts: React.FC<Props> = ({ isInput, onNoInput }) => {


    return (
        <>
            <div className="grid grid-cols-[repeat(13,1fr)] overflow-auto rounded-lg border border-[#DEE5ED]">

                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">#</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Tipo daño</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Pieza</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Tamaño daño</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Cant. Faltante</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Cambio pieza</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Valor pieza</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Atribuible</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">No. Fact. recobro</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Valor recobro</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Estado</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Tipología</div>
                <div className="text-sm sticky right-0 px-3 py-2 bg-white shadow-lg border-b border-[#DEE5ED]"></div>

                {isInput && (
                    <>
                        <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text border-b border-[#DEE5ED]">
                            4
                        </div>
                        <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text border-b border-[#DEE5ED]">
                            <Select items={[]} />
                        </div>
                        <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text border-b border-[#DEE5ED]">
                            <Select items={[]} />
                        </div>
                        <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text border-b border-[#DEE5ED]">
                            <Select items={[]} />
                        </div>
                        <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text border-b border-[#DEE5ED]">
                            <input
                                className="h-10 border w-min border-[#DEE5ED] rounded-lg px-3 py-[10px] outline-secn-blue"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text border-b border-[#DEE5ED]">
                            <input
                                className="h-10 border w-min border-[#DEE5ED] rounded-lg px-3 py-[10px] outline-secn-blue"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text border-b border-[#DEE5ED]">
                            <input
                                className="h-10 border w-min border-[#DEE5ED] rounded-lg px-3 py-[10px] outline-secn-blue"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text border-b border-[#DEE5ED]">
                            <Select items={[]} />
                        </div>
                        <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text border-b border-[#DEE5ED]">
                            <input
                                className="h-10 border w-min border-[#DEE5ED] rounded-lg px-3 py-[10px] outline-secn-blue"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text border-b border-[#DEE5ED]">
                            <input
                                className="h-10 border w-min border-[#DEE5ED] rounded-lg px-3 py-[10px] outline-secn-blue"
                                type="text"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text border-b border-[#DEE5ED]">
                            <Select items={[]} />
                        </div>
                        <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text border-b border-[#DEE5ED]">
                            <Select items={[]} />
                        </div>
                        <div className="text-sm sticky right-0 px-3 py-2 bg-white shadow-lg grid place-items-center border-b border-[#DEE5ED]">
                            <button className="grid place-items-center rounded-lg size-10 hover:bg-[#EDEFF7] transition cursor-pointer" onClick={() => onNoInput()}>
                                <TrashIcon className="text-[#7C93B5]" />
                            </button>
                        </div>
                    </>
                )}

                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">3</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">4. Golpeado</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">Puerta delantera derecha</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">Hasta 2.5cm de largo y/o diámetro</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">1</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">Si No</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">$ 150.000</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">Al día</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">0000000000</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">$ 00000000</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">CONCESIONARIO FACTURADO</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">N/A</div>
                <div className="text-sm sticky right-0 px-3 py-2 bg-white shadow-lg grid place-items-center">
                    <button className="grid place-items-center rounded-lg size-10 hover:bg-[#EDEFF7] transition cursor-pointer">
                        <OptionsIcon className="text-[#7C93B5]" />
                    </button>
                </div>

            </div>

        </>
    )
}

export default TableParts;
