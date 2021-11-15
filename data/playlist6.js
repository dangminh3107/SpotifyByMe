let playlist6 = [
    'Thiên Hạ Nghe Gì',
    'rgb(248, 152, 32)',
    './assets/img/playlist/playlist6.jpg',
    'Những gì mà người bên cạnh bạn đang nghe. Ảnh bìa: Taylor Swift',
    'Spotify',
    {
        id: '6_1',
        name: 'An Thần',
        artist: 'Low G, Thắng',
        album: 'An Thần',
        path: './assets/music/mp3/playlist6/song_1.mp3',
        image: './assets/music/img/playlist6/song_1.jpg',
        imageLarge: './assets/music/img_big/playlist6/song_1.jpg',
        timeTotal: ''
    },
    {
        id: '6_2',
        name: 'Red (Taylor\'s Version)',
        artist: 'Taylor Swift',
        album: 'Red (Taylor\'s Version)',
        path: './assets/music/mp3/playlist6/song_2.mp3',
        image: './assets/music/img/playlist6/song_2.jpg',
        imageLarge: './assets/music/img_big/playlist6/song_2.jpg',
        timeTotal: ''
    },
    {
        id: '6_3',
        name: 'Family (feat. Bebe Rexha, Ty Dolla $ign & A Boogie Wit da Hoodie)',
        artist: 'David Guetta, Bebe Rexha, Ty Dolla $ign, A Boogie Wit da Hoodie',
        album: 'Family (feat. Bebe Rexha, Ty Dolla $ign & A Boogie Wit da Hoodie)',
        path: './assets/music/mp3/playlist6/song_3.mp3',
        image: './assets/music/img/playlist6/song_3.jpg',
        imageLarge: './assets/music/img_big/playlist6/song_3.jpg',
        timeTotal: ''
    },
    {
        id: '6_4',
        name: 'Unstoppable',
        artist: 'Sia',
        album: 'This Is Acting (Deluxe Version)',
        path: './assets/music/mp3/playlist6/song_4.mp3',
        image: './assets/music/img/playlist6/song_4.jpg',
        imageLarge: './assets/music/img_big/playlist6/song_4.jpg',
        timeTotal: ''
    },
    {
        id: '6_5',
        name: 'Run (feat. Ed Sheeran) (Taylor’s Version) (From The Vault)',
        artist: 'Taylor Swift, Ed Sheeran',
        album: 'Red (Taylor\'s Version)',
        path: './assets/music/mp3/playlist6/song_5.mp3',
        image: './assets/music/img/playlist6/song_5.jpg',
        imageLarge: './assets/music/img_big/playlist6/song_5.jpg',
        timeTotal: ''
    },
    {
        id: '6_6',
        name: 'Phi Hành Gia',
        artist: 'Renja, SlowT, Sugar Cane, Lil Wuyn, Kain',
        album: 'Phi Hành Gia',
        path: './assets/music/mp3/playlist6/song_6.mp3',
        image: './assets/music/img/playlist6/song_6.jpg',
        imageLarge: './assets/music/img_big/playlist6/song_6.jpg',
        timeTotal: ''
    },
    {
        id: '6_7',
        name: 'Ánh Sao Và Bầu Trời',
        artist: 'T.R.I',
        album: 'Ánh Sao Và Bầu Trời',
        path: './assets/music/mp3/playlist6/song_7.mp3',
        image: './assets/music/img/playlist6/song_7.jpg',
        imageLarge: './assets/music/img_big/playlist6/song_7.jpg',
        timeTotal: ''
    },
    {
        id: '6_8',
        name: 'Like My Father',
        artist: 'Jax',
        album: 'Like My Father',
        path: './assets/music/mp3/playlist6/song_8.mp3',
        image: './assets/music/img/playlist6/song_8.jpg',
        imageLarge: './assets/music/img_big/playlist6/song_8.jpg',
        timeTotal: ''
    },
    {
        id: '6_9',
        name: 'Talking to the Moon',
        artist: 'Bruno Mars',
        album: 'Doo-Wops & Hooligans',
        path: './assets/music/mp3/playlist6/song_9.mp3',
        image: './assets/music/img/playlist6/song_9.jpg',
        imageLarge: './assets/music/img_big/playlist6/song_9.jpg',
        timeTotal: ''
    },
    {
        id: '6_10',
        name: 'death bed (coffee for your head)',
        artist: 'Powfu, beabadoobee',
        album: 'death bed (coffee for your head)',
        path: './assets/music/mp3/playlist6/song_10.mp3',
        image: './assets/music/img/playlist6/song_10.jpg',
        imageLarge: './assets/music/img_big/playlist6/song_10.jpg',
        timeTotal: ''
    }
]


let lengthP6 = pLoad(playlist6)
const PLAYLIST6_TOTAL_SONGS_STORAGE = 'PLAYLIST6TOTALSONGS'
localStorage.setItem(PLAYLIST6_TOTAL_SONGS_STORAGE, JSON.stringify(lengthP6.length))
const PLAYLIST6_STORAGE = 'PLAYLIST6';
localStorage.setItem(PLAYLIST6_STORAGE, JSON.stringify(playlist6))