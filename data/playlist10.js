let playlist10 = [
    'Mega Hit Mix',
    'rgb(192, 224, 112)',
    './assets/img/playlist/playlist10.jpg',
    'A mega mix of 75 favorites from the last few years!',
    'Spotify',
    {
        id: '10_1',
        name: 'Đi Về Nhà',
        artist: 'Đen, JustaTee',
        album: 'Đi Về Nhà',
        path: './assets/music/mp3/playlist9/song_1.mp3',
        image: './assets/music/img/playlist9/song_1.jpg',
        imageLarge: './assets/music/img_big/playlist9/song_1.jpg',
        timeTotal: ''
    },
    {
        id: '10_2',
        name: 'Hương (feat. Negav)',
        artist: 'Văn Mai Hương, Negav',
        album: 'hương',
        path: './assets/music/mp3/playlist9/song_2.mp3',
        image: './assets/music/img/playlist9/song_2.jpg',
        imageLarge: './assets/music/img_big/playlist9/song_2.jpg',
        timeTotal: ''
    },
    {
        id: '10_3',
        name: 'nằm ngủ emru',
        artist: 'Bích Phương',
        album: 'nằm ngủ emru',
        path: './assets/music/mp3/playlist9/song_3.mp3',
        image: './assets/music/img/playlist9/song_3.jpg',
        imageLarge: './assets/music/img_big/playlist9/song_3.jpg',
        timeTotal: ''
    },
    {
        id: '10_4',
        name: 'Thức Giấc',
        artist: 'Da LAB',
        album: 'Thức Giấc',
        path: './assets/music/mp3/playlist9/song_4.mp3',
        image: './assets/music/img/playlist9/song_4.jpg',
        imageLarge: './assets/music/img_big/playlist9/song_4.jpg',
        timeTotal: ''
    },
    {
        id: '10_5',
        name: 'có hẹn với thanh xuân',
        artist: 'MONSTAR',
        album: 'có hẹn với thanh xuân',
        path: './assets/music/mp3/playlist9/song_5.mp3',
        image: './assets/music/img/playlist9/song_5.jpg',
        imageLarge: './assets/music/img_big/playlist9/song_5.jpg',
        timeTotal: ''
    },
    {
        id: '10_6',
        name: '3107 3',
        artist: 'W/N, Duongg, Nau, titie',
        album: '3107 3 (feat. Nâu, titie, Dươngg)',
        path: './assets/music/mp3/playlist9/song_6.mp3',
        image: './assets/music/img/playlist9/song_6.jpg',
        imageLarge: './assets/music/img_big/playlist9/song_6.jpg',
        timeTotal: ''
    },
    {
        id: '10_7',
        name: 'Khi Em Lớn',
        artist: 'Orange, Hoang Dung',
        album: 'Khi Em Lớn',
        path: './assets/music/mp3/playlist9/song_7.mp3',
        image: './assets/music/img/playlist9/song_7.jpg',
        imageLarge: './assets/music/img_big/playlist9/song_7.jpg',
        timeTotal: ''
    },
    {
        id: '10_8',
        name: 'Sinh Ra Đã Là Thứ Đối Lập Nhau',
        artist: 'Emcee L (Da LAB), Badbies',
        album: 'Sinh Ra Đã Là Thứ Đối Lập Nhau',
        path: './assets/music/mp3/playlist9/song_8.mp3',
        image: './assets/music/img/playlist9/song_8.jpg',
        imageLarge: './assets/music/img_big/playlist9/song_8.jpg',
        timeTotal: ''
    },
    {
        id: '10_9',
        name: 'Đường Tôi Chở Em Về',
        artist: 'buitruonglinh',
        album: 'ường Tôi Chở Em Về',
        path: './assets/music/mp3/playlist9/song_9.mp3',
        image: './assets/music/img/playlist9/song_9.jpg',
        imageLarge: './assets/music/img_big/playlist9/song_9.jpg',
        timeTotal: ''
    },
    {
        id: '10_10',
        name: 'Muốn Nói Với Em',
        artist: 'T Team',
        album: 'Muốn Nói Với Em',
        path: './assets/music/mp3/playlist9/song_10.mp3',
        image: './assets/music/img/playlist9/song_10.jpg',
        imageLarge: './assets/music/img_big/playlist9/song_10.jpg',
        timeTotal: ''
    }
]


let lengthP10 = pLoad(playlist10)
const PLAYLIST10_TOTAL_SONGS_STORAGE = 'PLAYLIST10TOTALSONGS'
localStorage.setItem(PLAYLIST10_TOTAL_SONGS_STORAGE, JSON.stringify(lengthP10.length))
const PLAYLIST10_STORAGE = 'PLAYLIST10';
localStorage.setItem(PLAYLIST10_STORAGE, JSON.stringify(playlist10))