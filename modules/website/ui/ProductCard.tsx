import RichText from "@/modules/shared/components/RichText";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  href: string;
  image: string;
  text: string;
}

export const ProductCard: React.FC<CardProps> = ({ href, image, text }) => {
  return (
    <Link href={href} className="fade-up group flex flex-col rounded-[30px] overflow-hidden transition-all duration-500">
      <div className="grow overflow-hidden">
        <Image className="object-center object-cover group-hover:scale-110 duration-500 transition-all" src={image} alt="" width={200} height={100} style={{
          width: "100%",
          height: "100%"
        }} />
      </div>
      <div className="min-h-[178px] px-12 py-16 grid grid-cols-2 items-center gap-2 bg-gray-3 group-hover:bg-blue-terciary transition-all duration-500">
        <h3 className="text-[30px] text-text-1 group-hover:text-blue-primary leading-tight font-bold overflow-hidden">
          <RichText text={text} />
        </h3>
        <button className="h-12 w-[160px] justify-self-end rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary-hover text-white transition-all cursor-pointer">Ver más</button>
      </div>
    </Link>
  )
}

export const AlterProductCard: React.FC<CardProps> = ({ href, image, text }) => {
  return (
    <Link href={href} className="fade-up group flex md:col-span-2 rounded-[30px] overflow-hidden">
      <div className="w-1/2 md:w-2/5 px-8 xl:px-24 flex flex-col justify-center gap-14 bg-gray-3 group-hover:bg-blue-terciary transition-all duration-500">
        <h3 className="text-[30px] text-text-1 group-hover:text-blue-primary leading-tight font-bold">
          {text}
        </h3>
        <button className="rounded-[10px] h-12 max-w-[200px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Ver más</button>
      </div>
      <div className="grow overflow-hidden">
        <Image className="object-center object-cover group-hover:scale-110 transition-all duration-500" src={image} alt="" width={200} height={100} style={{
          width: "100%",
          height: "100%"
        }} />
      </div>
    </Link>
  )
}
