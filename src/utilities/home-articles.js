import sectionsData from '../json/sections.json';

const { hideDisabledCategories } = require('./hide-categories.js');
const { saveArticle } = require('./save-article.js');
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
        <summary class="news__category darkmode-white-text">
            <img src="icon/newsify-logo.svg" alt="logo" class="news__logo">
            ${category}
        </summary>`;

    matchingArticles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <img src="img/placeholder.png" alt="article cover" class="news__article__cover">
            <section>
                <h2 class="news__article__headline darkmode-white-text">${article.title}</h2>
                <p class="news__article__text darkmode-grey-text">${truncate(article.abstract, 90)}</p>
            </section>`;
        articleElement.classList.add('news__article');
        detailsElement.append(articleElement);

        articleElement.addEventListener('click', () => {
            window.open(article.url);
        });

        const swipeAction = document.createElement('div');
        swipeAction.className = 'swipe-action-add';

        const bookmarkIcon = document.createElement('img');
        bookmarkIcon.src = 'icon/bookmark-white.svg';
        bookmarkIcon.alt = 'Bookmark';
        bookmarkIcon.style.width = '2rem';
        bookmarkIcon.style.height = '2rem';

        swipeAction.appendChild(bookmarkIcon);
        articleElement.appendChild(swipeAction);

        articleElement.appendChild(swipeAction);


        saveArticle(articleElement, article.title);

    });
    
    hideDisabledCategories(category, detailsElement);
    detailsElement.classList.add('news');
    homeNewsContainer.append(detailsElement);

});