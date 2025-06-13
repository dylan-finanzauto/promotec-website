import React, { useEffect } from 'react';

type Props = {
  steps: any[],
  currentStep: number
}

const Stepper: React.FC<Props> = ({ steps, currentStep }) => {

  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="absolute w-full top-1/2 -translate-y-1/2 h-0.5 bg-blue-terciary"></div>
        <div 
          className="absolute w-1/6 top-1/2 -translate-y-1/2 h-1 bg-blue-primary rounded-lg transition-all"
          style={{
            width: `${(currentStep >= (steps.length - 1) ? 1 : ((currentStep / (steps.length - 1)) + (1 / ((steps.length - 1) * 5)))) * 100}%`
          }}
        ></div>
        <div className="relative flex items-center gap-[188px]">
          {steps.map((step, index) => (
            <div key={index} className={`${currentStep >= index ? "bg-blue-primary text-blue-terciary" : "bg-blue-terciary text-blue-primary"} size-10 rounded-full grid place-items-center transition-all`}>{step}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stepper;