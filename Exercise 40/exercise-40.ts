function makeAlbum(artist, album_title, numTracks = null) {
    return {
        artist,
        album_title,
        tracks: numTracks
    };
}

let album1 = makeAlbum("The Beatles", "Abbey Road", 17);
let album2 = makeAlbum("Pink Floyd", "The Dark Side of the Moon");
let album3 = makeAlbum("Led Zeppelin", "IV", 8);

console.log(album1);
console.log(album2);
console.log(album3);