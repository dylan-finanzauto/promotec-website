'use client';
import { PhoneIcon, WhatsappIcon } from "@/modules/shared/components/SVGIcons";
import Tooltip from "@/modules/shared/components/Tooltip";
import { contactStore } from "@/modules/shared/store/contact";

const Attention: React.FC = () => {
  const { contact } = contactStore();

  return (
    <div className="fixed z-40 right-0 top-1/2 -translate-y-1/2 mt-32">
      <div className="flex flex-col items-end gap-2">
        <Tooltip text="Te llamamos" position="left">
          <a className="w-24 lg:hidden flex justify-end" href={`tel:${contact?.localLine}`}>
            <div
              className="size-20 bg-yellow-primary rounded-l-full grid place-items-center cursor-default transition-all duration-300 hover:w-24 shadow-lg hover:shadow-2xl"
            >
              <PhoneIcon className="text-white" />
            </div>
          </a>
        </Tooltip>
        <Tooltip text="Whatsapp" position="left">
          <a className="w-24 flex justify-end" href={`https://wa.me/${contact?.chatLine}`} target="_blank" rel="noopener noreferrer">
            <div
              className="size-20 bg-yellow-primary rounded-l-full grid place-items-center cursor-default transition-all duration-300 hover:w-full shadow-lg hover:shadow-2xl"
            >
              <WhatsappIcon className="text-white" />
            </div>
          </a>
        </Tooltip>
      </div>
    </div>
  )
}

export default Attention;
