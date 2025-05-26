import { PhoneIcon, WhatsappIcon } from "@/modules/shared/components/SVGIcons";
import Tooltip from "@/modules/shared/components/Tooltip";

const Attention: React.FC = () => (
  <div className="fixed z-40 right-0 top-1/2 -translate-y-1/2 mt-32">
    <div className="flex flex-col items-end gap-2">
      <Tooltip text="Te llamamos" position="left">
        <div className="w-24 flex justify-end">
          <div
            className="size-20 bg-yellow-primary rounded-l-full grid place-items-center cursor-default transition-all duration-300 hover:w-24 shadow-lg hover:shadow-2xl"
          >
            <PhoneIcon className="text-white" />
          </div>
        </div>
      </Tooltip>
      <Tooltip text="Whatsapp" position="left">
        <div className="w-24 flex justify-end">
          <div
            className="size-20 bg-yellow-primary rounded-l-full grid place-items-center cursor-default transition-all duration-300 hover:w-full shadow-lg hover:shadow-2xl"
          >
            <WhatsappIcon className="text-white" />
          </div>
        </div>
      </Tooltip>
    </div>
  </div>
)

export default Attention;
