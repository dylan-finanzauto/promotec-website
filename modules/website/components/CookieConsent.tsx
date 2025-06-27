'use client'
import { CircleAlertIcon } from "@/modules/shared/components/SVGIcons";
import Wrapper from "@/modules/shared/ui/Wrapper";
import { useEffect, useState } from "react";

const CookieConsent: React.FC = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const decision = localStorage.getItem('cookie-consent');
    if (!decision) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie-consent', value);
    setVisible(false);
  };

  if (!visible) return null;


  return (
    <div className="fixed z-20 left-0 bottom-0 w-full mb-10">
      <Wrapper>
        <div
          className="flex flex-col md:flex-row items-center gap-5 p-5 rounded-2xl bg-blue-terciary shadow-2xl"
        >
          <CircleAlertIcon className="size-8 shrink-0 text-blue-primary" />
          <p className="text-sm text-blue-primary">
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio,
            personalizar contenido y publicidad. Así mismo analizar nuestro tráfico.
            Algunas cookies son esenciales para el funcionamiento del sitio,
            mientras que otras nos ayudan a optimizar tu experiencia. Puedes aceptar
            todas las cookies o personalizar tus preferencias. Para más información,
            consulta nuestra Política de Cookies.
          </p>
          <div className="flex gap-3">
            <button
              className="h-10 w-[96px] text-blue-primary border border-blue-primary rounded-[10px] bg-transparent cursor-pointer"
              onClick={() => handleConsent('rejected')}
            >Rechazar</button>
            <button
              className="h-10 w-[96px] bg-yellow-primary text-white rounded-[10px] cursor-pointer"
              onClick={() => handleConsent('accepted')}
            >Aceptar</button>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default CookieConsent;
