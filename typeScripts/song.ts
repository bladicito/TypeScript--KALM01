var helpers = new Helpers();

class Song  {
    constructor(
        public title    : string,
        public artist   : string,
        public duration : string,
        public isPlaying   : boolean = false) {
        
    }

    play() {
        
        
        this.isPlaying = true;
        var musicFileExtension = helpers.isFirefox() ? '.ogg' : '.mp3';
        var musicFilesDirectory = './inc/';
        var pathToSong = musicFilesDirectory + this.title + musicFileExtension;
        var audioTag = document.createElement('audio');
        audioTag.setAttribute('src', pathToSong);
        audioTag.className = 'js-audiotag';
        document.body.appendChild(audioTag);
        audioTag.play();
    }

    stop() {
        var audioTag = document.getElementsByClassName('js-audiotag')[0];
        document.body.removeChild(audioTag);
        this.isPlaying = false;
    }

    toHtml () {
        var currentClass = this.isPlaying ? 'current' : '';

        return `<li class="currentClass">
                    ${this.title} - ${this.artist}
                    <span class="duration">${this.duration}</span>
               </li>`;
    }
}