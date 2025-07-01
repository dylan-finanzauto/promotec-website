import CheckboxField from "@/modules/shared/components/CheckboxField";
import { InfoCircleIcon } from "@/modules/shared/components/SVGIcons";
import Wrapper from "@/modules/shared/ui/Wrapper"
import Banner from "@/modules/website/ui/Banner";
import Link from "next/link";

const EthicalLine: React.FC = () => {
  return (
    <>
      <Banner
        title="Línea"
        subtitle="ética"
        image="/images/ethical/banner.png"
      />

      <section className="py-14">
        <Wrapper>
          <div className="space-y-10">

            <div className="space-y-[30px]">
              <h3 className="text-[30px] text-center text-blue-primary font-bold">Nuestra prioridad es actuar siempre con integridad y responsabilidad</h3>
              <p className="text-[20px] text-center text-text-3 font-medium">Este es un canal de comunicación para nuestros grupos de interés, donde pueden informar aquellos eventos o sucesos irregulares, que atenten contra las prácticas éticas y de transparencia definidas al interior de la Compañía.</p>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div
                style={{
                  backgroundImage: `url(/images/ethical/info.jpg)`
                }}
                className="fade-up rounded-[30px] bg-blue-terciary bg-center bg-cover"
              />
              <div className="fade-up col-span-2 py-20 px-28 rounded-[30px] bg-blue-secondary space-y-10">
                <p className="text-[20px] text-white">Con el fin de evitar la consulta indebida, copia o adulteración de la información recolectada a través de la Línea de Transparencia, implementamos medidas de seguridad, garantizando que el acceso a la información sea restringido y confidencial.</p>
                <p className="text-[20px] text-white">Conoce nuestro Programa de Transparencia y Ética Empresarial ingresando <a href="#" className="underline">aquí.</a></p>
              </div>
            </div>

            <div className="fade-left p-5 rounded-[14px] bg-[#E5EAF8] flex items-center gap-[10px]">
              <InfoCircleIcon className="size-6 text-blue-primary" />
              <p className="text-[15px] text-blue-primary font-medium">Recuerda que los Datos Personales recolectados mediante la Línea de Transparencia serán tratados de acuerdo a lo establecido en la Ley 1581 de 2012 y las <a href="#" className="underline">Políticas de Protección de Datos Personales</a>, que pueden ser consultadas en la página web <a href="#" className="underline">www.promotec.com.co</a></p>
            </div>

          </div>

        </Wrapper>
      </section>

      <section className="py-20 bg-blue-terciary">
        <Wrapper>
          <div className="w-11/12 mx-auto space-y-8">
            <div className="space-y-16">
              <h2 className="text-[40px] text-center text-blue-primary font-bold">Principios clave para una adecuada gestión:</h2>
              <div className="grid grid-cols-2 auto-rows-[208px] gap-4">
                <div className="fade-up col-span-2 px-10 rounded-[20px] bg-white flex items-center gap-8">
                  <h1 className="text-[96px] text-text-1 font-bold">1.</h1>
                  <p className="text-text-4 font-medium">Esta no es una herramienta de quejas y reclamos, sino de reporte de aquellas conductas que van en contra del Código de Ética y Conducta. La Línea de Transparencia es diferente a la línea de Servicio al Cliente.</p>
                </div>
                <div className="fade-up px-10 rounded-[20px] bg-white flex items-center gap-8">
                  <h1 className="text-[96px] text-text-1 font-bold">2.</h1>
                  <p className="text-text-4 font-medium">Este canal debe ser utilizado de manera responsable, los eventos reportados deben ser reales y verificables.</p>
                </div>
                <div className="fade-up px-10 rounded-[20px] bg-white flex items-center gap-8">
                  <h1 className="text-[96px] text-text-1 font-bold">3.</h1>
                  <div className="text-text-4 font-medium">
                    <p>¡Tranquilo!</p>
                    <p>Toda la información suministrada será tratada de manera anónima.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <CheckboxField label="" />
              <p className="text-sm">He leído y acepto las finalidades descritas en la política de protección de datos de Promotec conforme a la ley 1581 de 2012 y el Decreto 1074 de 2015.</p>
            </div>

            <div className="flex justify-center">
              <Link href="/linea-etica/formulario">
                <button type="submit" className="px-20 py-3 rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Continuar</button>
              </Link>
            </div>

          </div>
        </Wrapper>
      </section>

    </>
  )
}

export default EthicalLine;
