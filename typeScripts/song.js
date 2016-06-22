var Song = (function () {
	function Song(title, artist, duration, isPlaying) {
		if (isPlaying === void 0) {
			isPlaying = false;
		}
		this.title = title;
		this.artist = artist;
		this.duration = duration;
		this.isPlaying = isPlaying;
	}

	Song.prototype.play = function () {
		this.isPlaying = true;
	};
	Song.prototype.stop = function () {
		this.isPlaying = false;
	};
	Song.prototype.toHtml = function () {
		var currentClass = this.isPlaying ? 'current' : '';
		return "<li class=\"currentClass\">\n                    " + this.title + " - " + this.artist + "\n                    <span class=\"duration\">" + this.duration + "</span>\n               </li>";
	};
	return Song;
})();
//# sourceMappingURL=song.js.map