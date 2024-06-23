import { getAnimeInfo } from '../../services/apicalls'
export async function loader({ params }) {
    const animeInfo = await getAnimeInfo(params.animeid);
    return { animeInfo }
}