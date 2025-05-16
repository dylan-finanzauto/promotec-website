import FacebookIcon from "@/modules/shared/components/icons/FacebookIcon";
import InstagramIcon from "@/modules/shared/components/icons/InstagramIcon";
import LinkedInIcon from "@/modules/shared/components/icons/LinkedInIcon";
import PromotecIcon from "@/modules/shared/components/icons/PromotecIcon";
import Wrapper from "@/modules/shared/ui/Wrapper";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-secn-blue pt-[120px] pb-[100px]">
    <Wrapper>
      <div className="flex justify-between py-8">
        <PromotecIcon className="text-white w-[196px] h-[55px] -mt-8" />
        <div className="flex gap-[10px]">
          <Link
            href={"/cliente"}
          >
            <button
              className="h-10 w-[162px] text-white border border-white rounded-[10px] bg-transparent hover:bg-[#EDEDED] hover:border-[#D9D9D9] hover:text-text transition-all cursor-pointer"
            >
              Soy cliente
            </button>
          </Link>
          <Link
            href={"/pagos"}
          >
            <button
              className="h-10 w-[162px] bg-tirth hover:bg-[#e18205] disabled:bg-tirth/70 transition-all text-white rounded-[10px] cursor-pointer"
            >
              Pagos en línea
            </button>
          </Link>
        </div>
      </div>

      <div className="flex">
        <div className="border-r border-white space-y-5 pr-10">
          <div className="flex gap-[30px]">
            <div className="space-y-1">
              <h4 className="text-princ-blue font-bold text-[18px]">
                Línea telefónica
              </h4>
              <p className="text-white">(601) 742 3700</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-princ-blue font-bold text-[18px]">
                Correo electrónico
              </h4>
              <p className="text-white">servicioalcliente@promotec.com.co</p>
            </div>
          </div>

          <div>
            <h4 className="text-princ-blue font-bold">
              Horario de atención servicio al cliente
            </h4>
            <p className="text-white">
              Lunes a viernes: 7:00 a.m. - 7:00 p.m./ Sábados: 8:00 a.m. a 1:00 p.m.
            </p>
          </div>
          <div>
            <h4 className="text-princ-blue font-bold">Horario de atención</h4>
            <p className="text-white">
              Lunes a viernes: 7:00 a.m. - 7:00 p.m./ Sábados: 8:00 a.m. a 1:00 p.m.
            </p>
          </div>
        </div>
        <div className="pl-14 flex items-center">
          <div className="grid grid-cols-3">
            <ul className="text-white space-y-1">
              <li className="text-[18px] text-princ-blue font-bold">De tu interés</li>
              <li>
                <Link href={"/productos"}>Productos</Link>
              </li>
              <li>
                <Link href={"/emergencia"}>Emergencia</Link>
              </li>
              <li>
                <Link href={"/indemnizaciones"}>Indemnizaciones</Link>
              </li>
              <li>
                <Link href={"/quejas-reclamos"}>Quejas y reclamos</Link>
              </li>
            </ul>

            <ul className="text-white space-y-1">
              <li className="text-[18px] text-princ-blue font-bold">Conócenos</li>
              <li>
                <Link href={"/nosotros"}>Nosotros</Link>
              </li>
              <li>
                <Link href={"/contacto"}>Contáctanos</Link>
              </li>
            </ul>

            <ul className="text-white space-y-1">
              <li className="text-[18px] text-princ-blue font-bold">Legal</li>
              <li>
                <Link href={"/politicas"}>Nuestras políticas</Link>
              </li>
              <li>
                <Link href={"/linea-etica"}>Linea ética</Link>
              </li>
              <li>
                <Link href={"/idoneidad"}>Listado de idoneidad</Link>
              </li>
              <li>
                <Link href={"/terminos-condiciones"}>Términos y condiciones</Link>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div className="py-12 flex gap-6">
        <a href="#" target="_blank">
          <InstagramIcon className="size-5 text-princ-blue" />
        </a>
        <a href="#" target="_blank">
          <FacebookIcon className="size-5 text-princ-blue" />
        </a>
        <a href="#" target="_blank">
          <LinkedInIcon className="size-5 text-princ-blue" />
        </a>
      </div>

      <p className="text-center text-text2">Copyright <b>&copy; Promotec Agencia de Seguros 2024</b> | Designed & Developed by El Garaje</p>

    </Wrapper>
  </footer>
);

export default Footer;
