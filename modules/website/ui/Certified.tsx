import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";
import Image from "next/image";

function Certified() {
  return (
    <section className="py-[100px] bg-gray-3">
      <Wrapper>
        <div className="space-y-8">
          <h4 className="text-[40px] text-blue-primary text-center font-bold">Estamos certificados</h4>
          <div className="text-[20px] text-text-3 text-center font-medium">
            <p className="">Contamos con la certificación <b>Bureau Veritas ISO 9001:2015</b></p>
            <p className="">Venta, Fabricación, Gestión de Cartera y Servicio al Cliente para Pólizas de Seguros Personales y Automotores.</p>
          </div>
          <div className="flex justify-center">
            <Image
              className="zoom-in"
              src={getAssetPath("/icons/iso9001.svg")}
              alt=""
              width={259}
              height={119}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Certified;
