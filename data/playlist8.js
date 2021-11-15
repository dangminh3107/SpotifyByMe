let playlist8 = [
    'League of Legends Official Playlist',
    'rgb(40, 120, 168)',
    './assets/img/playlist/playlist8.jpg',
    'The Official League of Legends playlist celebrating the launch of the Arcane Original Soundtrack.',
    'Spotify',
    {
        id: '8_1',
        name: 'Enemy (with JID) - from the series Arcane League of Legends',
        artist: 'Imagine Dragons, JID, Arcane, League of Legends',
        album: 'Enemy (with JID) - from the series Arcane League of Legends',
        path: './assets/music/mp3/playlist8/song_1.mp3',
        image: './assets/music/img/playlist8/song_1.jpg',
        imageLarge: './assets/music/img_big/playlist8/song_1.jpg',
        timeTotal: ''
    },
    {
        id: '8_2',
        name: 'Burn It All Down',
        artist: 'League of Legends, PVRIS',
        album: 'Burn It All Down',
        path: './assets/music/mp3/playlist8/song_2.mp3',
        image: './assets/music/img/playlist8/song_2.jpg',
        imageLarge: './assets/music/img_big/playlist8/song_2.jpg',
        timeTotal: ''
    },
    {
        id: '8_3',
        name: 'Breathe',
        artist: 'Mako',
        album: 'Breathe',
        path: './assets/music/mp3/playlist8/song_3.mp3',
        image: './assets/music/img/playlist8/song_3.jpg',
        imageLarge: './assets/music/img_big/playlist8/song_3.jpg',
        timeTotal: ''
    },
    {
        id: '8_4',
        name: 'hate u cuz i don\'t (feat. Bea Miller)',
        artist: 'Louis The Child, Bea Miller',
        album: 'hate u cuz i don\'t (feat. Bea Miller)',
        path: './assets/music/mp3/playlist8/song_4.mp3',
        image: './assets/music/img/playlist8/song_4.jpg',
        imageLarge: './assets/music/img_big/playlist8/song_4.jpg',
        timeTotal: ''
    },
    {
        id: '8_5',
        name: 'Warriors',
        artist: 'League of Legends, 2WEI, Edda Hayes',
        album: 'Warriors',
        path: './assets/music/mp3/playlist8/song_5.mp3',
        image: './assets/music/img/playlist8/song_5.jpg',
        imageLarge: './assets/music/img_big/playlist8/song_5.jpg',
        timeTotal: ''
    },
    {
        id: '8_6',
        name: 'THE BADDEST',
        artist: 'League of Legends, Denzel Curry, PVRIS',
        album: 'ALL OUT',
        path: './assets/music/mp3/playlist8/song_6.mp3',
        image: './assets/music/img/playlist8/song_6.jpg',
        imageLarge: './assets/music/img_big/playlist8/song_6.jpg',
        timeTotal: ''
    },
    {
        id: '8_7',
        name: 'Awaken',
        artist: 'League of Legends, Valerie Broussard, Ray Chen',
        album: 'Awaken',
        path: './assets/music/mp3/playlist8/song_7.mp3',
        image: './assets/music/img/playlist8/song_7.jpg',
        imageLarge: './assets/music/img_big/playlist8/song_7.jpg',
        timeTotal: ''
    },
    {
        id: '8_8',
        name: 'RISE',
        artist: 'League of Legends, The Glitch Mob, Mako, The Word Alive',
        album: 'RISE',
        path: './assets/music/mp3/playlist8/song_8.mp3',
        image: './assets/music/img/playlist8/song_8.jpg',
        imageLarge: './assets/music/img_big/playlist8/song_8.jpg',
        timeTotal: ''
    },
    {
        id: '8_9',
        name: 'Get Jinxed',
        artist: 'League of Legends',
        album: 'The Music of League of Legends Vol. 1',
        path: './assets/music/mp3/playlist8/song_9.mp3',
        image: './assets/music/img/playlist8/song_9.jpg',
        imageLarge: './assets/music/img_big/playlist8/song_9.jpg',
        timeTotal: ''
    },
    {
        id: '8_10',
        name: 'Worlds Collide',
        artist: 'League of Legends, Nicki Taylor',
        album: 'Worlds Collide',
        path: './assets/music/mp3/playlist8/song_10.mp3',
        image: './assets/music/img/playlist8/song_10.jpg',
        imageLarge: './assets/music/img_big/playlist8/song_10.jpg',
        timeTotal: ''
    }
]


let lengthP8 = pLoad(playlist8)
const PLAYLIST8_TOTAL_SONGS_STORAGE = 'PLAYLIST8TOTALSONGS'
localStorage.setItem(PLAYLIST8_TOTAL_SONGS_STORAGE, JSON.stringify(lengthP8.length))
const PLAYLIST8_STORAGE = 'PLAYLIST8';
localStorage.setItem(PLAYLIST8_STORAGE, JSON.stringify(playlist8))