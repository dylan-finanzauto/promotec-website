import PIcon from "@/modules/shared/components/icons/PIcon";
import POutlinedIcon from "@/modules/shared/components/icons/POutlinedIcon";
import Wrapper from "@/modules/shared/ui/Wrapper";

const About: React.FC = () => {
  return (
    <>
      <header className="h-[500px] bg-princ-blue"></header>

      <section className="py-20 bg-gray1">
        <Wrapper>
          <div className="space-y-10">
            <h2 className="text-[44px] text-secn-blue font-bold text-center">Promotec es una agencia de seguros con más de 40 años dedicada a la asesoría especializada a nivel nacional.</h2>
            <div className="text-[20px] text-text4 font-medium text-center">
              <p className="">Aseguramos cada instante de la vida de nuestros clientes estructurando soluciones de seguros respaldadas por las principales compañías aseguradoras del país.</p>
              <p className="">Nuestro compromiso es brindar asesoría de calidad y una amplia variedad de productos que se adapten a tus necesidades.</p>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-24">
        <Wrapper>
          <div className="grid grid-cols-3 grid-rows-2 gap-5">
            <div className="col-span-2 py-20 px-28 rounded-[30px] bg-text2 space-y-10">
              <h3 className="text-3xl font-bold text-princ-blue">Nuestra <b className="text-white">Misión</b></h3>
              <p className="text-[20px] text-white">Desarrollar soluciones de aseguramiento personalizadas que maximicen el valor y la rentabilidad de nuestros clientes, y fortalezcan su seguridad y tranquilidad. Ser un aliado estratégico, comprometido con su crecimiento y protección en un entorno en constante cambio, adaptándonos a sus necesidades y superando sus expectativas.</p>
            </div>
            <div
              className="rounded-[30px] bg-princ-blue bg-[url('/promotec.portal/images/promotec.jpg')] bg-center bg-cover"
            ></div>
            <div
              className="rounded-[30px] bg-princ-blue bg-[url('/promotec.portal/images/promotec2.jpg')] bg-center bg-cover"
            ></div>
            <div className="col-span-2 py-20 px-28 rounded-[30px] bg-text2 space-y-10">
              <h3 className="text-3xl font-bold text-princ-blue">Nuestra <b className="text-white">Visión</b></h3>
              <p className="text-[20px] text-white">Ser la agencia de seguros líder en el desarrollo de soluciones personalizadas que optimicen el valor y la rentabilidad para nuestros clientes. Nos comprometemos a ser un socio estratégico, brindando apoyo continuo en su crecimiento y protección, adaptándonos proactivamente a un entorno en constante evolución.</p>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-24 bg-princ-blue">
        <Wrapper>
          <div className="w-10/12 space-y-10">
            <h4 className="text-[40px] text-secn-blue text-center font-bold">Nuestros valores</h4>
            <div className="grid grid-cols-2 grid-rows-2 gap-5 h-[422px]">
              <div className="px-14 rounded-[20px] flex items-center bg-white">
                <h6 className="w-2/3 text-3xl text-text1 font-bold">Colaboración y trabajo en equipo</h6>
              </div>
              <div className="px-14 rounded-[20px] flex items-center bg-white">
                <h6 className="w-2/3 text-3xl text-text1 font-bold">Innovación centrada en el cliente</h6>
              </div>
              <div className="px-14 rounded-[20px] flex items-center bg-white">
                <h6 className="w-2/3 text-3xl text-text1 font-bold">Excelencia Operacional</h6>
              </div>
              <div className="px-14 rounded-[20px] flex items-center bg-white">
                <h6 className="w-2/3 text-3xl text-text1 font-bold">Cultura Digital</h6>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-12">
        <Wrapper>
          <div className="flex items-center gap-10">
            <div className="relative">
              <div className="size-[576px] bg-[url('/promotec.portal/images/promotec9.jpg')] bg-cover bg-center mask-[url('/promotec.portal/icons/p.svg')] mask-no-repeat mask-center mask-size-contain">
              </div>
              <POutlinedIcon className="size-[576px] absolute top-0 left-0 -ml-6 rotate-12" />
            </div>
            <div className="space-y-[50px]">
              <h2 className="text-[50px] text-text font-bold leading-tight">Nuestra experiencia, el respaldo que necesitas</h2>
              <div className="space-y-10">
                <p className="text-[20px] text-text4 font-medium">Somos una agencia dedicada a la asesoría en seguros a nivel nacional con más de 40 años brindando atención y servicio.</p>
                <p className="text-[20px] text-text4 font-medium">Nuestro objetivo es asegurar cada instante de la vida de nuestros clientes a través de la estructuración de seguros y el respaldo de las compañías aseguradoras; con el fin de que nuestros clientes obtengan calidad en asesoría, experiencia y variedad en productos.</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

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

    </>
  )
}

export default About;
