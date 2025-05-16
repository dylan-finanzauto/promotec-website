import Wrapper from "@/modules/shared/ui/Wrapper";
import Carousel from "@/modules/website/ui/Carousel";

const Personas: React.FC = () => {
  return (
    <main>
      <Carousel />
      {/* <Quotes /> */}
      {/* <Benefits /> */}
      {/* <Experience /> */}
      {/* <Clients /> */}
      {/* <Insurance /> */}
      {/* <Consulting /> */}
      {/* <Certified /> */}

      <section className="py-[100px] bg-gray1">
        <Wrapper>
          <div className="space-y-8">
            <h4 className="text-[40px] text-secn-blue text-center font-bold">Estamos certificados</h4>
            <div className="text-[20px] text-text4 text-center font-medium">
              <p className="">Contamos con la certificación <b>Bureau Veritas ISO 9001:2015</b></p>
              <p className="">Venta, Fabricación, Gestión de Cartera y Servicio al Cliente para Pólizas de Seguros Personales y Automotores.</p>
            </div>
            <div className="flex justify-center">
              <img src="/promotec.portal/icons/iso9001.svg" alt="" />
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  )
}

export default Personas;
