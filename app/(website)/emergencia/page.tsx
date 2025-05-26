import Wrapper from "@/modules/shared/ui/Wrapper";
import { ATTENDANCES } from "@/modules/website/data/attendances";
import Banner from "@/modules/website/ui/Banner";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  url: string;
}

const AttendanceCard: React.FC<CardProps> = ({ url }) => {
  return (
    <div className="fade-up rounded-[30px] overflow-hidden bg-gray-3 flex flex-col">
      <div className="flex justify-center items-center flex-1">
        <Image
          src={url}
          alt="Imágen de aseguradora"
          width={120}
          height={60}
        />
      </div>
      <div className="flex items-center gap-8 px-10 py-6 bg-blue-terciary">
        <h5 className="text-[40px] text-text-1 font-bold">#123</h5>
        <button className="px-7 py-3 rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Llamar</button>
      </div>
    </div>
  )
}

const Emergency: React.FC = () => {

  return (
    <>
      <Banner titleTop="¿Tienes una" titleBottom="emergencia?" img="images/emergency/banner.png" />

      <section className="py-[100px]">
        <Wrapper>
          <div className="space-y-16">
            <div className="space-y-[30px]">
              <h3 className="text-[30px] text-center text-blue-primary font-bold">¡Estamos aquí para ayudarte!</h3>
              <div className="text-[20px] text-center text-text-3 font-medium">
                <p>En caso que requieras asistencia, contacta directamente al equipo de atención inmediata de cada aseguradora,</p>
                <p>disponible las 24 horas del día, los 7 días de la semana.</p>
              </div>
            </div>
            <div className="grid grid-cols-4 auto-rows-[262px] gap-4">
              {ATTENDANCES.map((a, i) => (
                <AttendanceCard key={i} url={a.url} />
              ))}
            </div>
            <div className="fade-up py-10 px-8 rounded-[30px] bg-blue-secondary space-y-8">
              <h2 className="text-4xl text-center text-white font-extrabold">¿Necesitas acompañamiento en tu proceso de indemnización?</h2>
              <div className="flex justify-center">
                <Link
                  href={"/indemnizaciones"}
                >
                  <button className="px-20 py-3 rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Ver más</button>
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

    </>
  )
}

export default Emergency;
