document.getElementById('startButton').addEventListener('click', function() {
    const titleScreen = document.getElementById('titleScreen');
    const mainContent = document.getElementById('mainContent');

    titleScreen.style.opacity = '0';
    setTimeout(() => {
        titleScreen.style.display = 'none';

        mainContent.classList.remove('hidden');
        setTimeout(() => {
            mainContent.classList.add('show');
        }, 50);
    }, 500);
});

const artistDatabase = {
    "Taylor Swift": ["Ed Sheeran", "Katy Perry", "Selena Gomez", "Halsey", "Shawn Mendes"],
    "Drake": ["The Weeknd", "Post Malone", "Kendrick Lamar", "Travis Scott", "Lil Wayne"],
    "Beyoncé": ["Rihanna", "Alicia Keys", "Solange", "Janelle Monáe", "SZA"],
    "Kanye West": ["Jay-Z", "Kid Cudi", "Travis Scott", "Pusha T", "Tyler, the Creator"],
    "Adele": ["Sam Smith", "Lana Del Rey", "Florence and the Machine", "Jessie J", "Norah Jones"],
    "Billie Eilish": ["Finneas", "Halsey", "Lorde", "Clairo", "King Princess"],
    "Bruno Mars": ["Anderson .Paak", "The Weeknd", "Pharrell Williams", "Justin Timberlake", "Ne-Yo"],
    "Lady Gaga": ["Madonna", "Katy Perry", "Kesha", "Britney Spears", "Christina Aguilera"],
    "Ed Sheeran": ["James Bay", "Shawn Mendes", "Lewis Capaldi", "Charlie Puth", "Vance Joy"],
    "Ariana Grande": ["Demi Lovato", "Selena Gomez", "Miley Cyrus", "Camila Cabello", "Tove Lo"],
    "The Weeknd": ["Drake", "Bruno Mars", "Travis Scott", "Khalid", "Miguel"],
    "Post Malone": ["Juice WRLD", "Lil Uzi Vert", "21 Savage", "Swae Lee", "Ty Dolla $ign"],
    "Rihanna": ["Beyoncé", "Nicki Minaj", "SZA", "Doja Cat", "Kehlani"],
    "Eminem": ["Dr. Dre", "50 Cent", "Snoop Dogg", "Nas", "Logic"],
    "Justin Bieber": ["Shawn Mendes", "ZAYN", "Charlie Puth", "Troye Sivan", "Austin Mahone"],
    "Shawn Mendes": ["Ed Sheeran", "Justin Bieber", "Charlie Puth", "James Bay", "Niall Horan"],
    "Lana Del Rey": ["Adele", "Florence and the Machine", "Hozier", "Lorde", "Banks"],
    "Halsey": ["Billie Eilish", "Lorde", "Tove Lo", "Bebe Rexha", "Ellie Goulding"],
    "Kendrick Lamar": ["J. Cole", "Travis Scott", "Drake", "Childish Gambino", "Big Sean"],
    "J. Cole": ["Kendrick Lamar", "Drake", "Wale", "Big Sean", "Logic"],
    "Lorde": ["Billie Eilish", "Halsey", "Grimes", "Tove Lo", "Banks"],
    "Travis Scott": ["Post Malone", "Kendrick Lamar", "Lil Uzi Vert", "Drake", "21 Savage"],
    "Childish Gambino": ["Chance the Rapper", "Kanye West", "Tyler, the Creator", "Frank Ocean", "Anderson .Paak"],
    "SZA": ["Rihanna", "Kehlani", "Doja Cat", "Jhené Aiko", "Ari Lennox"],
    "Sam Smith": ["Adele", "James Arthur", "Jessie J", "Lewis Capaldi", "Tom Odell"],
    "Doja Cat": ["Nicki Minaj", "Megan Thee Stallion", "Cardi B", "SZA", "Saweetie"],
    "Nicki Minaj": ["Cardi B", "Doja Cat", "Megan Thee Stallion", "Lil Kim", "Missy Elliott"],
    "Megan Thee Stallion": ["Cardi B", "Nicki Minaj", "Doja Cat", "Saweetie", "Lizzo"],
    "Cardi B": ["Nicki Minaj", "Doja Cat", "Megan Thee Stallion", "Saweetie", "Lizzo"],
    "Lil Nas X": ["Doja Cat", "Megan Thee Stallion", "Travis Scott", "Post Malone", "Kanye West"],
    "Frank Ocean": ["Childish Gambino", "The Weeknd", "Solange", "Tyler, the Creator", "Miguel"],
    "Khalid": ["The Weeknd", "Bruno Mars", "H.E.R.", "SZA", "Kehlani"],
    "Kehlani": ["H.E.R.", "SZA", "Jhené Aiko", "Rihanna", "Doja Cat"],
    "Tame Impala": ["MGMT", "Arctic Monkeys", "The 1975", "Phoenix", "Foster the People"],
    "The 1975": ["Arctic Monkeys", "Tame Impala", "LANY", "The Neighbourhood", "COIN"],
    "Arctic Monkeys": ["The Strokes", "The 1975", "Tame Impala", "Franz Ferdinand", "Vampire Weekend"],
    "Vampire Weekend": ["Arctic Monkeys", "The Strokes", "Phoenix", "MGMT", "Foster the People"],
    "The Strokes": ["Arctic Monkeys", "Vampire Weekend", "Franz Ferdinand", "The Killers", "The White Stripes"],
    "The Killers": ["Franz Ferdinand", "The Strokes", "Vampire Weekend", "MGMT", "Foster the People"],
    "MGMT": ["Tame Impala", "The 1975", "Vampire Weekend", "The Strokes", "Passion Pit"],
    "Phoenix": ["Tame Impala", "Vampire Weekend", "The Strokes", "MGMT", "Foster the People"],
    "Foster the People": ["Tame Impala", "The 1975", "MGMT", "Vampire Weekend", "Phoenix"],
    "Hozier": ["Lana Del Rey", "Florence and the Machine", "Father John Misty", "Ben Howard", "Mumford & Sons"],
    "Florence and the Machine": ["Lana Del Rey", "Hozier", "Adele", "Banks", "London Grammar"],
    "Bon Iver": ["Sufjan Stevens", "Fleet Foxes", "James Blake", "The National", "Iron & Wine"],
    "Sufjan Stevens": ["Bon Iver", "Fleet Foxes", "Iron & Wine", "James Blake", "The National"],
    "Fleet Foxes": ["Bon Iver", "Sufjan Stevens", "Iron & Wine", "The National", "The Decemberists"],
    "The National": ["Bon Iver", "Sufjan Stevens", "Fleet Foxes", "Iron & Wine", "Arcade Fire"],
    "Arcade Fire": ["The National", "Bon Iver", "Sufjan Stevens", "Modest Mouse", "Vampire Weekend"],
    "Mumford & Sons": ["The Lumineers", "Hozier", "Of Monsters and Men", "Ben Howard", "The Avett Brothers"],
    "The Lumineers": ["Mumford & Sons", "Of Monsters and Men", "Hozier", "Ben Howard", "The Avett Brothers"],
    "Of Monsters and Men": ["Mumford & Sons", "The Lumineers", "Hozier", "Ben Howard", "The Head and the Heart"],
    "The Head and the Heart": ["The Lumineers", "Of Monsters and Men", "Hozier", "Mumford & Sons", "Ben Howard"],
    "Ben Howard": ["Hozier", "The Lumineers", "Of Monsters and Men", "Mumford & Sons", "James Vincent McMorrow"],
    "James Blake": ["Bon Iver", "Sufjan Stevens", "Sampha", "The xx", "Jamie xx"],
    "The xx": ["James Blake", "Sampha", "Jamie xx", "FKA twigs", "Blood Orange"],
    "Blood Orange": ["Solange", "The xx", "FKA twigs", "Sampha", "Dev Hynes"],
    "Solange": ["Beyoncé", "Frank Ocean", "Blood Orange", "FKA twigs", "Janelle Monáe"],
    "Janelle Monáe": ["Solange", "Frank Ocean", "Blood Orange", "FKA twigs", "Beyoncé"],
    "FKA twigs": ["The xx", "Blood Orange", "Solange", "Janelle Monáe", "Grimes"],
    "Grimes": ["FKA twigs", "The xx", "Blood Orange", "Lorde", "Banks"],
    "Banks": ["Lorde", "FKA twigs", "The xx", "Grimes", "Tove Lo"]
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
            const artistElement = document.createElement('div');
            artistElement.classList.add('result-item');
            artistElement.innerHTML = `<h2>${artist}</h2>`;
            resultsDiv.appendChild(artistElement);
        });
    }
});
