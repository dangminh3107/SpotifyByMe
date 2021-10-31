$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'MY_PLAYER'

const root = $(':root')
const playlist = $('.app-content-body-list-songs');
const thumbImage = $('.app-play-bar-song-thumb');
const playBtn = $('.btn-toggle-play');
const playBtnPlaylist = $('.btn-content-playbar')
const playBtnHeader = $('.btn-play-header')
const playbar = $('.app-play-bar')
const playbarSongName = $('.app-play-bar-song-name')
const playbarAuthor = $('.app-play-bar-song-author')
const progressBar = $('#progress')
const playBarVolume = $('.app-play-bar-volume')
const volumeBtn = $('.app-play-bar-volume-group')
const volumeBar = $('#volume')
const timeStart = $('.control-time-lapse')
const timeEnd = $('.control-time-duration')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const reactHeartBtn = $('.app-content-body-react-album')
const btnViewImgThumb = $('.app-play-bar-song-view')
const imgViewLarge = $('.app-install')
const imgViewBox = $('.app-install-image')
const iconViewImgThumbUp = $('.app-play-bar-song-view-icon-up')
const iconViewImgThumbDown = $('.app-play-bar-song-view-icon-down')
const songItem = $('.app-content-body-list-item')
const appContent = $('.app-content')
const headerPlaylist = $('.app-content-body-list')
const subHeader = $('.app-content-sub-header')
const subHeaderOverlay = $('.app-content-sub-header-overlay')
const subHeaderBottom = $('.app-content-sub-header-bottom')
const playBoxSubHeader = $('.app-content-sub-header-play')
const appContentBody = $('.app-content-body')
const appContentBodyPlaybar = $('.app-content-body .app-content-body-playbar')
const appContentBodyList = $('.app-content-body .app-content-body-list')


