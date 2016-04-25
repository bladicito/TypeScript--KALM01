// JavaScript Document
//
// Todos los Scripts escritos por Bladimir Ardiles
// All Scripts on this page were writen by Bladimir Ardiles
// Alle die Skripte auf dieser Seite sind von Bladimir Ardiles geschrieben worden
// Aug 2012
// www.bardiles.com --  bladi_sys@hotmail.com
// Dependencies : Mootools 1.4.5  --- www.mootools.net
//
// 
// Open issue : for internet explorer the StopSpinning method does not work after the song ends as it is using a flahs player (with which we cannot 
// know the time lapsed nor the long of the track. Posible solution would be to set the song time as a part of the 
// tracks object. to be able to know when the track has ended. 
// for the moment, for now we will let it as it is.  

var Player    = function(tracks, container){
      var self					= this;
      this.tracks				= tracks;
      this.tracksCurrent        = tracks.clasicos_parranderos;
      this.body					= document.id(document.body);
      this.container            = document.id(container);
      this.playListContainer    = document.id('playlist');
      this.flashPlayer			= document.id('flash-player');
      this.flasPlayerContainer	= document.id('flash-player-container');
      this.spinners				= $$('.cassette-spinner');
      this.rotationCounter		= 0;
      this.rotationStep			= 18;
      this.rotationSpeed        = 100;
      this.playingTrack			= false;
      this.musicDirectory		= 'http://www.yawarinti.com/templates/yawarinti/music/';
      this.spinnersGif			= 'http://www.yawarinti.com/media/casete-spin.gif';
      this.spinnerPng			= 'http://www.yawarinti.com/media/spinner.png';
      this.musicExtension		= Browser.firefox ? 'ogg' : 'mp3';
      this.albums				= $$('.album');
      this.cassetteFront        = document.id('cassette-front');
};

Player.prototype.rotateSpinersIE = function() {
  var self = this;
  $$('.rolling').each(function(item, index){
      item.set('src',self.spinnersGif);
  });
};

Player.prototype.rotateSpiners = function() { 
  var style   = 'rotate('+this.rotationCounter.toInt()+'deg)';
  this.spinners.each(function(item, index){                                
      item.setStyles({
          '-ms-transform': style,
          '-webkit-transform': style,
          '-moz-transform': style,
          '-o-transform': style,
          'transform': style
      });
  });
  this.rotationCounter += this.rotationStep;

  if (this.rotationCounter == 360) { 
      this.rotationCounter = 0; 
  }
  
  if (this.trackToPlay.currentTime == this.trackToPlay.duration) {
      this.stopSpinning();
      this.playingTrack = false;
      this.playingReset();
  }
};

Player.prototype.startSpinning    = function() {
    this.stoper = this.rotateSpiners.periodical(this.rotationSpeed, this); 
};

Player.prototype.startSpinningIE    = function() {
    this.rotateSpinersIE();  
};

Player.prototype.stopSpinningIE    = function() {
  $$('.rolling').each(function(item, index){
      item.set('src','http://www.yawarinti.com/media/spinner.png');
      
  });
};

Player.prototype.stopSpinning    = function() {    
    clearInterval(this.stoper);
};

Player.prototype.playIE    = function(song) {        
  var songForFlash = this.musicDirectory+song+'.'+this.musicExtension;
  this.flashPlayer.dewset(songForFlash);
  this.flashPlayer.dewplay();
  this.startSpinningIE();
  this.playingTrack = true;
};

Player.prototype.play    = function(song) {            
  if(!this.playingTrack){
      var self = this;
      this.trackToPlay = new Element('audio',{
           src:self.musicDirectory+song+'.'+self.musicExtension, 
           preload:'auto',  
           type:'audio/'+self.musicExtension
      }).inject(this.body);

      this.startSpinning();
      this.trackToPlay.play();
      this.playingTrack = true;
  }
};

Player.prototype.playingIcon    = function(element) {
    if(!this.playingTrack){
       element.set('src','http://www.yawarinti.com/templates/yawarinti/img/playing_20x20.jpg');
    }
};

Player.prototype.playingReset    = function() {
    $$('.play-song-btn').each(function(item, index){
       item.set('src','http://www.yawarinti.com/templates/yawarinti/img/play_20x20.jpg');
    });
};

Player.prototype.init = function() {
    var self = this;
    this.createPlaylist();
    this.records();
    if (Browser.ie6 || Browser.ie7 || Browser.ie8){
        this.flasPlayerContainer.setStyle('display','none');   
    } else {
        if(this.flasPlayerContainer){
          this.flasPlayerContainer.destroy();
        }
    }  
};

Player.prototype.records = function() {
  var self = this;
  this.albums.each(function(item, index){
    item.addEvent('click', function(e){
      if (self.playingTrack){
          self.universalStop();
      }
      self.changeCassette(this);
    });
      
  });
};

Player.prototype.changeCassette = function(obj) {
    this.cassetteFront.setStyle('background', 'url(http://www.yawarinti.com/media/'+obj.get('id')+')');
    var albumInfo = obj.get('id').split('_');
    var newPlayList = albumInfo[0]+'_'+albumInfo[1];
    this.playListContainer.empty();
    this.tracksCurrent = this.tracks[newPlayList];
    this.createPlaylist();
};

Player.prototype.createPlaylist = function(){
    var self = this;
    this.tracksCurrent.each(function(item, index){ 
        var labelText = item.replace(/\_/g, ' ');
        var newHtml =  '<div class="playlist-item-container">';
            newHtml += '<div class="song-name">'+labelText+'</div>';
            newHtml += '<div class="play-song" id="'+item+'">';
            newHtml += '<img src="http://www.yawarinti.com/templates/yawarinti/img/play_20x20.jpg" width="20" height="20" class="play-song-btn"/></div>';
            newHtml += '<div class="stop-song" title="'+item+'">';
            newHtml +='<img src="http://www.yawarinti.com/templates/yawarinti/img/stop_20x20.jpg" width="20" height="20" class="stop-song-btn"/></div>';
            newHtml += '<div class="end-float"></div>';
            newHtml += '</div>';
        var itemPlayList = new Element('li',{
            html: newHtml
        }).inject(self.playListContainer);
    });
    
    $$('.play-song-btn').addEvent('click', function(e){
        if(self.playingTrack){
            self.universalStop();              
        }
        
        e.stop();
        self.playingIcon(this);
        var song = this.getParent('div').get('id');
        
        if (Browser.ie6 || Browser.ie7 || Browser.ie8){
            self.playIE(song);
        } else {
            self.play(song);
        }
    });
    
    $$('.stop-song-btn').addEvent('click', function(e){
        e.stop();
        self.universalStop(); 
    });
};

Player.prototype.universalStop = function(){
     var self = this;
     if (Browser.ie6 || Browser.ie7 || Browser.ie8){
            self.stopSpinningIE();
            self.flashPlayer.dewstop();
      } else {
          self.trackToPlay.destroy();
          self.stopSpinning();
      }
		  self.playingReset();
		  self.playingTrack = false;
};