var songList = new Playlist(), songOne = new Song('test1', 'test1', 'test1', true), songTwo = new Song('test2', 'test2', 'test2', false), songThree = new Song('test3', 'test3', 'test3', false);
songList.addSong(songOne);
songList.addSong(songTwo);
songList.addSong(songThree);
var htmlFactory = function (html) {
    return document.createElement(html);
};
var playlistHtml = htmlFactory('ol'), apText = document.getElementsByClassName('ap-text')[0], nextButton = document.getElementsByClassName('js-play-next')[0], titleHtml = htmlFactory('h3'), artistHtml = htmlFactory('h5');
var renderCurrentSong = function () {
    var currentSong = songList.currentSong;
    apText.innerHTML = "";
    titleHtml.innerHTML = currentSong.title;
    artistHtml.innerHTML = currentSong.artist;
    apText.appendChild(titleHtml);
    apText.appendChild(artistHtml);
};
renderCurrentSong();
document.body.getElementsByClassName('playlist-box')[0].appendChild(playlistHtml);
document.body.getElementsByTagName('ol')[0].className = "playlist-list";
songList.renderInElement(playlistHtml);
nextButton.addEventListener('click', function (e) {
    songList.next();
    console.log(songList.currentSong);
    renderCurrentSong();
});
//# sourceMappingURL=app.js.map