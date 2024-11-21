import sectionsData from '../json/sections.json';

const { removeArticle } = require('./remove-article.js');
const { fetchHomeTopStories } = require('./fetch-api.js');
const archiveNews = await fetchHomeTopStories();

const archiveNewsContainer = document.querySelector('#archive-news-container');

function truncate(text, length) {
    if (text.length > length) {
        return text.slice(0, length) + '...';
    }

    return text;
}

archiveNews.results.forEach(article => {
    for (var i = 0; i < localStorage.length; i++) {
        if (article.title == localStorage.key(i)) {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `
            <img src="img/placeholder.png" alt="article cover" class="news__article__cover">
            <section>
                <h2 class="news__article__headline">${article.title}</h2>
                <p class="news__article__text">${truncate(article.abstract, 90)}</p>
            </section>`;
            articleElement.classList.add('news__article');
            archiveNewsContainer.append(articleElement);

            articleElement.addEventListener('click', () => {
                window.open(article.url);
            });

            const swipeAction = document.createElement('div');
            swipeAction.className = 'swipe-action';

            const trashcanIcon = document.createElement('img');
            trashcanIcon.src = '/icon/trashcan-white.svg';
            trashcanIcon.alt = 'Bookmark';
            trashcanIcon.style.width = '2rem';
            trashcanIcon.style.height = '2rem';

            swipeAction.appendChild(trashcanIcon);
            articleElement.appendChild(swipeAction);

            articleElement.appendChild(swipeAction);


            removeArticle(articleElement, article.title);
        }
    }

});