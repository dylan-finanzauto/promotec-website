import InfoCircleIcon from "@/modules/shared/components/icons/InfoCircleIcon";
import Wrapper from "@/modules/shared/ui/Wrapper";

const Cookies: React.FC = () => (
  <div className="fixed left-0 bottom-0 w-full mb-10">
    <Wrapper>
      <div
        className="flex items-center gap-5 p-5 rounded-2xl bg-princ-blue shadow-2xl"
      >
        <InfoCircleIcon className="size-8 shrink-0 text-secn-blue" />
        <p className="text-sm text-secn-blue">
          Utilizamos cookies para mejorar tu experiencia en nuestro sitio,
          personalizar contenido y publicidad. Así mismo analizar nuestro tráfico.
          Algunas cookies son esenciales para el funcionamiento del sitio,
          mientras que otras nos ayudan a optimizar tu experiencia. Puedes aceptar
          todas las cookies o personalizar tus preferencias. Para más información,
          consulta nuestra Política de Cookies.
        </p>
        <div className="flex gap-3">
          <button
            className="h-10 w-[96px] text-secn-blue border border-secn-blue rounded-[10px] bg-transparent cursor-pointer"
          >Rechazar</button>
          <button
            className="h-10 w-[96px] bg-tirth text-white rounded-[10px] cursor-pointer"
          >Aceptar</button>
        </div>
      </div>
    </Wrapper>
  </div>
)

export default Cookies;
