import React from "react";
import { getAssetPath } from "@/modules/shared/utils/paths";
import Slider from "@/modules/website/ui/Slider";
import Quotes from "@/modules/website/ui/Quotes";
import Benefits from "@/modules/website/ui/Benefits";
import Experience from "@/modules/website/ui/Experience";
import Opinions from "@/modules/website/ui/Opinions";
import Insurers from "@/modules/website/ui/Insurers";
import Consulting from "@/modules/website/ui/Consulting";
import Certified from "@/modules/website/ui/Certified";

const products = [
  {
    name: "Vehículos",
    description: "Protege tu carro con **Promotec** y maneja con **tranquilidad.**",
    image: getAssetPath("/images/home/1.png"),
    link: {
      href: "/productos/vehiculos",
      label: "¡Cotiza tu seguro aquí!"
    }
  },
  {
    name: "Bici",
    description: "Pedalea sin preocupaciones, **Promotec te cubre.**",
    image: getAssetPath("/images/home/2.png"),
    link: {
      href: "/productos/bici",
      label: "¡Cotiza tu seguro aquí!"
    }
  },
  {
    name: "Mascota",
    description: "En **Promotec** sabemos que tu mascota merece **la mejor anteción.**",
    image: getAssetPath("/images/home/3.png"),
    link: {
      href: "/productos/mascota",
      label: "¡Cotiza tu seguro aquí!"
    }
  },
  {
    name: "Hogar",
    description: "Con **Promotec protege** tu casa, tu refugio, con el **mejor seguro.**",
    image: getAssetPath("/images/home/4.png"),
    link: {
      href: "/productos/hogar",
      label: "¡Cotiza tu seguro aquí!"
    }
  },
  {
    name: "Vida",
    description: "Para **Promotec,** tu tranquilidad y la de tu familia son lo **más importante.**",
    image: getAssetPath("/images/home/5.png"),
    link: {
      href: "/productos/vida",
      label: "¡Cotiza tu plan aquí!"
    }
  },
]

const Personas: React.FC = () => {

  return (
    <main>
      <Slider products={products} />
      <Quotes />
      <Benefits />
      <Experience />
      <Opinions />
      <Insurers />
      <Consulting />
      <Certified />
    </main >
  )
}

export default Personas;