const playList = {
    currentIndex: 0,
    isPlaying: false,
    isVolumeOn: false,
    isRandom: false,
    isRepeat: false,
    isReacted: false,
    volume: 0.2,
    durationPlayed: 0,
    totalDuration: 0,
    idSongPlayed: 0,
    songsPlayed: [],
    listSongs: [],
    prevVolume: 0,
    timeTotal: '00:00',
    timeSongPlayed: '00:00',
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            id: 1,
            name: 'Bad Habits',
            artist: 'Ed Sheeran',
            album: 'Bad Habits',
            path: './assets/music/mp3/song_1.mp3',
            image: './assets/music/img/song_1.jpg',
            imageLarge: './assets/music/img_big/song_1.jpg',
            timeTotal: ''
        },
        {
            id: 2,
            name: 'STAY (with Justin Bieber)',
            artist: 'The Kid LAROI, Justin Bieber',
            album: 'STAY (with Justin Bieber)',
            path: './assets/music/mp3/song_2.mp3',
            image: './assets/music/img/song_2.jpg',
            imageLarge: './assets/music/img_big/song_2.jpg',
            timeTotal: ''
        },
        {
            id: 3,
            name: 'leviating (feat. DaBaby)',
            artist: 'Dua Lipa, DaBaby',
            album: 'Future Nostalgia',
            path: './assets/music/mp3/song_3.mp3',
            image: './assets/music/img/song_3.jpg',
            imageLarge: './assets/music/img_big/song_3.jpg',
            timeTotal: ''
        },
        {
            id: 4,
            name: 'MONTERO (Call Me By Your Name)',
            artist: 'Lil Nas X',
            album: 'MONTERO',
            path: './assets/music/mp3/song_4.mp3',
            image: './assets/music/img/song_4.jpg',
            imageLarge: './assets/music/img_big/song_4.jpg',
            timeTotal: ''
        },
        {
            id: 5,
            name: 'Kiss Me More (feat. SZA)',
            artist: 'Doja Cat, SZA',
            album: 'Kiss Me More (feat. SZA)',
            path: './assets/music/mp3/song_5.mp3',
            image: './assets/music/img/song_5.jpg',
            imageLarge: './assets/music/img_big/song_5.jpg',
            timeTotal: ''
        },
        {
            id: 6,
            name: 'Higher Love',
            artist: 'Kygo, Whitney Houston',
            album: 'Golden Hour',
            path: './assets/music/mp3/song_6.mp3',
            image: './assets/music/img/song_6.jpg',
            imageLarge: './assets/music/img_big/song_6.jpg',
            timeTotal: ''
        },
        {
            id: 6,
            name: 'Higher Love',
            artist: 'Kygo, Whitney Houston',
            album: 'Golden Hour',
            path: './assets/music/mp3/song_6.mp3',
            image: './assets/music/img/song_6.jpg',
            imageLarge: './assets/music/img_big/song_6.jpg',
            timeTotal: ''
        },
        {
            id: 6,
            name: 'Higher Love',
            artist: 'Kygo, Whitney Houston',
            album: 'Golden Hour',
            path: './assets/music/mp3/song_6.mp3',
            image: './assets/music/img/song_6.jpg',
            imageLarge: './assets/music/img_big/song_6.jpg',
            timeTotal: ''
        },
        {
            id: 6,
            name: 'Higher Love',
            artist: 'Kygo, Whitney Houston',
            album: 'Golden Hour',
            path: './assets/music/mp3/song_6.mp3',
            image: './assets/music/img/song_6.jpg',
            imageLarge: './assets/music/img_big/song_6.jpg',
            timeTotal: ''
        },
        {
            id: 6,
            name: 'Higher Love',
            artist: 'Kygo, Whitney Houston',
            album: 'Golden Hour',
            path: './assets/music/mp3/song_6.mp3',
            image: './assets/music/img/song_6.jpg',
            imageLarge: './assets/music/img_big/song_6.jpg',
            timeTotal: ''
        },
        {
            id: 6,
            name: 'Higher Love',
            artist: 'Kygo, Whitney Houston',
            album: 'Golden Hour',
            path: './assets/music/mp3/song_6.mp3',
            image: './assets/music/img/song_6.jpg',
            imageLarge: './assets/music/img_big/song_6.jpg',
            timeTotal: ''
        },
        {
            id: 6,
            name: 'Higher Love',
            artist: 'Kygo, Whitney Houston',
            album: 'Golden Hour',
            path: './assets/music/mp3/song_6.mp3',
            image: './assets/music/img/song_6.jpg',
            imageLarge: './assets/music/img_big/song_6.jpg',
            timeTotal: ''
        },
        {
            id: 6,
            name: 'Higher Love',
            artist: 'Kygo, Whitney Houston',
            album: 'Golden Hour',
            path: './assets/music/mp3/song_6.mp3',
            image: './assets/music/img/song_6.jpg',
            imageLarge: './assets/music/img_big/song_6.jpg',
            timeTotal: ''
        },
        {
            id: 6,
            name: 'Higher Love',
            artist: 'Kygo, Whitney Houston',
            album: 'Golden Hour',
            path: './assets/music/mp3/song_6.mp3',
            image: './assets/music/img/song_6.jpg',
            imageLarge: './assets/music/img_big/song_6.jpg',
            timeTotal: ''
        },
        {
            id: 6,
            name: 'Higher Love',
            artist: 'Kygo, Whitney Houston',
            album: 'Golden Hour',
            path: './assets/music/mp3/song_6.mp3',
            image: './assets/music/img/song_6.jpg',
            imageLarge: './assets/music/img_big/song_6.jpg',
            timeTotal: ''
        }
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },

    fetchDuration: function(path) {
        return new Promise((resolve) => {
          const audio = new Audio();
          audio.src = path;
          audio.onloadedmetadata = () => resolve(audio.duration);
        })
      },
      
    fetchDurationList: async function(paths) {
        // Create an array of promises and wait until all have completed
        const durations = await Promise.all(paths.map((path) => this.fetchDuration(path)));
        return durations;
    },

    render: function() {
        let pathList = []
        this.songs.forEach((song) => {
            pathList.push(song.path);
        })
        this.fetchDurationList(pathList).then((durationList) => {
            for (let i = 0; i < durationList.length; i++) {
                durationList[i] = this.secondToTime(durationList[i])
                this.songs[i].timeTotal = durationList[i];
            }
            const htmls = this.songs.map((song,index) => {
                return `
                    <div class="app-content-body-list-item ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                        <span class="app-content-body-list-item-number">${song.id}</span>
                        <div class="app-content-body-list-item-song">
                            <div class="app-content-body-list-item-song-avavtar">
                                <img src="${song.image}" alt="" class="app-content-body-list-item-song-avavtar-img">
                            </div>
                            <div class="app-content-body-list-item-song-info">
                                <span class="app-content-body-list-item-song-name">${song.name}</span>
                                <span class="app-content-body-list-item-song-artist">${song.artist}</span>
                            </div>
                        </div>
                        <span class="app-content-body-list-item-album">
                            <a href="" class="app-content-body-list-item-album-link">${song.album}</a>
                        </span>
                        <span class="app-content-body-list-item-date-added">Aug 19, 2021</span>
                        <span class="app-content-body-list-item-duration">${durationList[index]}</span>
                    </div>
                `
            })
            playlist.innerHTML = htmls.join('')
            this.listSongs = $$('.app-content-body-list-item');
        })
    },
    
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },

    handleEvents: function () {
        const _this = this;

        function Play() {
            if (_this.isRandom) {
                if (_this.songsPlayed.length === 0){ 
                    _this.songsPlayed.push(_this.currentIndex + 1)
                }
            }
            if(_this.isPlaying){
                audio.pause();
            }
            else {
                _this.loadTimeSong(_this.timeSongPlayed);
                _this.setConfig('timeTotal', _this.timeTotal)
                if (_this.durationPlayed > 0) {
                    audio.currentTime = _this.durationPlayed;
                    audio.play();
                }
                else {
                    audio.play();
                }
            }  
        }

        //Rotate thumb image when playing
        const thumbAnimate = thumbImage.animate([
            {
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        thumbAnimate.pause();

        //Event when play audio
        playBtn.onclick = Play;
        playBtnPlaylist.onclick = Play;
        playBtnHeader.onclick = Play;

        //Next button
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            }
            else {
                _this.nextSong();
            }
            audio.play();
            _this.setConfig('idSongPlayed', _this.currentIndex);
        }

        //Previous button
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            }
            else {
                _this.previousSong();
            }
            audio.play();
            _this.setConfig('idSongPlayed', _this.currentIndex);
        }

        //Random button
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom;
            _this.setConfig('isRandom', _this.isRandom);
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        //Repeat button
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat);
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        //Update volume when click volume button
        volumeBtn.onclick = function() {
            if (playBarVolume.classList.contains('turn-off')) {
                playBarVolume.classList.remove('turn-off');
                audio.volume = _this.prevVolume;
                _this.volume = _this.prevVolume;
                _this.isVolumeOn = true;
            }
            else {
                playBarVolume.classList.add('turn-off');
                audio.volume = 0;
                _this.prevVolume = _this.volume;
                _this.volume = 0;
                _this.isVolumeOn = false;
            }
            volumeBar.value = _this.volume*100;
            volumeBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + _this.volume*100 + '%, #b3b3b3 ' + _this.volume*100 + '%, #b3b3b3 100%)'
            _this.setConfig('prevVolume', _this.prevVolume);
            _this.setConfig('isVolumeOn',_this.isVolumeOn)
        }
        
        //Update volume when adjust volume bar
        volumeBar.oninput = function(e) {
            if (e.target.value === '0') {
                playBarVolume.classList.add('turn-off')
                _this.isVolumeOn = false;
            }
            else {
                playBarVolume.classList.remove('turn-off')
                _this.isVolumeOn = true;
            }
            _this.volume = Number(e.target.value / 100);
            audio.volume = _this.volume;
            volumeBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + e.target.value + '%, #b3b3b3 ' + e.target.value + '%, #b3b3b3 100%)'
            _this.setConfig('volume', _this.volume);
        }

        //Play song
        audio.onplay = function() {
            _this.listSongs.forEach(function(value, index){
                if ((value.classList.contains('active')) && (index !== _this.currentIndex)){
                    value.classList.remove('active');
                }
            })
            _this.listSongs[_this.currentIndex].classList.add('active');
            audio.volume = _this.volume;
            audio.ontimeupdate = function() {
                if (audio.duration){
                    //Save total duration
                    _this.totalDuration = audio.duration;
                    _this.setConfig('totalDuration', _this.totalDuration);

                    //Save duration played
                    _this.durationPlayed = audio.currentTime;
                    _this.setConfig('durationPlayed', audio.currentTime);

                    //Save time song played
                    var timePlayed = _this.secondToTime(audio.currentTime)
                    timeStart.innerText = timePlayed;
                    _this.setConfig('timeSongPlayed', timePlayed)

                    //display prgress bar
                    const progressPercent = Math.round(audio.currentTime / audio.duration * 100)
                    progressBar.value = progressPercent;
                    progressBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + progressPercent + '%, #d3d3d3 ' + progressPercent + '%, #d3d3d3 100%)'
                }
            }
            _this.isPlaying = true;
            playbar.classList.add('playing')
            playBtnPlaylist.classList.add('playing')
            playBtnHeader.classList.add('playing')
            thumbAnimate.play();
        }

        //Pause song
        audio.onpause = function() {
            _this.isPlaying = false;
            playbar.classList.remove('playing');
            playBtnPlaylist.classList.remove('playing');
            playBtnHeader.classList.remove('playing')
            thumbAnimate.pause();
        }

        //Check repeat
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            }
            else {
                nextBtn.click()
            }
        }

        //Progress bar: When song played
        progressBar.oninput = function(e) {
            //when progress bar changed
            audio.ontimeupdate = function() {
                if (audio.duration){
                    progressBar.value = e.target.value;
                    progressBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + e.target.value + '%, #d3d3d3 ' + e.target.value + '%, #d3d3d3 100%)'
                }
            }
            audio.pause();
            setTimeout(() => {
                audio.play();
            }, 500)
            const seekTime = e.target.value * audio.duration / 100;
            audio.currentTime = seekTime;
        }

        //When click on playlist
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.app-content-body-list-item:not(.active)');
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index);
                _this.setConfig('idSongPlayed', _this.currentIndex)
                _this.loadCurrentSong();
                audio.play();
            }
        }

        //React playlist
        reactHeartBtn.onclick = function() {
            _this.isReacted = !_this.isReacted;
            _this.setConfig('isReacted', _this.isReacted);
            reactHeartBtn.classList.toggle('reacted', _this.isReacted);
        }

        //Button view on image song thumb
        btnViewImgThumb.onclick = function() {
            imgViewLarge.classList.toggle('enable');
            if (imgViewLarge.classList.contains('enable')) {
                iconViewImgThumbUp.style.display = 'none';
                iconViewImgThumbDown.style.display = 'block';
            }
            else {
                iconViewImgThumbUp.style.display = 'block';
                iconViewImgThumbDown.style.display = 'none';
            }
        }

        //onscroll display sub header
        var offsetY = appContentBody.offsetTop + appContentBodyPlaybar.offsetTop + appContentBodyList.offsetTop;
        var sticky = offsetY - subHeader.offsetHeight;
        appContent.onscroll = function() {
            playBoxSubHeader.style.opacity = appContent.scrollTop >= sticky ? 1 : appContent.scrollTop / sticky;
            subHeaderOverlay.style.opacity = appContent.scrollTop >= sticky ? 1 : appContent.scrollTop / sticky;
            subHeaderBottom.style.opacity = appContent.scrollTop >= sticky ? 1 : 0;
            subHeader.style.setProperty('background', `rgba(80, 152, 168, ${appContent.scrollTop >= sticky ? 1 : appContent.scrollTop / sticky})`);
        }
    },

    secondToTime: function(value) {
        const sec = parseInt(value, 10);
        let hours   = Math.floor(sec / 3600);
        let minutes = Math.floor((sec - (hours * 3600)) / 60);
        let seconds = sec - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours = hours === 0 ? "" : hours + ":"}
        if (minutes < 10) {minutes = hours === "" ? minutes : "0" + minutes} 
        if (seconds < 10) {seconds = "0" + seconds}

        return hours + minutes +':'+ seconds; 
    },

    loadConfig: function() {
        this.volume = this.config.volume;
        this.isVolumeOn = this.config.isVolumeOn;
        this.prevVolume = this.config.prevVolume;
        this.durationPlayed = this.config.durationPlayed;
        this.totalDuration = this.config.totalDuration;
        this.idSongPlayed = this.config.idSongPlayed;
        this.timeTotal = this.config.timeTotal
        this.timeSongPlayed = this.config.timeSongPlayed;
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
        this.isReacted = this.config.isReacted;
    },

    loadCurrentSong: function() {
        playbarSongName.textContent = this.currentSong.name;
        playbarAuthor.textContent = this.currentSong.artist;
        thumbImage.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
        imgViewBox.src = this.currentSong.imageLarge;
        timeEnd.innerText = this.currentSong.timeTotal;
    },

    loadTimeSong: function(start) {
        timeStart.innerText = start;
        timeEnd.innerText = this.currentSong.timeTotal;
        this.timeTotal = this.currentSong.timeTotal;
    },

    nextSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    previousSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    playRandomSong: function() {
        let newIndex, newID, isPlayed = false;
        if (this.songsPlayed.length === this.songs.length) {
            this.songsPlayed = [];
        }
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);     
        } while (newIndex === this.currentIndex)

        newID = this.songs[newIndex].id;
        isPlayed = this.songsPlayed.find(value => newID === value)

        if (!isPlayed) {
            this.currentIndex = newIndex;
            this.songsPlayed.push(newID);
            this.loadCurrentSong();
        }
        else {
            this.playRandomSong();
        }
    },

    loadPrevStatus: function() {

        if (this.volume === 0) {
            playBarVolume.classList.add('turn-off')
            this.isVolumeOn = false;
        }

        if (!this.isVolumeOn) {
            playBarVolume.classList.add('turn-off')
            this.volume = 0;
        }

        this.currentIndex = this.idSongPlayed;
        this.loadCurrentSong()

        reactHeartBtn.classList.toggle('reacted', this.isReacted);

        randomBtn.classList.toggle('active', this.isRandom)
        repeatBtn.classList.toggle('active', this.isRepeat)

        timeStart.innerText = this.timeSongPlayed
        timeEnd.innerText = this.timeTotal
        
        volumeBar.value = this.volume*100;
        volumeBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + this.volume*100 + '%, #b3b3b3 ' + this.volume*100 + '%, #b3b3b3 100%)'

        var percent = Math.round(this.durationPlayed / this.totalDuration * 100)
        progressBar.value = percent;
        progressBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + percent + '%, #d3d3d3 ' + percent + '%, #d3d3d3 100%)'
    },

    start: function() {
        this.loadConfig();
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSong();
        this.render();
        this.loadPrevStatus();
    }
}

playList.start();