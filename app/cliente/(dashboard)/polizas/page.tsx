'use client';
import Badge from "@/modules/shared/components/Badge";
import Pagination from "@/modules/shared/components/Pagination";
import { SearchIcon } from "@/modules/shared/components/SVGIcons";
import Table from "@/modules/shared/components/Table";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useMemo, useState } from "react";

const cols = ["Póliza", "Producto", "Placa", "Aseguradora", "Estado", "Archivos", "Acción"];

const data = [
  {
    "Póliza": "1234567",
    "Producto": "EXEQUIAS",
    "Placa": "ABC123",
    "Aseguradora": "COLMENA",
    "Estado": true,
    "Archivos": "No hay doc."
  },
  {
    "Póliza": "8909763",
    "Producto": "VIDA INDIVIDUAL",
    "Placa": "ABC123",
    "Aseguradora": "SURA VIDA",
    "Estado": true,
    "Archivos": "No hay doc."
  },
  {
    "Póliza": "6457373",
    "Producto": "VIDA INDIVIDUAL",
    "Placa": "ABC123",
    "Aseguradora": "SURA VIDA",
    "Estado": true,
    "Archivos": "No hay doc."
  },
  {
    "Póliza": "7467361",
    "Producto": "EXEQUIAS",
    "Placa": "ABC123",
    "Aseguradora": "COLMENA",
    "Estado": false,
    "Archivos": "No hay doc."
  },
  {
    "Póliza": "0824415",
    "Producto": "EXEQUIAS",
    "Placa": "ABC123",
    "Aseguradora": "COLMENA",
    "Estado": true,
    "Archivos": "No hay doc."
  },
  {
    "Póliza": "7462221",
    "Producto": "HOGAR",
    "Placa": "ABC123",
    "Aseguradora": "LIBERTY",
    "Estado": false,
    "Archivos": "No hay doc."
  },
  {
    "Póliza": "11123",
    "Producto": "VIDA INDIVIDUAL",
    "Placa": "ABC123",
    "Aseguradora": "SURA VIDA",
    "Estado": false,
    "Archivos": "No hay doc."
  }
]

const renderers = {
  "Estado": (value: boolean) => (
    <Badge className={value ? "bg-green-100 text-green" : "bg-red-100 text-red"}>
      {value ? "VIGENTE" : "ANULADA"}
    </Badge>
  ),
  "Acción": (value: string) => (
    <Link
      href={"/cliente/polizas/detalle"}
    >
      <button className="h-10 px-10 mx-auto rounded-lg bg-yellow-primary hover:bg-yellow-primary-hover hover:shadow-md text-white transition-all cursor-pointer flex items-center">{value}</button>
    </Link>
  )
};

const Polizas: React.FC = () => {

  const [filters, setFilters] = useState({
    PageNumber: 1,
    PageSize: 5
  });

  const form = useForm({
    defaultValues: {
      Query: '',
    },
    onSubmit: ({ value, formApi }) => {
      setFilters(f => ({ ...f, ...value }))
      formApi.reset()
    }
  })

  const policies = useMemo(() => data.map(p => ({
    "Póliza": p["Póliza"],
    "Producto": p.Producto,
    "Placa": p.Placa,
    "Aseguradora": p.Aseguradora,
    "Estado": p.Estado,
    "Archivos": p.Archivos,
    "Acción": "Detalle"
  })), [data])

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-2xl text-text-4 font-semibold">
          Bienvenid@, Daniela Latorre
        </h1>
        <p className="text-sm text-text-3">Esta es la información que tenemos para mostrarte</p>
      </div>

      <div className="bg-white rounded-2xl py-5 px-6">
        <div className="space-y-5">
          <h2 className="text-[20px] text-text-4 font-bold">Tu histórico de pólizas</h2>

          <div className="h-[1px] bg-blue-terciary"></div>

          <form onSubmit={e => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}>
            <div className="flex gap-4">
              <form.Field
                name="Query"
              >
                {(field) => (
                  <div className="relative">
                    <SearchIcon className="size-4 absolute left-0 top-1/2 -translate-y-1/2 ml-3 text-text-2 pointer-events-none" />
                    <input
                      type="text"
                      name={field.name}
                      id={field.name}
                      value={field.state.value}
                      onChange={e => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      placeholder="Buscar por póliza"
                      className="h-10 w-xs pl-10 pr-2 rounded-lg border border-blue-terciary text-text-2 placeholder:text-text-2 outline-none"
                    />
                  </div>
                )}
              </form.Field>

              <form.Subscribe
                selector={state => [state.canSubmit, state.isSubmitting]}
              >
                {([canSubmit, isSubmitting]) => (
                  <button type="submit" className="h-10 px-16 rounded-lg bg-yellow-primary hover:bg-yellow-primary-hover hover:shadow-md text-white transition-all cursor-pointer flex items-center" disabled={!canSubmit || isSubmitting}>Buscar</button>
                )}
              </form.Subscribe>

            </div>

          </form>

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
  )
}

export default Polizas;
