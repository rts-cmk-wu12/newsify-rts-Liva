const API_KEY = 'DbhMGwHfGXAX7nagpwULKzKGGotHPTx4';

const API_URL = 'https://api.nytimes.com/svc/';

const endpoints = {
    homeArchive: 'archive/v1/',
    mostPopularByViews: 'mostpopular/v2/viewed/'
}

async function fetchMostPopularByViews(days = 1) {
    const url = new URL(`${days}.json`, API_URL + endpoints.mostPopularByViews);
    url.searchParams.set('api-key', API_KEY);
    const response = await fetch(url);
    const data = await response.json();

    return data
}

async function fetchHomeArchive(year = 2024, month = 1) {
    const url = new URL(`${year}/${month}.json`, API_URL + endpoints.homeArchive);
    url.searchParams.set('api-key', API_KEY);
    const response = await fetch(url);
    const data = await response.json();

    return data
}

module.exports = {
    fetchHomeArchive,
    fetchMostPopularByViews
}