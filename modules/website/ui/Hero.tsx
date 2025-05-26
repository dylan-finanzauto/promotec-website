import RichText from "@/modules/shared/components/RichText";
import { PIcon, POutlinedIcon } from "@/modules/shared/components/SVGIcons";
import Link from "next/link";

type Link = {
  href: string;
  label: string;
}

const Hero: React.FC<{
  product: string,
  description: string,
  image: string,
  link?: Link,
  active: boolean
}> = ({
  product,
  description,
  image,
  link,
  active
}) => {
    return (
      <section
        className={`absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full overflow-hidden transition-opacity duration-500 ease-in-out ${active ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        style={{
          transitionProperty: "opacity, transform",
          transitionDuration: "1s, 2s",
        }}
      >

        <img
          src={image}
          alt={""}
          className="h-full w-full object-cover"
        />

        <div className="absolute top-0 left-0 ml-20">
          <PIcon className="absolute top-0 left-0 h-auto w-[700px] mt-8" />
          <POutlinedIcon className="absolute top-0 left-0 h-auto w-[700px] mt-9 ml-5 -rotate-3" />
        </div>

        <div className="absolute left-0 top-0 w-[700px] ml-20 h-full flex justify-center items-center">
          <div className="w-3/5 space-y-4">
            <h1 className="text-7xl text-white leading-none">Póliza de <b className="text-blue-terciary font-extrabold">{product}</b></h1>
            <p className="text-4xl text-white leading-[1.1]">
              <RichText text={description} />
            </p>
          </div>
        </div>

        {link && (
          <div className="absolute bottom-0 right-0 mb-24 mr-52">
            <Link
              href={link.href}
            >
              <button className="text-[22px] font-medium text-white px-8 py-[14px] rounded-lg bg-yellow-primary hover:bg-yellow-primary-hover cursor-pointer">{link.label}</button>
            </Link>
          </div>
        )}


      </section>
    )
  }

export default Hero;
