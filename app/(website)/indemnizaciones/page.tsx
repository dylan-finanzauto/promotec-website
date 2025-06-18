'use client';
import Wrapper from "@/modules/shared/ui/Wrapper";
import React from "react";
import Banner from "@/modules/website/ui/Banner";
import { CheckCircleFilledIcon, CheckCircleIcon, MailIcon, PhoneIcon, POutlinedIcon } from "@/modules/shared/components/SVGIcons";
import { getAssetPath } from "@/modules/shared/utils/paths";
import { useContactStore } from "@/modules/shared/store/contact";

const coverages = [
  { "name": "Croquis", "ppd": true, "ptd": true, "pph": true, "pth": true, "rce": true },
  { "name": "Cédula", "ppd": true, "ptd": true, "pph": true, "pth": true, "rce": true },
  { "name": "Licencia de conducción", "ppd": true, "ptd": true, "pph": true, "pth": true, "rce": true },
  { "name": "Tarjeta de propiedad", "ppd": true, "ptd": true, "pph": true, "pth": true, "rce": true },
  { "name": "Reclamo del tercero", "ppd": false, "ptd": false, "pph": false, "pth": false, "rce": true },
  { "name": "Traslado de la compañía", "ppd": false, "ptd": true, "pph": false, "pth": true, "rce": false },
  { "name": "Denuncia ante la autoridad", "ppd": false, "ptd": false, "pph": true, "pth": true, "rce": false },
  { "name": "Cancelación de matrícula", "ppd": false, "ptd": false, "pph": false, "pth": true, "rce": false },
];

const columns = ["PPD", "PTD", "PPH", "PTH", "RCE"];

function CoverageTable() {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-[2fr_repeat(5,1fr)] bg-blue-secondary text-blue-terciary font-bold text-[20px] rounded-2xl">
        <div className="py-5 px-10">Amparos</div>
        {columns.map((col) => (
          <div key={col} className="py-5 px-10 text-center">
            {col}
          </div>
        ))}
      </div>
      <div className="">
        {coverages.map((item: Record<string, string | boolean>, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-[2fr_repeat(5,1fr)] ${
              idx % 2 === 0 ? "bg-transparent" : "bg-gray-2 rounded-2xl"
            }`}
          >
            <div className="py-5 px-10 col-span-2 md:col-span-1 font-medium flex items-center">
              {item.name}
            </div>
            {columns.map((col) => (
              <div
                key={col}
                className="py-5 px-10 text-center flex items-center justify-center"
              >
                {item[col.toLowerCase()] ? (
                  <CheckCircleFilledIcon className="text-blue-primary inline w-5 h-5" />
                ) : (
                  <CheckCircleIcon className="text-gray-400 inline w-5 h-5" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const Compensations: React.FC = () => {

  const { contact } = useContactStore()

  return (
    <>
      <Banner
        titleBottom="Indemnizaciones"
        img={getAssetPath("/images/compensations/banner.png")}
      />

      <section className="py-28 bg-gray-3">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="relative min-w-0 max-w-[576px] h-[576px] w-full overflow-hidden md:overflow-visible">
              <div
                className="fade-left w-full h-full bg-cover bg-center mask-no-repeat mask-center mask-size-contain"
                style={{
                  backgroundImage: `url(${getAssetPath("/images/compensations/p.jpg")})`,
                  maskImage: `url(${getAssetPath("/icons/p.svg")})`
                }}
              />
              <POutlinedIcon className="w-full h-full absolute top-0 left-0 -ml-6 rotate-12" />
            </div>

            <div className="overflow-hidden">
              <div className="space-y-[30px]">
                <h2 className="text-[40px] text-blue-primary font-bold">¡Estamos contigo!</h2>
                <p className="text-[20px] text-text-3 font-medium">Nuestro compromiso es acompañarte de manera rápida, justa y sin complicaciones, en tu proceso de reclamación en caso de siniestro.</p>
              </div>
              <ul className="flex flex-col items-center md:items-start space-y-[30px] mt-[100px]">
                <li className="">
                  <div className="zoom-in inline-flex flex-col md:flex-row items-center gap-5">
                    <div className="size-16 rounded-full bg-blue-terciary grid place-items-center">
                      <PhoneIcon className="size-6 text-blue-primary" />
                    </div>
                    <div className="space-y-1">
                      <h6 className="">Línea nacional:</h6>
                      <h5 className="text-[20px] text-blue-primary font-bold">{contact?.localLine} Opción. 4</h5>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="zoom-in inline-flex flex-col md:flex-row items-center gap-5">
                    <div className="size-16 rounded-full bg-blue-terciary grid place-items-center">
                      <MailIcon className="size-6 text-blue-primary" />
                    </div>
                    <div className="space-y-1">
                      <h6 className="">Correo electrónico:</h6>
                      <h5 className="text-[20px] text-blue-primary font-bold">{contact?.email}</h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-[70px]">
        <Wrapper>
          <div className="p-10 md:py-16 md:px-24 rounded-[30px] bg-gray-1 space-y-[30px]">
            <h3 className="text-3xl text-text-4 text-center font-bold">Documentación para reclamación de siniestros (carros, motos y bicicletas)</h3>
            <CoverageTable />
            <p className="text-center text-text-3 font-medium"><b>PPD:</b> Pérdida Parcial Daños / <b>PTD:</b> Pérdida Total Daños / <b>PPH:</b> Pérdida Parcial Hurto / <b>PTH:</b> Pérdida Total Hurto / <b>RCE:</b> Responsabilidad Civil Extracontractual</p>
          </div>
        </Wrapper>
      </section>

    </>
  )
}

export default Compensations;
