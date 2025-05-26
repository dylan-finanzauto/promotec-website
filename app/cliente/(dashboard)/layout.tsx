import Sidebar from "@/modules/cliente/ui/Sidebar";
import Wrapper from "@/modules/shared/ui/Wrapper";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] lg:grid-cols-[280px_1fr] gap-5 h-full">
        {<Sidebar />}
        <main className="pt-5 pb-12 overflow-hidden">
          {children}
        </main>
      </div>
    </Wrapper>
  );
}
