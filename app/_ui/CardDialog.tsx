'use client'
import React, { useEffect } from "react";
import useDialog from "../_hooks/useDialog";
import CheckCircleIcon from "../_components/icons/CheckCircleIcon";
import AlertIcon from "../_components/icons/AlertIcon";
import InfoCircleIcon from "../_components/icons/InfoCircleIcon";

const icons = {
  success: (<div className="shrink-0 size-16 rounded-full grid place-items-center bg-princ-blue"><CheckCircleIcon className="text-secn-blue size-8" /></div>),
  error: (<div className="shrink-0 size-16 rounded-full grid place-items-center bg-[#FFDADA]"><AlertIcon className="text-[#ED2D15] size-8" /></div>),
  warning: (<div className="shrink-0 size-16 rounded-full grid place-items-center bg-[#feffda]"><AlertIcon className="text-yellow-500 size-8" /></div>),
  info: (<div className="shrink-0 size-16 rounded-full grid place-items-center bg-princ-blue"><InfoCircleIcon className="text-secn-blue size-8" /></div>),
} as any;

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

  // Filtrar los children por tipo
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
      <div className="fixed inset-0 z-50 bg-[#000C3E]/50 backdrop-blur-sm"></div>
      <div className={"fixed left-[50%] top-[50%] z-50 grid max-w-2xl w-full min-w-0 translate-x-[-50%] translate-y-[-50%] px-6 " + className}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="pt-10 px-8 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="self-center md:self-start">
                {icons[state]}
              </div>
              <div className="grow mx-auto flex flex-col items-center md:items-start overflow-hidden">
                {header}
              </div>
            </div>
            {body}
          </div>
          <div className="p-8 flex justify-end gap-4 bg-gray1">
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
