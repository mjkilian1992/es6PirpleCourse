// Song properties
var songName = 'Apollo I: The Writing Writer';
var songLengthSeconds = 316;
var genre = 'Rock';

// Artist properties
var artistName = 'Coheed and Cambria';
var numberOfAlbums = 9;
var active = true;
var memberNames = [
    'Claudio Sanchez',
    'Travis Stever',
    'Josh Eppard',
    'Zach Cooper',
];

// Album - done as an object
var album = {
    title: "Good Apollo I'm Burning Start IV Volume I: From Fear Through The Eyes Of Madness",
    songs: [
        {
            title: "Keeping the blade",
            lengthSecond: 129,
        },
        // Have kept this short, but could model the list of songs in order
        // Could use a constructor function for Songs
    ]
};

// Log song properties as variables
console.log(songName);
console.log(songLengthSeconds);
console.log(genre);

// Log artist properties
console.log(artistName);
console.log(numberOfAlbums);
console.log(active);
console.log(memberNames);

// Log album
console.log(album);
