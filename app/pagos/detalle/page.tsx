import ChevronLeftFilledIcon from "@/modules/shared/components/icons/ChevronLeftFilledIcon";
import Tooltip from "@/modules/shared/components/Tooltip";
import Wrapper from "@/modules/shared/ui/Wrapper";
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

const InfoGrid: React.FC<InfoProps> = ({ title, data }) => {
  return (
    <div className="space-y-5">
      <h4 className="text-[20px] text-text font-bold">{title}</h4>
      <div className="grid grid-cols-5 gap-4">
        {data.map((d, i) => (
          <div key={i} className="space-y-2">
            <h5 className="text-sm text-text4 font-medium">{d.label}</h5>
            <h6 className="p-3 text-[#7E7E7E] font-semibold">{d.value}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}

const Detail: React.FC = () => {
  return (
    <main className="pt-8 pb-12 bg-gray1">
      <Wrapper>
        <div className="space-y-5">
          <div className="space-y-2">

            <div className="flex items-center gap-2">
              <Link href={"/pagos/inicio"}>
                <Tooltip text="Regresar">
                  <button className="grid place-items-center outline-none rounded-lg size-10 hover:bg-slate-200 transition cursor-pointer">
                    <ChevronLeftFilledIcon className="text-secn-blue" />
                  </button>
                </Tooltip>
              </Link>
              <h4 className="text-2xl text-text font-semibold">Detalle de la póliza</h4>
            </div>

            <p className="text-sm text-text4">Esta es la información detallada de la póliza seleccionada</p>

          </div>

          <div className="pt-[70px] px-5 pb-[30px] space-y-12 rounded-[14px] bg-white shadow-lg">
            <div className="flex justify-center">
              <img src={"/Promotec.Website.Client/icons/colmena-seguros.svg"} alt="" />
            </div>
            <div className="p-5 space-y-[30px] rounded-[10px] border border-princ-blue">
              <div className="space-y-5">
                <h2 className="text-2xl text-secn-blue font-bold">Información de tu póliza</h2>
                <div className="h-[1px] bg-[#E2E8F0]"></div>
                <InfoGrid title={clientData.title} data={clientData.data} />
                <InfoGrid title={policyData.title} data={policyData.data} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default Detail;
