import { ANIME } from "@consumet/extensions"

const gogoanime = new ANIME.Gogoanime();

async function getAnimeInfo(id) {
    const results = await gogoanime.fetchAnimeInfo(id);
    return results;
}
async function getTopAnimeAiring(page) {
    const results = await gogoanime.fetchTopAiring(page ?? 1);
    const animeList = await Promise.all(results.results.map(async anime => {
        const animeInfo = await getAnimeInfo(anime.id);
        return animeInfo;
    }));

    return animeList ?? [];
}

async function getRecentEpisodes(page) {
    const results = await gogoanime.fetchRecentEpisodes(page ?? 1);

    const animeList = await Promise.all(results.results.map(async anime => {
        const animeInfo = await getAnimeInfo(anime.id);
        return animeInfo;
    }));

    return animeList ?? [];
}
async function getAnimeList() {
    const results = await gogoanime.fetchAnimeList();
    return results;
}
async function getSearchedAnime(searchValue, page) {
    const results = await gogoanime.search(searchValue, page ?? 1);
    return results;
}

async function getEpisodeServers(episodeId) {
    const results = await gogoanime.fetchEpisodeServers(episodeId);
    return results;
}

async function getEpisodeSources({ episodeId }) {
    const results = await gogoanime.fetchEpisodeSources(episodeId);
    return results;
}

export {
    getTopAnimeAiring,
    getRecentEpisodes,
    getAnimeInfo,
    getAnimeList,
    getSearchedAnime,
    getEpisodeServers,
    getEpisodeSources
}