import OptionsIcon from "./icons/OptionsIcon";

type Props = {

}

const TablePieces: React.FC<Props> = () => {
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
                <div className="text-sm sticky right-0 px-4 py-2 bg-white shadow-lg border-b border-[#DEE5ED]"></div>

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
                <div className="text-sm sticky right-0 px-4 py-2 bg-white shadow-lg grid place-items-center">
                    <button className="grid place-items-center rounded-lg size-10 hover:bg-[#EDEFF7] transition cursor-pointer">
                        <OptionsIcon className="text-[#7C93B5]" />
                    </button>
                </div>

            </div>

            {/* <div className="relative border border-[#DEE5ED] rounded-lg overflow-auto">
                    <table className="w-full divide-y-2 divide-[#DEE5ED] text-sm">
                        <thead>
                            <tr>
                                <th className="px-4 py-5 font-medium whitespace-nowrap text-text2">#</th>
                                <th className="px-4 py-5 font-medium whitespace-nowrap text-text2">Tipo daño</th>
                                <th className="px-4 py-5 font-medium whitespace-nowrap text-text2">Pieza</th>
                                <th className="px-4 py-5 font-medium whitespace-nowrap text-text2">Tamaño daño</th>
                                <th className="px-4 py-5 font-medium whitespace-nowrap text-text2">Cant. Faltante</th>
                                <th className="px-4 py-5 font-medium whitespace-nowrap text-text2">Cambio pieza</th>
                                <th className="px-4 py-5 font-medium whitespace-nowrap text-text2">Valor pieza</th>
                                <th className="px-4 py-5 font-medium whitespace-nowrap text-text2">Atribuible</th>
                                <th className="px-4 py-5 font-medium whitespace-nowrap text-text2">No. Fact. recobro</th>
                                <th className="px-4 py-5 font-medium whitespace-nowrap text-text2">Valor recobro</th>
                                <th className="px-4 py-5 font-medium whitespace-nowrap text-text2">Estado</th>
                                <th className="px-4 py-5 font-medium whitespace-nowrap text-text2">Tipología</th>
                                <th className="sticky right-0 px-4 py-2 bg-white shadow"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="divide-y divide-[#DEE5ED]">
                                <td className="px-4 py-5 font-medium whitespace-nowrap text-text">3</td>
                                <td className="px-4 py-5 font-medium whitespace-nowrap text-text">4. Golpeado</td>
                                <td className="px-4 py-5 font-medium whitespace-nowrap text-text">Puerta delantera derecha</td>
                                <td className="px-4 py-5 font-medium whitespace-nowrap text-text">Hasta 2.5cm de largo y/o diámetro</td>
                                <td className="px-4 py-5 font-medium whitespace-nowrap text-text">1</td>
                                <td className="px-4 py-5 font-medium whitespace-nowrap text-text">Si No</td>
                                <td className="px-4 py-5 font-medium whitespace-nowrap text-text">$ 150.000</td>
                                <td className="px-4 py-5 font-medium whitespace-nowrap text-text">Al día</td>
                                <td className="px-4 py-5 font-medium whitespace-nowrap text-text">0000000000</td>
                                <td className="px-4 py-5 font-medium whitespace-nowrap text-text">$ 00000000</td>
                                <td className="px-4 py-5 font-medium whitespace-nowrap text-text">CONCESIONARIO FACTURADO</td>
                                <td className="px-4 py-5 font-medium whitespace-nowrap text-text">N/A</td>
                                <td className="sticky right-0 px-4 py-2 bg-white">...</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
        </>
    )
}

export default TablePieces;
