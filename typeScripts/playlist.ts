class Playlist {
    songs: Song[];
    nowPlayingIndex: number;

    constructor () {
        this.songs = [];
        this.nowPlayingIndex = 0;
    }

    addSong(song:Song) {

    }

    play() {

    }

    stop() {

    }

    get currentSong() {
        return this.songs[this.nowPlayingIndex];
    }

    next() {

    }

    renderInElement(list: HTMLElement) {
        list.innerHTML = "";


        /*
        for (var x = 0; x < this.songs.length ; x++) {
            list.innerHTML += this.songs[x].toHtml();
        }
        */



        this.songs.map(function(currentItem) {
            list.innerHTML += currentItem.toHtml();
        });

    }





}