'use client';
import React, { useRef, useState, ReactElement, cloneElement } from 'react';
import ReactDOM from 'react-dom';

type Position = 'top' | 'bottom' | 'left' | 'right';

type Props = {
  text: string;
  position?: Position;
  children: ReactElement<any>;
};

const Tooltip: React.FC<Props> = ({ text, children, position = 'top' }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLElement>(null);

  const handleMouseEnter = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let top = 0;
    let left = 0;

    switch (position) {
      case 'top':
        top = rect.top + scrollY - 4;
        left = rect.left + rect.width / 2 + scrollX;
        break;
      case 'bottom':
        top = rect.bottom + scrollY + 4;
        left = rect.left + rect.width / 2 + scrollX;
        break;
      case 'left':
        top = rect.top + rect.height / 2 + scrollY;
        left = rect.left + scrollX - 4;
        break;
      case 'right':
        top = rect.top + rect.height / 2 + scrollY;
        left = rect.right + scrollX + 4;
        break;
    }

    setCoords({ top, left });
    setVisible(true);
  };

  const handleMouseLeave = () => setVisible(false);

  const getTransform = () => {
    switch (position) {
      case 'top':
        return 'translate(-50%, -100%)';
      case 'bottom':
        return 'translateX(-50%)';
      case 'left':
        return 'translate(-100%, -50%)';
      case 'right':
        return 'translate(0%, -50%)';
    }
  };

  const clonedChild = cloneElement(children, {
    ref,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  });

  return (
    <>
      {clonedChild}
      {visible &&
        ReactDOM.createPortal(
          <div
            className={`absolute px-2 py-1 text-sm text-white rounded-lg bg-[#444D64] shadow-lg z-50 whitespace-nowrap animate-scale-up transition-all`}
            style={{
              top: coords.top,
              left: coords.left,
              transform: getTransform(),
              position: 'absolute',
            }}
          >
            {text}
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;
