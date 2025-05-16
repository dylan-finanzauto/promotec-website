import Wrapper from "@/modules/shared/ui/Wrapper";
import { ATTENDANCES } from "@/modules/website/data/attendances";

type CardProps = {
  url: string;
}

const AttendanceCard: React.FC<CardProps> = ({ url }) => {
  return (
    <div className="rounded-[30px] overflow-hidden bg-gray1">
      <div className="flex justify-center py-14">
        <img src={url} alt="" />
      </div>
      <div className="flex items-center gap-8 px-10 py-6 bg-princ-blue">
        <h5 className="text-[40px] text-text1 font-bold">#123</h5>
        <button className="px-7 py-3 rounded-[10px] text-[20px] font-medium bg-tirth hover:bg-tirth/80 text-white cursor-pointer">Llamar</button>
      </div>
    </div>
  )
}

const attendances = ATTENDANCES;

const Emergencia: React.FC = () => {

  return (
    <>
      <header className="h-[500px] bg-princ-blue"></header>

      <section className="py-[100px]">
        <Wrapper>
          <div className="space-y-16">
            <div className="space-y-[30px]">
              <h3 className="text-[30px] text-center text-secn-blue font-bold">¡Estamos aquí para ayudarte!</h3>
              <div className="text-[20px] text-center text-text4 font-medium">
                <p>En caso que requieras asistencia, contacta directamente al equipo de atención inmediata de cada aseguradora,</p>
                <p>disponible las 24 horas del día, los 7 días de la semana.</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {attendances.map((a, i) => (
                <AttendanceCard key={i} url={a.url} />
              ))}
            </div>
            <div className="py-10 px-8 rounded-[30px] bg-text2 space-y-8">
              <h2 className="text-4xl text-center text-white font-extrabold">¿Necesitas acompañamiento en tu proceso de indemnización?</h2>
              <div className="flex justify-center">
                <button className="px-20 py-3 rounded-[10px] text-[20px] font-medium bg-tirth hover:bg-tirth/80 text-white cursor-pointer">Ver más</button>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

    </>
  )
}

export default Emergencia;
