'use client';
import Pagination from "@/modules/shared/components/Pagination"
import Table from "@/modules/shared/components/Table";
import Wrapper from "@/modules/shared/ui/Wrapper"
import Link from "next/link";
import { useMemo } from "react";

const cols = ["Fecha vencimiento", "Póliza", "Valor", "Acción"];

const data = [
  {
    "Fecha vencimiento": "06/06/2024",
    "Póliza": "97634546",
    "Valor": "$ 31.271,00",
  },
  {
    "Fecha vencimiento": "06/06/2024",
    "Póliza": "97634546",
    "Valor": "$ 31.271,00",
  },
  {
    "Fecha vencimiento": "06/06/2024",
    "Póliza": "97634546",
    "Valor": "$ 31.271,00",
  },
  {
    "Fecha vencimiento": "06/06/2024",
    "Póliza": "97634546",
    "Valor": "$ 31.271,00",
  },
  {
    "Fecha vencimiento": "06/06/2024",
    "Póliza": "97634546",
    "Valor": "$ 31.271,00",
  },
  {
    "Fecha vencimiento": "06/06/2024",
    "Póliza": "97634546",
    "Valor": "$ 31.271,00",
  },
  {
    "Fecha vencimiento": "06/06/2024",
    "Póliza": "97634546",
    "Valor": "$ 31.271,00",
  },
]

const renderers = {
  "Acción": (value: string) => (
    <Link
      href={"/pagos/detalle"}
    >
      <button className="h-10 mx-auto px-10 rounded-lg bg-yellow-primary hover:bg-yellow-primary-hover hover:shadow-md text-white transition-all cursor-pointer flex items-center">{value}</button>
    </Link>
  )
}

const Home: React.FC = () => {

  const policies = useMemo(() => data.map(p => ({
    "Fecha vencimiento": p["Fecha vencimiento"],
    "Póliza": p["Póliza"],
    "Valor": p.Valor,
    "Acción": "Pagar"
  })), [])

  return (
    <main className="pt-[30px] pb-[60px] bg-gray-3">
      <Wrapper>
        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-2xl text-text-4 font-semibold">
              Hola, Daniela Latorre
            </h1>
            <p className="text-sm text-text-3">
              Conoce tus obligaciones pendientes de pago:
            </p>
          </div>

          <div className="bg-white rounded-2xl py-5 px-6">
            <div className="space-y-5">
              <h2 className="text-[20px] text-text-4 font-bold">Pólizas por pagar</h2>

              <div className="h-[1px] bg-blue-terciary"></div>

              <div className="space-y-5 rounded-[14px] bg-white">
                <Table cols={cols} data={policies} renderers={renderers} />
                <Pagination
                  page={1}
                  pageSize={7}
                  totalCount={7}
                  hasNextPage={true}
                  hasPreviousPage={false}
                  onPageChange={() => { }}
                />
              </div>

            </div>
          </div>

        </div>
      </Wrapper>
    </main>
  )
}

export default Home;
