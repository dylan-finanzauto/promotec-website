'use client';
import Pagination from "@/modules/shared/components/Pagination";
import Wrapper from "@/modules/shared/ui/Wrapper";
import Banner from "@/modules/website/ui/Banner";

const cols = ["Nombre y apellidos", "Tipo de documento", "Identificación", "Agencia de seguros", "Nit", "Fecha de vinculación"];

const data = [
  {
    "Nombre y apellidos": "Nombre Completo Funcionario Pt",
    "Tipo de documento": "Cédula de ciudadania",
    "Identificación": "10000001",
    "Agencia de seguros": "Promotec LTDA, Agencia de seguros",
    "Nit": "860050390-1",
    "Fecha de vinculación": "12/03/2020"
  },
  {
    "Nombre y apellidos": "Nombre Completo Funcionario Pt",
    "Tipo de documento": "Cédula de ciudadania",
    "Identificación": "10000001",
    "Agencia de seguros": "Promotec LTDA, Agencia de seguros",
    "Nit": "860050390-1",
    "Fecha de vinculación": "12/03/2020"
  },
  {
    "Nombre y apellidos": "Nombre Completo Funcionario Pt",
    "Tipo de documento": "Cédula de ciudadania",
    "Identificación": "10000001",
    "Agencia de seguros": "Promotec LTDA, Agencia de seguros",
    "Nit": "860050390-1",
    "Fecha de vinculación": "12/03/2020"
  },
  {
    "Nombre y apellidos": "Nombre Completo Funcionario Pt",
    "Tipo de documento": "Cédula de ciudadania",
    "Identificación": "10000001",
    "Agencia de seguros": "Promotec LTDA, Agencia de seguros",
    "Nit": "860050390-1",
    "Fecha de vinculación": "12/03/2020"
  },
  {
    "Nombre y apellidos": "Nombre Completo Funcionario Pt",
    "Tipo de documento": "Cédula de ciudadania",
    "Identificación": "10000001",
    "Agencia de seguros": "Promotec LTDA, Agencia de seguros",
    "Nit": "860050390-1",
    "Fecha de vinculación": "12/03/2020"
  },
  {
    "Nombre y apellidos": "Nombre Completo Funcionario Pt",
    "Tipo de documento": "Cédula de ciudadania",
    "Identificación": "10000001",
    "Agencia de seguros": "Promotec LTDA, Agencia de seguros",
    "Nit": "860050390-1",
    "Fecha de vinculación": "12/03/2020"
  },
  {
    "Nombre y apellidos": "Nombre Completo Funcionario Pt",
    "Tipo de documento": "Cédula de ciudadania",
    "Identificación": "10000001",
    "Agencia de seguros": "Promotec LTDA, Agencia de seguros",
    "Nit": "860050390-1",
    "Fecha de vinculación": "12/03/2020"
  },
];

function Table() {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full text-left">
        <thead>
          <tr className="bg-blue-secondary text-blue-terciary text-[20px]">
            {cols.map((col) => (
              <th key={col} className="py-4 px-[10px] text-center text-nowrap">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: Record<string, string>, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-transparent" : "bg-gray-2"}
            >
              {cols.map((col, i) => (
                <td key={i} className="py-6 px-[10px] text-nowrap">{item[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Suitability: React.FC = () => {
  return (
    <>
      <Banner
        title="Listado de"
        subtitle="Idoneidad"
        image="/images/suitability/banner.png"
      />

      <section className="py-[100px]">
        <Wrapper>
          <h3 className="pb-[100px] text-[30px] text-center text-blue-primary font-bold">Conoce el listado de idoneidad de nuestros funcionarios</h3>
          <div className="py-[75px] px-24 rounded-[30px] bg-gray-1 space-y-[30px]">
            <h3 className="text-3xl text-text-4 text-center font-bold">Listado de funcionarios acreditados</h3>
            <Table />
            <Pagination
              page={1}
              pageSize={10}
              totalCount={100}
              hasNextPage={true}
              hasPreviousPage={false}
              onPageChange={() => { }}
            />
          </div>
        </Wrapper>
      </section>

    </>
  )
}

export default Suitability;
