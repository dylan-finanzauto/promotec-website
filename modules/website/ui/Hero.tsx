import PIcon from "@/modules/shared/components/icons/PIcon";
import POutlinedIcon from "@/modules/shared/components/icons/POutlinedIcon";

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center w-full aspect-[11/4] bg-[url('/promotec.portal/images/hero.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      <div className="absolute top-0 left-0 ml-20">
        <PIcon className="absolute top-0 left-0 h-auto w-[700px] mt-8" />
        <POutlinedIcon className="absolute top-0 left-0 h-auto w-[700px] mt-9 ml-5 -rotate-3" />
      </div>

      <div className="absolute left-0 top-0 w-[700px] ml-20 h-full flex justify-center items-center">
        <div className="w-1/2">
          <h1 className="text-7xl text-white leading-[1.15]">Póliza de <b className="text-princ-blue font-extrabold">Vehículos</b></h1>
          <p className="text-3xl font-medium text-white leading-tight">Protege tu carro con <b className="text-princ-blue">Promotec</b> y maneja con <b className="text-princ-blue">tranquilidad.</b></p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 mb-24 mr-52">
        <button className="text-[22px] font-medium text-white px-8 py-[14px] rounded-lg bg-tirth hover:bg-[#e18205] cursor-pointer">¡Cotiza tu seguro aquí!</button>
      </div>

    </section>
  )
}

export default Hero;
