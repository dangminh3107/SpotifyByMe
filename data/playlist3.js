let playlist3 = [
    'Daily Mix 3',
    'rgb(160, 16, 16)',
    './assets/img/playlist/playlist3.jpg',
    'JUUN D, Hoài Lâm, Pulssarr and more',
    'Spotify',
    {
        id: '3_1',
        name: 'Sài Gòn Đau Lòng Quá',
        artist: 'Hứa Kim Tuyền, Hoàng Duyên',
        album: 'Sài Gòn Đau Lòng Quá',
        path: './assets/music/mp3/playlist3/song_1.mp3',
        image: './assets/music/img/playlist3/song_1.jpg',
        imageLarge: './assets/music/img_big/playlist3/song_1.jpg',
        timeTotal: ''
    },
    {
        id: '3_2',
        name: 'Khi Tình Yêu Đủ Lớn (feat. Rtee)',
        artist: 'Hoang Thuy Linh, Rtee',
        album: 'Khi Tình Yêu Đủ Lớn (feat. Rtee)',
        path: './assets/music/mp3/playlist3/song_2.mp3',
        image: './assets/music/img/playlist3/song_2.jpg',
        imageLarge: './assets/music/img_big/playlist3/song_2.jpg',
        timeTotal: ''
    },
    {
        id: '3_3',
        name: 'Chỉ Muốn Bên Em Lúc Này (Lofi Ver.)',
        artist: 'Orinn, Jiki X (Nguyễn Vũ Hùng), Huy Vạc',
        album: 'Lâu Phai #2 (LOFI)',
        path: './assets/music/mp3/playlist3/song_3.mp3',
        image: './assets/music/img/playlist3/song_3.jpg',
        imageLarge: './assets/music/img_big/playlist3/song_3.jpg',
        timeTotal: ''
    },
    {
        id: '3_4',
        name: 'Kẻ Cô Đơn Trong Thành Phố',
        artist: 'Khải, Xén',
        album: 'Kẻ Cô Đơn Trong Thành Phố',
        path: './assets/music/mp3/playlist3/song_4.mp3',
        image: './assets/music/img/playlist3/song_4.jpg',
        imageLarge: './assets/music/img_big/playlist3/song_4.jpg',
        timeTotal: ''
    },
    {
        id: '3_5',
        name: 'Yêu Một Người Sao Buồn Đến Thế',
        artist: 'Noo Phước Thịnh',
        album: 'Yêu Một Người Sao Buồn Đến Thế',
        path: './assets/music/mp3/playlist3/song_5.mp3',
        image: './assets/music/img/playlist3/song_5.jpg',
        imageLarge: './assets/music/img_big/playlist3/song_5.jpg',
        timeTotal: ''
    },
    {
        id: '3_6',
        name: 'Chỉ Là Không Cùng Nhau (Live Version)',
        artist: 'Tăng Phúc, Truong Thao Nhi',
        album: 'Chỉ Là Không Cùng Nhau (Live Version)',
        path: './assets/music/mp3/playlist3/song_6.mp3',
        image: './assets/music/img/playlist3/song_6.jpg',
        imageLarge: './assets/music/img_big/playlist3/song_6.jpg',
        timeTotal: ''
    },
    {
        id: '3_7',
        name: 'Sài Gòn Hôm Nay Mưa',
        artist: 'JSOL, Hoàng Duyên',
        album: 'Sài Gòn Hôm Nay Mưa',
        path: './assets/music/mp3/playlist3/song_7.mp3',
        image: './assets/music/img/playlist3/song_7.jpg',
        imageLarge: './assets/music/img_big/playlist3/song_7.jpg',
        timeTotal: ''
    },
    {
        id: '3_8',
        name: 'Chỉ Là Muốn Nói',
        artist: 'Khải',
        album: 'Chỉ Là Muốn Nói',
        path: './assets/music/mp3/playlist3/song_8.mp3',
        image: './assets/music/img/playlist3/song_8.jpg',
        imageLarge: './assets/music/img_big/playlist3/song_8.jpg',
        timeTotal: ''
    },
    {
        id: '3_9',
        name: 'Bao Tiền Một Mớ Bình Yên',
        artist: '14 Casper, Bon',
        album: 'Bao Tiền Một Mớ Bình Yên',
        path: './assets/music/mp3/playlist3/song_9.mp3',
        image: './assets/music/img/playlist3/song_9.jpg',
        imageLarge: './assets/music/img_big/playlist3/song_9.jpg',
        timeTotal: ''
    },
    {
        id: '3_10',
        name: 'Răng Khôn',
        artist: 'Phí Phương Anh, RIN9',
        album: 'Răng Khôn',
        path: './assets/music/mp3/playlist3/song_10.mp3',
        image: './assets/music/img/playlist3/song_10.jpg',
        imageLarge: './assets/music/img_big/playlist3/song_10.jpg',
        timeTotal: ''
    }
]

let lengthP3 = pLoad(playlist3)
const PLAYLIST3_TOTAL_SONGS_STORAGE = 'PLAYLIST3TOTALSONGS'
localStorage.setItem(PLAYLIST3_TOTAL_SONGS_STORAGE, JSON.stringify(lengthP3.length))
const PLAYLIST3_STORAGE = 'PLAYLIST3';
localStorage.setItem(PLAYLIST3_STORAGE, JSON.stringify(playlist3))