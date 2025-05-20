'use client';
import Wrapper from "@/modules/shared/ui/Wrapper";
import MailIcon from "@/modules/shared/components/icons/MailIcon";
import PhoneIcon from "@/modules/shared/components/icons/PhoneIcon";
import POutlinedIcon from "@/modules/shared/components/icons/POutlinedIcon";
import React from "react";
import CheckCircleIcon from "@/modules/shared/components/icons/CheckCircleIcon";
import Banner from "@/modules/website/ui/Banner";

const coverages = [
  { name: "Croquis", ppd: true, ptd: true, pph: true, pth: true, rce: true },
  { name: "Cédula", ppd: true, ptd: true, pph: true, pth: true, rce: true },
  { name: "Licencia de conducción", ppd: true, ptd: true, pph: true, pth: true, rce: true },
  { name: "Tarjeta de propiedad", ppd: true, ptd: true, pph: true, pth: true, rce: true },
  { name: "Reclamo del tercero", ppd: false, ptd: false, pph: false, pth: false, rce: true },
  { name: "Traslado de la compañía", ppd: false, ptd: true, pph: false, pth: true, rce: false },
  { name: "Denuncia ante la autoridad", ppd: false, ptd: false, pph: true, pth: true, rce: false },
  { name: "Cancelación de matrícula", ppd: false, ptd: false, pph: false, pth: true, rce: false },
];

const columns = ["PPD", "PTD", "PPH", "PTH", "RCE"];

function CoverageTable() {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full text-left">
        <thead>
          <tr className="bg-text2 text-princ-blue text-[20px]">
            <th className="py-5 px-10">Amparos</th>
            {columns.map((col) => (
              <th key={col} className="py-5 px-10 text-center">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {coverages.map((item: any, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-transparent" : "bg-gray2"}
            >
              <td className="py-5 px-10">{item.name}</td>
              {columns.map((col) => (
                <td key={col} className="py-5 px-10 text-center">
                  {item[col.toLowerCase()] ? (
                    <CheckCircleIcon className="text-secn-blue inline w-5 h-5" />
                  ) : (
                    <CheckCircleIcon className="text-gray-400 inline w-5 h-5" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Indemnizaciones: React.FC = () => {

  return (
    <>
      <Banner titleBottom="Indemnizaciones" />

      <section className="py-28 bg-gray1">
        <Wrapper>
          <div className="flex gap-10">
            <div className="relative">
              <div className="fade-left size-[576px] bg-[url('/Promotec.Website.Client/images/promotec14.jpg')] bg-cover bg-center mask-[url('/Promotec.Website.Client/icons/p.svg')] mask-no-repeat mask-center mask-size-contain">
              </div>
              <POutlinedIcon className="size-[576px] absolute top-0 left-0 -ml-6 rotate-12" />
            </div>

            <div className="">
              <div className="space-y-[30px]">
                <h2 className="text-[40px] text-secn-blue font-bold">¡Estamos contigo!</h2>
                <p className="text-[20px] text-text4 font-medium">Nuestro compromiso es acompañarte de manera rápida, justa y sin complicaciones, en tu proceso de reclamación en caso de siniestro.</p>
              </div>
              <ul className="space-y-[30px] mt-[100px]">
                <li className="">
                  <div className="zoom-in inline-flex items-center gap-5">
                    <div className="size-16 rounded-full bg-princ-blue grid place-items-center">
                      <PhoneIcon className="size-6 text-secn-blue" />
                    </div>
                    <div className="space-y-1">
                      <h6 className="">Línea nacional:</h6>
                      <h5 className="text-[20px] text-secn-blue font-bold">(601) 742 3700 Opción. 4</h5>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="zoom-in inline-flex items-center gap-5">
                    <div className="size-16 rounded-full bg-princ-blue grid place-items-center">
                      <MailIcon className="size-6 text-secn-blue" />
                    </div>
                    <div className="space-y-1">
                      <h6 className="">Correo electrónico:</h6>
                      <h5 className="text-[20px] text-secn-blue font-bold">servicioalcliente@promotec.com.co</h5>
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
          <div className="py-16 px-24 rounded-[30px] bg-white2 space-y-[30px]">
            <h3 className="text-3xl text-text text-center font-bold">Documentación para reclamación de siniestros (carros, motos y bicicletas)</h3>
            <CoverageTable />
            <p className="text-center text-text4 font-medium"><b>PPD:</b> Pérdida Parcial Daños / <b>PTD:</b> Pérdida Total Daños / <b>PPH:</b> Pérdida Parcial Hurto / <b>PTH:</b> Pérdida Total Hurto / <b>RCE:</b> Responsabilidad Civil Extracontractual</p>
          </div>
        </Wrapper>
      </section>

    </>
  )
}

export default Indemnizaciones;
