let playlist7 = [
    'Anh Hào Nhạc Việt',
    'rgb(184, 176, 136)',
    './assets/img/playlist/playlist7.jpg',
    'Những nghệ sĩ nam góp phần rạng rỡ cho V-Pop. Ảnh bìa: Đen',
    'Spotify',
    {
        id: '7_1',
        name: 'Lối Nhỏ',
        artist: 'Đen, Phương Anh',
        album: 'Lối Nhỏ',
        path: './assets/music/mp3/playlist7/song_1.mp3',
        image: './assets/music/img/playlist7/song_1.jpg',
        imageLarge: './assets/music/img_big/playlist7/song_1.jpg',
        timeTotal: ''
    },
    {
        id: '7_2',
        name: 'Nơi Tình Yêu Kết Thúc',
        artist: 'Bui Anh Tuan',
        album: 'Album Collection 1: Xin Em',
        path: './assets/music/mp3/playlist7/song_2.mp3',
        image: './assets/music/img/playlist7/song_2.jpg',
        imageLarge: './assets/music/img_big/playlist7/song_2.jpg',
        timeTotal: ''
    },
    {
        id: '7_3',
        name: 'Bước Qua Mùa Cô Đơn',
        artist: 'Vũ.',
        album: 'Bước Qua Mùa Cô Đơn',
        path: './assets/music/mp3/playlist7/song_3.mp3',
        image: './assets/music/img/playlist7/song_3.jpg',
        imageLarge: './assets/music/img_big/playlist7/song_3.jpg',
        timeTotal: ''
    },
    {
        id: '7_4',
        name: 'Thuong Em La Dieu Anh Khong The Ngo',
        artist: 'Noo Phước Thịnh',
        album: 'Thuong Em La Dieu Anh Khong The Ngo',
        path: './assets/music/mp3/playlist7/song_4.mp3',
        image: './assets/music/img/playlist7/song_4.jpg',
        imageLarge: './assets/music/img_big/playlist7/song_4.jpg',
        timeTotal: ''
    },
    {
        id: '7_5',
        name: 'Gặp Gỡ, Yêu Đương Và Được Bên Em',
        artist: 'Phan Mạnh Quỳnh',
        album: 'Gặp Gỡ, Yêu Đương Và Được Bên Em',
        path: './assets/music/mp3/playlist7/song_5.mp3',
        image: './assets/music/img/playlist7/song_5.jpg',
        imageLarge: './assets/music/img_big/playlist7/song_5.jpg',
        timeTotal: ''
    },
    {
        id: '7_6',
        name: 'Tình Nào Không Như Tình Đầu',
        artist: 'Trung Quân',
        album: 'Tình Nào Không Như Tình Đầu',
        path: './assets/music/mp3/playlist7/song_6.mp3',
        image: './assets/music/img/playlist7/song_6.jpg',
        imageLarge: './assets/music/img_big/playlist7/song_6.jpg',
        timeTotal: ''
    },
    {
        id: '7_7',
        name: 'Em Không Sai, Chúng Ta Sai',
        artist: 'ERIK',
        album: 'Em Không Sai, Chúng Ta Sai',
        path: './assets/music/mp3/playlist7/song_7.mp3',
        image: './assets/music/img/playlist7/song_7.jpg',
        imageLarge: './assets/music/img_big/playlist7/song_7.jpg',
        timeTotal: ''
    },
    {
        id: '7_8',
        name: 'Lạ Lùng',
        artist: 'Vũ.',
        album: 'Lạ Lùng',
        path: './assets/music/mp3/playlist7/song_8.mp3',
        image: './assets/music/img/playlist7/song_8.jpg',
        imageLarge: './assets/music/img_big/playlist7/song_8.jpg',
        timeTotal: ''
    },
    {
        id: '7_9',
        name: 'Dạ Vũ',
        artist: 'Tăng Duy Tân',
        album: 'Dạ Vũ',
        path: './assets/music/mp3/playlist7/song_9.mp3',
        image: './assets/music/img/playlist7/song_9.jpg',
        imageLarge: './assets/music/img_big/playlist7/song_9.jpg',
        timeTotal: ''
    },
    {
        id: '7_10',
        name: 'Nàng Thơ',
        artist: 'Hoang Dung',
        album: '25',
        path: './assets/music/mp3/playlist7/song_10.mp3',
        image: './assets/music/img/playlist7/song_10.jpg',
        imageLarge: './assets/music/img_big/playlist7/song_10.jpg',
        timeTotal: ''
    }
]


let lengthP7 = pLoad(playlist7)
const PLAYLIST7_TOTAL_SONGS_STORAGE = 'PLAYLIST7TOTALSONGS'
localStorage.setItem(PLAYLIST7_TOTAL_SONGS_STORAGE, JSON.stringify(lengthP7.length))
const PLAYLIST7_STORAGE = 'PLAYLIST7';
localStorage.setItem(PLAYLIST7_STORAGE, JSON.stringify(playlist7))