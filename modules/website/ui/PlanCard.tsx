import { CheckCircleIcon } from "@/modules/shared/components/SVGIcons";

const PlanCard: React.FC<{
    title: string,
    subtitle: string,
    coverages: string[],
}> = ({ title, subtitle, coverages }) => {
    return (
        <div className="flex flex-col rounded-[30px] overflow-hidden bg-white">
            <div className="px-12 py-10 bg-blue-terciary">
                <h3 className="text-3xl text-blue-primary font-bold">{title}</h3>
                <h2 className="text-[56px] text-blue-primary font-bold">{subtitle}</h2>
            </div>
            <div className="p-12 grow space-y-5">
                {coverages.map((c, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <CheckCircleIcon className="text-blue-primary size-5" />
                        <span className="text-[20px] leading-none text-text-4">{c}</span>
                    </div>
                ))}
            </div>
            <div className="p-12">
                <span className="text-sm text-text-4 font-medium">*Aplican Términos y Condiciones.</span>
            </div>
        </div>
    )
}

export default PlanCard;