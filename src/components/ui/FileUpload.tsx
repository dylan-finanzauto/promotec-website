import React, { useEffect, useState } from "react";
import CaretIcon from "./icons/CaretIcon";
import PointIcon from "./icons/PointIcon";
import XIcon from "./icons/XIcon";

const FileUpload: React.FC = () => {

    const [file, setFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number>(0);

    let xhr = new XMLHttpRequest();

    useEffect(() => {
        console.log("File: ", file)
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        xhr.open('POST', 'http://localhost:3000/upload-endpoint');

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const progress = (event.loaded / event.total) * 100;
                setUploadProgress(progress);
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                console.log('File uploaded successfully');
                setTimeout(() => {
                    setFile(null)
                }, 500)
            } else {
                console.error('File upload failed');
            }
        };

        xhr.send(formData);
    }, [file])

    const handleCancel = () => {
        xhr.abort();
        setFile(null);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Event change")
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        event.stopPropagation();
        event.currentTarget.classList.add('dragged');
    };

    const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        event.stopPropagation();
        event.currentTarget.classList.remove('dragged');
    };

    const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        event.stopPropagation();
        event.currentTarget.classList.remove('dragged');

        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            setFile(event.dataTransfer.files[0]);
        }
    };

    return (
        <div className="space-y-2">
            <label htmlFor="file-upload" className="flex flex-col items-center gap-4 group py-6 border border-dashed rounded-[18px] border-[#D1D1D1] hover:bg-princ-blue [&.dragged]:bg-princ-blue [&.dragged]:border-secn-blue hover:border-secn-blue [&_*]:pointer-events-none transition-all" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                <span className="text-[14px] text-text">Arrastra y suelta tus archivos aquí o...</span>
                <button className="border group-hover:bg-white2 group-[.dragged]:bg-white2 border-[#D1D1D1] rounded-xl py-3 px-4 text-text font-semibold cursor-pointer transition-all">Seleccionar archivo</button>
            </label>
            <input className="hidden" type="file" name="" id="file-upload" onChange={handleFileChange} />

            {file && (
                <div className="flex items-center gap-2 p-3 rounded-[18px] border border-[#D1D1D1]">
                    <CaretIcon className="text-tirth" />
                    <div className="flex-1">
                        <div className="flex gap-2 items-center text-sm text-[#1F2024]">
                            <span className="font-semibold">{file.name}</span>
                            <PointIcon className="text-[#D1D1D1]" />
                            <div>Cargando...</div>
                        </div>
                        <div className="flex gap-2 items-center text-sm">
                            <div>5.4 MB</div>
                            <PointIcon className="text-[#D1D1D1]" />
                            <div>{uploadProgress.toFixed(0)}%</div>
                            <div className="h-2 flex-1 bg-[#E7E7E7] rounded-lg">
                                <div className="h-2 bg-tirth rounded-lg" style={{ width: `${uploadProgress}%` }}></div>
                            </div>
                        </div>
                    </div>

                    <button className="size-10 rounded-xl border border-[#D1D1D1] grid place-items-center cursor-pointer" onClick={handleCancel}>
                        <XIcon className="text-[#1F2024]" />
                    </button>

                </div>
            )}

        </div>
    )
}

export default FileUpload;