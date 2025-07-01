'use client'
import Pagination from "@/modules/shared/components/Pagination";
import { ChevronLeftFilledIcon } from "@/modules/shared/components/SVGIcons";
import Table from "@/modules/shared/components/Table";
import Tooltip from "@/modules/shared/components/Tooltip";
import Wrapper from "@/modules/shared/ui/Wrapper";
import Image from "next/image";
import Link from "next/link";

type DataInfo = {
  label: string;
  value: string;
}

type InfoProps = {
  title: string;
  data: DataInfo[]
}

const clientData: InfoProps = {
  title: "Datos del tomador",
  data: [
    {
      label: "Nombre completo",
      value: "Paula Daniela Latorre Mora"
    },
    {
      label: "Cédula/NIT",
      value: "1065546876"
    },
    {
      label: "Dirección",
      value: "Calle 18 Número 1 22 E"
    },
    {
      label: "Teléfono",
      value: "320 948 4249"
    },
    {
      label: "Corre electrónico",
      value: "danielatorre95@gmail.com"
    },
  ]
}

const policyData: InfoProps = {
  title: "Datos de la póliza",
  data: [
    {
      label: "Póliza",
      value: "12345678"
    },
    {
      label: "Ramo",
      value: "EXEQUIAS"
    },
    {
      label: "Fecha inicio",
      value: "Lunes 6 Mayo 2024"
    },
    {
      label: "Fecha fin",
      value: "Lunes 5 Mayo 2025"
    },
    {
      label: "Estado",
      value: "VIGENTE"
    },
    {
      label: "Forma de pago",
      value: "MENSUAL"
    },
    {
      label: "Matriz",
      value: "MAT0805812"
    },
    {
      label: "Valor",
      value: "$ 31.274,00"
    },
  ]
}

const cols = ["Recibo", "Prima neta", "Impuestos", "Total", "Fecha cobro", "Fecha pago", "Hora pago", "Pagado"]

const data = [
  {
    "Recibo": "9999143836",
    "Prima neta": 26281.00,
    "Impuestos": 4993.00,
    "Total": 31274.00,
    "Fecha cobro": "30/05/2024",
    "Fecha pago": "08/05/2024",
    "Hora pago": "10:35am",
    "Pagado": true
  },
  {
    "Recibo": "9999143833",
    "Prima neta": 26281.00,
    "Impuestos": 4993.00,
    "Total": 31274.00,
    "Fecha cobro": "30/05/2024",
    "Fecha pago": "08/05/2024",
    "Hora pago": "11:35am",
    "Pagado": true
  }
]


const InfoGrid: React.FC<InfoProps> = ({ title, data }) => {
  return (
    <div className="space-y-5">
      <h4 className="text-[20px] text-text-4 font-bold">{title}</h4>
      <div className="grid grid-cols-5 gap-4">
        {data.map((d, i) => (
          <div key={i} className="space-y-2">
            <h5 className="text-sm text-text-3 font-medium">{d.label}</h5>
            <h6 className="p-3 text-[#7E7E7E] font-semibold">{d.value}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}

const Detail: React.FC = () => {

  return (
    <main className="pt-8 pb-12">
      <Wrapper>
        <div className="space-y-5">
          <div className="space-y-2">

            <div className="flex items-center gap-2">
              <Link href={"/cliente/polizas"}>
                <Tooltip text="Regresar">
                  <button className="grid place-items-center outline-none rounded-lg size-10 hover:bg-slate-200 transition cursor-pointer">
                    <ChevronLeftFilledIcon className="text-blue-primary" />
                  </button>
                </Tooltip>
              </Link>
              <h4 className="text-2xl text-text-4 font-semibold">Detalle de la póliza</h4>
            </div>

            <p className="text-sm text-text-3">Esta es la información detallada de la póliza seleccionada</p>

          </div>

          <div className="pt-[70px] px-5 pb-[30px] space-y-12 rounded-[14px] bg-white shadow-lg">
            <div className="flex justify-center">
              <Image
                src="/icons/colmena-seguros.svg"
                alt="Imágen logo asegurador"
                width={220}
                height={67}
              />
            </div>
            <div className="p-5 space-y-[30px] rounded-[10px] border border-blue-terciary">
              <div className="space-y-5">
                <h2 className="text-2xl text-blue-primary font-bold">Información de tu póliza</h2>
                <div className="h-[1px] bg-[#E2E8F0]"></div>
                <InfoGrid title={clientData.title} data={clientData.data} />
                <InfoGrid title={policyData.title} data={policyData.data} />
              </div>
            </div>
          </div>

          <div className="p-5 space-y-12 rounded-[14px] bg-white shadow-lg">
            <div className="p-5 space-y-5 rounded-[10px] border border-blue-terciary">
              <h2 className="text-2xl text-blue-primary font-bold">Información de tu póliza</h2>
              <div className="h-[1px] bg-[#E2E8F0]"></div>
              <Table cols={cols} data={data} />
              <Pagination
                page={1}
                pageSize={2}
                totalCount={2}
                hasNextPage={false}
                hasPreviousPage={false}
                onPageChange={() => { }}
              />
            </div>
          </div>

        </div>
      </Wrapper>
    </main>
  )
}

export default Detail;
