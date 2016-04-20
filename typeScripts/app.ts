<<<<<<< HEAD
var songList = new Playlist(),
    songOne = new Song('test', 'test', 'test', false),
    songTwo = new Song('test', 'test', 'test', false),
    songThree = new Song('test', 'test', 'test', false);


songList.addSong(songOne);
songList.addSong(songTwo);
songList.addSong(songThree);

var playlist = document.getElementsByClassName('playlist')[0];

var playlistHtml = document.createElement('ul');

document.body.appendChild(playlistHtml);

songList.renderInElement(playlistHtml);

=======



var songList = new Playlist(),
    song1 = new Song('test title', 'test artist', 'test duration', false)
;

console.log(songList);
console.log(song1);
>>>>>>> 1fb1c075787d1ba9127cdeaea99076bf834b47b9
