'use client';
import Pagination from "@/modules/shared/components/Pagination";
import { DocumentOutlinedIcon, EyeIcon, InfoCircleIcon } from "@/modules/shared/components/SVGIcons";
import Table from "@/modules/shared/components/Table";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useMemo, useState } from "react";

const cols = ["Fecha vencimiento", "Poliza", "Valor", "Acción"];

const data = [
  {
    "Fecha vencimiento": "06/06/2024",
    "Poliza": "647623982",
    "Valor": 15900.00,
  },
  {
    "Fecha vencimiento": "06/06/2024",
    "Poliza": "7638921",
    "Valor": 31271.00,
  },
  {
    "Fecha vencimiento": "06/06/2024",
    "Poliza": "123456678",
    "Valor": 11271.00,
  }
]

const renderers = {
  "Acción": (value: string) => (
    <div className="flex justify-center gap-[10px] items-center">
      <Link href={"/cliente/extracto/detalle"}>
        <button className="size-10 rounded-lg bg-green grid place-items-center cursor-pointer">
          <DocumentOutlinedIcon className="text-white" />
        </button>
      </Link>
      <Link href={"/cliente/polizas/detalle"}>
        <button className="size-10 rounded-lg bg-blue-primary grid place-items-center cursor-pointer">
          <EyeIcon className="text-white" />
        </button>
      </Link>
      <button className="h-10 px-10 rounded-lg bg-yellow-primary hover:bg-yellow-primary-hover hover:shadow-md text-white transition-all cursor-pointer flex items-center">{value}</button>
    </div>
  )
};

const Extract: React.FC = () => {

  const [filters, setFilters] = useState({
    PageNumber: 1,
    PageSize: 5
  });

  const extracts = useMemo(() => data.map(p => ({
    "Fecha vencimiento": p["Fecha vencimiento"],
    "Poliza": p.Poliza,
    "Valor": p.Valor,
    "Acción": "Pagar"
  })), [data])

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-2xl text-text-4 font-semibold">Tus extractos</h1>
        <p className="text-sm text-text-3">Queremos que tu cuenta se encuentre al día. Estas son tus pólizas pendientes de pago:</p>
      </div>

      <div className="p-5 rounded-[14px] bg-[#E5EAF8] flex items-center gap-[10px]">
        <InfoCircleIcon className="size-6 text-blue-primary" />
        <p className="text-[15px] text-blue-primary font-medium">Si ya realizaste el anterior pago por otro medio, te agradecemos envíes el comprobante de transacción vía e-mail a <a href="mailto:cartera7@promotec.com.co" className="underline">cartera7@promotec.com.co</a></p>
      </div>

      <div className="bg-white rounded-2xl py-5 px-6">
        <div className="space-y-5">
          <h2 className="text-[20px] text-text-4 font-bold">Pólizas de cargo mensual pendientes</h2>

          <div className="h-[1px] bg-blue-terciary"></div>

          <div className="space-y-5 rounded-[14px] bg-white">
            <Table cols={cols} data={extracts} renderers={renderers} />
            <Pagination
              page={1}
              pageSize={3}
              totalCount={3}
              hasNextPage={false}
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

export default Extract;
