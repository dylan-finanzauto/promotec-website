import { getAssetPath } from "@/modules/shared/utils/paths";
import Image from "next/image";

const Process: React.FC = () => {
  return (
    <div className="w-full bg-gray-1 rounded-[30px] overflow-hidden mb-[70px]">
      <div className="h-[220px]">
        <Image className="w-full object-center object-cover h-full" src={getAssetPath("/images/products/vehicle/quot/banner.jpg")} alt="" width={1200} height={1000} />
      </div>

      <div className="pt-[30px] pb-10 max-w-[1200px] min-w-0 w-full space-y-[30px]">
        <h4 className="text-[30px] text-center text-blue-primary">Información personal</h4>
        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    </div>
  )
}

export default Process;