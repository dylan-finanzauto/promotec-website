import PhoneIcon from "@/modules/shared/components/icons/PhoneCallIcon"
import WhatsappIcon from "@/modules/shared/components/icons/WhatsappIcon"

const Attention: React.FC = () => (
  <div className="fixed right-0 top-1/2 -translate-y-1/2 mt-32">
    <div className="flex flex-col items-end gap-2">
      <div
        className="size-20 bg-tirth rounded-l-full grid place-items-center cursor-default transition-all duration-300 hover:w-24 shadow-lg hover:shadow-2xl"
      >
        <PhoneIcon className="text-white" />
      </div>
      <div
        className="size-20 bg-tirth rounded-l-full grid place-items-center cursor-default transition-all duration-300 hover:w-24 shadow-lg hover:shadow-2xl"
      >
        <WhatsappIcon className="text-white" />
      </div>
    </div>
  </div>
)

export default Attention;
