import Wrapper from "@/modules/shared/ui/Wrapper";
import { ATTENDANCES } from "../data/attendances";
import Image from "next/image";
import React from "react";

function Insurers() {
  return (
    <section className="py-[100px]">
      <Wrapper>
        <div className="space-y-10">
          <h3 className="text-[40px] text-blue-primary font-bold text-center">Aseguradoras aliadas</h3>
          <div className="relative w-full md:w-auto flex overflow-x-hidden md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex gap-10 animate-marquee whitespace-nowrap">
              {[...Array(4)].map((_, j) => (
                <React.Fragment key={j}>
                  {ATTENDANCES.map((a, i) => (
                    <Image key={`${j}-${i}`} src={a.url} alt="" width={80} height={32} />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Insurers;
