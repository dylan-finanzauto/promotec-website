import { AttachIcon } from "@/modules/shared/components/SVGIcons";
import React, { useState } from "react"

interface DropZoneProps {
    onFileDrop: (file: File) => void;
    value?: File;
    error?: string;
    title: string;
    description: string;
}

export const DropZone: React.FC<DropZoneProps> = ({ onFileDrop, value, error, title, description }) => {
    const [isDragging, setIsDragging] = useState(false)

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = () => {
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(false)

        const file = e.dataTransfer.files?.[0]
        if (file) {
            onFileDrop(file)
        }
    }

    return (
        <div className=" space-y-2">
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed border-[#345BB0] p-6 rounded-lg text-center cursor-pointer transition-all 
                    ${isDragging ? "bg-blue-100 border-blue-400" : "bg-white"} 
                    ${error ? "border-red-500 bg-red-50" : ""}
                    `}
            >
                <div className="flex flex-col items-center text-center">
                    <p className="text-[20px] text-[#A0AEC0]">{title}</p>
                    <p className="w-[590px] text-[14px] text-[#A0AEC0]">{description}</p>
                    <div className="flex items-center justify-center pt-6">
                        <AttachIcon className="text-[#345BB04D]" />
                    </div>
                </div>
                
                {value && (
                    <p className="text-sm text-[#A0AEC0] pt-3">
                        Archivo seleccionado: <strong>{value.name}</strong>
                    </p>
                )}
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>
    )
}