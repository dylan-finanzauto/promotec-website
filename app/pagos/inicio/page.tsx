'use client';
import Pagination from "@/modules/shared/components/Pagination"
import Tooltip from "@/modules/shared/components/Tooltip";
import Wrapper from "@/modules/shared/ui/Wrapper"
import Link from "next/link";

const cols = ["Fecha vencimiento", "Póliza", "Valor"];

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

const PolicyTable: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#DEE5ED]">
      <table className="table-auto w-full">
        <thead className="">
          <tr className="hover:bg-gray-50">
            {
              cols.map((col, index) => (
                <th key={index} className="text-sm px-4 text-center py-5 font-bold whitespace-nowrap text-text2 border-b border-[#DEE5ED]">{col}</th>
              ))
            }
            <th className="px-3 py-2 border-b border-[#DEE5ED] font-bold whitespace-nowrap text-text2 text-sm">Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r: any, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-all" >
              {cols.map((c, i) => (
                <td key={i} className="text-sm px-4 py-5 whitespace-nowrap text-text text-center">{r[c]}</td>
              ))}
              <td className="relative px-3 py-2 grid place-items-center" >
                <Link
                  href={"/pagos/detalle"}
                >
                  <button className="h-10 px-10 rounded-lg bg-tirth hover:bg-tirth-hover hover:shadow-md text-white transition-all cursor-pointer flex items-center">Pagar</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Home: React.FC = () => {
  return (
    <main className="pt-[30px] pb-[60px] bg-gray1">
      <Wrapper>
        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-2xl text-text font-semibold">
              Hola, Daniela Latorre
            </h1>
            <p className="text-sm text-text4">
              Conoce tus obligaciones pendientes de pago:
            </p>
          </div>

          <div className="bg-white rounded-2xl py-5 px-6">
            <div className="space-y-5">
              <h2 className="text-[20px] text-text font-bold">Pólizas por pagar</h2>

              <div className="h-[1px] bg-princ-blue"></div>

              <div className="space-y-5 rounded-[14px] bg-white">
                <PolicyTable />
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
