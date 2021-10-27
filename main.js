$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)

const playlist = $('.app-content-body-list-songs');
console.log(playlist)

const songList = {
    songs: [
        {
            id: 1,
            name: 'Bad Habits',
            artist: 'Ed Sheeran',
            album: 'Bad Habits',
            padth: './assets/music/mp3/song_1.mp3',
            image: './assets/music/img/song_1.jpg'
        },
        {
            id: 2,
            name: 'STAY (with Justin Bieber)',
            artist: 'The Kid LAROI, Justin Bieber',
            album: 'STAY (with Justin Bieber)',
            padth: './assets/music/mp3/song_2.mp3',
            image: './assets/music/img/song_2.jpg'
        },
        {
            id: 3,
            name: 'leviating (feat. DaBaby)',
            artist: 'Dua Lipa, DaBaby',
            album: 'Future Nostalgia',
            padth: './assets/music/mp3/song_3.mp3',
            image: './assets/music/img/song_3.jpg'
        },
        {
            id: 4,
            name: 'MONTERO (Call Me By Your Name)',
            artist: 'Lil Nas X',
            album: 'MONTERO',
            padth: './assets/music/mp3/song_4.mp3',
            image: './assets/music/img/song_4.jpg'
        },
        {
            id: 5,
            name: 'Kiss Me More (feat. SZA)',
            artist: 'Doja Cat, SZA',
            album: 'Kiss Me More (feat. SZA)',
            padth: './assets/music/mp3/song_5.mp3',
            image: './assets/music/img/song_5.jpg'
        },
        {
            id: 6,
            name: 'Higher Love',
            artist: 'Kygo, Whitney Houston',
            album: 'Golden Hour',
            padth: './assets/music/mp3/song_6.mp3',
            image: './assets/music/img/song_6.jpg'
        }
    ],

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

    start: function() {
        this.render();
    }
}

songList.start();