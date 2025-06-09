import RichText from "@/modules/shared/components/RichText";
import Image from "next/image";

const CoverageCard: React.FC<{
    title: string,
    description?: string,
    img: string
}> = ({ title, description, img }) => {
    return (
        <div className="flex flex-col rounded-[30px] overflow-hidden">
            <div className="grow overflow-hidden">
                <Image className="h-full w-full object-cover object-center" src={img} alt="" width={200} height={200} />
            </div>
            <div className="flex flex-col justify-center gap-2 px-[30px] h-[146px] shrink-0 bg-blue-terciary">
                <h4 className="text-xl text-blue-primary">
                    <RichText text={title} />
                </h4>
                {description && <p className="text-xs text-blue-primary"><RichText text={description} /></p>}
            </div>
        </div>
    )
}

export default CoverageCard;