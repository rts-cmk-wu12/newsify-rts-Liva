import sectionsData from '../json/sections.json';

const { fetchHomeTopStories } = require('./fetch-api.js');
const homeNews = await fetchHomeTopStories();

const newsSections = [...new Set(homeNews.results.map(sections => sections.section))];

const homeNewsContainer = document.querySelector('#home-news-container');

function truncate(text, length) {
    if (text.length > length) {
    return text.slice(0, length) + '...';
}

return text;
}

newsSections.forEach(category => {
    const matchingArticles = homeNews.results.filter(article => article.section === category);
    const detailsElement = document.createElement('details');
    detailsElement.innerHTML = `
        <summary class="news__category">
            <img src="icon/newsify-logo.svg" alt="logo" class="news__logo">
            ${category}
        </summary>`;
    
    matchingArticles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <img src="img/placeholder.png" alt="article cover" class="news__article__cover">
            <section>
                <h2 class="news__article__headline">${article.title}</h2>
                <p class="news__article__text">${truncate(article.abstract, 90)}</p>
            </section>`;
        articleElement.classList.add('news__article');
        detailsElement.append(articleElement);
        
        articleElement.addEventListener('click', () => {
            window.open(article.url);
        });
    });

    detailsElement.classList.add('news');
    homeNewsContainer.append(detailsElement);

});