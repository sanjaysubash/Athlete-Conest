// Simulated live news data
const newsHeadlines = [
    "Breaking: Team X wins the championship!",
    "New sports facility opens in downtown",
    "Upcoming event: National Sports Day celebrations",
    "Player Y sets a new world record",
    "Sports industry sees growth in the latest quarter"
];

// Function to populate the news ticker
function populateTicker() {
    const ticker = document.getElementById('ticker');
    ticker.innerHTML = '';

    newsHeadlines.forEach(headline => {
        const li = document.createElement('li');
        li.textContent = headline;
        ticker.appendChild(li);
    });
}

// Populate ticker initially
populateTicker();
