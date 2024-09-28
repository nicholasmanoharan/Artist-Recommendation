// Example artist database
const artistDatabase = {
    "Taylor Swift": ["Ed Sheeran", "Katy Perry", "Selena Gomez"],
    "Drake": ["The Weeknd", "Post Malone", "Kendrick Lamar"],
    "Beyoncé": ["Rihanna", "Alicia Keys", "Solange"],
    "Kanye West": ["Jay-Z", "Kid Cudi", "Travis Scott"],
    "Adele": ["Sam Smith", "Lana Del Rey", "Florence and the Machine"]
};


function getSimilarArtists(artist) {
    return artistDatabase[artist] || ["Sorry, no recommendations available for that artist."];
}


document.getElementById('artistForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const artistInput = document.getElementById('artistInput').value.trim();
    const resultsDiv = document.getElementById('results');


    resultsDiv.innerHTML = '';

    if (artistInput) {
        const recommendedArtists = getSimilarArtists(artistInput);
        
        recommendedArtists.forEach(artist => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            
            const artistName = document.createElement('h2');
            artistName.textContent = artist;
            
            const artistDesc = document.createElement('p');
            artistDesc.textContent = `If you like ${artistInput}, you might enjoy ${artist}!`;
            
            resultItem.appendChild(artistName);
            resultItem.appendChild(artistDesc);
            
            resultsDiv.appendChild(resultItem);
        });
    }
});
