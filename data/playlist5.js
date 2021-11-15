let playlist5 = [
    'Pop Mix',
    'rgb(80, 96, 104)',
    './assets/img/playlist/playlist5.jpg',
    'Bella Poarch, Đông Nhi, Ed Sheeran and more',
    'Spotify',
    {
        id: '5_1',
        name: 'Build a Bitch',
        artist: 'Bella Poarch',
        album: 'Build a Bitch',
        path: './assets/music/mp3/playlist5/song_1.mp3',
        image: './assets/music/img/playlist5/song_1.jpg',
        imageLarge: './assets/music/img_big/playlist5/song_1.jpg',
        timeTotal: ''
    },
    {
        id: '5_2',
        name: 'Set Fire to the Rain',
        artist: 'Adele',
        album: '21',
        path: './assets/music/mp3/playlist5/song_2.mp3',
        image: './assets/music/img/playlist5/song_2.jpg',
        imageLarge: './assets/music/img_big/playlist5/song_2.jpg',
        timeTotal: ''
    },
    {
        id: '5_3',
        name: 'My Head & My Heart',
        artist: 'Ava Max',
        album: 'Heaven & Hell',
        path: './assets/music/mp3/playlist5/song_3.mp3',
        image: './assets/music/img/playlist5/song_3.jpg',
        imageLarge: './assets/music/img_big/playlist5/song_3.jpg',
        timeTotal: ''
    },
    {
        id: '5_4',
        name: 'Bad Liar',
        artist: 'Imagine Dragons',
        album: 'Origins (Deluxe)',
        path: './assets/music/mp3/playlist5/song_4.mp3',
        image: './assets/music/img/playlist5/song_4.jpg',
        imageLarge: './assets/music/img_big/playlist5/song_4.jpg',
        timeTotal: ''
    },
    {
        id: '5_5',
        name: 'Beautiful Mistakes (feat. Megan Thee Stallion)',
        artist: 'Marron 5, Megan Thee Stallion',
        album: 'JORDI (Deluxe)',
        path: './assets/music/mp3/playlist5/song_5.mp3',
        image: './assets/music/img/playlist5/song_5.jpg',
        imageLarge: './assets/music/img_big/playlist5/song_5.jpg',
        timeTotal: ''
    },
    {
        id: '5_6',
        name: 'Easy On Me',
        artist: 'Adele',
        album: 'Easy On Me',
        path: './assets/music/mp3/playlist5/song_6.mp3',
        image: './assets/music/img/playlist5/song_6.jpg',
        imageLarge: './assets/music/img_big/playlist5/song_6.jpg',
        timeTotal: ''
    },
    {
        id: '5_7',
        name: 'Always Remember Us This Way',
        artist: 'Lady Gaga',
        album: 'A Star Is Born Soundtrack (Without Dialogue)',
        path: './assets/music/mp3/playlist5/song_7.mp3',
        image: './assets/music/img/playlist5/song_7.jpg',
        imageLarge: './assets/music/img_big/playlist5/song_7.jpg',
        timeTotal: ''
    },
    {
        id: '5_8',
        name: 'Cold Heart - PNAU Remix',
        artist: 'Elton John, Dua Lipa, PNAU',
        album: 'The Lockdown Sessions',
        path: './assets/music/mp3/playlist5/song_8.mp3',
        image: './assets/music/img/playlist5/song_8.jpg',
        imageLarge: './assets/music/img_big/playlist5/song_8.jpg',
        timeTotal: ''
    },
    {
        id: '5_9',
        name: 'Floating (feat. Khalid) [filous Remix]',
        artist: 'Alina Baraz, filous, Khalid',
        album: 'Floating (feat. Khalid) [filous Remix]',
        path: './assets/music/mp3/playlist5/song_9.mp3',
        image: './assets/music/img/playlist5/song_9.jpg',
        imageLarge: './assets/music/img_big/playlist5/song_9.jpg',
        timeTotal: ''
    },
    {
        id: '5_10',
        name: 'OMG What\'s Happening',
        artist: 'Ava Max',
        album: 'Heaven & Hell',
        path: './assets/music/mp3/playlist5/song_10.mp3',
        image: './assets/music/img/playlist5/song_10.jpg',
        imageLarge: './assets/music/img_big/playlist5/song_10.jpg',
        timeTotal: ''
    }
]


let lengthP5 = pLoad(playlist5)
const PLAYLIST5_TOTAL_SONGS_STORAGE = 'PLAYLIST5TOTALSONGS'
localStorage.setItem(PLAYLIST5_TOTAL_SONGS_STORAGE, JSON.stringify(lengthP5.length))
const PLAYLIST5_STORAGE = 'PLAYLIST5';
localStorage.setItem(PLAYLIST5_STORAGE, JSON.stringify(playlist5))