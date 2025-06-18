import Breadcrumb from "@/modules/shared/components/Breadcrumb";
import Wrapper from "@/modules/shared/ui/Wrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <Wrapper>
        <div className="absolute left-0 top-0 h-[525px] w-full bg-blue-terciary -z-10"></div>
        <div className="pt-10">
          <Breadcrumb items={[{ label: 'Productos', href: '/productos' }, { label: 'Póliza de Bicis', href: '/productos/bici' }, { label: 'Cotizar póliza' }]} />
        </div>
        <div className="py-[30px] space-y-5">
          <h2 className="text-[30px] text-center text-blue-primary font-semibold">Aseguramos y protegemos tu bicicleta</h2>
          <p className="text-[20px] text-center text-text-4 font-medium">Completa toda la información correctamente para brindarte la cotización de tu plan ideal.</p>
        </div>
        {children}
      </Wrapper>
    </main>
  );
}
