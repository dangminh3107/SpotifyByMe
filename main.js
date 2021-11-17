$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'MY_PLAYER'

const root = $(':root')
const playlist = Array.from($$('.app-content-body-list-songs'));
const thumbImage = $('.app-play-bar-song-thumb');
const thumbImageMobile = $('.app-play-bar-song-thumb-mobile')
const playBarMobile = $('.app-play-bar-container')
const thumbImageMobileTablet = $('.app-play-bar-song-thumb-mobile-tablet')
const songModal = $('.song-modal')
const collapseModalBtn = $('.song-modal-collapse')
const thumbImageModal = $('.song-modal-img')
const playBtn = $('.btn-toggle-play');
const playModal = $('.btn-toggle-play-modal')
const playBtnPlaylist = $$('.btn-content-playbar')
const playBtnHeader = $('.btn-play-header')
const playBtnRandomHeader = $('.btn-play-header-random')
const playBtnRandomPlaylist = $$('.btn-content-playbar-random')
const playbar = $('.app-play-bar')
const playbarModal = $('.song-modal-playbar')
const playbarSongName = $$('.app-play-bar-song-name')
const playbarDetails = $('.app-play-bar-song-details')
const modalSongName = $('.song-modal-name')
const playbarAuthor = $$('.app-play-bar-song-author')
const modalAuthor = $('.song-modal-artist')
const progressBar = $('#progress')
const progressBarMobile = $('#progress-mobile')
const progressModal = $('#progress-modal')
const playBarVolume = $('.app-play-bar-volume')
const volumeBtn = $('.app-play-bar-volume-group')
const volumeBar = $('#volume')
const timeStart = $('.control-time-lapse')
const timeStartModal = $('.control-time-lapse-modal')
const timeEnd = $('.control-time-duration')
const timeEndModal = $('.control-time-duration-modal')
const prevBtn = $('.btn-prev')
const prevBtnModal = $('.btn-prev-modal')
const nextBtn = $('.btn-next')
const nextBtnModal = $('.btn-next-modal')
const randomBtn = $('.btn-random')
const randomBtnModal = $('.btn-random-modal')
const repeatBtn = $('.btn-repeat')
const repeatBtnModal = $('.btn-repeat-modal')
const reactHeartBtn = $$('.app-content-body-react-album')
const btnViewImgThumb = $('.app-play-bar-song-view')
const btnHideImgThumb = $('.app-install-image-song-icon-down')
const imgViewLarge = $('.app-install')
const imgViewBox = $('.app-install-image')
const iconViewImgThumbUp = $('.app-play-bar-song-view-icon-up')
const iconViewImgThumbDown = $('.app-play-bar-song-view-icon-down')
const songItem = $('.app-content-body-list-item')
const appContent = $('.app-content')
const headerContent = Array.from($$('.app-content-header.playlist'));
const headerSearch = $('.app-content-sub-header-search-group')
const appContentBodyPlaybar = Array.from($$('.app-content-body .app-content-body-playbar'))
const subHeader = $('.app-content-sub-header')
const subHeaderOverlay = $('.app-content-sub-header-overlay')
const subHeaderBottom = $('.app-content-sub-header-bottom')
const subHeaderTop = $('.app-content-sub-header-top')
const subHeaderTitle = $('.app-content-sub-header-title')
const appContentHeaderOverlay = Array.from($$('.app-content-header-background-overlay'))
const appContentBody = Array.from($$('.app-content-body'))
const appContentBodyList = $('.app-content-body .app-content-body-list')
const imgHeader = Array.from($$('.app-content-header-image'))
const ownerHeader = Array.from($$('.app-content-header-statistic-user'))
const descPlaylist = Array.from($$('.app-content-header-description'))
const menuSidebar = $('.side-bar')
const menuItem = Array.from($$('.app-menu-item'));
const playListCreate = Array.from($$('.app-playlist-item-link'))
const playListItem = Array.from($$('.my-playlist-item'))
const sidebarList = menuItem.concat(playListCreate).concat(playListItem)
const pageList = Array.from($$('.app-content-page'))
const libHeader = $('.app-content-sub-header-lib-contain')
const libHeaderList = $$('.app-content-sub-header-lib-item')
const libPageList = $$('.app-content-page-lib')
const settingHome = $('.app-content-header-setting')
const viewPlaylist = $('.song-modal-content-from')
const namePlaylist = Array.from($$('.app-content-header-name'));
const namePlaylistModal = $('.song-play-list')
const namePlaylistSidebar = Array.from($$('.my-playlist-item-link'));
const libItemsHasPlaylist = Array.from($$('.app-content-header-body-item.lib-page[id]'));
const listReactSongPlaybar = Array.from($$('.app-play-bar-song-react'))

const sliderBox = $('.app-content-header-slider-group')
const sliderListItem= $$('.app-content-header-search-slider-item')
const btnNextSlider = $('.slider-control-right')
const btnPrevSlider = $('.slider-control-left')
const playbarSongInfo = $('.app-play-bar-song')

let N = playListItem.length;
let isPlaylistPage = false;
let isSearchPage = false;
let offsetYLarge = 0;
let offsetYMedium = 0;
let pageIndex = 1;
let slideIndex = 1;
let slideLength = sliderListItem.length - 2;
let indexPercent = 106;
let totalPageLib = libHeaderList.length;
let pagePlaylist = 1;

let totalSongs = 0;
for (let i = 1; i <= 5; i++) {
    let p = Number(JSON.parse(localStorage.getItem(`PLAYLIST${i}TOTALSONGS`)) || {});
    totalSongs += p;
}

