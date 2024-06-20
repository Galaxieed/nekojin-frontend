import { ANIME } from "@consumet/extensions"

const gogoanime = new ANIME.Gogoanime();

async function getTopAnimeAiring() {
    const results = await gogoanime.fetchTopAiring();
    return results;
}

async function getRecentEpisodes() {
    const results = await gogoanime.fetchRecentEpisodes();
    return results;
}

async function getAnimeInfo(id) {
    const results = await gogoanime.fetchAnimeInfo(id);
    return results;
}

async function getAnimeList() {
    const results = await gogoanime.fetchAnimeList();
    return results;
}

async function getSearchedAnime({ searchValue }) {
    const results = await gogoanime.search(searchValue);
    return results;
}

async function getEpisodeServers({ episodeId }) {
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