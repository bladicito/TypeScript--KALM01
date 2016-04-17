class Song  {
    constructor(
        public title: string,
        public artist: string,
        public duration: string,
        public isPlaying: boolean = false) {
        
    }

    play() {
        this.isPlaying = true;
    }

    stop() {
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