import { create } from "zustand";
import { Opinion } from "../types/opinion";
import { getAssetPath } from "../utils/paths";

interface IOpinionStore {
    opinions: Opinion[],
    updateOpinions: (opinions: Opinion[]) => void
}

export const opinionStore = create<IOpinionStore>((set) => ({
    opinions: [
        {
            nombre: "Ernesto Aleman Redondo",
            comentario: "Buenas tardes familia Promotec, quiero agradecer por los servicios que ustedes brindan, son excelentes, la atención muy buena, la Sta. Lady es una profesional en su atención y servicio que brinda felicitaciones",
            ramo: "Cliente Seguro",
            fecha: "26/02/2025",
            avatar: getAssetPath("/images/home/avatar.png")
        },
        {
            nombre: "Héctor Eduardo Hernández Ortiz",
            comentario: "Recomendación por el momento ninguna todo ha sido excelente, lady tú estás siempre  dispuesta a atender y a colaborar. Sugerencia que nunca cambien tan excelente servicio. Buena tardes",
            ramo: "Cliente Seguro",
            fecha: "1/03/2025",
            avatar: getAssetPath("/images/home/avatar.png")
        },
        {
            nombre: "Edward Dunkan",
            comentario: "Buena tarde, Primero que todo es para agradecer a Lady Moreno por la gran colaboración, empeño, paciencia y buen trato que a tenido para cualquier inquietud que ha tenido con respecto a laspólizas que tengo con Promotec. Pocas personas enaltecen su labor como ella. Muchas gracias por todo",
            ramo: "Cliente Seguro",
            fecha: "4/03/2025",
            avatar: getAssetPath("/images/home/avatar.png")
        },
        {
            nombre: "Laura Isabel Palacio Cantillo",
            comentario: "Buenas tardes, Me he sentido feliz con la atención brindada, oportuna y muy eficaz. Muchas gracias por su apoyo en la adquisición del seguro vehicular",
            ramo: "Cliente Seguro",
            fecha: "5/03/2025",
            avatar: getAssetPath("/images/home/avatar.png")
        },
        {
            nombre: "Pedro Jaime Calvo Calderon",
            comentario: "Buen día Sandra. Gracias por su atención y el servicio brindado. Me sentí bien atendido y con información clara sobre las opciones disponibles. Sin duda, una atención profesional y amable. ¡Saludos!",
            ramo: "Cliente Seguro",
            fecha: "7/03/2025",
            avatar: getAssetPath("/images/home/avatar.png")
        },
        {
            nombre: "Claudia María Cuervo Araque",
            comentario: "Agradezco mucho la ayuda y orientación al momento de renovar mi póliza. Me siento muy satisfecha con la atención recibida por parte de Promotec",
            ramo: "Cliente Seguro",
            fecha: "8/03/2025",
            avatar: getAssetPath("/images/home/avatar.png")
        },
        {
            nombre: "Llerar Fernely Panche Cardenas",
            comentario: "En las consultas y solicitudes realizadas por whastapp a Promotec han sido ágiles y oportunos, tienen muy buena atención!",
            ramo: "Cliente Seguro",
            fecha: "10/03/2025",
            avatar: getAssetPath("/images/home/avatar.png")
        },
        {
            nombre: "Johnatan Angarita Orozco",
            comentario: "Todo muy bien muchas gracias por su servicio. Muy diligentes",
            ramo: "Cliente Seguro",
            fecha: "11/03/2025",
            avatar: getAssetPath("/images/home/avatar.png")
        },
        {
            nombre: "Omar Yesid Sanchez Torres",
            comentario: "Los recomendaria a cualquiera porq son muy eficientes en el servicio estoy  muy agradecido con ustedes",
            ramo: "Cliente Seguro",
            fecha: "12/03/2025",
            avatar: getAssetPath("/images/home/avatar.png")
        },
        {
            nombre: "Juan Pablo Diaz",
            comentario: "Erika. Estoy muy agradecido por tu trabajo. Desde el principio fuiste muy diligente con el envío y asesoría sobre las propuestas. Me facilitaste todo el proceso de adquisición de la póliza fial. muy agradecido por el acompañamiento y servicio.",
            ramo: "Cliente Seguro",
            fecha: "12/03/2025",
            avatar: getAssetPath("/images/home/avatar.png")
        },
    ],
    updateOpinions: (opinions: Opinion[]) => set({ opinions })
}))
