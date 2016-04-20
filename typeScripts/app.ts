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

