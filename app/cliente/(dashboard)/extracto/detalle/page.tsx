'use client'
import Pagination from "@/modules/shared/components/Pagination";
import { ChevronLeftFilledIcon, InfoCircleIcon } from "@/modules/shared/components/SVGIcons";
import Table from "@/modules/shared/components/Table";
import Tooltip from "@/modules/shared/components/Tooltip";
import Wrapper from "@/modules/shared/ui/Wrapper";
import Link from "next/link";

const cols = ["Poliza", "Placa", "Remision", "Fecha cobro", "Aseguradora", "Ramo", "Valor"]

const data = [
  {
    "Poliza": "1234567",
    "Placa": "ABC123",
    "Remision": "MAT0876454",
    "Fecha cobro": "06/06/2024",
    "Aseguradora": "COLMENA",
    "Ramo": "58EXEQUIAS",
    "Valor": 15900.00
  },
  {
    "Poliza": "8909763",
    "Placa": "ABC123",
    "Remision": "MAT0876454",
    "Fecha cobro": "06/07/2024",
    "Aseguradora": "COLMENA",
    "Ramo": "58EXEQUIAS",
    "Valor": 15900.00
  },
  {
    "Poliza": "6457373",
    "Placa": "ABC123",
    "Remision": "MAT0876454",
    "Fecha cobro": "06/08/2024",
    "Aseguradora": "COLMENA",
    "Ramo": "58EXEQUIAS",
    "Valor": 15900.00
  },
  {
    "Poliza": "7467361",
    "Placa": "ABC123",
    "Remision": "MAT0876454",
    "Fecha cobro": "06/09/2024",
    "Aseguradora": "COLMENA",
    "Ramo": "58EXEQUIAS",
    "Valor": 15900.00
  },
  {
    "Poliza": "0824415",
    "Placa": "ABC123",
    "Remision": "MAT0876454",
    "Fecha cobro": "06/10/2024",
    "Aseguradora": "COLMENA",
    "Ramo": "58EXEQUIAS",
    "Valor": 15900.00
  },
  {
    "Poliza": "7462221",
    "Placa": "ABC123",
    "Remision": "MAT0876454",
    "Fecha cobro": "06/11/2024",
    "Aseguradora": "COLMENA",
    "Ramo": "58EXEQUIAS",
    "Valor": 15900.00
  },
  {
    "Poliza": "11123",
    "Placa": "ABC123",
    "Remision": "MAT0876454",
    "Fecha cobro": "06/12/2024",
    "Aseguradora": "COLMENA",
    "Ramo": "58EXEQUIAS",
    "Valor": 15900.00
  }
]


const Detail: React.FC = () => {

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href={"/cliente/extracto"}>
            <Tooltip text="Regresar">
              <button className="grid place-items-center outline-none rounded-lg size-10 hover:bg-slate-200 transition cursor-pointer">
                <ChevronLeftFilledIcon className="text-blue-primary" />
              </button>
            </Tooltip>
          </Link>
          <h4 className="text-2xl text-text-4 font-semibold">Tus extractos</h4>
        </div>

        <p className="text-sm text-text-3">Queremos que tu cuenta se encuentre al día. Estas son tus pólizas pendientes de pago:</p>
      </div>

      <div className="p-5 rounded-[14px] bg-[#E5EAF8] flex items-center gap-[10px]">
        <InfoCircleIcon className="size-6 text-blue-primary" />
        <p className="text-[15px] text-blue-primary font-medium">Si ya realizaste el anterior pago por otro medio, te agradecemos envíes el comprobante de transacción vía e-mail a <a href="mailto:cartera7@promotec.com.co" className="underline">cartera7@promotec.com.co</a></p>
      </div>

      <div className="bg-white rounded-2xl py-5 px-6">
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <h2 className="text-[20px] text-text-4 font-bold">Extractos de póliza seleccionada</h2>
            <button className="h-10 w-[162px] rounded-lg bg-yellow-primary hover:bg-yellow-primary-hover hover:shadow-md text-white transition-all cursor-pointer flex justify-center items-center">Pagar</button>
          </div>

          <div className="h-[1px] bg-blue-terciary"></div>

          <div className="space-y-5 rounded-[14px] bg-white">
            <Table cols={cols} data={data} />
            <Pagination
              page={1}
              pageSize={5}
              totalCount={50}
              hasNextPage={true}
              hasPreviousPage={false}
              onPageChange={() => { }}
            />
          </div>

        </div>
      </div>

      <p className="text-sm text-text-3">*De conformidad a lo establecido en el Artículo 1068 del Código de Comercio ley 45/90 articulo 81/82 y teniendo en cuenta que no hemos recibido el recaudo correspondiente a la póliza en referencia, te aconsejamos comunicarte con el Auxiliar de Cartera al Teléfono: (1) 742 3700 Ext.307 para que puedas aclarar el estado de tu cartera.</p>

    </div>
  )
}

export default Detail;
