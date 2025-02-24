import clsx from "clsx";
import CheckIcon from "./icons/CheckIcon";

type Props = {
    steps: string[],
    currentStep: number
}

const StepsBar: React.FC<Props> = ({ steps, currentStep }) => {

    return (
        <div className="flex justify-center py-5 bg-[#E6E8F5] rounded-[14px]">
            {/* <div className={`grid grid-cols-[repeat(${(steps.length * 2) - 1},120px)]`}>
                {steps.map((step, index) => (
                    <>
                        <div className="flex flex-col items-center gap-4">
                            <span className="size-10 rounded-full bg-tirth grid place-items-center">
                                <span className="size-4 bg-white rounded-full"></span>
                            </span>
                            <h5 className="text-[14px] font-medium">{step}</h5>
                        </div>

                        {(index !== steps.length - 1) && (
                            <div className="relative">
                                <span
                                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 block w-[192px] h-[3px] bg-text3"
                                >
                                    <span className="block w-1/2 bg-tirth h-[3px]"></span>
                                </span>
                            </div>
                        )}

                    </>
                ))}
            </div> */}

            <div className={`flex flex-wrap justify-center`}>
                {steps.map((step, index) => (
                    <>
                        <div className="flex flex-col items-center gap-4 w-[120px]">
                            {/* <span className="size-10 rounded-full bg-tirth grid place-items-center"> */}
                            <span className={clsx("size-10 rounded-full grid place-items-center", index <= currentStep ? "bg-tirth" : "bg-text3")}>
                                {currentStep > index ? <CheckIcon className="text-white" /> : currentStep == index ? <span className="size-4 bg-white rounded-full"></span> : <span className="size-7 bg-[#E6E8F5] rounded-full"></span>}
                            </span>
                            <h5 className="text-[14px] font-medium">{step}</h5>
                        </div>
                        {(index !== steps.length - 1) && (
                            <div className="relative w-[120px]">
                                <span
                                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 block w-[192px] h-[3px] bg-text3"
                                >
                                    <span className={clsx(
                                        "block bg-tirth h-[3px]",
                                        currentStep > index ? "w-full" : currentStep == index ? "w-1/2" : "w-0"
                                    )}></span>
                                </span>
                            </div>
                        )}

                    </>
                ))}
            </div>

        </div>

    )
}

export default StepsBar;