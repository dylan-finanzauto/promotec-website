import Image from "next/image"
import type React from "react"
// import promotec from "../../assets/svg/promotec.svg"

type Props = {
  onAnimationEnd?: () => void
}

const Loader: React.FC<Props> = ({ onAnimationEnd }) => {
  return (
    <>
      <div className="h-screen w-full bg-gray1 fixed z-10 bottom-0 left-0 animate-climb"></div>
      <div
        className="h-screen w-full grid place-items-center fixed z-20 top-0 left-0"
      >
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/promotec.svg`} alt="Logo" width={156} height={44} className="animate-presence" onAnimationEnd={onAnimationEnd} />
      </div>
    </>
  )
}

export default Loader;
