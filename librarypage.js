let libpage1 = JSON.parse(localStorage.getItem(LIBPAGE1_STORAGE)) || {}

let libGroupItem1 = []

let libHTML1 = libpage1.map(item => {
    return `<div class="app-content-header-body-item-contain col l-2 m-12 c-12">
                <div class="app-content-header-body-item lib-page">
                    <div class="app-content-header-body-item-box lib-page">
                        <div class="app-content-header-body-item-thumb">
                            <img src="${item.image}" alt="" class="app-content-header-body-item-thum-img lib-img">
                            <div class="btn-play-home app-content-header-body-item-btn-play">
                                <button class="btn-play-home-box">
                                    <i class="fas fa-play btn-play-home-icon-play"></i>
                                </button>
                            </div>
                        </div>
                        <div class="app-content-header-body-item-info">
                            <span class="app-content-header-body-item-info-heading">${item.title}</span>
                            <p class="app-content-header-body-item-info-description">
                                ${item.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            `
})

let libBody1 = document.querySelector('.app-content-header-lib-box-contain.row')
let tempLib1 = libBody1.innerHTML;
libBody1.innerHTML = tempLib1 + libHTML1.join('');

let libpage2 = JSON.parse(localStorage.getItem(LIBPAGE2_STORAGE)) || {}

let libGroupItem2 = []

libpage2.forEach(value => {
    let groupItem = document.createElement('div');
    groupItem.classList.add('app-content-header-body-item-group')
    let header = `
                <div class="app-content-header-body-item-header">
                    <span class="app-content-header-body-item-heading">${value.title}</span>
                    <div class="app-content-header-body-item-sub-heading">
                        <span class="app-content-header-body-item-sub-heading-description"></span>
                        <span class="app-content-header-body-item-sub-heading-view-all">See all</span>
                    </div>
                </div>
                `

    let body = document.createElement('div')
    body.classList.add('app-content-header-body-item-container')
    body.classList.add('row')
    let html = value.group.map(item => {
        return `<div class="app-content-header-body-item-contain col l-2 l-mod">
                    <div class="app-content-header-body-item">
                        <div class="app-content-header-body-item-box">
                            <div class="app-content-header-body-item-thumb">
                                <img src="${item.image}" alt="" class="app-content-header-body-item-thum-img">
                                <div class="btn-play-home app-content-header-body-item-btn-play">
                                    <button class="btn-play-home-box">
                                        <i class="fas fa-play btn-play-home-icon-play"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="app-content-header-body-item-info">
                                <span class="app-content-header-body-item-info-heading">${item.title}</span>
                                <p class="app-content-header-body-item-info-description">
                                    ${item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                `
    })
    body.innerHTML = html.join('');
    groupItem.innerHTML = header;
    groupItem.append(body);
    libGroupItem2.push(groupItem);
})

let libBody2 = document.querySelector('.app-content-page-lib[id="2"]')
let tempLib2 = libBody2.innerHTML;
libGroupItem2.forEach(item => {
    libBody2.append(item);
})

let libpage3 = JSON.parse(localStorage.getItem(LIBPAGE3_STORAGE)) || {}

let libHTML3 = libpage3.map(item => {
    return `
            <div class="app-content-header-body-item-contain col l-2 m-12 c-12">
                <div class="app-content-header-body-item">
                    <div class="app-content-header-body-item-box lib-page">
                        <div class="app-content-header-body-item-thumb">
                            <img src="${item.image}" alt="" class="app-content-header-body-item-thum-img artist">
                            <div class="btn-play-home app-content-header-body-item-btn-play">
                                <button class="btn-play-home-box">
                                    <i class="fas fa-play btn-play-home-icon-play"></i>
                                </button>
                            </div>
                        </div>
                        <div class="app-content-header-body-item-info">
                            <span class="app-content-header-body-item-info-heading">${item.name}</span>
                            <p class="app-content-header-body-item-info-description">
                                ${item.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            `
})

let libBody3 = document.querySelector('.app-content-page-lib[id="3"] .app-content-header-body-item-container.lib-row')
libBody3.innerHTML = libHTML3.join('');

let libpage4 = JSON.parse(localStorage.getItem(LIBPAGE4_STORAGE)) || {}

let libHTML4 = libpage4.map(item => {
    return `
            <div class="app-content-header-body-item-contain col l-2 m-12 c-12">
                <div class="app-content-header-body-item lib-page">
                    <div class="app-content-header-body-item-box lib-page">
                        <div class="app-content-header-body-item-thumb">
                            <img src="${item.image}" alt="" class="app-content-header-body-item-thum-img lib-img">
                            <div class="btn-play-home app-content-header-body-item-btn-play">
                                <button class="btn-play-home-box">
                                    <i class="fas fa-play btn-play-home-icon-play"></i>
                                </button>
                            </div>
                        </div>
                        <div class="app-content-header-body-item-info">
                            <span class="app-content-header-body-item-info-heading">${item.title}</span>
                            <p class="app-content-header-body-item-info-description">
                                ${item.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            `
})

let libBody4 = document.querySelector('.app-content-album-list')
libBody4.innerHTML = libHTML4.join('');