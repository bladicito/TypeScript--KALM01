class Playlist {
    songs:Song[];
    nowPlayingIndex:number;

    constructor() {
        this.songs = [];
        this.nowPlayingIndex = 0;
    }

    addSong(song:Song) {
        this.songs.push(song);
    }

    play() {
        this.songs[this.nowPlayingIndex].play();
    }

    stop() {
        this.songs[this.nowPlayingIndex].stop();
    }

    get currentSong() {
        return this.songs[this.nowPlayingIndex];
    }

    next() {
        this.nowPlayingIndex + 1;

        if (this.nowPlayingIndex > this.songs.length) {
            this.nowPlayingIndex = 0;
            this.songs[this.nowPlayingIndex].play();
        } else {
            this.songs[this.nowPlayingIndex].play();
        }

    }

    renderInElement(list:HTMLElement) {
        list.innerHTML = "";


        /*
         for (var x = 0; x < this.songs.length ; x++) {
         list.innerHTML += this.songs[x].toHtml();
         }
         */


        this.songs.map(function (currentItem) {
            list.innerHTML += currentItem.toHtml();
        });

    }


}