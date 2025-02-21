const FileUpload: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-4 py-6 border border-dashed rounded-[18px] border-[#D1D1D1]">
            <span className="text-[14px] text-text">Arrastra y suelta tus archivos aquí o...</span>
            <button className="border border-[#D1D1D1] rounded-xl py-3 px-4 text-text font-semibold cursor-pointer">Seleccionar archivo</button>
        </div>
    )
}

export default FileUpload;