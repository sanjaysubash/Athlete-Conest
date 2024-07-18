document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
});

async function fetchNews() {
    try {
        const response = await fetch('/news');
        const data = await response.json();

        if (data.articles) {
            const ticker = document.getElementById('ticker');
            const newsArticles = document.getElementById('news-articles');

            data.articles.forEach((article, index) => {
                // Populate news ticker
                if (index < 5) { // Limit ticker items to the first 5 articles
                    const li = document.createElement('li');
                    li.innerText = article.title;
                    ticker.appendChild(li);
                }

                // Populate news articles
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <img src="${article.urlToImage || '../ASSETS/default.jpg'}" alt="News Image">
                    <p>${article.description || 'No description available.'}</p>
                `;
                newsArticles.appendChild(articleElement);
            });
        } else {
            console.error('No articles found');
        }
    } catch (err) {
        console.error('Error fetching news:', err);
    }
}
