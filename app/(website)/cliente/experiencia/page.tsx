import RadioField from "@/modules/shared/components/RadioField";
import Wrapper from "@/modules/shared/ui/Wrapper";

const questions = [
  "¿Qué tan fácil fue encontrar la información que buscabas?",
  "¿Cómo calificarías el proceso para acceder a tus pólizas o extractos de pago?",
  "¿Cómo calificarías en general nuestra página web?"
]

const Experience: React.FC = () => {
  return (

    <main className="pt-[30px] pb-[60px] bg-gray-3">
      <Wrapper>
        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-2xl text-text-4 font-semibold">Cuéntanos tu experiencia</h1>
            <p className="text-sm text-text-3">Tu opinión es muy importante para nosotros, por eso queremos saber; ¿qué opinas de nuestros servicios? de igual forma solicitamos que nos informes si tienes algún comentario o sugerencia frente a la calidad de nuestro servicio.</p>
          </div>

          <div className="rounded-xl overflow-hidden">
            <header className="h-[393px] bg-cover bg-center" style={{
              backgroundImage: `url(/images/experience/banner.png)`
            }}></header>
            <div className="py-14 px-28 space-y-12 bg-blue-terciary">
              <div className="space-y-[30px]">
                <h5 className="text-[20px] text-center text-blue-secondary font-bold">En una escala de 1 a 5 donde 5 es la puntuación más alta y 0 la más baja:</h5>
                {questions.map((q, idx) => (
                  <div key={idx} className="space-y-[10px]">
                    <p className="text-lg text-center text-text-4 font-medium">{q}</p>
                    <div className="grid grid-cols-5 justify-items-center gap-[30px] w-sm mx-auto">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="inline-flex items-center gap-2">
                          <RadioField
                            name={(idx + 1).toString()}
                            label={(i + 1).toString()}
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <button className="h-10 w-[162px] rounded-lg bg-yellow-primary hover:bg-yellow-primary-hover hover:shadow-md text-white transition-all cursor-pointer flex justify-center items-center">Enviar</button>
              </div>
            </div>
          </div>

        </div>
      </Wrapper>
    </main>
  )
}

export default Experience;