const myApp = {
    currentIndex: {
        index: 0,
        page: 1,
        prevPage: 1,
    },
    listPlaylistName: [],
    listPlaylist: [],
    listPlaylistColor: [],
    listPlaylistBG: [],
    listPlaylistDesc: [],
    listPlaylistOwner: [],
    pagePlaylist: 1,
    isPlaying: false,
    isVolumeOn: false,
    isRandom: false,
    isRepeat: false,
    volume: 0.2,
    durationPlayed: 0,
    totalDuration: 0,
    idSongPlayed: 0,
    songsPlayed: [],
    listSongs: [],
    prevVolume: 0,
    timeTotal: '00:00',
    timeSongPlayed: '00:00',
    isReactedList: new Array(totalSongs).fill(false),
    reactHeart: new Array(N).fill(false),
    reactList: [],
    songReact: [],
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songArr: [
        {
            songs: JSON.parse(localStorage.getItem(PLAYLIST1_STORAGE)) || {}
        },
        {
            songs: JSON.parse(localStorage.getItem(PLAYLIST2_STORAGE)) || {}
        },
        {
            songs: JSON.parse(localStorage.getItem(PLAYLIST3_STORAGE)) || {}
        },
        {
            songs: JSON.parse(localStorage.getItem(PLAYLIST4_STORAGE)) || {}
        },
        {
            songs: JSON.parse(localStorage.getItem(PLAYLIST5_STORAGE)) || {}
        },
        {
            songs: JSON.parse(localStorage.getItem(PLAYLIST6_STORAGE)) || {}
        },
        {
            songs: JSON.parse(localStorage.getItem(PLAYLIST7_STORAGE)) || {}
        },
        {
            songs: JSON.parse(localStorage.getItem(PLAYLIST8_STORAGE)) || {}
        },
        {
            songs: JSON.parse(localStorage.getItem(PLAYLIST9_STORAGE)) || {}
        },
        {
            songs: JSON.parse(localStorage.getItem(PLAYLIST10_STORAGE)) || {}
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
    setTotalTime: function(playlist, durations, n) {
        for (let i = 0; i < n; i++) {
            durations[i] = this.secondToTime(durations[i])
            playlist[i].timeTotal = durations[i];
        }
    },
    getHTML: function(songs, durationList) {
        const htmls = songs.map((song,index) => {
            song.timeTotal = durationList[index];
            let letter = song.id.indexOf('_');
            return `
                <div class="app-content-body-list-item ${index === this.currentIndex.index && Number(song.id.slice(0,letter)) === this.getPage() ?'active' : ''}" data-index="${index}">
                    <span class="app-content-body-list-item-number">${song.id.slice(letter + 1)}</span>
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
                    <div class="app-content-body-list-item-heart">
                        <i class="far fa-heart icon-empty"></i>
                        <i class="fas fa-heart icon-fill"></i>
                    </div>
                    <span class="app-content-body-list-item-duration">${durationList[index]}</span>
                    <div class="app-content-body-list-item-more">
                        <i class="ti-more-alt icon-more"></i>
                    </div>
                </div>
            `
        })
        return htmls;
    },

    getNameAndList: function([name, color, image, desc, owner, ...list]) {
        this.listPlaylistName.push(name);
        this.listPlaylistColor.push(color);
        this.listPlaylistBG.push(image);
        this.listPlaylistDesc.push(desc);
        this.listPlaylistOwner.push(owner);
        this.listPlaylist.push([...list]);
    },

    render: function(durationList) {
        let nArray = [], list = [], n = this.listPlaylist.length;
        this.listPlaylist.forEach(item => {
            nArray.push(item.length);
        })
        nArray.forEach(item => {
            let temp = durationList.splice(0, item);
            list.push(temp);
        })
        for (let i = 0; i < n; i++) {
            this.setTotalTime(this.listPlaylist[i], list[i], nArray[i]);
            let htmls= this.getHTML(this.listPlaylist[i], list[i]);
            namePlaylist[i].innerText = this.listPlaylistName[i];
            imgHeader[i].src = this.listPlaylistBG[i];
            ownerHeader[i].innerText = this.listPlaylistOwner[i];
            descPlaylist[i].innerText = this.listPlaylistDesc[i];
            appContentHeaderOverlay[i].style.backgroundColor = this.listPlaylistColor[i];
            appContentBody[i].style.backgroundColor = this.listPlaylistColor[i];
            playlist[i].innerHTML = htmls.join('');
            namePlaylistSidebar[i].innerText = this.listPlaylistName[i];
        }

        playlist.forEach((item) => {
            this.listSongs.push(Array.from(item.querySelectorAll('.app-content-body-list-item')));
        })

        namePlaylistModal.innerText = this.listPlaylistName[this.pagePlaylist - 1];
        this.reactList = Array.from($$('.app-content-body-list-item-heart'));
    },
    
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.listPlaylist[this.currentIndex.page-1][this.currentIndex.index];
            }
        })
    },

    setHeader: function([settingHome, settingdisplay],[libHeader, libHdisplay], [headerSearch, headerSdisplay], 
        [subHeaderTop, subTopdisplay], [subHeaderOverlay, subOverlay], [subHeaderTitle, subTitledisplay], 
        [subHeaderBottom, subBottom], [playBtnHeader, playHeaddisplay], [playBtnRandomHeader, playRHeaddisplay]) {
            settingHome.style.display = settingdisplay;
            libHeader.style.display = libHdisplay;
            headerSearch.style.display = headerSdisplay;
            subHeaderTop.style.display = subTopdisplay;
            subHeaderOverlay.style.opacity = subOverlay.opacity;
            subHeaderOverlay.style.display = subOverlay.display;
            subHeaderOverlay.style.backgroundColor = subOverlay.backgroundColor;
            subHeaderTitle.style.display = subTitledisplay;
            subHeaderBottom.style.opacity = subBottom.opacity
            subHeaderBottom.style.display = subBottom.display;
            playBtnHeader.style.display = playHeaddisplay;
            playBtnRandomHeader.style.display = playRHeaddisplay;
    },

    handleEvents: function () {
        const _this = this;
        btnNextSlider.onclick = function () {
            if (document.documentElement.clientWidth >= 1023) {
                btnNextSlider.style.filter = 'brightness(50%)';
                setTimeout(() => {
                    btnNextSlider.style.filter = 'brightness(1)';
                }, 100)
                if (slideIndex < slideLength) {
                    sliderListItem.forEach((item) => {
                        item.style.transform = `translateX(-${indexPercent}%)`
                    })
                    indexPercent += 106;
                    slideIndex += 1;
                    if (slideIndex === slideLength) {
                        setTimeout(() => {
                            btnNextSlider.style.display = 'none';
                            btnPrevSlider.style.display = 'block';
                        }, 500)
                    }
                }
            }
        }

        btnPrevSlider.onclick = function () {
            btnPrevSlider.style.filter = 'brightness(50%)';
            setTimeout(() => {
                btnPrevSlider.style.filter = 'brightness(1)';
            }, 100)
            if (slideIndex === slideLength) {
                indexPercent -= 106;
            }
            if (slideIndex > 1) {
                indexPercent -= 106;
                sliderListItem.forEach((item) => {
                    item.style.transform = `translateX(-${indexPercent}%)`
                })
                slideIndex -= 1;
                if (slideIndex === 1) {
                    setTimeout(() => {
                        btnNextSlider.style.display = 'block';
                        btnPrevSlider.style.display = 'none';
                        indexPercent += 106;
                    }, 500)
                }
            }
        }

        menuSidebar.onclick = function(e) {
            const menuNode = e.target.closest('.app-menu-item')
            const playListCreateNode = e.target.closest('.app-playlist-item-link')
            const playlistNode = e.target.closest('.my-playlist-item')
            let node = menuNode || playListCreateNode || playlistNode;
            if (node) {
                appContent.scroll(0, 0);
                let idx = node.id;
                let n = sidebarList.length;
                for (var i = 0; i < n; i++) {
                    if (sidebarList[i].id !== idx) {
                        sidebarList[i].classList.remove('active')
                        pageList[i].classList.remove('active')
                    }
                }
                sidebarList[idx-1].classList.add('active')
                pageList[idx-1].classList.add('active')

                pageIndex = Number(idx);
                let documentWidth = document.documentElement.clientWidth;
                const defaultOverlay = Object.create({display: '', opacity: '', backgroundColor: ''})
                const defaultSubBottom = Object.create({display: '', opacity: ''})
                let subOverlay = defaultOverlay;
                let subBottom = defaultSubBottom;

                switch(Number(idx)) {
                    case 1:
                        isPlaylistPage = false;
                        subOverlay = defaultOverlay;
                        subBottom  = defaultSubBottom;
                        subOverlay.backgroundColor = 'rgb(80, 152, 168)';
                        if (documentWidth >= 740) {
                            subBottom.display = 'none';
                            if (documentWidth < 1024) {
                                _this.setHeader([settingHome, 'flex'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                                [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                                [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                            }
                            else {
                                _this.setHeader([settingHome, 'none'], [settingHome, 'flex'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                                [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                                [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                            }
                        }
                        else {
                            subOverlay.display = 'none';
                            subBottom.display = 'none';
                            _this.setHeader([settingHome, 'flex'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'none'], 
                            [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                            [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        }
                        break;
                    case 2:
                        subOverlay = defaultOverlay;
                        subOverlay.backgroundColor = 'rgba(18,18,18,1)'
                        isSearchPage = true;
                        isPlaylistPage = false;
                        _this.setHeader([settingHome, 'none'], [libHeader, 'none'], [headerSearch, 'flex'], [subHeaderTop, 'flex'], 
                        [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                        [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        break;
                    case 3:
                        isSearchPage = false;
                        isPlaylistPage = false;
                        subOverlay = defaultOverlay;
                        subBottom  = defaultSubBottom;
                        subOverlay.display = 'block';
                        subOverlay.backgroundColor = 'rgba(18,18,18,1)';
                        subBottom.display = 'none';
                        _this.setHeader([settingHome, 'none'], [libHeader, 'flex'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                        [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                        [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        isPlaylistPage = true;
                        isSearchPage = false;
                        subOverlay = defaultOverlay;
                        subBottom  = defaultSubBottom;
                        subHeaderTitle.innerText = _this.listPlaylistName[0];
                        if (_this.isPlaying) {
                            if (_this.pagePlaylist !== 1) {
                                playBtnHeader.classList.remove('playing');
                            }
                            else {
                                playBtnHeader.classList.add('playing');
                            }
                        }
                        offsetYLarge = appContentBody[0].offsetTop + appContentBodyPlaybar[0].offsetHeight / 2;
                        offsetYMedium = headerContent[0].offsetHeight;
                        appContentHeaderOverlay[0].style.backgroundColor = 'rgb(80, 152, 168)';
                        subOverlay.opacity = 0;
                        subOverlay.backgroundColor = 'rgb(80, 152, 168)';
                        subBottom.opacity = 0;
                        if (documentWidth < 1024) {
                            subBottom.display = 'none';
                        }
                        else {
                            subBottom.display = 'flex';
                        }
                        _this.setHeader([settingHome, 'none'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                        [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                        [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        break;
                    case 7:
                        isPlaylistPage = true;
                        isSearchPage = false;
                        subOverlay = defaultOverlay;
                        subBottom  = defaultSubBottom;
                        subHeaderTitle.innerText = _this.listPlaylistName[1];
                        if (_this.isPlaying) {
                            if (_this.pagePlaylist !== 2) {
                                playBtnHeader.classList.remove('playing');
                            }
                            else {
                                playBtnHeader.classList.add('playing');
                            }
                        }
                        offsetYLarge = appContentBody[1].offsetTop + appContentBodyPlaybar[1].offsetHeight / 2;
                        offsetYMedium = headerContent[1].offsetHeight;
                        subOverlay.opacity = 0;
                        subOverlay.backgroundColor = 'rgb(8, 72, 72)';
                        subBottom.opacity = 0;
                        if (documentWidth < 1024) {
                            subBottom.display = 'none';
                        }
                        else {
                            subBottom.display = 'flex';
                        }
                        _this.setHeader([settingHome, 'none'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                        [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                        [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        break;
                    case 8:
                        isPlaylistPage = true;
                        isSearchPage = false;
                        subOverlay = defaultOverlay;
                        subBottom  = defaultSubBottom;
                        subHeaderTitle.innerText = _this.listPlaylistName[2];
                        if (_this.isPlaying) {
                            if (_this.pagePlaylist !== 3) {
                                playBtnHeader.classList.remove('playing');
                            }
                            else {
                                playBtnHeader.classList.add('playing');
                            }
                        }
                        offsetYLarge = appContentBody[2].offsetTop + appContentBodyPlaybar[2].offsetHeight / 2;
                        offsetYMedium = headerContent[2].offsetHeight;
                        subOverlay.opacity = 0;
                        subOverlay.backgroundColor = 'rgb(160, 16, 16)';
                        subBottom.opacity = 0;
                        if (documentWidth < 1024) {
                            subBottom.display = 'none';
                        }
                        else {
                            subBottom.display = 'flex';
                        }
                        _this.setHeader([settingHome, 'none'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                        [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                        [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        break;
                    case 9:
                        isPlaylistPage = true;
                        isSearchPage = false;
                        subOverlay = defaultOverlay;
                        subBottom  = defaultSubBottom;
                        subHeaderTitle.innerText = _this.listPlaylistName[3];
                        if (_this.isPlaying) {
                            if (_this.pagePlaylist !== 4) {
                                playBtnHeader.classList.remove('playing');
                            }
                            else {
                                playBtnHeader.classList.add('playing');
                            }
                        }
                        offsetYLarge = appContentBody[3].offsetTop + appContentBodyPlaybar[3].offsetHeight / 2;
                        offsetYMedium = headerContent[3].offsetHeight;
                        subOverlay.opacity = 0;
                        subOverlay.backgroundColor = 'rgb(88, 120, 128)';
                        subBottom.opacity = 0;
                        if (documentWidth < 1024) {
                            subBottom.display = 'none';
                        }
                        else {
                            subBottom.display = 'flex';
                        }
                        _this.setHeader([settingHome, 'none'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                        [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                        [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        break;
                    case 10:
                        isPlaylistPage = true;
                        isSearchPage = false;
                        subOverlay = defaultOverlay;
                        subBottom  = defaultSubBottom;
                        subHeaderTitle.innerText = _this.listPlaylistName[4];
                        if (_this.isPlaying) {
                            if (_this.pagePlaylist !== 5) {
                                playBtnHeader.classList.remove('playing');
                            }
                            else {
                                playBtnHeader.classList.add('playing');
                            }
                        }
                        offsetYLarge = appContentBody[4].offsetTop + appContentBodyPlaybar[4].offsetHeight / 2;
                        offsetYMedium = headerContent[4].offsetHeight;
                        subOverlay.opacity = 0;
                        subOverlay.backgroundColor = 'rgb(80, 96, 104)';
                        subBottom.opacity = 0;
                        if (documentWidth < 1024) {
                            subBottom.display = 'none';
                        }
                        else {
                            subBottom.display = 'flex';
                        }
                        _this.setHeader([settingHome, 'none'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                        [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                        [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        break;
                    case 11:
                        isPlaylistPage = true;
                        isSearchPage = false;
                        subOverlay = defaultOverlay;
                        subBottom  = defaultSubBottom;
                        subHeaderTitle.innerText = _this.listPlaylistName[5];
                        if (_this.isPlaying) {
                            if (_this.pagePlaylist !== 6) {
                                playBtnHeader.classList.remove('playing');
                            }
                            else {
                                playBtnHeader.classList.add('playing');
                            }
                        }
                        offsetYLarge = appContentBody[5].offsetTop + appContentBodyPlaybar[5].offsetHeight / 2;
                        offsetYMedium = headerContent[5].offsetHeight;
                        subOverlay.opacity = 0;
                        subOverlay.backgroundColor = 'rgb(248, 152, 32)';
                        subBottom.opacity = 0;
                        if (documentWidth < 1024) {
                            subBottom.display = 'none';
                        }
                        else {
                            subBottom.display = 'flex';
                        }
                        _this.setHeader([settingHome, 'none'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                        [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                        [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        break;
                    case 12:
                        isPlaylistPage = true;
                        isSearchPage = false;
                        subOverlay = defaultOverlay;
                        subBottom  = defaultSubBottom;
                        subHeaderTitle.innerText = _this.listPlaylistName[6];
                        if (_this.isPlaying) {
                            if (_this.pagePlaylist !== 7) {
                                playBtnHeader.classList.remove('playing');
                            }
                            else {
                                playBtnHeader.classList.add('playing');
                            }
                        }
                        offsetYLarge = appContentBody[6].offsetTop + appContentBodyPlaybar[6].offsetHeight / 2;
                        offsetYMedium = headerContent[6].offsetHeight;
                        subOverlay.opacity = 0;
                        subOverlay.backgroundColor = 'rgb(184, 176, 136)';
                        subBottom.opacity = 0;
                        if (documentWidth < 1024) {
                            subBottom.display = 'none';
                        }
                        else {
                            subBottom.display = 'flex';
                        }
                        _this.setHeader([settingHome, 'none'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                        [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                        [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        break;
                    case 13:
                        isPlaylistPage = true;
                        isSearchPage = false;
                        subOverlay = defaultOverlay;
                        subBottom  = defaultSubBottom;
                        subHeaderTitle.innerText = _this.listPlaylistName[7];
                        if (_this.isPlaying) {
                            if (_this.pagePlaylist !== 8) {
                                playBtnHeader.classList.remove('playing');
                            }
                            else {
                                playBtnHeader.classList.add('playing');
                            }
                        }
                        offsetYLarge = appContentBody[7].offsetTop + appContentBodyPlaybar[7].offsetHeight / 2;
                        offsetYMedium = headerContent[7].offsetHeight;
                        subOverlay.opacity = 0;
                        subOverlay.backgroundColor = 'rgb(40, 120, 168)';
                        subBottom.opacity = 0;
                        if (documentWidth < 1024) {
                            subBottom.display = 'none';
                        }
                        else {
                            subBottom.display = 'flex';
                        }
                        _this.setHeader([settingHome, 'none'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                        [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                        [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        break;
                    case 14:
                        isPlaylistPage = true;
                        isSearchPage = false;
                        subOverlay = defaultOverlay;
                        subBottom  = defaultSubBottom;
                        subHeaderTitle.innerText = _this.listPlaylistName[8];
                        if (_this.isPlaying) {
                            if (_this.pagePlaylist !== 9) {
                                playBtnHeader.classList.remove('playing');
                            }
                            else {
                                playBtnHeader.classList.add('playing');
                            }
                        }
                        offsetYLarge = appContentBody[8].offsetTop + appContentBodyPlaybar[8].offsetHeight / 2;
                        offsetYMedium = headerContent[8].offsetHeight;
                        subOverlay.opacity = 0;
                        subOverlay.backgroundColor = 'rgb(168, 72, 56)';
                        subBottom.opacity = 0;
                        if (documentWidth < 1024) {
                            subBottom.display = 'none';
                        }
                        else {
                            subBottom.display = 'flex';
                        }
                        _this.setHeader([settingHome, 'none'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                        [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                        [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        break;
                    case 15:
                        isPlaylistPage = true;
                        isSearchPage = false;
                        subOverlay = defaultOverlay;
                        subBottom  = defaultSubBottom;
                        subHeaderTitle.innerText = _this.listPlaylistName[9];
                        if (_this.isPlaying) {
                            if (_this.pagePlaylist !== 10) {
                                playBtnHeader.classList.remove('playing');
                            }
                            else {
                                playBtnHeader.classList.add('playing');
                            }
                        }
                        offsetYLarge = appContentBody[9].offsetTop + appContentBodyPlaybar[9].offsetHeight / 2;
                        offsetYMedium = headerContent[9].offsetHeight;
                        subOverlay.opacity = 0;
                        subOverlay.backgroundColor = 'rgb(136, 56, 232)';
                        subBottom.opacity = 0;
                        if (documentWidth < 1024) {
                            subBottom.display = 'none';
                        }
                        else {
                            subBottom.display = 'flex';
                        }
                        _this.setHeader([settingHome, 'none'], [libHeader, 'none'], [headerSearch, 'none'], [subHeaderTop, 'flex'], 
                        [subHeaderOverlay, subOverlay], [subHeaderTitle, 'none'], [subHeaderBottom, subBottom], 
                        [playBtnHeader, 'none'], [playBtnRandomHeader, 'none']);
                        break
                    default:
                }
            }
        }

        libHeader.onclick = function(e) {
            let libNode = e.target.closest('.app-content-sub-header-lib-item')
            if (libNode) {
                for (var i = 0; i < totalPageLib; i++) {
                    if (libHeaderList[i].id !== libNode.id) {
                        libHeaderList[i].classList.remove('active')
                        libPageList[i].classList.remove('active')
                    }
                }
                libNode.classList.add('active')
                libPageList[libNode.id - 1].classList.add('active')
            }
        }

        appContent.onscroll = function() {
            if (isPlaylistPage) {
                _this.checkCondition(isPlaylistPage, document.documentElement.clientWidth, offsetYLarge, offsetYMedium, appContent.scrollTop);
            }
            else {
                _this.checkCondition(isPlaylistPage, document.documentElement.clientWidth, offsetYLarge, offsetYMedium, appContent.scrollTop);
            }
        }

        function Play() {
            if (_this.isRandom) {
                if (_this.songsPlayed.length === 0){ 
                    _this.songsPlayed.push(_this.currentIndex.index + 1)
                }
            }
            if(_this.isPlaying){
                audio.pause();
            }
            else {
                if (_this.durationPlayed > 0) {
                    audio.currentTime = _this.durationPlayed;
                    audio.play();
                }
                else {
                    audio.play();
                }
                _this.loadTimeSong(_this.timeSongPlayed);
                _this.setConfig('timeTotal', _this.timeTotal)
            }  
        }


        //Event when play audio
        playBtn.onclick = Play;
        playModal.onclick = Play;
        playBtnPlaylist.forEach((item) => {
            item.onclick = function() {
                let itemIndex = Number(item.closest('.app-content-page').id)
                let idPage = itemIndex - 5;
                if (idPage === _this.getPage()) {
                    Play();
                }
                else {
                    _this.currentIndex.index = 0;
                    _this.currentIndex.page = idPage;
                    _this.pagePlaylist = _this.currentIndex.page;
                    _this.setConfig('idSongPlayed', _this.currentIndex.index);
                    _this.setConfig('pagePlaylist', _this.currentIndex.page)
                    _this.loadCurrentSong();
                    audio.play();
                }
                item.classList.toggle('playing')
            }
        })
        playBtnHeader.onclick = function() {
            let index = pageIndex - 5;
            if (_this.isPlaying) {
                if (_this.pagePlaylist !== index) {
                    playBtnPlaylist[index - 1].click();
                }
                else {
                    audio.pause();
                }
            }
            else {
                if (_this.pagePlaylist !== index) {
                    playBtnPlaylist[index - 1].click();
                }
                else {
                    audio.play();
                }
            }
            playBtnHeader.classList.toggle('playing')
        }
        playBtnRandomHeader.onclick = function() {
            _this.playRandomSong();
            audio.play();
            _this.setConfig('idSongPlayed', _this.currentIndex.index);
            _this.setConfig('pagePlaylist', _this.currentIndex.page)
        };
        playBtnRandomPlaylist.forEach((item => {
            item.onclick = function() {
                _this.playRandomSong();
                audio.play();
                _this.setConfig('idSongPlayed', _this.currentIndex.index);
                _this.setConfig('pagePlaylist', _this.currentIndex.page)
            }
        }))

        //Next button
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            }
            else {
                _this.nextSong();
            }
            audio.play();
            _this.setConfig('idSongPlayed', _this.currentIndex.index);
            _this.setConfig('pagePlaylist', _this.currentIndex.page)
        }

        nextBtnModal.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            }
            else {
                _this.nextSong();
            }
            audio.play();
            _this.setConfig('idSongPlayed', _this.currentIndex.index);
            _this.setConfig('pagePlaylist', _this.currentIndex.page)
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
            _this.setConfig('idSongPlayed', _this.currentIndex.index);
        }

        prevBtnModal.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            }
            else {
                _this.previousSong();
            }
            audio.play();
            _this.setConfig('idSongPlayed', _this.currentIndex.index);
            _this.setConfig('pagePlaylist', _this.currentIndex.page)
        }

        //Random button
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom;
            _this.setConfig('isRandom', _this.isRandom);
            randomBtn.classList.toggle('active', _this.isRandom)
            randomBtnModal.classList.toggle('active', _this.isRandom)
        }

        randomBtnModal.onclick = function() {
            _this.isRandom = !_this.isRandom;
            _this.setConfig('isRandom', _this.isRandom);
            randomBtn.classList.toggle('active', _this.isRandom)
            randomBtnModal.classList.toggle('active', _this.isRandom)
        }

        //Repeat button
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat);
            repeatBtn.classList.toggle('active', _this.isRepeat)
            repeatBtnModal.classList.toggle('active', _this.isRepeat)
        }

        repeatBtnModal.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat);
            repeatBtn.classList.toggle('active', _this.isRepeat)
            repeatBtnModal.classList.toggle('active', _this.isRepeat)
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
            _this.volume = e.target.value / 100;
            _this.prevVolume = e.target.value / 100;
            audio.volume = _this.volume;
            volumeBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + e.target.value + '%, #b3b3b3 ' + e.target.value + '%, #b3b3b3 100%)'
            _this.setConfig('isVolumeOn', _this.isVolumeOn);
            _this.setConfig('volume', _this.volume);
            _this.setConfig('prevVolume', _this.prevVolume);
        }

        //Play song
        audio.onplay = function() {
            _this.listSongs.forEach(function(list){
                let idPage = Number(list[0].closest('.app-content-page').id) - 5;
                list.forEach((item, index) => {
                    if (idPage === this.pagePlaylist) {
                        if (item.classList.contains('active') && index !== __this.currentIndex.index){
                            item.classList.remove('active');
                        }
                    }
                    else {
                        item.classList.remove('active');
                    }
                })
            })
            namePlaylistModal.innerText = _this.listPlaylistName[_this.pagePlaylist - 1];
            _this.listSongs[_this.getPage()-1][_this.currentIndex.index].classList.add('active');
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
                    timeStartModal.innerText = timePlayed;
                    _this.setConfig('timeSongPlayed', timePlayed)

                    //display prgress bar
                    const progressPercent = Math.round(audio.currentTime / audio.duration * 100)
                    progressBar.value = progressPercent;
                    progressBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + progressPercent + '%, #d3d3d3 ' + progressPercent + '%, #d3d3d3 100%)'
                    progressBarMobile.value = progressPercent;
                    progressBarMobile.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + progressPercent + '%, #d3d3d3 ' + progressPercent + '%, #d3d3d3 100%)'
                    progressModal.value = progressPercent;
                    progressModal.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + progressPercent + '%, #d3d3d3 ' + progressPercent + '%, #d3d3d3 100%)'
                    
                    _this.setNameSongAnimation(document.documentElement.clientWidth)
                }
            }
            _this.isPlaying = true;
            playbar.classList.add('playing')
            playbarModal.classList.add('playing')
            playBtnPlaylist.forEach((value, index) => {
                if (_this.pagePlaylist - 1 !== index) {
                    value.classList.remove('playing');
                }
            })
            playBtnPlaylist[_this.pagePlaylist - 1].classList.add('playing')
            playBtnHeader.classList.add('playing')
        }

        //Name song follow width
        playbarSongName[1].onmouseover = function () {
            let songInfoWidth = playbarSongInfo.clientWidth;
            let widthText = _this.getWidthText(playbarSongName[1].innerText, getComputedStyle(playbarSongName[1]).font)
            let widthTranslate = Math.abs(songInfoWidth - widthText - 131);
            let isImgThumbView = imgViewLarge.classList.contains('enable');
            if (isImgThumbView) {
                if (widthText > songInfoWidth - 71) {
                    document.documentElement.style.setProperty('--width-1', `${widthTranslate}px`)
                    playbarSongName[1].style.animation = `sliderText ${widthTranslate / 10}s linear infinite`
                }
                else {
                    playbarSongName[1].style.transform = 'unset'
                    playbarSongName[1].style.animation = 'unset'
                }
            }
            else {
                if (widthText > songInfoWidth - 131) {
                    document.documentElement.style.setProperty('--width-1', `${widthTranslate}px`)
                    playbarSongName[1].style.animation = `sliderText ${widthTranslate / 10}s linear infinite`
                }
                else {
                    playbarSongName[1].style.transform = 'unset'
                    playbarSongName[1].style.animation = 'unset'
                }
            }
        }

        playbarSongName[1].onmouseout = function () {
            playbarSongName[1].style.transform = 'unset'
            playbarSongName[1].style.animation = 'unset'
        }

        playbarAuthor[1].onmouseover = function () {
            let songInfoWidth = playbarSongInfo.clientWidth;
            let widthText = _this.getWidthText(playbarAuthor[1].innerText, getComputedStyle(playbarAuthor[1]).font)
            let widthTranslate = Math.abs(songInfoWidth - widthText - 131);
            let isImgThumbView = imgViewLarge.classList.contains('enable');
            if (isImgThumbView) {
                if (widthText > (songInfoWidth - 71)) {
                    document.documentElement.style.setProperty('--width-1', `${widthTranslate}px`)
                    playbarAuthor[1].style.animation = `sliderText ${widthTranslate / 10}s linear infinite`
                }
                else {
                    playbarAuthor[1].style.transform = 'unset'
                    playbarAuthor[1].style.animation = 'unset'
                }
            }
            else {
                if (widthText > (songInfoWidth - 131)) {
                    document.documentElement.style.setProperty('--width-1', `${widthTranslate}px`)
                    playbarAuthor[1].style.animation = `sliderText ${widthTranslate / 10}s linear infinite`
                }
                else {
                    playbarAuthor[1].style.transform = 'unset'
                    playbarAuthor[1].style.animation = 'unset'
                }
            }
        }

        playbarAuthor[1].onmouseout = function() {
            playbarAuthor[1].style.transform = 'unset'
            playbarAuthor[1].style.animation = 'unset'
        }

        //Pause song
        audio.onpause = function() {
            _this.isPlaying = false;
            playbar.classList.remove('playing');
            playbarModal.classList.remove('playing')
            playBtnPlaylist[_this.pagePlaylist - 1].classList.remove('playing')
            playBtnHeader.classList.remove('playing')
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

        progressBarMobile.oninput = function(e) {
            //when progress bar changed
            audio.ontimeupdate = function() {
                if (audio.duration){
                    progressBarMobile.value = e.target.value;
                    progressBarMobile.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + e.target.value + '%, #d3d3d3 ' + e.target.value + '%, #d3d3d3 100%)'
                }
            }
            audio.pause();
            setTimeout(() => {
                audio.play();
            }, 500)
            const seekTime = e.target.value * audio.duration / 100;
            audio.currentTime = seekTime;
        }

        progressModal.oninput = function(e) {
            //when progress bar changed
            audio.ontimeupdate = function() {
                if (audio.duration){
                    progressModal.value = e.target.value;
                    progressModal.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + e.target.value + '%, #d3d3d3 ' + e.target.value + '%, #d3d3d3 100%)'
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
        playlist.forEach((item) => {
            item.onclick = function(e) {
                const songNode = e.target.closest('.app-content-body-list-item:not(.active)');
                const songNodeIncludeActive = e.target.closest('.app-content-body-list-item');
                const page = e.target.closest('.app-content-page')
                const reactSong = e.target.closest('.app-content-body-list-item-heart')
                const option = e.target.closest('.app-content-body-list-item-more')
                if (songNode || reactSong || option) {
                    if (reactSong) {
                        let temp = _this.getIndexSong();
                        console.log(temp);
                        let id = _this.getPrevLength(_this.listPlaylist, page.id - 6) + Number(songNodeIncludeActive.dataset.index);
                        _this.isReactedList[id] = !_this.isReactedList[id];
                        _this.reactList[id].classList.toggle('reacted', _this.isReactedList[id]);
                        if (temp === id) {
                            listReactSongPlaybar.forEach(item => {
                                item.classList.toggle('reacted');
                            })
                        }
                        _this.setConfig('isReactedList', _this.isReactedList);

                    }
                    else if (option) {
                        
                    }
                    else if (songNode) {
                        _this.currentIndex.index = Number(songNode.dataset.index);
                        _this.currentIndex.page = page.id - 5;
                        _this.pagePlaylist = page.id - 5;
                        _this.setConfig('currentIndex', _this.currentIndex)
                        _this.setConfig('idSongPlayed', _this.currentIndex.index);
                        _this.setConfig('pagePlaylist', page.id - 5);
                        _this.loadCurrentSong();
                        audio.play();
                    }
                }
            }
        })

        //Library Item when click
        libItemsHasPlaylist.forEach(item => {
            item.onclick = function(e) {
                let btnItem = e.target.closest('.app-content-header-body-item.lib-page .btn-play-home.app-content-header-body-item-btn-play')
                if (btnItem) {
                    playListItem[item.id].closest('.my-playlist-item').click();
                    playBtnPlaylist[item.id].click();
                }
                else {
                    playListItem[item.id].closest('.my-playlist-item').click();
                }
            }
        })

        //React playlist
        reactHeartBtn.forEach((item,index) => {
            item.onclick = function () {
                if (_this.reactHeart[index]) {
                    _this.reactHeart[index] = false;
                }
                else {
                    _this.reactHeart[index] = true;
                }
                _this.setConfig('reactHeart', _this.reactHeart);
                item.classList.toggle('reacted', _this.reactHeart[index]);
            }
        })

        //Button view image song thumb
        btnViewImgThumb.onclick = function() {
            thumbImage.classList.add('active')
            imgViewLarge.classList.add('enable');
            thumbImage.style.animation = 'imageThumbCollapse 0.3s linear forwards'
        }
        //Button hide image song thumb
        btnHideImgThumb.onclick = function() {
            thumbImage.classList.remove('active')
            imgViewLarge.classList.remove('enable');
            thumbImage.style.animation = 'imageThumbExpand 0.3s linear forwards'
        }

        //Modal Song
        thumbImageMobileTablet.onclick = function() {
            songModal.classList.add('active');
        }

        collapseModalBtn.onclick = function() {
            songModal.classList.remove('active');
        }

        playBarMobile.onclick = function(e) {
            if (document.documentElement.clientWidth < 740) {
                let node = e.target.closest('.btn-toggle-play')
                if (!node) {
                    songModal.classList.add('active');
                }
            }
        }

        viewPlaylist.onclick = function() {
            songModal.classList.remove('active');
            playListItem[_this.currentIndex.page - 1].closest('.my-playlist-item').click();
        }

        listReactSongPlaybar.forEach((item, index) => {
            item.onclick = function() {
                item.classList.toggle('reacted');
                listReactSongPlaybar.forEach((val, idx) => {
                    if (idx !== index) {
                        val.classList.toggle('reacted');
                    }
                })
                let curSong = _this.getSong()
                let letter = curSong.id.indexOf('_');
                let page = Number(curSong.id.slice(0,letter))
                let songIndex = Number(curSong.id.slice(letter + 1))
                let id = _this.getPrevLength(_this.listPlaylist, page - 1) + songIndex - 1;
                _this.isReactedList[id] = !_this.isReactedList[id];
                _this.reactList[id].classList.toggle('reacted', _this.isReactedList[id]);
                _this.setConfig('isReactedList', _this.isReactedList);
            }
        })

        window.onresize = function(e) {
            if (slideIndex > 1) {
                sliderListItem.forEach((item) => {
                    item.style.transform = 'translateX(0)';
                })
                btnPrevSlider.style.display = 'none';
            }

            _this.setNameSongAnimation(document.documentElement.clientWidth)

            if (document.documentElement.clientWidth > 1023) {
                if (pageIndex === 2) {
                    subHeaderTitle.style.display = 'none';
                    btnNextSlider.style.display = 'block';
                }
                if (subHeaderTitle.style.display === 'block') {
                    subHeaderTop.style.padding = '0'
                    playBtnHeader.style.display = 'block';
                    playBtnRandomHeader.style.display = 'none';
                }
                subHeaderBottom.style.display = 'flex';
                settingHome.style.display = 'none';
                subHeaderTop.style.display = 'flex';
                subHeaderOverlay.style.display = 'block';
                subHeaderOverlay.style.opacity = appContent.scrollTop / 320;
                playBtnRandomPlaylist.forEach(item => {
                    item.style.display = 'none';
                })
                imgHeader[_this.pagePlaylist - 1].style.transform = `scale(1)`;
                subHeaderOverlay.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0.6) 100%)';
                playbarSongName[1].style.transform = 'translate(0)';
                playbarSongName[1].style.animation = 'unset';
                playbarAuthor[1].style.transform = 'translate(0)';
                playbarAuthor[1].style.animation = 'unset';
            }
            else {
                if (pageIndex === 2) {
                    subHeaderOverlay.style.display = 'block';
                    btnNextSlider.style.display = 'none';
                }
                else if (pageIndex === 3 || pageIndex >= 6) {
                    subHeaderOverlay.style.display = 'block';
                    playBtnHeader.style.display = 'none';
                    if ((pageIndex >= 6) && appContent.scrollTop >= 320) {
                        playBtnRandomHeader.style.display = 'flex';
                    }
                }
                else {
                    if (subHeaderTitle.style.display === 'block') {
                        subHeaderTop.style.padding = '23px 0'
                        playBtnHeader.style.display = 'none';
                        playBtnRandomHeader.style.display = 'flex';
                    }
                    settingHome.style.display = pageIndex === 1 ? 'flex' : 'none';
                    subHeaderOverlay.style.display = 'none';
                }
                subHeaderBottom.style.display = 'none';
                playBtnRandomPlaylist.forEach(item => {
                    item.style.display = 'flex';
                })
            }
        }
    },

    setNameSongAnimation: function(widthScreen) {
        if (widthScreen < 740) {
            let songInfoWidth = playbarSongInfo.clientWidth;
            let widthText = this.getWidthText(playbarSongName[1].innerText, getComputedStyle(playbarSongName[1]).font)
            let widthTextAuthor = this.getWidthText(playbarAuthor[1].innerText, getComputedStyle(playbarAuthor[1]).font)
            if ((widthText > songInfoWidth - 100) || (widthTextAuthor > songInfoWidth - 100)) {
                if (widthText > songInfoWidth - 100) {
                    playbarSongName[1].style.transform = `translate(${songInfoWidth}px)`
                    document.documentElement.style.setProperty('--width-2', `-${widthText}px`)
                    playbarSongName[1].style.animation = 'sliderTextMedium 6s linear infinite'
                }
                if (widthTextAuthor > songInfoWidth - 100) {
                    playbarAuthor[1].style.transform = `translate(${songInfoWidth}px)`
                    document.documentElement.style.setProperty('--width-3', `-${widthTextAuthor}px`)
                    playbarAuthor[1].style.animation = 'sliderTextMediumAuthor 6s linear infinite'
                }
            }
            else {
                playbarSongName[1].style.transform = 'unset';
                playbarSongName[1].style.animation = 'unset';
                playbarAuthor[1].style.transform = 'unset';
                playbarAuthor[1].style.animation = 'unset';
            }
        } 
        else if (widthScreen < 1024) {
            let songInfoWidth = playbarSongInfo.clientWidth;
            let widthText = this.getWidthText(playbarSongName[0].innerText, getComputedStyle(playbarSongName[0]).font)
            let widthTextAuthor = this.getWidthText(playbarAuthor[0].innerText, getComputedStyle(playbarAuthor[0]).font)
            if ((widthText > songInfoWidth) || (widthTextAuthor > songInfoWidth)) {
                if (widthText > songInfoWidth) {
                    playbarSongName[0].style.transform = `translate(${songInfoWidth}px)`
                    document.documentElement.style.setProperty('--width-2', `-${widthText}px`)
                    playbarSongName[0].style.animation = 'sliderTextMedium 6s linear infinite'
                }
                if (widthTextAuthor > songInfoWidth) {
                    playbarAuthor[0].style.transform = `translate(${songInfoWidth}px)`
                    document.documentElement.style.setProperty('--width-3', `-${widthTextAuthor}px`)
                    playbarAuthor[0].style.animation = 'sliderTextMediumAuthor 6s linear infinite'
                }
            }
            else {
                playbarSongName[0].style.transform = 'unset';
                playbarSongName[0].style.animation = 'unset';
                playbarAuthor[0].style.transform = 'unset';
                playbarAuthor[0].style.animation = 'unset';
            }
        }
        else {
            playbarSongName[0].style.transform = 'unset';
            playbarSongName[0].style.animation = 'unset';
            playbarAuthor[0].style.transform = 'unset';
            playbarAuthor[0].style.animation = 'unset';
        }
    },

    getSong: function() {
        return this.currentSong;
    },
    getIndexSong: function() {
        let curSong = this.getSong()
        let letter = curSong.id.indexOf('_');
        let songPage = Number(curSong.id.slice(0,letter))
        let songIndex = Number(curSong.id.slice(letter + 1))
        return this.getPrevLength(this.listPlaylist, songPage - 1) + songIndex - 1;
    },

    checkPage: function(idPage) {
        let letter = this.currentSong.id.indexOf('_')
        let numPage = Number(this.currentSong.id.slice(0,letter))
        return idPage === numPage ? true : false;
    },

    getPage: function() {
        let letter = this.currentSong.id.indexOf('_')
        return Number(this.currentSong.id.slice(0,letter));
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

    checkCondition: function(isPlaylistPage, clientWidth, offsetYLarge, offsetYMedium, appContentSrollTop) {
        if (isPlaylistPage) {
            settingHome.style.display = 'none';
            if (clientWidth > 1023) {
                subHeaderTop.style.padding = '0'
                subHeaderTitle.style.display = appContentSrollTop >= offsetYLarge ? 'block' : 'none';
                subHeaderOverlay.style.opacity = appContentSrollTop >= offsetYLarge ? 1 : appContentSrollTop / offsetYLarge;
                playBtnHeader.style.display = appContentSrollTop >= offsetYLarge ? 'flex' : 'none';
                subHeaderBottom.style.opacity = appContentSrollTop >= offsetYLarge ? 1 : 0;
            }
            else if (clientWidth < 1023) {
                subHeaderTop.style.padding = '23px 0';
                if (appContentSrollTop >= offsetYMedium) {
                    subHeaderTitle.style.display = 'block'
                    playBtnRandomPlaylist.forEach(item => {
                        item.style.display = 'none';
                    })
                }
                else {
                    var percentScale = 1 - appContentSrollTop / imgHeader[pageIndex - 6].offsetHeight;
                    imgHeader[pageIndex - 6].style.transform = `scale(${percentScale})`;
                    subHeaderTitle.style.display = 'none'
                    playBtnRandomPlaylist.forEach(item => {
                        item.style.display = 'flex';
                    })
                }
                subHeaderOverlay.style.opacity = appContentSrollTop >= offsetYMedium ? 1 : appContentSrollTop / offsetYMedium;
                playBtnRandomHeader.style.display = appContentSrollTop >= offsetYMedium ? 'flex' : 'none';
                subHeaderBottom.style.display = 'none';
            }  
        }
        else {
            subHeaderTitle.style.display = 'none';
            subHeaderBottom.style.display = 'none';
            if (clientWidth > 1023)  {
                settingHome.style.display = 'none';
                if (pageIndex === 1) {
                    subHeaderOverlay.style.opacity = appContentSrollTop >= 320 ? 1 : appContentSrollTop / 320;
                    subHeaderOverlay.style.backgroundColor = 'rgb(80, 152, 168)';
                    
                }
                else if (pageIndex === 2 || pageIndex === 3) {
                    subHeaderOverlay.style.opacity = appContentSrollTop >= 320 ? 1 : appContentSrollTop / 320;
                    subHeaderOverlay.style.backgroundColor = 'rgba(18,18,18,1)';
                }
                else {
                    subHeaderOverlay.style.opacity = appContentSrollTop >= 320 ? 1 : appContentSrollTop / 320;
                }
            }
            else {
                if (pageIndex === 2 || pageIndex === 3) {
                    subHeaderOverlay.style.opacity = appContentSrollTop >= 320 ? 1 : appContentSrollTop / 320;
                    subHeaderOverlay.style.backgroundColor = 'rgba(18,18,18,1)';
                }
                else {
                    if (pageIndex === 1) {
                        settingHome.style.display = 'flex';
                    }
                    else {
                        settingHome.style.display = 'none';
                    }
                    subHeaderOverlay.style.display = 'none';
                }
            }
        }
    },
    getPrevLength: function(arr, index) {
        if (index < 0 || arr[index - 1] === undefined) {return 0}
        return arr[index - 1].length + this.getPrevLength(arr, index - 1);
    },

    getWidthText: function(text, font) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        context.font = font || getComputedStyle(document.body).font;

        return context.measureText(text).width;
    },

    checkLength: function(name) {
        if (name.length*7.2 > 400) {
            return true
        }
        else {
            return false
        }
    },

    loadConfig: function() {
        this.volume = this.config.volume || 0.3;
        this.isVolumeOn = this.config.isVolumeOn;
        this.prevVolume = this.config.prevVolume || 0;
        this.durationPlayed = this.config.durationPlayed || 0;
        this.totalDuration = this.config.totalDuration || 0;
        this.idSongPlayed = this.config.idSongPlayed || 0;
        this.timeTotal = this.config.timeTotal || '0:00'
        this.timeSongPlayed = this.config.timeSongPlayed || '0:00';
        this.isRandom = this.config.isRandom || false;
        this.isRepeat = this.config.isRepeat || false;
        this.reactHeart = this.config.reactHeart;
        this.pagePlaylist = this.config.pagePlaylist || 1;
        this.isReactedList = this.config.isReactedList || new Array(31).fill(false);
        this.reactHeart = this.config.reactHeart || new Array(N).fill(false);
    },

    loadCurrentSong: function() {
        playbarSongName.forEach((val) => {
            val.textContent = this.currentSong.name;
        })
        playbarAuthor.forEach((val) => {
            val.textContent = this.currentSong.artist;
        })
        modalSongName.textContent = this.currentSong.name;
        modalAuthor.textContent = this.currentSong.artist;
        thumbImage.style.backgroundImage = `url('${this.currentSong.image}')`;
        thumbImageMobileTablet.style.backgroundImage = `url('${this.currentSong.imageLarge}')`;
        thumbImageMobile.style.backgroundImage = `url('${this.currentSong.imageLarge}')`;
        thumbImageModal.style.backgroundImage = `url('${this.currentSong.imageLarge}')`;
        audio.src = this.currentSong.path;
        imgViewBox.src = this.currentSong.imageLarge;
        timeEnd.innerText = this.currentSong.timeTotal;
        timeEndModal.innerText = this.currentSong.timeTotal;
    },

    loadTimeSong: function(start) {
        timeStart.innerText = start;
        timeStartModal.innerText = start;
        timeEnd.innerText = this.currentSong.timeTotal;
        timeEndModal.innerText = this.currentSong.timeTotal;
        this.timeTotal = this.currentSong.timeTotal;
    },

    nextSong: function() {
        this.currentIndex.index++;
        if (this.currentIndex.index >= this.listSongs[this.currentIndex.page - 1].length) {
            this.currentIndex.index = 0;
        }
        this.loadCurrentSong();
    },

    previousSong: function() {
        this.currentIndex.index--;
        if (this.currentIndex.index < 0) {
            this.currentIndex.index = this.listSongs[this.currentIndex.page - 1].length- 1;
        }
        this.loadCurrentSong();
    },

    playRandomSong: function() {
        let newIndex, newID, isPlayed = false;
        if (this.songsPlayed.length === this.listSongs[this.currentIndex.page - 1].length) {
            this.songsPlayed = [];
        }
        do {
            newIndex = Math.floor(Math.random() * this.listSongs[this.currentIndex.page - 1].length);     
        } while (newIndex === this.currentIndex.index)

        let letter = this.listPlaylist[this.currentIndex.page - 1][newIndex].id.indexOf('_');
        newID = Number(this.listPlaylist[this.currentIndex.page - 1][newIndex].id.slice(letter + 1));
        isPlayed = this.songsPlayed.find(value => newID === value)

        if (!isPlayed) {
            this.currentIndex.index = newIndex;
            this.songsPlayed.push(newID);
            this.loadCurrentSong();
        }
        else {
            this.playRandomSong();
        }
    },

    setActiveSong: function() {
        let __this = this;
        this.listSongs.forEach(function(list){
            let idPage = Number(list[0].closest('.app-content-page').id) - 5;
            list.forEach((item, index) => {
                if (idPage === this.pagePlaylist) {
                    if (item.classList.contains('active') && index !== __this.currentIndex.index){
                        item.classList.remove('active');
                    }
                }
                else {
                    item.classList.remove('active');
                }
            })
        })
        this.listSongs[this.pagePlaylist - 1][this.currentIndex.index].classList.add('active');
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
        let heartLength = this.isReactedList.length;
        for (var i = 0; i < heartLength; i++) {
            this.reactList[i].classList.toggle('reacted', this.isReactedList[i]);
        }

        this.currentIndex.index = this.idSongPlayed;
        this.currentIndex.page = this.pagePlaylist;
        this.setConfig('currentIndex', this.currentIndex)
        this.setActiveSong();
        this.loadCurrentSong()
        reactHeartBtn.forEach((item, index) => {
            item.classList.toggle('reacted', this.reactHeart[index]);
        })

        let temp = this.getIndexSong();
        listReactSongPlaybar.forEach(item => {
            item.classList.toggle('reacted', this.isReactedList[temp]);
        })

        randomBtn.classList.toggle('active', this.isRandom)
        randomBtnModal.classList.toggle('active', this.isRandom)
        repeatBtn.classList.toggle('active', this.isRepeat)
        repeatBtnModal.classList.toggle('active', this.isRepeat)

        if (!this.timeSongPlayed) {
            this.timeSongPlayed = '0:00'
        }
        else {
            timeStart.innerText = this.timeSongPlayed;
            timeStartModal.innerText = this.timeSongPlayed;
        }

        volumeBar.value = this.volume*100;
        volumeBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + this.volume*100 + '%, #b3b3b3 ' + this.volume*100 + '%, #b3b3b3 100%)'

        var percent = Math.round(this.durationPlayed / this.totalDuration * 100)
        progressBar.value = percent;
        progressBar.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + percent + '%, #d3d3d3 ' + percent + '%, #d3d3d3 100%)'
        progressBarMobile.value = percent;
        progressBarMobile.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + percent + '%, #d3d3d3 ' + percent + '%, #d3d3d3 100%)'
        progressModal.value = percent;
        progressModal.style.background = 'linear-gradient(to right, #5ced4d, #5ced4d ' + percent + '%, #d3d3d3 ' + percent + '%, #d3d3d3 100%)'

    },

    start: function() {
        this.loadConfig();
        this.defineProperties();
        this.handleEvents();
        let _this = this;
        let pathList = []
        
        this.songArr.forEach((item) => {
            _this.getNameAndList(item.songs)
        })
        
        let arr = this.listPlaylist[0];
        for (let i = 1; i < this.listPlaylist.length; i++) {
            arr = arr.concat(this.listPlaylist[i]);
        }

        arr.forEach((song) => {
            pathList.push(song.path);
        })

        this.fetchDurationList(pathList).then((durationList) => {
            this.render(durationList)
            this.loadPrevStatus();
        })
    }
}

myApp.start();