$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)

const PLAYER_STORAGE_KEY = 'MY_PLAYER'

const root = $(':root')
const playlist = $('.app-content-body-list-songs');
const thumbImage = $('.app-play-bar-song-thumb');
const playBtn = $('.btn-toggle-play');
const playbar = $('.app-play-bar')
const playbarSongName = $('.app-play-bar-song-name')
const playbarAuthor = $('.app-play-bar-song-author')
const progressBar = $('#progress')
const volumeBar = $('#volume')
const timeStart = $('.control-time-lapse')
const timeEnd = $('.control-time-duration')


const songList = {
    currentIndex: 0,
    isPlaying: false,
    volume: 0.2,
    durationPlayed: 0,
    idSongPlayed: 0,
    timeTotal: '00:00',
    timeSongPlayed: '',
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            id: 1,
            name: 'Bad Habits',
            artist: 'Ed Sheeran',
            album: 'Bad Habits',
            path: './assets/music/mp3/song_1.mp3',
            image: './assets/music/img/song_1.jpg'
        },
        {
            id: 2,
            name: 'STAY (with Justin Bieber)',
            artist: 'The Kid LAROI, Justin Bieber',
            album: 'STAY (with Justin Bieber)',
            path: './assets/music/mp3/song_2.mp3',
            image: './assets/music/img/song_2.jpg'
        },
        {
            id: 3,
            name: 'leviating (feat. DaBaby)',
            artist: 'Dua Lipa, DaBaby',
            album: 'Future Nostalgia',
            path: './assets/music/mp3/song_3.mp3',
            image: './assets/music/img/song_3.jpg'
        },
        {
            id: 4,
            name: 'MONTERO (Call Me By Your Name)',
            artist: 'Lil Nas X',
            album: 'MONTERO',
            path: './assets/music/mp3/song_4.mp3',
            image: './assets/music/img/song_4.jpg'
        },
        {
            id: 5,
            name: 'Kiss Me More (feat. SZA)',
            artist: 'Doja Cat, SZA',
            album: 'Kiss Me More (feat. SZA)',
            path: './assets/music/mp3/song_5.mp3',
            image: './assets/music/img/song_5.jpg'
        },
        {
            id: 6,
            name: 'Higher Love',
            artist: 'Kygo, Whitney Houston',
            album: 'Golden Hour',
            path: './assets/music/mp3/song_6.mp3',
            image: './assets/music/img/song_6.jpg'
        }
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },

    render: function() {
        const htmls = this.songs.map((song,index) => {
            return `
                <div class="app-content-body-list-item">
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
                    <span class="app-content-body-list-item-duration">3:51</span>
                </div>
            `
        })
        playlist.innerHTML = htmls.join('')
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
        playBtn.onclick = function() {
            if(_this.isPlaying){
                audio.pause();
                console.log(_this.timeSongPlayed)
            }
            else {
                var durationTime = _this.secondToTime(audio.duration)
                timeEnd.innerText = _this.secondToTime(audio.duration);
                _this.setConfig('timeTotal', durationTime)
                if (_this.durationPlayed > 0) {
                    audio.currentTime = _this.durationPlayed;
                    audio.play();
                }
                else {
                    audio.play();
                }
            }  
        }

        //Update volume when adjust volume bar
        volumeBar.oninput = function(e) {
            _this.volume = Number(e.target.value / 100);
            audio.volume = _this.volume;
            volumeBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + e.target.value + '%, #b3b3b3 ' + e.target.value + '%, #b3b3b3 100%)'
            _this.setConfig('volume', _this.volume);
        }

        //Play song
        audio.onplay = function() {
            audio.volume = _this.volume;
            audio.ontimeupdate = function() {
                if (audio.duration){
                    _this.durationPlayed = audio.currentTime;
                    _this.setConfig('durationPlayed', audio.currentTime);
                    var timePlayed = _this.secondToTime(audio.currentTime)
                    timeStart.innerText = timePlayed;
                    _this.setConfig('timeSongPlayed', timePlayed)
                    const progressPercent = Math.round(audio.currentTime / audio.duration * 100)
                    progressBar.value = progressPercent;
                    progressBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + progressPercent + '%, #d3d3d3 ' + progressPercent + '%, #d3d3d3 100%)'
                }
            }
            _this.isPlaying = true;
            playbar.classList.add('playing')
            thumbAnimate.play();
        }

        //Pause song
        audio.onpause = function() {
            _this.isPlaying = false;
            playbar.classList.remove('playing');
            thumbAnimate.pause();
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
    },

    loadConfig: function() {
        this.volume = this.config.volume;
        this.durationPlayed = this.config.durationPlayed;
        this.idSongPlayed = this.config.idSongPlayed;
        this.timeSongPlayed = this.config.timeSongPlayed;
    },

    loadCurrentSong: function() {
        playbarSongName.textContent = this.currentSong.name;
        playbarAuthor.textContent = this.currentSong.artist;
        thumbImage.style.backgroundImage = `url('${this.currentSong.image}')`;
        this.idSongPlayed = this.currentSong.id;
        audio.src = this.currentSong.path;
        timeEnd.innerText = this.timeTotal;
    },

    loadTimeSong: function(start, end) {
        timeStart.innerText = start;
        timeEnd.innerText = end;
    },

    secondToTime: function(value) {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours   = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
        let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds

        // add 0 if value < 10; Example: 2 => 02
        if (hours   < 10) {hours   = hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}

        return hours+':'+minutes+':'+seconds; 
    },

    start: function() {
        this.loadConfig();
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSong();
        this.render();

        volumeBar.value = this.volume*100;
        volumeBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + this.volume*100 + '%, #b3b3b3 ' + this.volume*100 + '%, #b3b3b3 100%)'
        // console.log(this.durationPlayed);
        // console.log(this.idSongPlayed)
    }
}

songList.start();