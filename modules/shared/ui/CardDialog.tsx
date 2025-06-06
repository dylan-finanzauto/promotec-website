import React, { useEffect } from "react";
import { AlertIcon, CheckCircleFilledIcon, InfoCircleIcon } from "../components/SVGIcons";
import useDialog from "../hooks/useDialog";

const icons = {
    success: (<div className="shrink-0 size-16 rounded-full grid place-items-center bg-blue-terciary"><CheckCircleFilledIcon className="text-blue-primary size-8" /></div>),
    error: (<div className="shrink-0 size-16 rounded-full grid place-items-center bg-[#FFDADA]"><AlertIcon className="text-[#ED2D15] size-8" /></div>),
    warning: (<div className="shrink-0 size-16 rounded-full grid place-items-center bg-[#feffda]"><AlertIcon className="text-yellow-500 size-8" /></div>),
    info: (<div className="shrink-0 size-16 rounded-full grid place-items-center bg-blue-terciary"><InfoCircleIcon className="text-blue-primary size-8" /></div>),
} as Record<string, React.ReactNode>;

type Props = {
    state: string,
    className?: string,
    children: React.ReactNode
}

const CardDialog: React.FC<Props> = ({ className, state, children }) => {

    const { openDialog, closeDialog } = useDialog()

    useEffect(() => {
        openDialog()
        return () => {
            closeDialog()
        }
    }, [])

    const header = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === CardHeaderDialog
    );
    const body = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === CardBodyDialog
    );
    const footer = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && child.type === CardFooterDialog
    );

    return (
        <>
            <div className="fixed inset-0 h-screen z-50 bg-[#000C3E]/50 backdrop-blur-sm"></div>
            <div className={"fixed py-2 left-[50%] top-[50%] z-50 grid place-items-center max-w-2xl w-full min-w-0 h-screen translate-x-[-50%] translate-y-[-50%] " + className}>
                <div className="bg-white rounded-2xl shadow-lg overflow-y-auto max-h-full">
                    <div className="pt-10 px-8 pb-8">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="self-center md:self-start">
                                {icons[state]}
                            </div>
                            <div className="grow mx-auto flex flex-col items-center md:items-start p-2 overflow-hidden">
                                {header}
                            </div>
                        </div>
                        {body}
                    </div>
                    <div className="p-8 flex justify-end gap-4 bg-gray-3">
                        {footer}
                    </div>
                </div>
            </div>
        </>
    );
};

export const CardHeaderDialog: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <>{children}</>
);

export const CardBodyDialog: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <>{children}</>
);

export const CardFooterDialog: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <>{children}</>
);

export default CardDialog;
