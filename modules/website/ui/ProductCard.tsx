type CardProps = {
  image: string;
  text: string;
}

export const ProductCard: React.FC<CardProps> = ({ image, text }) => {
  return (
    <div className="fade-up flex flex-col rounded-[30px] bg-gray-3 overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${image})`
        }}
        className="flex-1 bg-center bg-cover"
      ></div>
      <div className="h-[178px] px-12 py-16 flex justify-between items-center gap-7">
        <h3 className="text-[30px] text-text-1 leading-tight font-bold">
          {text}
        </h3>
        <button className="py-3 w-[160px] rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary-hover text-white transition-all cursor-pointer">Ver más</button>
      </div>
    </div>
  )
}

export const AlterProductCard: React.FC<CardProps> = ({ image, text }) => {
  return (
    <div className="fade-up flex col-span-2 rounded-[30px] bg-gray-3 overflow-hidden">
      <div className="w-2/5 px-24 flex flex-col justify-center gap-14">
        <h3 className="text-[30px] text-text-1 leading-tight font-bold">
          <div>Póliza de</div>
          <div>Carros y</div>
          <div>Motos</div>
        </h3>
        <button className="py-3 rounded-[10px] text-[20px] font-medium bg-yellow-primary hover:bg-yellow-primary/80 text-white cursor-pointer">Ver más</button>
      </div>
      <div
        style={{
          backgroundImage: `url(${image})`
        }}
        className="flex-1 bg-center bg-cover"
      ></div>
    </div>
  )
}
