import Wrapper from "@/modules/shared/ui/Wrapper";
import { getAssetPath } from "@/modules/shared/utils/paths";
import Image from "next/image";
import Link from "next/link";

function Consulting() {
  return (
    <section className="bg-gray-1 py-[100px] relative overflow-hidden">
      <Wrapper>
        <div
          className="fade-left max-w-4xl w-full min-w-0 rounded-[30px] bg-blue-primary p-10 text-white flex flex-col gap-5 relative z-10"
        >
          <h3 className="text-center text-4xl md:text-[50px] mb-[10px] font-bold leading-none">
            Te asesoramos en la búsqueda de tu <span className="text-blue-terciary">póliza de seguro ideal</span>
          </h3>
          <p className="font-medium text-xl">
            Entendemos tus necesidades; por eso te acompañamos con nuestro
            equipo especializado para ayudarte a encontrar la póliza de
            seguros individual o colectiva, que se adapte a tus necesidades.
          </p>
          <div className="flex justify-end">
            <Link
              href={"/productos"}
            >
              <button
                className="bg-yellow-primary text-xl py-3 px-4 text-white rounded-[10px] cursor-pointer"
              >Ver productos</button>
            </Link>
          </div>
        </div>

        <Image
          className="fade-right pt-20 md:pt-0 md:absolute bottom-0 right-0 md:-mb-20"
          src={getAssetPath("/images/home/family.png")}
          alt=""
          width={793}
          height={566}
        />
      </Wrapper>
    </section>
  );
}

export default Consulting;
