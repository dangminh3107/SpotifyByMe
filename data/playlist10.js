let playlist10 = [
    'Hip-hop Việt',
    'rgb(136, 56, 232)',
    './assets/img/playlist/playlist10.jpg',
    'Dòng chảy của rap Việt luôn cuồn cuộn với các tên tuổi Đen, Da LAB, Binz...',
    'Spotify',
    {
        id: '10_1',
        name: 'Đi Về Nhà',
        artist: 'Đen, JustaTee',
        album: 'Đi Về Nhà',
        path: './assets/music/mp3/playlist10/song_1.mp3',
        image: './assets/music/img/playlist10/song_1.jpg',
        imageLarge: './assets/music/img_big/playlist10/song_1.jpg',
        timeTotal: ''
    },
    {
        id: '10_2',
        name: 'Đưa Nhau Đi Trốn',
        artist: 'Đen, Linh Cáo',
        album: 'Đưa Nhau Đi Trốn',
        path: './assets/music/mp3/playlist10/song_2.mp3',
        image: './assets/music/img/playlist10/song_2.jpg',
        imageLarge: './assets/music/img_big/playlist10/song_2.jpg',
        timeTotal: ''
    },
    {
        id: '10_3',
        name: 'từ chối nhẹ nhàng thôi',
        artist: 'Bích Phương, Phúc Du',
        album: 'tâm trạng tan hơi chậm một chút',
        path: './assets/music/mp3/playlist10/song_3.mp3',
        image: './assets/music/img/playlist10/song_3.jpg',
        imageLarge: './assets/music/img_big/playlist10/song_3.jpg',
        timeTotal: ''
    },
    {
        id: '10_4',
        name: 'Thở',
        artist: 'Da LAB, Juky San',
        album: 'Thở',
        path: './assets/music/mp3/playlist10/song_4.mp3',
        image: './assets/music/img/playlist10/song_4.jpg',
        imageLarge: './assets/music/img_big/playlist10/song_4.jpg',
        timeTotal: ''
    },
    {
        id: '10_5',
        name: 'Bật Nhạc Lên',
        artist: 'HIEUTHUHAI, Harmonie',
        album: 'Bật Nhạc Lên',
        path: './assets/music/mp3/playlist10/song_5.mp3',
        image: './assets/music/img/playlist10/song_5.jpg',
        imageLarge: './assets/music/img_big/playlist10/song_5.jpg',
        timeTotal: ''
    },
    {
        id: '10_6',
        name: 'Trốn Tìm',
        artist: 'Đen, MTV band',
        album: 'Trốn Tìm',
        path: './assets/music/mp3/playlist10/song_6.mp3',
        image: './assets/music/img/playlist10/song_6.jpg',
        imageLarge: './assets/music/img_big/playlist10/song_6.jpg',
        timeTotal: ''
    },
    {
        id: '10_7',
        name: 'Có Lẽ Anh Chưa Từng',
        artist: 'Only C, Karik',
        album: 'Có Lẽ Anh Chưa Từng',
        path: './assets/music/mp3/playlist10/song_7.mp3',
        image: './assets/music/img/playlist10/song_7.jpg',
        imageLarge: './assets/music/img_big/playlist10/song_7.jpg',
        timeTotal: ''
    },
    {
        id: '10_8',
        name: 'Cháu Xin Lỗi Chú (feat. Gia Nghi)',
        artist: 'Linh Thộn, Jay Bach, Gia Nghi',
        album: 'Cháu Xin Lỗi Chú (feat. Gia Nghi)',
        path: './assets/music/mp3/playlist10/song_8.mp3',
        image: './assets/music/img/playlist10/song_8.jpg',
        imageLarge: './assets/music/img_big/playlist10/song_8.jpg',
        timeTotal: ''
    },
    {
        id: '10_9',
        name: 'So Close',
        artist: 'Binz. Phuong Ly',
        album: 'So Close',
        path: './assets/music/mp3/playlist10/song_9.mp3',
        image: './assets/music/img/playlist10/song_9.jpg',
        imageLarge: './assets/music/img_big/playlist10/song_9.jpg',
        timeTotal: ''
    },
    {
        id: '10_10',
        name: 'Lời Đường Mật (feat. HIEUTHUHAI)',
        artist: 'Lyly, HIEUTHUHAI',
        album: 'Lời Đường Mật',
        path: './assets/music/mp3/playlist10/song_10.mp3',
        image: './assets/music/img/playlist10/song_10.jpg',
        imageLarge: './assets/music/img_big/playlist10/song_10.jpg',
        timeTotal: ''
    }
]


let lengthP10 = pLoad(playlist10)
const PLAYLIST10_TOTAL_SONGS_STORAGE = 'PLAYLIST10TOTALSONGS'
localStorage.setItem(PLAYLIST10_TOTAL_SONGS_STORAGE, JSON.stringify(lengthP10.length))
const PLAYLIST10_STORAGE = 'PLAYLIST10';
localStorage.setItem(PLAYLIST10_STORAGE, JSON.stringify(playlist10))