import Image from "next/image";
import Wrapper from "@/modules/shared/ui/Wrapper";
import Breadcrumb, { BreadcrumbItem } from "@/modules/shared/components/Breadcrumb";

type BannerProps = {
  image: string,
  imageAlt?: string,
  title: string;
  subtitle: string;
};

const Banner = ({
  image,
  imageAlt = "",
  title,
  subtitle,
}: BannerProps) => (
  <div className="h-[448px] relative bg-blue-terciary">

    <div className="h-56 min-w-0 max-w-[782px] w-full absolute top-1/2 -translate-y-1/2 left-0 md:rounded-e-[40px] bg-blue-primary"></div>
    <Wrapper className="relative w-full h-full">
        <h1 className="h-56 max-w-[469px] w-full min-w-0 absolute top-1/2 -translate-y-1/2 flex flex-col justify-center leading-none">
          <span className="text-4xl md:text-[50px] text-blue-terciary font-semibold">{title}</span>
          <span className="text-4xl md:text-[50px] text-white font-extrabold">{subtitle}</span>
        </h1>

        <Image
          className="fade-left hidden md:block absolute right-0 top-0 h-full w-auto object-cover object-center"
          width={200}
          height={200}
          src={image}
          alt={imageAlt}
        />
    </Wrapper>
  </div>
);


export default Banner;

type ProductBannerProps = {
  background: string,
  breadcrumbItems: BreadcrumbItem[],
  title: string,
  subtitle: string,
};

export const ProductBanner = ({
  background,
  breadcrumbItems,
  title,
  subtitle,
}: ProductBannerProps) => (

  <div className="h-[448px] relative bg-blue-terciary" style={{
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right center',
  }}>

    <div className="h-56 min-w-0 max-w-[782px] w-full absolute top-1/2 -translate-y-1/2 left-0 md:rounded-e-[40px] bg-blue-primary"></div>
    <Wrapper>
      {breadcrumbItems && breadcrumbItems.length > 0 && (
        <div className="absolute top-0 mt-10">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      )}

      <h1 className="h-56 max-w-[500px] w-full min-w-0 absolute top-1/2 -translate-y-1/2 flex flex-col justify-center leading-none">
        <span className="text-4xl md:text-[40px] text-blue-terciary font-semibold">{title}</span>
        <span className="text-4xl md:text-[40px] text-white font-extrabold">{subtitle}</span>
      </h1>
    </Wrapper>
  </div>
);