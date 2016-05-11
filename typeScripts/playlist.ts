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
        // Counter (incremnt) for the next Position in Array, counts 1 up.
        this.nowPlayingIndex += 1;

        // The if condition controlls if we got after the last position of the list. If it's true, it sets the now playing index to 0 (first song) and plays the song.
        if (this.nowPlayingIndex > this.songs.length - 1) {
            this.nowPlayingIndex = 0;
            this.songs[this.nowPlayingIndex].play();
        } 
        // On the other hand it just Plays the song.
        else {
            this.songs[this.nowPlayingIndex].play();
        }

    }

    prev() {
        // Counter (decrement) for the previous Position uîn Array, counts 1 down.
        this.nowPlayingIndex -= 1;

        // It conrtolls if array position = -1 . true = it goes to the last position of the song list and plays the song.
        if (this.nowPlayingIndex === -1) {
            this.nowPlayingIndex = this.songs.length -1;
            this.songs[this.nowPlayingIndex].play();
        } 
        // On the other hand it just Plays the song.
        else {
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