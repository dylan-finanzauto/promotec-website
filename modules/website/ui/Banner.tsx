import Wrapper from "@/modules/shared/ui/Wrapper"

type BannerProps = {
  titleTop?: string,
  titleBottom?: string,
  img: string
}

const Banner: React.FC<BannerProps> = ({ titleTop, titleBottom, img }) => {
  return (
    <header className="h-[500px] relative bg-blue-terciary">
      <div className="h-56 min-w-0 w-11/12 md:w-2/5 absolute top-0 translate-y-1/2 left-0 rounded-e-[40px] bg-blue-primary"></div>
      <Wrapper className="w-full h-full relative">
        <img src={img} alt="" className="fade-left hidden md:block absolute right-0 top-0 h-full" />
        <h1 className="h-56 absolute top-0 translate-y-1/2 flex flex-col justify-center leading-none">
          <span className="text-4xl md:text-[50px] text-blue-terciary font-semibold">{titleTop}</span>
          <span className="text-4xl md:text-[50px] text-white font-extrabold">{titleBottom}</span>
        </h1>
      </Wrapper>
    </header>
  )
}

export default Banner;
