import OptionsIcon from "./icons/OptionsIcon";

type Props = {

}

const Table: React.FC<Props> = () => {


    return (
        <>
            <div className="grid grid-cols-[repeat(5,1fr)] overflow-auto rounded-lg border border-[#DEE5ED]">

                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">ID</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Archivo</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Propietario</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Fecha y hora</div>
                {/* <div className="text-sm px-3 py-5 font-medium whitespace-nowrap text-text2 sticky right-0 bg-white shadow-lg border-b border-[#DEE5ED]">Acciones</div> */}
                <div className="text-sm px-3 py-5 font-medium whitespace-nowrap text-text2 border-b border-[#DEE5ED]">Acciones</div>

                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">123456</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">DUA.pdf</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">Daniela Latorre</div>
                <div className="text-sm px-4 py-5 font-medium whitespace-nowrap text-text">01/10/2024 - 11:40 am</div>
                {/* <div className="text-sm sticky right-0 px-3 py-2 bg-white shadow-lg grid place-items-center">
                    <button className="grid place-items-center rounded-lg size-10 hover:bg-[#EDEFF7] transition cursor-pointer">
                        <OptionsIcon className="text-[#7C93B5]" />
                    </button>
                </div> */}
                <div className="text-sm px-4 py-2 font-medium whitespace-nowrap text-text">
                    <button className="grid place-items-center rounded-lg size-10 hover:bg-[#EDEFF7] hover:shadow transition-all cursor-pointer">
                        <OptionsIcon className="text-[#7C93B5]" />
                    </button>
                </div>

            </div>

        </>
    )
}

export default Table;
