import React from "react";
import Slider from "@/modules/website/ui/Slider";
import Quotes from "@/modules/website/ui/Quotes";
import Benefits from "@/modules/website/ui/Benefits";
import Experience from "@/modules/website/ui/Experience";
import Opinions from "@/modules/website/ui/Opinions";
import Insurers from "@/modules/website/ui/Insurers";
import Consulting from "@/modules/website/ui/Consulting";
import Certified from "@/modules/website/ui/Certified";

const Personas: React.FC = () => {
  return (
    <main>
      <Slider />
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
