import './scss/style.scss';

const { fetchMostPopularByViews } = require('./utilities/fetch-api.js');
const popularNews = await fetchMostPopularByViews();
console.log(popularNews);

const { fetchHomeArchive } = require('./utilities/fetch-api.js');
const homeNews = await fetchHomeArchive();
console.log(homeNews);