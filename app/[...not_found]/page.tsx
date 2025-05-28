import { notFound } from "next/navigation";

const NotFound = () => {
    notFound()
}

export async function generateStaticParams() {
    const paramsToGenerate = [
        { not_found: ['empresas'] },
        { not_found: ['404', 'not-found'] }
    ];

    return paramsToGenerate;

}


export default NotFound;
