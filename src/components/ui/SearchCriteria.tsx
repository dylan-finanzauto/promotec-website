import Calendar from "./Calendar";

const SearchCriteria: React.FC = () => {
    return (
        <div className="p-4 space-y-5 rounded-[14px] bg-white">
            <h3 className="text-xl font-bold text-text">Criterio de búsqueda</h3>
            <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-[#2F3036] text-xs font-semibold"
                    >Buscar por</label>
                    <Calendar className="w-xs" />
                </div>
                <button className="h-10 self-end rounded-lg bg-tirth text-white w-[200px] cursor-pointer">Buscar</button>
            </div>

        </div>
    )
}

export default SearchCriteria;